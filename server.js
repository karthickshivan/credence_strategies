const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT) || 3000;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function findFile(urlPath) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  const filePath = path.resolve(root, `.${decodedPath}`);
  const relativePath = path.relative(root, filePath);
  if (
    relativePath === ".." ||
    relativePath.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativePath)
  ) {
    return null;
  }

  try {
    let stats = await fs.promises.stat(filePath);
    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, "index.html");
      stats = await fs.promises.stat(indexPath);
      if (stats.isFile()) {
        return { filePath: indexPath, stats };
      }
      return null;
    }

    return stats.isFile() ? { filePath, stats } : null;
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      return null;
    }
    throw error;
  }
}

const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  let url;
  try {
    url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  } catch {
    response.writeHead(400);
    response.end("Bad Request");
    return;
  }

  let file = await findFile(url.pathname);
  if (!file) {
    file = await findFile("/404.html");
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    if (file && request.method === "GET") {
      fs.createReadStream(file.filePath).pipe(response);
    } else {
      response.end();
    }
    return;
  }

  response.writeHead(200, {
    "Content-Length": file.stats.size,
    "Content-Type":
      contentTypes[path.extname(file.filePath).toLowerCase()] ||
      "application/octet-stream",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }

  fs.createReadStream(file.filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Credence Strategies is available at http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Could not start the development server:", error.message);
  process.exitCode = 1;
});
