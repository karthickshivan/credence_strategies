(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11766,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(22016);let r=`
  /* HERO */
  .hero { position:relative; min-height:90vh; display:flex; align-items:center; overflow:hidden; margin-top: -20px; background: #FAF7F2; }
  .hero-bg {
    position:absolute; inset:0;
    background: #FAF7F2;
  }
  .hero-inner { position:relative; z-index:2; max-width:1280px; margin:0 auto; padding:100px 64px 80px; display:grid; grid-template-columns:1.1fr 0.9fr; gap:64px; align-items:center; }
  .hero-eyebrow { display:flex; align-items:center; gap:12px; font-size:.75rem; letter-spacing:.22em; text-transform:uppercase; color:#8a6a2a; margin-bottom:22px; }
  .hero-eyebrow::before { content:''; width:36px; height:1px; background:#8a6a2a; display:block; }
  .hero-h1 { font-family: var(--font-serif); font-size:clamp(2.5rem,4vw,3.6rem); font-weight:300; line-height:1.15; margin-bottom:22px; color: #0b1f3a; }
  .hero-h1 em { font-style:italic; color:#0e382b; font-weight: 500; }
  .hero-sub { font-size:1.05rem; line-height:1.8; color:rgba(11,31,58,.8); margin-bottom:24px; max-width:550px; }
  .hero-sub strong { color:#0b1f3a; font-weight:600; }
  .hero-btns { display:flex; gap:14px; flex-wrap:wrap; margin-bottom:32px; }
  
  .hero .btn-gold { background:#0b1f3a; color:white; padding:16px 38px; border:none; border-radius:2px; font-family: var(--font-outfit); font-size:.88rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .hero .btn-gold:hover { background:#152f52; transform:translateY(-2px); box-shadow:0 8px 28px rgba(11,31,58,.2); }
  .hero .btn-outline { background:transparent; color:#0b1f3a; padding:15px 38px; border:1px solid rgba(11,31,58,.3); border-radius:2px; font-family: var(--font-outfit); font-size:.88rem; font-weight:600; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; transition:all .25s; }
  .hero .btn-outline:hover { border-color:#0b1f3a; background: rgba(11,31,58,0.03); transform:translateY(-2px); }
  
  .hero-video-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--border-gold);
    box-shadow: 0 20px 40px rgba(11,31,58,.15);
  }
  .hero-video-wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


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
  .service-card { border-radius:4px; overflow:hidden; position:relative; cursor:pointer; display:flex; flex-direction:column; height:100%; }
  .service-img { width:100%; height:220px; object-fit:cover; display:block; transition:transform .5s; }
  .service-card:hover .service-img { transform:scale(1.04); }
  .service-body { padding:24px 22px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06); border-top:none; flex:1; display:flex; flex-direction:column; }
  .service-title { font-family: var(--font-serif); font-size:1.25rem; font-weight:600; margin-bottom:8px; color: white; }
  .service-desc { font-size:.83rem; color:rgba(255,255,255,.7); line-height:1.65; margin-bottom:14px; flex:1; }
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

  /* WHO WE ARE */
  .who { background:var(--navy2); padding:96px 64px; }
  .who-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
  .who-text p { font-size:.97rem; line-height:1.9; color:rgba(255,255,255,.7); margin-bottom:20px; }

  /* WHY SELECT US */
  .wsu { background:var(--navy); padding:96px 64px; }
  .wsu-inner { max-width:1280px; margin:0 auto; }
  .wsu-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; margin-top:52px; }
  .wsu-card { background:rgba(255,255,255,.04); border:1px solid rgba(201,168,76,.12); border-radius:4px; padding:32px 28px; transition:border-color .3s,transform .3s; }
  .wsu-card:hover { border-color:var(--gold); transform:translateY(-4px); }
  .wsu-icon { font-size:2rem; margin-bottom:16px; }
  .wsu-title { font-family:var(--font-serif); font-size:1.1rem; font-weight:600; color:white; margin-bottom:8px; }
  .wsu-desc { font-size:.83rem; color:rgba(255,255,255,.65); line-height:1.7; }

  /* CAGR BAND */
  .cagr-band { background:linear-gradient(135deg,#0b1f3a 0%,#1a3a5c 50%,#0b1f3a 100%); padding:80px 64px; text-align:center; position:relative; overflow:hidden; }
  .cagr-band::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(201,168,76,.12) 0%,transparent 70%); }
  .cagr-band-inner { position:relative; z-index:1; max-width:860px; margin:0 auto; }
  .cagr-num { font-family:var(--font-serif); font-size:clamp(3rem,6vw,5.5rem); font-weight:300; color:var(--gold); line-height:1; margin-bottom:16px; }
  .cagr-text { font-size:1.05rem; color:rgba(255,255,255,.75); line-height:1.8; margin-bottom:32px; }

  /* DIGITAL WEALTH PLATFORMS */
  .dwp { background:var(--navy2); padding:96px 64px; }
  .dwp-inner { max-width:1280px; margin:0 auto; }
  .dwp-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-top:52px; }
  .dwp-card { border-radius:4px; overflow:hidden; position:relative; height:320px; }
  .dwp-card img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s; }
  .dwp-card:hover img { transform:scale(1.05); }
  .dwp-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(11,31,58,.95) 0%,rgba(11,31,58,.4) 60%,transparent 100%); display:flex; flex-direction:column; justify-content:flex-end; padding:32px; }
  .dwp-tag { font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; border:1px solid rgba(201,168,76,.3); display:inline-block; padding:3px 10px; border-radius:20px; width:fit-content; }
  .dwp-title { font-family:var(--font-serif); font-size:1.6rem; font-weight:400; color:white; margin-bottom:10px; }
  .dwp-desc { font-size:.83rem; color:rgba(255,255,255,.7); line-height:1.65; }

  /* TESTIMONIALS */
  .testimonials { background:var(--cream); padding:96px 64px; }
  .testimonials-inner { max-width:1280px; margin:0 auto; }
  .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:64px; align-items: stretch; }
  .testi-card { background:var(--white); border-radius:4px; overflow:hidden; transition:all .4s cubic-bezier(0.165, 0.84, 0.44, 1); display: flex; flex-direction: column; height: 100%; border: 1px solid rgba(11,31,58,0.03); }
  .testi-card:hover { transform: translateY(-8px); box-shadow:0 20px 40px rgba(11,31,58,.08); border-color: rgba(201,168,76,0.2); }
  .testi-card-body { padding:40px 32px; flex: 1; display: flex; flex-direction: column; }
  .testi-mark { font-family: var(--font-serif); font-size:4.5rem; color:var(--gold); opacity:.15; line-height:.1; margin-bottom:12px; margin-left: -8px; }
  .testi-text { font-size:.92rem; line-height:1.8; color:#3a4a5e; font-style:italic; margin-bottom:32px; flex: 1; }
  .testi-author { display:flex; align-items:center; gap:16px; padding-top:24px; border-top:1px solid rgba(11,31,58,.06); margin-top: auto; }
  .testi-avatar { width:48px; height:48px; border-radius:50%; background:var(--navy); display:flex; align-items:center; justify-content:center; font-family: var(--font-serif); font-size:1.2rem; color:var(--gold); font-weight:600; flex-shrink:0; box-shadow: 0 4px 12px rgba(11,31,58,0.15); }
  .testi-name { font-weight:600; font-size:.92rem; color:var(--navy); }
  .testi-meta { font-size:.76rem; color:#8a9bb0; margin-top:3px; }
  .testi-asset { font-size:.76rem; color:#c9a84c; margin-top:3px; font-weight: 500; }

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

  /* FLOATING ICONS */
  .hero-float { position:absolute; inset:0; pointer-events:none; z-index:1; }
  .float-icon { position:absolute; opacity:0.08; animation: float 8s ease-in-out infinite; }
  .float-icon-gold { position:absolute; opacity:0.25; filter: none; animation: float 10s ease-in-out infinite; }
  @keyframes float {
    0% { transform: translateY(0) translateX(0) rotate(0deg); }
    50% { transform: translateY(-25px) translateX(20px) rotate(5deg); }
    100% { transform: translateY(0) translateX(0) rotate(0deg); }
  }
  @keyframes floatReverse {
    0% { transform: translateY(0) translateX(0) rotate(0deg); }
    50% { transform: translateY(25px) translateX(-20px) rotate(-5deg); }
    100% { transform: translateY(0) translateX(0) rotate(0deg); }
  }

  .cagr-band { 
    background: linear-gradient(rgba(11, 31, 58, 0.92), rgba(11, 31, 58, 0.88)),
      url('https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1800&q=80') center/cover no-repeat; 
    padding:100px 64px; text-align:center; position:relative; overflow:hidden; 
  }
  .ai-wealth { background: var(--navy); padding: 96px 64px; position:relative; overflow:hidden; }
  .ai-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns: 1fr 1fr; gap:80px; align-items:center; }
  .ai-visual { position:relative; height:450px; background: radial-gradient(circle at center, rgba(201,168,76,0.08) 0%, transparent 70%); display:flex; align-items:center; justify-content:center; }
  .ai-core { width:120px; height:120px; background:var(--navy); border:2px solid var(--gold); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; position:relative; z-index:2; box-shadow: 0 0 40px rgba(201,168,76,0.2); }
  .ai-orbit { position:absolute; border:1px solid rgba(201,168,76,0.15); border-radius:50%; animation: rotate 20s linear infinite; }
  .ai-orbit-1 { width:240px; height:240px; }
  .ai-orbit-2 { width:380px; height:380px; animation-duration: 35s; animation-direction: reverse; }
  .ai-node-point { position:absolute; width:12px; height:12px; background:var(--gold); border-radius:50%; top: -6px; left:50%; transform:translateX(-50%); box-shadow: 0 0 15px var(--gold); }
  @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  /* INVESTMENT DESK */
  .inv-desk { background: var(--navy2); padding: 96px 64px; }
  .inv-inner { max-width:1280px; margin:0 auto; }
  .inv-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:28px; margin-top:52px; }
  .inv-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding:48px 32px; border-radius:4px; text-align:center; transition:all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
  .inv-card:hover { transform:translateY(-12px); border-color:var(--gold); background:rgba(255,255,255,0.06); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
  .inv-h3 { font-family:var(--font-serif); font-size:1.6rem; color:white; margin-bottom:18px; }
  .inv-p { font-size:0.9rem; color:rgba(255,255,255,0.65); line-height:1.75; margin-bottom:32px; }

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
    .trust-heading,.services,.why,.testimonials,.faq,.cta-inner { padding-left:24px; padding-right:24px; }
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

  /* FAQ */
  .faq { background: var(--cream); padding: 96px 64px; }
  .faq-inner { max-width: 900px; margin: 0 auto; }
  .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 0; }
  .faq-item { border-bottom: 1px solid rgba(11,31,58,0.1); }
  .faq-trigger { 
    width: 100%; 
    padding: 24px 0; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    background: transparent; 
    border: none; 
    cursor: pointer; 
    text-align: left; 
    transition: all 0.3s;
  }
  .faq-question { 
    font-family: var(--font-serif); 
    font-size: 1.25rem; 
    color: var(--navy); 
    font-weight: 600;
    transition: color 0.3s;
    display: flex;
    align-items: center;
  }
  .faq-num { color: var(--gold); margin-right: 16px; font-family: var(--font-outfit); font-weight: 700; font-size: 1.1rem; }
  .faq-trigger:hover .faq-question { color: var(--gold); }
  .faq-icon { 
    width: 20px; 
    height: 20px; 
    color: var(--gold); 
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
  }
  .faq-item.active .faq-icon { transform: rotate(180deg); }
  .faq-content { 
    max-height: 0; 
    overflow: hidden; 
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
    opacity: 0;
  }
  .faq-item.active .faq-content { max-height: 500px; opacity: 1; padding-bottom: 32px; }
  .faq-answer { font-size: 1rem; color: #3a4a5e; line-height: 1.8; }
`,s=["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80","https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80","https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80","https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80","https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"],n=["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80","https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80","https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"],o=["https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80","https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80","/images/senior_advisor.png","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"],l=[{title:"Property Management",desc:"End-to-end oversight, inspections, and reporting for NRI clients."},{title:"Rental Management",desc:"Tenant acquisition, rent collection, and dispute handling."},{title:"Land Monetisation",desc:"Convert idle land into PG, co-living, or solar revenue."},{title:"Investment Advisory",desc:"Buy, sell, or invest with expert guidance and bank auction opportunities."},{title:"24/7 Maintenance",desc:"Round-the-clock facility management and remote tracking."},{title:"Vacation Rentals",desc:"Direct deals, zero brokerage, managed stays."}],d=[{num:"22+",label:"Years of Financial Market Experience"},{num:"4,000+",label:"Clients Served Pan-India & NRI"},{num:"12–24%",label:"CAGR Returns Delivered"},{num:"6",label:"Core Property Services"},{num:"UAE · SG · UK · USA · CA",label:"Global Presence Across 5 Countries"}],c=[{title:"Zero Brokerage Model",desc:"Pure transparency. Direct deals with zero middlemen mean higher net returns for your portfolio.",tag:"Unique to Credence"},{title:"Real-Time Digital Reporting",desc:"Institutional-grade transparency. Monitor your assets via real-time digital dashboards from anywhere globally.",tag:"Tech-First"},{title:"Structured Investment Proposals",desc:"Risk-optimized growth. Professional proposals with clear projections and no hidden surprises.",tag:"HNI Preferred"},{title:"Senior Citizen Property Care",desc:"Dedicated family support. We manage your family homes with the same care and discipline as our own.",tag:"Specialist Service"},{title:"Real Estate Super App",desc:"The future of management. A single-window tech platform for all your South Indian property interests.",tag:"Coming Soon"}],p=[{text:"The platform made tracking my investments and rental income simple and transparent.",name:"Abdul Mishra",meta:"Entrepreneur",asset:"Portfolio Investor",init:"AM"},{text:"I finally have one view of my mutual funds, stocks, and property holdings.",name:"Hariharan",meta:"Tech Consultant",asset:"Asset Management Client",init:"H"},{text:"Their team helped structure a steady income real estate plan for my retirement.",name:"Shoba",meta:"Retiree",asset:"Income Portfolio",init:"S"},{text:"The app’s updates and alerts keep me informed without constant manual checks.",name:"Deepika",meta:"Doctor",asset:"Digital Desk User",init:"D"},{text:"As a working professional, I love how automated and low effort my portfolio monitoring is.",name:"Vani",meta:"Corporate Professional",asset:"Automated Portfolio",init:"V"},{text:"Their guidance on co investment in real estate reduced my research burden significantly.",name:"Aruna",meta:"Business Owner",asset:"Co-Investment Partner",init:"A"},{text:"The reports are clear and easy to understand, even for non finance family members.",name:"Srinivasan",meta:"Retired Professional",asset:"Family Wealth Plan",init:"S"},{text:"Finally found a trustworthy partner to manage my pension plus property income.",name:"Chidambaram",meta:"Retired Police Officer",asset:"Pension & Property Management",init:"C"},{text:"The 12–24% CAGR style approach fits my long term horizon and risk appetite.",name:"Vittal",meta:"Investor",asset:"CAGR Strategy Client",init:"V"},{text:"The digital access and language neutral support make it easy for me to manage my India based assets remotely.",name:"Harrison Mosses",meta:"NRI HNI",asset:"Global Asset Portfolio",init:"HM"}],m=[{q:"What makes Credence Strategies different from traditional real estate brokers?",a:"We operate as a wealth management partner, not a brokerage. We offer a zero-brokerage model, institutional-grade transparency, and AI-driven insights, focusing on long-term capital growth rather than transaction fees."},{q:"Who are your primary clients?",a:"Our services are tailored for HNIs, NRIs, retirees, and entrepreneurs who require professional oversight and structured wealth plans for their South Indian real estate portfolios."},{q:"What is the 'Zero Brokerage Model'?",a:"It means we facilitate direct deals without middleman fees, ensuring higher net returns and complete transparency in every transaction, aligning our interests with your portfolio growth."},{q:"How do you deliver 12–24% CAGR targets?",a:"By combining deep market expertise with our AI-driven investment desk to identify high-yield opportunities and urban growth corridors before they hit the open market, backed by rigorous risk mitigation."},{q:"I am an NRI. How can I monitor my Indian property through your platform?",a:"You can monitor assets, track rental income, and review reports in real-time via our Real Estate Super App and through your dedicated Relationship Manager, ensuring complete peace of mind remotely."},{q:"What does Land Monetisation involve?",a:"We help clients convert idle land into revenue-generating assets such as PG accommodations, co-living spaces, or solar energy projects, ensuring your land works as hard as your other investments."},{q:"Do you handle property maintenance and tenant management?",a:"Yes, we offer end-to-end Property and Rental Management. This includes tenant acquisition, rent collection, 24/7 maintenance support, and regular property inspections with digital reporting."},{q:"What is the AI-Driven Investment Desk?",a:"Our proprietary tech stack processes over 200 data points across the real estate landscape to identify growth corridors and perform automated legal/financial health checks to find opportunities before they hit the open market."},{q:"How do you ensure the security and transparency of my investments?",a:"Transparency is a core pillar. We provide real-time digital reporting, institutional-grade discipline in documentation, and automated risk mitigation engines to ensure your assets are protected."},{q:"How do I get started with a personalized wealth plan?",a:"Request a 1-on-1 Wealth Consultation via our website or WhatsApp to receive a tailored strategy based on your specific financial goals and risk profile."}];function h(){let[e,h]=(0,a.useState)(null),g={"@context":"https://schema.org","@type":"FAQPage",mainEntity:m.map(e=>({"@type":"Question",name:e.q,acceptedAnswer:{"@type":"Answer",text:e.a}}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(g)}}),(0,t.jsx)("style",{children:r}),(0,t.jsxs)("section",{className:"hero",children:[(0,t.jsx)("div",{className:"hero-bg"}),(0,t.jsxs)("div",{className:"hero-float",children:[(0,t.jsx)("img",{src:"/window.svg",className:"float-icon",style:{top:"15%",left:"10%",width:"40px",animationDelay:"0s"},alt:""}),(0,t.jsx)("img",{src:"/globe.svg",className:"float-icon",style:{top:"60%",left:"5%",width:"60px",animationDelay:"1s",animationName:"floatReverse"},alt:""}),(0,t.jsx)("img",{src:"/file.svg",className:"float-icon",style:{top:"25%",left:"45%",width:"30px",animationDelay:"2s"},alt:""}),(0,t.jsx)("img",{src:"/window.svg",className:"float-icon",style:{top:"75%",left:"40%",width:"45px",animationDelay:"3s",animationName:"floatReverse"},alt:""}),(0,t.jsx)("div",{className:"float-icon-gold text-4xl",style:{top:"10%",right:"15%",animationDelay:"1.5s"},children:"💰"}),(0,t.jsx)("div",{className:"float-icon-gold text-5xl",style:{top:"50%",right:"10%",animationDelay:"2.5s",animationName:"floatReverse"},children:"📈"}),(0,t.jsx)("div",{className:"float-icon-gold text-3xl",style:{bottom:"15%",right:"25%",animationDelay:"4s"},children:"🏠"})]}),(0,t.jsxs)("div",{className:"hero-inner",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"hero-eyebrow fu",children:"Credence Strategies — Wealth & Real Estate"}),(0,t.jsxs)("h1",{className:"hero-h1 fu d1",children:["Your India Is in",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Good Hands"})," Now."]}),(0,t.jsxs)("p",{className:"hero-sub fu d2",children:["Personalised property and wealth solutions for ",(0,t.jsx)("strong",{children:"NRIs"}),", ",(0,t.jsx)("strong",{children:"HNIs"})," and families with assets in South India. We study, manage and grow what you own, with no middleman taking a cut."]}),(0,t.jsxs)("p",{className:"text-[14px] text-gray-700 font-outfit mb-8 leading-relaxed fu d2",children:["Real client money with us has grown ",(0,t.jsx)("strong",{children:"15.84% to 24.8%"})," a year. ",(0,t.jsx)("em",{className:"text-xs text-gray-400 block mt-1",children:"Past client results. Not a promise of future returns."})]}),(0,t.jsxs)("div",{className:"hero-btns fu d3",children:[(0,t.jsx)(i.default,{href:"/contact",children:(0,t.jsx)("button",{className:"btn-gold",children:"Request a 1-on-1 Consultation"})}),(0,t.jsx)("button",{className:"btn-outline",onClick:()=>window.open("https://wa.me/919606400600","_blank"),children:"See the Investment App"})]}),(0,t.jsx)("p",{className:"text-[12px] text-gray-400 font-outfit mt-8 mb-6 leading-relaxed fu d3",children:"Trusted by NRI and HNI families across the UAE, Singapore, the UK, the USA and Canada since 2004."}),(0,t.jsxs)("div",{className:"bg-white border border-gray-100 rounded-sm p-5 shadow-xs max-w-lg grid grid-cols-3 gap-4 text-left fu d3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-serif text-2xl font-bold text-[#0B1F3A]",children:"₹480 Cr+"}),(0,t.jsx)("p",{className:"text-[9px] text-[#8a6a2a] font-outfit font-semibold uppercase tracking-wider mt-1",children:"Portfolio Under Management"})]}),(0,t.jsxs)("div",{className:"border-l border-gray-100 pl-4",children:[(0,t.jsx)("p",{className:"font-serif text-2xl font-bold text-[#c9a84c]",children:"24%"}),(0,t.jsx)("p",{className:"text-[9px] text-[#8a6a2a] font-outfit font-semibold uppercase tracking-wider mt-1",children:"Peak CAGR • Target"})]}),(0,t.jsxs)("div",{className:"border-l border-gray-100 pl-4",children:[(0,t.jsx)("p",{className:"font-serif text-2xl font-bold text-[#0B1F3A]",children:"4,000+"}),(0,t.jsx)("p",{className:"text-[9px] text-[#8a6a2a] font-outfit font-semibold uppercase tracking-wider mt-1",children:"Clients • 5 Countries"})]})]})]}),(0,t.jsx)("div",{className:"hero-video-wrap fu d4",children:(0,t.jsx)("video",{id:"hero-visual",src:"/hero-video.mp4",poster:"/images/hero_premium.png",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})]}),(0,t.jsxs)("section",{className:"trust",id:"trust",children:[(0,t.jsxs)("div",{className:"trust-heading",children:[(0,t.jsx)("p",{children:"Our Track Record"}),(0,t.jsx)("h2",{children:"Numbers That Speak for Themselves"}),(0,t.jsx)("p",{className:"text-[10px] text-white/40 mt-2 italic",children:"Indicative projections. Not a guarantee of returns."})]}),(0,t.jsx)("div",{className:"trust-grid",children:d.map((e,a)=>(0,t.jsxs)("div",{className:"trust-item",children:[(0,t.jsx)("img",{src:s[a],alt:e.label,loading:"lazy"}),(0,t.jsxs)("div",{className:"trust-overlay",children:[(0,t.jsx)("p",{className:"trust-num",children:e.num}),(0,t.jsx)("p",{className:"trust-label",children:e.label})]})]},e.label))})]}),(0,t.jsx)("section",{className:"services",id:"services",children:(0,t.jsxs)("div",{className:"services-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"What We Do"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Everything Your Property Needs.",(0,t.jsx)("br",{}),"Under One Roof."]}),(0,t.jsx)("p",{className:"section-sub",children:"From comprehensive rental management to innovative land monetisation, our suite of specialized services is designed to handle every aspect of your property portfolio."}),(0,t.jsx)("div",{className:"services-grid",children:l.map((e,a)=>(0,t.jsxs)("div",{className:"service-card",children:[(0,t.jsx)("img",{className:"service-img",src:n[a],alt:e.title,loading:"lazy"}),(0,t.jsxs)("div",{className:"service-body",children:[(0,t.jsx)("h3",{className:"service-title",children:e.title}),(0,t.jsx)("p",{className:"service-desc",children:e.desc}),(0,t.jsx)("a",{className:"service-link",href:`/services/${e.title.toLowerCase().replace(/\s+/g,"-")}`,children:"Learn More →"})]})]},e.title))})]})}),(0,t.jsx)("section",{className:"why",id:"why",children:(0,t.jsx)("div",{className:"why-inner",children:(0,t.jsxs)("div",{className:"why-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"The Credence Difference"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Why NRIs and HNIs",(0,t.jsx)("br",{}),"Trust Credence Strategies"]}),(0,t.jsx)("p",{className:"why-intro-text",children:"At Credence Strategies, we are not a brokerage firm. We operate as your dedicated financial partner, bridging the gap between traditional real estate ownership and modern asset management. By bringing institutional-grade rigour, data-driven transparency, and professional oversight to every property decision, we ensure your South Indian real estate investments thrive, even when you are managing them from a continent away."}),(0,t.jsx)("blockquote",{className:"why-pull",children:'"We treat your property the way a private wealth manager treats your portfolio — with discipline, transparency, and a relentless focus on returns."'})]}),(0,t.jsx)("div",{className:"why-features",children:c.map((e,a)=>{let r=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{className:"why-feature-img",src:o[a],alt:e.title,loading:"lazy"}),(0,t.jsxs)("div",{className:"why-feature-body",children:[(0,t.jsx)("p",{className:"why-feature-title",children:e.title}),(0,t.jsx)("p",{className:"why-feature-desc",children:e.desc}),(0,t.jsx)("span",{className:"why-tag",children:e.tag})]})]});return"Senior Citizen Property Care"===e.title?(0,t.jsx)(i.default,{href:"/senior-care",className:"why-feature block hover:border-[#C9A84C]/50 transition-colors",children:r},e.title):(0,t.jsx)("div",{className:"why-feature",children:r},e.title)})})]})})}),(0,t.jsx)("section",{className:"who",id:"about-us",children:(0,t.jsxs)("div",{className:"who-inner",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"Who We Are"}),(0,t.jsxs)("h2",{className:"section-h2",children:["More Than a Real Estate Firm.",(0,t.jsx)("br",{}),"Your Wealth Partner."]})]}),(0,t.jsxs)("div",{className:"who-text",children:[(0,t.jsx)("p",{children:"We are a technology driven wealth and asset management platform blending deep market expertise with AI enabled analytics. Our team has advised HNIs, NRIs, and retirees on investments, real estate acquisition, and structured wealth plans."}),(0,t.jsx)("p",{children:"We operate with complete transparency, zero hidden charges, and a focus on long term capital preservation and growth. Credence Strategies was founded to professionalize South India's real estate sector with institutional-grade discipline."}),(0,t.jsx)("p",{children:"We are not a brokerage. We are your dedicated wealth partner, applying institutional-grade rigor to every property decision — so your investments work as hard as you do."})]})]})}),(0,t.jsx)("section",{className:"wsu",id:"why-us",children:(0,t.jsxs)("div",{className:"wsu-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"Why Select Us"}),(0,t.jsx)("h2",{className:"section-h2",children:"The Credence Advantage"}),(0,t.jsx)("div",{className:"wsu-grid",children:[{icon:"🤖",title:"AI-Driven Investment Desk",desc:"AI driven investment desk for 12–24% CAGR styled strategies."},{icon:"🏡",title:"End-to-End Management",desc:"End to end property purchase to property management service."},{icon:"📱",title:"Digital Wealth App",desc:"Digital app for tracking portfolios, SIPs, and real estate holdings in one view."},{icon:"🤝",title:"Relationship Manager",desc:"Dedicated relationship manager for HNIs and NRIs."}].map(e=>(0,t.jsxs)("div",{className:"wsu-card",children:[(0,t.jsx)("div",{className:"wsu-icon",children:e.icon}),(0,t.jsx)("p",{className:"wsu-title",children:e.title}),(0,t.jsx)("p",{className:"wsu-desc",children:e.desc})]},e.title))})]})}),(0,t.jsx)("section",{className:"ai-wealth",children:(0,t.jsxs)("div",{className:"ai-inner",children:[(0,t.jsxs)("div",{className:"ai-visual",children:[(0,t.jsx)("div",{className:"ai-core",children:"🤖"}),(0,t.jsx)("div",{className:"ai-orbit ai-orbit-1",children:(0,t.jsx)("div",{className:"ai-node-point"})}),(0,t.jsx)("div",{className:"ai-orbit ai-orbit-2",children:(0,t.jsx)("div",{className:"ai-node-point"})}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(var(--gold) 1px, transparent 1px)",backgroundSize:"30px 30px"}})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"Institutional Tech Stack"}),(0,t.jsx)("h2",{className:"section-h2",children:"AI-Powered Wealth Experience"}),(0,t.jsx)("p",{className:"section-sub",children:"Our proprietary investment engine processes over 200 data points across the South Indian real estate landscape to identify anomalies and high-yield opportunities before they hit the open market."}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-10",children:[{t:"Predictive Analytics",d:"Forecasting urban growth corridors with 85% accuracy."},{t:"Risk Mitigation Engine",d:"Automated legal and financial health checks on every asset."},{t:"Real-Time Reporting",d:"Direct transparency into your portfolio's daily performance."},{t:"Yield Optimization",d:"Dynamic pricing models for maximum rental returns."}].map(e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gold font-semibold text-sm mb-2",children:e.t}),(0,t.jsx)("p",{className:"text-xs text-white/50 leading-relaxed",children:e.d})]},e.t))})]})]})}),(0,t.jsx)("section",{className:"cagr-band",children:(0,t.jsxs)("div",{className:"cagr-band-inner",children:[(0,t.jsx)("p",{className:"section-label",style:{justifyContent:"center",marginBottom:"12px"},children:"Investment Returns"}),(0,t.jsx)("p",{className:"cagr-num",children:"12–24% CAGR"}),(0,t.jsx)("p",{className:"cagr-text",children:"If you partner with us, your capital can be positioned for targeted annualized returns of 12–24%, depending on your risk profile and time horizon. Our investment desk combines in depth research, diversified asset allocation, and continuous monitoring to keep your portfolio aligned with your goals."}),(0,t.jsx)("p",{style:{fontSize:".72rem",color:"rgba(255,255,255,.4)",marginBottom:"28px",fontStyle:"italic"},children:"*Indicative projections. Not a guarantee of returns."}),(0,t.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-gold",children:"Know Your Potential Return"})}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",children:"Schedule a Wealth Review"})})]})]})}),(0,t.jsx)("section",{className:"dwp",id:"platforms",children:(0,t.jsxs)("div",{className:"dwp-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"Digital Wealth Platforms"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Investing Beyond",(0,t.jsx)("br",{}),"Traditional Real Estate"]}),(0,t.jsxs)("div",{className:"dwp-grid",children:[(0,t.jsxs)("div",{className:"dwp-card",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",alt:"Food & Hospitality",loading:"lazy"}),(0,t.jsxs)("div",{className:"dwp-overlay",children:[(0,t.jsx)("span",{className:"dwp-tag",children:"Food Industry Investors"}),(0,t.jsx)("p",{className:"dwp-title",children:"Wealth Solutions for Food & Hospitality Entrepreneurs"}),(0,t.jsx)("p",{className:"dwp-desc",children:"We help food chain owners and restaurant groups invest surplus cash into structured portfolios while managing their real estate assets efficiently via our app."})]})]}),(0,t.jsxs)("div",{className:"dwp-card",children:[(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1545179605-1296651e9d43?w=900&q=80",alt:"Highway Travel",loading:"lazy"}),(0,t.jsxs)("div",{className:"dwp-overlay",children:[(0,t.jsx)("span",{className:"dwp-tag",children:"Highway travel & accommodation"}),(0,t.jsx)("p",{className:"dwp-title",children:"Highway Amenities & Accommodation Investors"}),(0,t.jsx)("p",{className:"dwp-desc",children:"For operators of highway motels, fuel station outlets, and roadside accommodation, our app helps track per asset ROI, manage tenant contracts, and optimize cash flow for reinvestment."})]})]})]})]})}),(0,t.jsx)("section",{className:"inv-desk",id:"core-services",children:(0,t.jsxs)("div",{className:"inv-inner",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"section-label",style:{justifyContent:"center"},children:"Core Services"}),(0,t.jsx)("h2",{className:"section-h2",children:"Invest With Precision"})]}),(0,t.jsxs)("div",{className:"inv-grid",children:[(0,t.jsxs)("div",{className:"inv-card",children:[(0,t.jsx)("h3",{className:"inv-h3",children:"AI Driven Investment Desk"}),(0,t.jsxs)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:[(0,t.jsx)("li",{children:"Intelligent portfolio construction and risk based allocation."}),(0,t.jsx)("li",{children:"Performance simulations and scenario testing for 12–24% CAGR style targets."})]}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",style:{width:"100%"},children:"Explore Service"})})]}),(0,t.jsxs)("div",{className:"inv-card",style:{borderColor:"var(--gold)",background:"rgba(201,168,76,0.05)"},children:[(0,t.jsx)("h3",{className:"inv-h3",children:"Real Estate Partnership Programs"}),(0,t.jsxs)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:[(0,t.jsx)("li",{children:"From property selection to joint ventures, co ownership structures, and property management."}),(0,t.jsx)("li",{children:"Income focused portfolios for retirees and HNIs."})]}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-gold",style:{width:"100%"},children:"Explore Programs"})})]}),(0,t.jsxs)("div",{className:"inv-card",children:[(0,t.jsx)("h3",{className:"inv-h3",children:"Digital App Platform"}),(0,t.jsx)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:(0,t.jsx)("li",{children:"Central view of all investments and real estate holdings."})}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",style:{width:"100%"},children:"Schedule Demo"})})]})]})]})}),(0,t.jsx)("section",{className:"testimonials",id:"testimonials",children:(0,t.jsxs)("div",{className:"testimonials-inner",children:[(0,t.jsx)("p",{className:"section-label center",style:{color:"#8a6a2a"},children:"Client Stories"}),(0,t.jsx)("h2",{className:"section-h2",style:{color:"var(--navy)",textAlign:"center"},children:"Voice of Our Partners"}),(0,t.jsx)("div",{className:"testi-grid",children:p.map(e=>(0,t.jsx)("div",{className:"testi-card",children:(0,t.jsxs)("div",{className:"testi-card-body",children:[(0,t.jsx)("div",{className:"testi-mark",children:'"'}),(0,t.jsx)("p",{className:"testi-text",children:e.text}),(0,t.jsxs)("div",{className:"testi-author",children:[(0,t.jsx)("div",{className:"testi-avatar",children:e.init}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"testi-name",children:e.name}),(0,t.jsx)("p",{className:"testi-meta",children:e.meta}),(0,t.jsx)("p",{className:"testi-asset",children:e.asset})]})]})]})},e.name))})]})}),(0,t.jsxs)("section",{className:"cta",id:"cta",children:[(0,t.jsx)("div",{className:"cta-bg"}),(0,t.jsxs)("div",{className:"cta-inner",children:[(0,t.jsx)("p",{className:"cta-eyebrow",children:"Begin Your Wealth Journey"}),(0,t.jsxs)("h2",{children:["Ready to Make Your Wealth ",(0,t.jsx)("em",{children:"Work Harder?"})]}),(0,t.jsx)("p",{className:"cta-sub",children:"Get a personalized wealth consultation — investment projections, asset selection, and a strategy tailored to your goals."}),(0,t.jsxs)("div",{className:"cta-btns",children:[(0,t.jsx)(i.default,{href:"/contact",children:(0,t.jsx)("button",{className:"btn-gold",style:{fontSize:".95rem",padding:"17px 44px"},children:"Request a 1-on-1 Wealth Consultation"})}),(0,t.jsx)("button",{className:"btn-wa",onClick:()=>window.open("https://wa.me/919606400600","_blank"),children:"WhatsApp Us Now"})]})]})]}),(0,t.jsx)("section",{className:"faq",id:"faq",children:(0,t.jsxs)("div",{className:"faq-inner",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"section-label center",style:{color:"#8a6a2a"},children:"Common Questions"}),(0,t.jsx)("h2",{className:"section-h2",style:{color:"var(--navy)",textAlign:"center"},children:"Frequently Asked Questions"})]}),(0,t.jsx)("div",{className:"faq-list",children:m.map((a,i)=>(0,t.jsxs)("div",{className:`faq-item ${e===i?"active":""}`,children:[(0,t.jsxs)("button",{className:"faq-trigger",onClick:()=>h(e===i?null:i),children:[(0,t.jsxs)("span",{className:"faq-question",children:[(0,t.jsxs)("span",{className:"faq-num",children:[i+1,"."]}),a.q]}),(0,t.jsx)("svg",{className:"faq-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M6 9l6 6 6-6"})})]}),(0,t.jsx)("div",{className:"faq-content",children:(0,t.jsx)("p",{className:"faq-answer",children:a.a})})]},i))})]})})]})}e.s(["default",()=>h])}]);