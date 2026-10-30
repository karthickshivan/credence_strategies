(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29615,e=>{"use strict";var t=e.i(43476);let a=`
  /* HERO */
  .hero { position:relative; min-height:90vh; display:flex; align-items:center; overflow:hidden; margin-top: -20px; }
  .hero-bg {
    position:absolute; inset:0;
    background: linear-gradient(105deg, rgba(11,31,58,.97) 0%, rgba(11,31,58,.82) 45%, rgba(11,31,58,.65) 100%),
      url('https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1800&q=85') center/cover no-repeat;
  }
  .hero-inner { position:relative; z-index:2; max-width:1280px; margin:0 auto; padding:100px 64px 80px; display:grid; grid-template-columns:1fr 420px; gap:72px; align-items:center; }
  .hero-eyebrow { display:flex; align-items:center; gap:12px; font-size:.75rem; letter-spacing:.22em; text-transform:uppercase; color:var(--gold); margin-bottom:22px; }
  .hero-eyebrow::before { content:''; width:36px; height:1px; background:var(--gold); display:block; }
  .hero-h1 { font-family: var(--font-serif); font-size:clamp(2.5rem,4vw,3.8rem); font-weight:300; line-height:1.1; margin-bottom:22px; color: white; }
  .hero-h1 em { font-style:italic; color:var(--gold); }
  .hero-sub { font-size:1.05rem; line-height:1.8; color:rgba(255,255,255,.68); margin-bottom:40px; max-width:500px; }
  .hero-sub strong { color:var(--gold2); font-weight:500; }
  .hero-btns { display:flex; gap:14px; flex-wrap:wrap; }
  .btn-gold { background:var(--gold); color:var(--navy); padding:16px 38px; border:none; border-radius:2px; font-family: var(--font-outfit); font-size:.88rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .btn-gold:hover { background:var(--gold2); transform:translateY(-2px); box-shadow:0 8px 28px rgba(201,168,76,.3); }
  .btn-outline { background:transparent; color:var(--white); padding:15px 38px; border:1px solid rgba(255,255,255,.3); border-radius:2px; font-family: var(--font-outfit); font-size:.88rem; font-weight:400; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .btn-outline:hover { border-color:var(--gold); color:var(--gold); transform:translateY(-2px); }

  /* HERO PHOTO PANEL */
  .hero-panel { display:flex; flex-direction:column; gap:12px; }
  .hero-panel-main { position:relative; border-radius:4px; overflow:hidden; height:280px; border:1px solid var(--border-gold); }
  .hero-panel-main img { width:100%; height:100%; object-fit:cover; display:block; }
  .hero-panel-main-overlay { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(11,31,58,.92) 0%, transparent 100%); padding:20px; }
  .hero-panel-label { font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; color:var(--gold); margin-bottom:4px; }
  .hero-panel-val { font-family: var(--font-serif); font-size:1.5rem; font-weight:600; color:var(--white); }
  .hero-panel-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  .hero-panel-mini { position:relative; border-radius:4px; overflow:hidden; height:130px; border:1px solid var(--border-gold); }
  .hero-panel-mini img { width:100%; height:100%; object-fit:cover; display:block; }
  .hero-panel-mini-overlay { position:absolute; inset:0; background:rgba(11,31,58,.55); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:12px; }
  .hero-panel-mini-num { font-family: var(--font-serif); font-size:2rem; font-weight:600; color:var(--gold2); line-height:1; }
  .hero-panel-mini-text { font-size:.72rem; color:rgba(255,255,255,.8); margin-top:4px; line-height:1.3; letter-spacing:.04em; }

  /* TRUST BAR */
  .trust { background:var(--navy); padding: 0 0 40px; }
  .trust-heading { padding:52px 64px 36px; }
  .trust-heading p { font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; display:flex; align-items:center; gap:10px; }
  .trust-heading p::before { content:''; width:28px; height:1px; background:var(--gold); display:block; }
  .trust-heading h2 { font-family: var(--font-serif); font-size:clamp(1.8rem,3vw,2.6rem); font-weight:400; color: white; }
  .trust-grid { display:grid; grid-template-columns:repeat(5,1fr); }
  .trust-item { position:relative; overflow:hidden; height:220px; cursor:pointer; }
  .trust-item img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s; }
  .trust-item:hover img { transform:scale(1.06); }
  .trust-overlay { position:absolute; inset:0; background:linear-gradient(to top, rgba(11,31,58,.92) 0%, rgba(11,31,58,.3) 60%, transparent 100%); display:flex; flex-direction:column; justify-content:flex-end; padding:20px 16px; transition:background .3s; }
  .trust-item:hover .trust-overlay { background:linear-gradient(to top, rgba(11,31,58,.96) 0%, rgba(11,31,58,.55) 60%, rgba(201,168,76,.08) 100%); }
  .trust-num { font-family: var(--font-serif); font-size:2.2rem; font-weight:600; color:var(--gold2); line-height:1; }
  .trust-label { font-size:.75rem; color:rgba(255,255,255,.7); margin-top:5px; line-height:1.35; }

  /* SERVICES */
  .services { background:var(--navy2); padding:96px 64px; }
  .services-inner { max-width:1280px; margin:0 auto; }
  .section-label { font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; display:flex; align-items:center; gap:10px; }
  .section-label::before { content:''; width:28px; height:1px; background:var(--gold); display:block; }
  .section-h2 { font-family: var(--font-serif); font-size:clamp(2rem,3.5vw,2.8rem); font-weight:400; margin-bottom:12px; color: white; }
  .section-sub { font-size:.95rem; color:rgba(255,255,255,.7); margin-bottom:52px; max-width:520px; line-height:1.75; }
  .services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .service-card { border-radius:4px; overflow:hidden; position:relative; cursor:pointer; }
  .service-img { width:100%; height:220px; object-fit:cover; display:block; transition:transform .5s; }
  .service-card:hover .service-img { transform:scale(1.04); }
  .service-body { padding:24px 22px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06); border-top:none; }
  .service-title { font-family: var(--font-serif); font-size:1.25rem; font-weight:600; margin-bottom:8px; color: white; }
  .service-desc { font-size:.83rem; color:rgba(255,255,255,.7); line-height:1.65; }
  .service-link { display:inline-block; margin-top:14px; font-size:.75rem; letter-spacing:.1em; text-transform:uppercase; color:var(--gold); text-decoration:none; transition:letter-spacing .2s; }
  .service-link:hover { letter-spacing:.18em; }

  /* WHY */
  .why { background:var(--navy); padding:96px 64px; }
  .why-inner { max-width:1280px; margin:0 auto; }
  .why-grid { display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:start; }
  .why-intro-text { font-size:.98rem; line-height:1.85; color:rgba(255,255,255,.65); margin-bottom:36px; }
  .why-pull { font-family: var(--font-serif); font-size:1.45rem; font-style:italic; font-weight:300; color:var(--gold2); line-height:1.65; padding-left:22px; border-left:2px solid var(--gold); }
  .why-features { display:flex; flex-direction:column; gap:3px; }
  .why-feature { display:grid; grid-template-columns:200px 1fr; overflow:hidden; border:1px solid rgba(201,168,76,.1); transition:border-color .3s; }
  .why-feature:hover { border-color:rgba(201,168,76,.35); }
  .why-feature-img { width:200px; height:130px; object-fit:cover; display:block; flex-shrink:0; }
  .why-feature-body { padding:20px 22px; background:rgba(255,255,255,.03); display:flex; flex-direction:column; justify-content:center; }
  .why-feature-title { font-size:.92rem; font-weight:600; color: white; margin-bottom:6px; }
  .why-feature-desc { font-size:.8rem; color:rgba(255,255,255,0.7); line-height:1.6; }
  .why-tag { display:inline-block; margin-top:10px; font-size:.68rem; letter-spacing:.12em; text-transform:uppercase; color:var(--gold); border:1px solid rgba(201,168,76,.3); padding:3px 10px; border-radius:20px; }

  /* TESTIMONIALS */
  .testimonials { background:var(--cream); padding:96px 64px; }
  .testimonials-inner { max-width:1280px; margin:0 auto; }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:52px; }
  .testi-card { background:var(--white); border-radius:4px; overflow:hidden; transition:box-shadow .3s; }
  .testi-card:hover { box-shadow:0 14px 40px rgba(11,31,58,.13); }
  .testi-card-img { width:100%; height:180px; object-fit:cover; display:block; }
  .testi-card-body { padding:28px 26px; }
  .testi-mark { font-family: var(--font-serif); font-size:3.5rem; color:var(--gold); opacity:.3; line-height:.8; margin-bottom:6px; }
  .testi-text { font-size:.88rem; line-height:1.78; color:#3a4a5e; font-style:italic; margin-bottom:24px; }
  .testi-author { display:flex; align-items:center; gap:12px; padding-top:18px; border-top:1px solid rgba(11,31,58,.08); }
  .testi-avatar { width:42px; height:42px; border-radius:50%; background:var(--navy); display:flex; align-items:center; justify-content:center; font-family: var(--font-serif); font-size:1.1rem; color:var(--gold); font-weight:600; flex-shrink:0; }
  .testi-name { font-weight:600; font-size:.88rem; color:var(--navy); }
  .testi-meta { font-size:.76rem; color:#8a9bb0; margin-top:2px; }
  .testi-asset { font-size:.76rem; color:#c9a84c; margin-top:2px; }

  /* CTA */
  .cta { position:relative; overflow:hidden; }
  .cta-bg { position:absolute; inset:0; background:linear-gradient(rgba(11,31,58,.88), rgba(11,31,58,.94)), url('https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1600&q=80') center/cover no-repeat; }
  .cta-inner { position:relative; z-index:1; max-width:760px; margin:0 auto; text-align:center; padding:96px 64px; }
  .cta-eyebrow { font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:18px; display:flex; align-items:center; justify-content:center; gap:14px; }
  .cta-eyebrow::before, .cta-eyebrow::after { content:''; width:36px; height:1px; background:var(--gold); display:block; }
  .cta h2 { font-family: var(--font-serif); font-size:clamp(2rem,4vw,3.2rem); font-weight:300; line-height:1.2; margin-bottom:18px; color: white; }
  .cta h2 em { font-style:italic; color:var(--gold); }
  .cta-sub { font-size:.95rem; color:rgba(255,255,255,.7); margin-bottom:40px; line-height:1.75; }
  .cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
  .btn-wa { background:#25D366; color:#fff; padding:16px 36px; border:none; border-radius:2px; font-family: var(--font-outfit); font-size:.88rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .btn-wa:hover { background:#1fb85a; transform:translateY(-2px); box-shadow:0 8px 24px rgba(37,211,102,.28); }

  @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  .fu { animation:fadeUp .85s ease forwards; }
  .d1 { animation-delay:.15s; opacity:0; }
  .d2 { animation-delay:.3s; opacity:0; }
  .d3 { animation-delay:.45s; opacity:0; }
  .d4 { animation-delay:.6s; opacity:0; }

  @media(max-width:1024px){
    .hero-inner { grid-template-columns:1fr; padding:100px 24px 80px; }
    .hero-panel { display:none; }
    .trust-grid { grid-template-columns:repeat(3,1fr); }
    .services-grid { grid-template-columns:1fr 1fr; }
    .why-grid { grid-template-columns:1fr; gap:48px; }
    .testi-grid { grid-template-columns:1fr; }
    .trust-heading,.services,.why,.testimonials,.cta-inner { padding-left:24px; padding-right:24px; }
    .why-feature { grid-template-columns:160px 1fr; }
    .why-feature-img { width:160px; height:110px; }
  }
  @media(max-width:640px){
    .trust-grid { grid-template-columns:1fr 1fr; }
    .services-grid { grid-template-columns:1fr; }
    .hero-btns { flex-direction:column; }
    .why-feature { grid-template-columns:1fr; }
    .why-feature-img { width:100%; height:140px; }
  }
`,r=["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80","https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80","https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80","https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80","https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"],i=["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80","https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80","https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"],s=["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80","https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"],o=["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80","https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80","https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80"],n=[{title:"Property Management",desc:"End-to-end oversight, inspections, and reporting for NRI clients."},{title:"Rental Management",desc:"Tenant acquisition, rent collection, and dispute handling."},{title:"Land Monetisation",desc:"Convert idle land into PG, co-living, or solar revenue."},{title:"Investment Advisory",desc:"Buy, sell, or invest with expert guidance and bank auction opportunities."},{title:"24/7 Maintenance",desc:"Round-the-clock facility management and remote tracking."},{title:"Vacation Rentals",desc:"Direct deals, zero brokerage, managed stays."}],l=[{num:"22+",label:"Years of Financial Market Experience"},{num:"4,000+",label:"Clients Served Pan-India & NRI"},{num:"12–24%",label:"CAGR Returns Delivered"},{num:"6",label:"Core Property Services"},{num:"UAE · SG · UK · USA · CA",label:"Global Presence Across 5 Countries"}],c=[{title:"Zero Brokerage Model",desc:"Pure transparency. Direct deals with zero middlemen mean higher net returns for your portfolio.",tag:"Unique to Credence"},{title:"Real-Time Digital Reporting",desc:"Institutional-grade transparency. Monitor your assets via real-time digital dashboards from anywhere globally.",tag:"Tech-First"},{title:"Structured Investment Proposals",desc:"Risk-optimized growth. Professional proposals with clear projections and no hidden surprises.",tag:"HNI Preferred"},{title:"Senior Citizen Property Care",desc:"Dedicated family support. We manage your family homes with the same care and discipline as our own.",tag:"Specialist Service"},{title:"Real Estate Super App",desc:"The future of management. A single-window tech platform for all your South Indian property interests.",tag:"Coming Soon"}],d=[{text:"Credence has managed my Chennai apartments for three years. The rental income flows without me lifting a finger, and the digital reports provide absolute peace of mind.",name:"Aravind Krishnan",meta:"Software Engineer · Dubai, UAE",asset:"2 Apartments, Chennai",init:"AK"},{text:"I was sceptical about investing in South Indian real estate from Singapore. Their structured proposals and professional oversight delivered a 19% CAGR on my villa plot.",name:"Priya Subramaniam",meta:"Finance Professional · Singapore",asset:"Villa Plot, Coimbatore",init:"PS"},{text:"My family's 2-acre Madurai plot sat idle for years. Credence monetised it into a solar lease, generating consistent monthly income with zero operational effort.",name:"Rajesh Menon",meta:"Business Owner · London, UK",asset:"2-Acre Plot, Madurai",init:"RM"}];function p(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:a}),(0,t.jsxs)("section",{className:"hero",children:[(0,t.jsx)("div",{className:"hero-bg"}),(0,t.jsxs)("div",{className:"hero-inner",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"hero-eyebrow fu",children:"South India's Premier Property Asset Management"}),(0,t.jsxs)("h1",{className:"hero-h1 fu d1",children:["Your Property.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Managed Professionally."}),(0,t.jsx)("br",{}),"Returns Delivered."]}),(0,t.jsxs)("p",{className:"hero-sub fu d2",children:["South India's trusted real estate asset management company for ",(0,t.jsx)("strong",{children:"NRI and HNI clients"}),".",(0,t.jsx)("strong",{children:" 22 years"})," of experience. ",(0,t.jsx)("strong",{children:"4,000+ clients"}),". ",(0,t.jsx)("strong",{children:"12–24% CAGR returns"}),"."]}),(0,t.jsxs)("div",{className:"hero-btns fu d3",children:[(0,t.jsx)("button",{className:"btn-gold",onClick:()=>document.getElementById("services").scrollIntoView({behavior:"smooth"}),children:"Explore Our Services"}),(0,t.jsx)("button",{className:"btn-outline",children:"Talk to an Expert"})]})]}),(0,t.jsxs)("div",{className:"hero-panel fu d4",children:[(0,t.jsxs)("div",{className:"hero-panel-main",children:[(0,t.jsx)("img",{src:"/demo_4/images/hero_premium.png",alt:"Premium managed South Indian villa with skyline",loading:"lazy"}),(0,t.jsxs)("div",{className:"hero-panel-main-overlay",children:[(0,t.jsx)("p",{className:"hero-panel-label",children:"Portfolio Under Management"}),(0,t.jsx)("p",{className:"text-white",children:"₹480 Cr+ Across South India"})]})]}),(0,t.jsxs)("div",{className:"hero-panel-row",children:[(0,t.jsxs)("div",{className:"hero-panel-mini",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",alt:"Investment growth",loading:"lazy"}),(0,t.jsxs)("div",{className:"hero-panel-mini-overlay",children:[(0,t.jsx)("p",{className:"hero-panel-mini-num",children:"24%"}),(0,t.jsx)("p",{className:"hero-panel-mini-text",children:"Peak CAGR Returns"})]})]}),(0,t.jsxs)("div",{className:"hero-panel-mini",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80",alt:"Clients served",loading:"lazy"}),(0,t.jsxs)("div",{className:"hero-panel-mini-overlay",children:[(0,t.jsx)("p",{className:"hero-panel-mini-num",children:"4,000+"}),(0,t.jsx)("p",{className:"hero-panel-mini-text",children:"Clients across 5 countries"})]})]})]})]})]})]}),(0,t.jsxs)("section",{className:"trust",id:"trust",children:[(0,t.jsxs)("div",{className:"trust-heading",children:[(0,t.jsx)("p",{children:"Our Track Record"}),(0,t.jsx)("h2",{children:"Numbers That Speak for Themselves"})]}),(0,t.jsx)("div",{className:"trust-grid",children:l.map((e,a)=>(0,t.jsxs)("div",{className:"trust-item",children:[(0,t.jsx)("img",{src:r[a],alt:e.label,loading:"lazy"}),(0,t.jsxs)("div",{className:"trust-overlay",children:[(0,t.jsx)("p",{className:"trust-num",children:e.num}),(0,t.jsx)("p",{className:"trust-label",children:e.label})]})]},e.label))})]}),(0,t.jsx)("section",{className:"services",id:"services",children:(0,t.jsxs)("div",{className:"services-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"What We Do"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Everything Your Property Needs.",(0,t.jsx)("br",{}),"Under One Roof."]}),(0,t.jsx)("p",{className:"section-sub",children:"From rental management to land monetisation — we handle it all while you focus on life."}),(0,t.jsx)("div",{className:"services-grid",children:n.map((e,a)=>(0,t.jsxs)("div",{className:"service-card",children:[(0,t.jsx)("img",{className:"service-img",src:i[a],alt:e.title,loading:"lazy"}),(0,t.jsxs)("div",{className:"service-body",children:[(0,t.jsx)("h3",{className:"service-title",children:e.title}),(0,t.jsx)("p",{className:"service-desc",children:e.desc}),(0,t.jsx)("a",{className:"service-link",href:`/services/${e.title.toLowerCase().replace(/\s+/g,"-")}`,children:"Learn More →"})]})]},e.title))})]})}),(0,t.jsx)("section",{className:"why",id:"why",children:(0,t.jsx)("div",{className:"why-inner",children:(0,t.jsxs)("div",{className:"why-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"The Credence Difference"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Why NRIs and HNIs",(0,t.jsx)("br",{}),"Trust Credence Strategies"]}),(0,t.jsx)("p",{className:"why-intro-text",children:"We are not a brokerage. We operate as your trusted financial partner — bringing institutional-grade rigour to every property decision we make on your behalf, from a continent away."}),(0,t.jsx)("blockquote",{className:"why-pull",children:'"We treat your property the way a private wealth manager treats your portfolio — with discipline, transparency, and a relentless focus on returns."'})]}),(0,t.jsx)("div",{className:"why-features",children:c.map((e,a)=>(0,t.jsxs)("div",{className:"why-feature",children:[(0,t.jsx)("img",{className:"why-feature-img",src:s[a],alt:e.title,loading:"lazy"}),(0,t.jsxs)("div",{className:"why-feature-body",children:[(0,t.jsx)("p",{className:"why-feature-title",children:e.title}),(0,t.jsx)("p",{className:"why-feature-desc",children:e.desc}),(0,t.jsx)("span",{className:"why-tag",children:e.tag})]})]},e.title))})]})})}),(0,t.jsx)("section",{className:"testimonials",id:"testimonials",children:(0,t.jsxs)("div",{className:"testimonials-inner",children:[(0,t.jsx)("p",{className:"section-label",style:{color:"#8a6a2a"},children:"Client Stories"}),(0,t.jsx)("h2",{className:"section-h2",style:{color:"var(--navy)"},children:"What Our Clients Say"}),(0,t.jsx)("div",{className:"testi-grid",children:d.map((e,a)=>(0,t.jsxs)("div",{className:"testi-card",children:[(0,t.jsx)("img",{className:"testi-card-img",src:o[a],alt:e.meta,loading:"lazy"}),(0,t.jsxs)("div",{className:"testi-card-body",children:[(0,t.jsx)("div",{className:"testi-mark",children:'"'}),(0,t.jsx)("p",{className:"testi-text",children:e.text}),(0,t.jsxs)("div",{className:"testi-author",children:[(0,t.jsx)("div",{className:"testi-avatar",children:e.init}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"testi-name",children:e.name}),(0,t.jsx)("p",{className:"testi-meta",children:e.meta}),(0,t.jsx)("p",{className:"testi-asset",children:e.asset})]})]})]})]},e.name))})]})}),(0,t.jsxs)("section",{className:"cta",id:"cta",children:[(0,t.jsx)("div",{className:"cta-bg"}),(0,t.jsxs)("div",{className:"cta-inner",children:[(0,t.jsx)("p",{className:"cta-eyebrow",children:"Get Started Today"}),(0,t.jsxs)("h2",{children:["Ready to Make Your Property ",(0,t.jsx)("em",{children:"Work for You?"})]}),(0,t.jsx)("p",{className:"cta-sub",children:"Get a free property assessment and investment projection — tailored to your asset."}),(0,t.jsxs)("div",{className:"cta-btns",children:[(0,t.jsx)("button",{className:"btn-gold",style:{fontSize:".95rem",padding:"17px 44px"},children:"Book a Free Consultation"}),(0,t.jsx)("button",{className:"btn-wa",children:"WhatsApp Us Now"})]})]})]})]})}e.s(["default",()=>p])}]);