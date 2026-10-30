const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const output = path.join(root, "dist");
const excludedEntries = new Set([
  ".git",
  ".vercel",
  "node_modules",
  "dist",
  "build.js",
  "Dockerfile",
  "docker-compose.yml",
  "package-lock.json",
  "package.json",
  "server.js",
  "update_index.py",
]);

async function copySite(source, destination) {
  await fs.mkdir(destination, { recursive: true });

  for (const entry of await fs.readdir(source, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || excludedEntries.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copySite(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      await fs.copyFile(sourcePath, destinationPath);
    }
  }
}

async function build() {
  await fs.rm(output, { recursive: true, force: true });
  await copySite(root, output);

  for (const requiredFile of ["index.html", "404.html", "_next"]) {
    try {
      await fs.access(path.join(output, requiredFile));
    } catch (error) {
      throw new Error(`Required static site content is missing: ${requiredFile}`, {
        cause: error,
      });
    }
  }

  console.log("Static site built in dist/");
}

build().catch((error) => {
  console.error("Static site build failed:", error.message);
  process.exitCode = 1;
});
