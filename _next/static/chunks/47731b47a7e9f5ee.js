(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11766,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(22016);let i=`
  /* HERO */
  .hero {
    position: relative;
    min-height: 90vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: -20px;
    background: #0B1F3A;
    padding: 120px 24px 80px;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background: #0B1F3A;
    z-index: 0;
  }
  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .hero-eyebrow {
    font-size: .8rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: #C9A84C;
    margin-bottom: 8px;
    font-family: var(--font-outfit);
    font-weight: 600;
  }
  .hero-eyebrow::before {
    display: none;
  }
  .hero-h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 5vw, 4.2rem);
    font-weight: 300;
    line-height: 1.15;
    color: #ffffff;
    margin-bottom: 8px;
    max-width: 800px;
  }
  .hero-h1 em {
    font-style: italic;
    color: #C9A84C;
    font-weight: 500;
  }
  .hero-sub {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    max-width: 700px;
    font-family: var(--font-outfit);
  }
  .hero-sub strong {
    color: #ffffff;
    font-weight: 600;
  }
  .hero-proof {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 24px;
    max-width: 700px;
  }
  .hero-proof span {
    font-style: italic;
  }
  .hero-btns {
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 12px;
    max-width: 700px;
  }
  .hero-stats {
    max-width: 700px;
    width: 100%;
  }
  .btn-gold {
    background: #C9A84C;
    color: #0B1F3A;
    padding: 16px 38px;
    border: none;
    border-radius: 2px;
    font-family: var(--font-outfit);
    font-size: .88rem;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .25s;
  }
  .btn-gold:hover {
    background: #E8C97A;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(201, 168, 76, .35);
  }
  .btn-outline {
    background: transparent;
    color: #ffffff;
    padding: 15px 38px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    font-family: var(--font-outfit);
    font-size: .88rem;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .25s;
  }
  .btn-outline:hover {
    border-color: #C9A84C;
    color: #C9A84C;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
  .hero-trust {
    font-size: .8rem;
    color: rgba(255, 255, 255, 0.5);
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  .hero-video-container {
    width: 100%;
    max-width: 900px;
    margin-top: 16px;
  }
  .hero-video-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(201, 168, 76, 0.25);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    background: #061121;
    cursor: pointer;
  }
  .hero-video-wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .video-overlay {
    position: absolute;
    inset: 0;
    background: rgba(11, 31, 58, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    z-index: 3;
    padding: 24px;
  }
  .play-btn-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #C9A84C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 0 30px rgba(201, 168, 76, 0.4);
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  .hero-video-wrap:hover .play-btn-circle {
    transform: scale(1.1);
    background: #E8C97A;
  }
  .play-btn-icon {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 18px solid #0B1F3A;
    margin-left: 4px;
  }
  .video-caption {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
    text-align: center;
    max-width: 450px;
    line-height: 1.5;
  }


  /* TRUST BAR */
  .trust { background:var(--navy); padding: 52px 64px 40px; }
  .trust-inner { max-width: 1280px; margin: 0 auto; width: 100%; }
  .trust-heading { padding:0 0 36px; }
  .trust-heading .trust-eyebrow { font-size:.75rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; display:flex; align-items:center; gap:10px; }
  .trust-heading .trust-eyebrow::before { content:''; width:28px; height:1px; background:var(--gold); display:block; }
  .trust-heading h2 { font-family: var(--font-serif); font-size:clamp(1.8rem,3vw,2.6rem); font-weight:400; color: white; }
  .trust-heading h2 em { font-style: italic; color: var(--gold); font-weight: 500; }
  .trust-grid { display:grid; grid-template-columns:repeat(5,1fr); }
  .trust-item { position:relative; overflow:hidden; height:165px; cursor:pointer; }
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
  .section-h2 em { font-style: italic; color: var(--gold); font-weight: inherit; }
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
  .why-grid { display:flex; flex-direction:column; gap:64px; }
  .why-intro-text { font-size:.98rem; line-height:1.85; color:rgba(255,255,255,.65); margin-bottom:36px; max-width: 800px; }
  .why-pull { font-family: var(--font-serif); font-size:1.45rem; font-style:italic; font-weight:300; color:var(--gold2); line-height:1.65; padding-left:22px; border-left:2px solid var(--gold); max-width: 800px; }
  .why-features { display:grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,.1); border-left: 1px solid rgba(255,255,255,.1); }
  .why-feature { display:flex; flex-direction:column; padding: 48px 40px; border-right: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); position: relative; overflow: hidden; background: transparent; transition: background .3s; text-decoration: none; }
  .why-feature:hover { background: rgba(201,168,76,.05); border-color: rgba(255,255,255,.1); }
  .why-feature-body { display:flex; flex-direction:column; justify-content:flex-start; }
  .why-feature-title { font-family: var(--font-serif); font-size: 1.4rem; font-weight: 500; color: #fff; margin-bottom: 16px; }
  .why-feature-desc { font-size: 0.95rem; line-height: 1.7; color: rgba(255,255,255,.65); }
  .why-tag { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; border: none; padding: 0; position: static; }

  /* WHO WE ARE */
  .who { background:var(--cream); padding:96px 64px; }
  .who-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
  .who .section-h2 { color: var(--navy); }
  .who-text p { font-size:.97rem; line-height:1.9; color:#555; margin-bottom:20px; text-align:justify; }

  /* WHY SELECT US */
  .wsu { background:var(--navy); padding:96px 64px; }
  .wsu-inner { max-width:1280px; margin:0 auto; }
  .wsu-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; margin-top:52px; }
  .wsu-card { background:rgba(255,255,255,.04); border:1px solid rgba(201,168,76,.12); border-radius:4px; padding:32px 28px; transition:border-color .3s,transform .3s; }
  .wsu-card:hover { border-color:var(--gold); transform:translateY(-4px); }
  .wsu-eyebrow-text { font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--gold); margin-bottom:12px; font-weight:600; font-family:var(--font-outfit); }
  .wsu-title { font-family:var(--font-serif); font-size:1.25rem; font-weight:600; color:white; margin-bottom:8px; }
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
  .dwp-desc-text { color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 600px; line-height: 1.6; margin-top: 16px; margin-bottom: 40px; }
  .dwp-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
  .dwp-card { border-radius:4px; overflow:hidden; display:flex; flex-direction:column; background: white; }
  .dwp-image-wrap { height: 280px; overflow: hidden; }
  .dwp-card img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s; }
  .dwp-card:hover img { transform:scale(1.05); }
  .dwp-content { padding:32px; flex-grow: 1; display:flex; flex-direction:column; }
  .dwp-tag { font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--gold); margin-bottom:12px; font-weight:600; }
  .dwp-title { font-family:var(--font-serif); font-size:1.6rem; font-weight:600; color:var(--navy); margin-bottom:16px; line-height: 1.3; }
  .dwp-desc { font-size:1rem; color:#555; line-height:1.65; }

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
  .testi-meta { font-size:.68rem; color:#8a9bb0; margin-top:5px; text-transform: uppercase; letter-spacing: .06em; font-weight: 500; }
  .testi-asset { display: none; }

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
    .trust,.services,.why,.testimonials,.faq,.cta-inner { padding-left:24px; padding-right:24px; }
    .why-feature { grid-template-columns:1fr; }
    .why-feature-img { width:100%; height:auto; }
  }
  @media(max-width:640px){
    .trust-grid { grid-template-columns:1fr 1fr; }
    .services-grid { grid-template-columns:1fr; }
    .hero-btns { flex-direction:column; }
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
`,n=["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80","https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80","https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80","https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80","https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"],s=["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80","https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80","https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80","https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80","https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"],o=[{title:"Property Management",desc:"Full oversight, regular inspections and clear digital reports, so your property is cared for as if you were there.",link:"/services/property-management",alt:"A clean South Indian apartment with a tablet showing an inspection checklist for property management"},{title:"Rental Management",desc:"Finding quality tenants, managing rent collection and handling day-to-day care, so your rental income flows without the hassle.",link:"/services/rental-management",alt:"House keys resting on a rental agreement document for rental management"},{title:"Land Monetisation",desc:"Turning idle or inherited land into working income through PG, co-living, retail or solar, matched to its location.",link:"/services/land-monetisation",alt:"Empty land in South India with a small building visible for land monetisation"},{title:"Investment Advisory",desc:"Buying, selling or investing with clear guidance, including bank auction opportunities most owners never see.",link:"/services/real-estate-investment",alt:"A laptop displaying a portfolio growth chart next to a coffee cup for investment advisory"},{title:"24/7 Maintenance",desc:"Round-the-clock upkeep and remote tracking, so small repairs never quietly grow into big, costly problems.",link:"/services/maintenance",alt:"A professional technician working in a clean South Indian house representing maintenance services"},{title:"Vacation Rentals",desc:"Direct deals with zero brokerage and fully managed stays, turning a second home into a smooth income stream.",link:"/services/vacation-rentals",alt:"A traditional South Indian room in a heritage villa representing vacation rentals"}],l=[{num:"22+",label:"Years of Financial Market Experience",alt:"A financial advisor discussing market charts with a client"},{num:"4,000+",label:"Clients Served Pan-India & NRI",alt:"A professional business meeting representing a large client base"},{num:"12–24%",label:"Target CAGR Range",alt:"A financial performance graph showing growth over time"},{num:"6",label:"Core Property Services",alt:"A high-rise residential building representing property management"},{num:"UAE · SG · UK · USA · CA",label:"Global Presence Across 5 Countries",alt:"A global map highlighting international client locations"}],d=[{title:"Zero Brokerage Model",desc:"No middlemen, no hidden cut. Direct deals mean more of every rupee stays in your portfolio, compounding cleanly.",tag:"UNIQUE TO CREDENCE"},{title:"Real-Time Digital Reporting",desc:"Watch your assets from anywhere in the world through live dashboards, with the kind of transparency big institutions expect.",tag:"TECH-FIRST"},{title:"Structured Investment Proposals",desc:"Clear, risk-checked proposals with honest projections and no surprises, so you always know what you are stepping into.",tag:"HNI PREFERRED"},{title:"Senior Citizen Property Care",desc:"We look after family homes and aging parents in India with the same care and respect we would give our own.",tag:"SPECIALIST SERVICE"},{title:"Real Estate Super App",desc:"A single window for every South Indian property interest you hold, putting full control in your pocket.",tag:"COMING SOON"}],c=[{text:"Tracking my investments and rental income is finally simple and clear. I always know where things stand.",name:"Abdul Mishra",meta:"Entrepreneur",asset:"Portfolio Investor",init:"AM"},{text:"For the first time, my mutual funds, stocks and property all sit in one place. No more piecing it together.",name:"Hariharan",meta:"Retiree",asset:"Asset Management Client",init:"H"},{text:"They built me a steady-income real estate plan for retirement. Reliable money now arrives every month.",name:"Shoba",meta:"Retiree",asset:"Income Portfolio",init:"S"},{text:"The updates and alerts keep me informed without me having to check anything manually. It just works.",name:"Deepika",meta:"Doctor",asset:"Digital Desk User",init:"D"},{text:"As a working professional, I love how low-effort this is. My portfolio almost looks after itself.",name:"Vani",meta:"Corporate Professional",asset:"Automated Portfolio",init:"V"},{text:"Their guidance on co-investing in real estate took a huge research load off my plate. I trust their read.",name:"Aruna",meta:"Business Owner",asset:"Co-Investment Partner",init:"A"},{text:"The reports are clear enough that even my family members who are not into finance can follow them.",name:"Srinivasan",meta:"Retired Professional",asset:"Family Wealth Plan",init:"S"},{text:"I finally found a partner I trust to manage my pension along with my property income. Real peace of mind.",name:"Chidambaram",meta:"Retired Officer",asset:"Pension & Property",init:"C"},{text:"The 12–24% CAGR style approach suits my long-term horizon and my appetite for risk. It fits how I think.",name:"Vittal",meta:"Investor",asset:"CAGR Strategy Client",init:"V"},{text:"From the UK, the digital access and easy support make managing my India assets genuinely simple.",name:"Harrison Mosses",meta:"NRI HNI",asset:"Global Asset Portfolio",init:"HM"}],p=[{q:"What makes Credence different from a regular property broker?",a:"We are not a brokerage. A broker earns a cut on every deal, so the next transaction is always the goal. We earn one clear fee for studying, managing and growing your asset, so the only goal is your long-term return.<br/><br/>That means <strong>zero brokerage</strong>, real-time digital reporting, and advice that is never bent toward selling you something."},{q:"Who do you usually work with?",a:"Mostly NRIs, HNIs, retirees and business owners who own or want to own property in South India but cannot manage it on the ground. If you live abroad, run a busy business, or are planning your return to India, you get professional oversight and <strong>one trusted local point of contact</strong>."},{q:"What does zero brokerage actually mean?",a:"No middleman takes a cut from your deals. We do not earn a commission when something is bought, sold or rented. We charge one clear, fixed fee for managing and growing your asset.<br/><br/>Because we make nothing from transactions, <em>our advice stays honest</em> and every rupee your property earns keeps working for you."},{q:"How do you reach 12–24% CAGR, and the 15.84% to 24.8% past results?",a:"We do not gamble in the stock market. We use steady, recession-resistant real estate: serviced apartments that earn more than ordinary rent, idle land turned into income, and full management that keeps every property occupied.<br/><br/>Because we charge no brokerage, nothing leaks out in fees. <strong>The 15.84% to 24.8% figures are real past client results, not a promise of future returns.</strong>"},{q:"I am an NRI. How can I watch my Indian property from abroad?",a:"You watch everything from your phone. Open your digital account from anywhere and see live photos, inspection reports, rent records and documents in one place.<br/><br/>You also get a dedicated relationship manager, so you are never chasing updates across time zones or relying on a relative to check on things."},{q:"What is land monetisation, and how does it work?",a:"It means turning idle or inherited land into steady income. We study your plot's exact location, then match it to what the area actually needs, such as PG and co-living, retail, highway accommodation or solar.<br/><br/>We handle the build, approvals and daily running. You simply <strong>share the monthly income</strong> without managing any of it."},{q:"Do you handle maintenance and tenants too?",a:"Yes, end to end. We find and check tenants, collect rent, handle 24/7 maintenance, and run regular inspections with photos and digital reports.<br/><br/>You stop being the one chasing people in India, and simply receive clear updates while the property stays occupied and earning."},{q:"What is the AI-driven investment desk?",a:"It is the engine behind our research. It reviews more than 200 data points across the South Indian market to spot growth corridors early, and runs legal and financial health checks on every asset before we recommend it.<br/><br/>It supports our team, so your portfolio is built on <em>evidence, not guesswork</em>."},{q:"How do you keep my money and information safe and transparent?",a:"Transparency is the whole point. You get real-time reporting, clean documentation on every asset, and automated legal and financial checks before anything is recommended.<br/><br/>Nothing happens behind your back. You can see the status of your property and your returns <strong>whenever you want</strong>."},{q:"How do I get started?",a:"Request a free 1-on-1 consultation through the site or on WhatsApp. Tell us what you own and what worries you.<br/><br/>We will look at your property and savings, then give you an honest plan for what we would do, <strong>with no pressure and no cost to start</strong>."}];function h(){let[e,h]=(0,a.useState)(null),[m,g]=(0,a.useState)(!1),x={"@context":"https://schema.org","@type":"FAQPage",mainEntity:p.map(e=>({"@type":"Question",name:e.q,acceptedAnswer:{"@type":"Answer",text:e.a}}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x)}}),(0,t.jsx)("style",{children:i}),(0,t.jsxs)("section",{className:"hero",children:[(0,t.jsx)("div",{className:"hero-bg"}),(0,t.jsxs)("div",{className:"hero-inner",children:[(0,t.jsxs)("div",{className:"hero-left",children:[(0,t.jsxs)("p",{className:"hero-eyebrow fu",style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,t.jsx)("span",{style:{width:"28px",height:"1px",backgroundColor:"#C9A84C",display:"block"}}),(0,t.jsx)("span",{children:"CREDENCE STRATEGIES · WEALTH & REAL ESTATE"})]}),(0,t.jsxs)("h1",{className:"hero-h1 fu d1",children:["Your India Is in ",(0,t.jsx)("em",{children:"Good Hands"})," Now."]}),(0,t.jsxs)("p",{className:"hero-sub fu d2",children:["Personalised property and wealth solutions for ",(0,t.jsx)("strong",{children:"NRIs"}),", ",(0,t.jsx)("strong",{children:"HNIs"})," and families with assets in South India. We study, manage and grow what you own, with ",(0,t.jsx)("strong",{children:"no middleman taking a cut."})]}),(0,t.jsxs)("p",{className:"hero-proof fu d2",children:["Real client money with us has grown ",(0,t.jsx)("strong",{children:"15.84% to 24.8%"})," a year. ",(0,t.jsx)("span",{className:"italic opacity-70 text-xs",children:"Past client results. Not a promise of future returns."})]}),(0,t.jsxs)("div",{className:"hero-btns fu d3",children:[(0,t.jsx)(r.default,{href:"/contact",children:(0,t.jsx)("button",{className:"btn-gold",children:"Request a 1-on-1 Consultation"})}),(0,t.jsx)("button",{className:"btn-outline",onClick:()=>window.open("https://wa.me/919606400600","_blank"),children:"See the Investment App"})]}),(0,t.jsx)("p",{className:"hero-trust fu d3 mt-12 text-sm text-white/70",children:"Trusted by NRI and HNI families across the UAE, Singapore, the UK, the USA and Canada since 2004."}),(0,t.jsxs)("div",{className:"mt-8 border border-white/10 rounded-lg p-6 bg-white/[0.02] backdrop-blur-sm grid grid-cols-3 gap-6 text-left hero-stats fu d3",children:[(0,t.jsxs)("div",{className:"pr-4 border-r border-white/10",children:[(0,t.jsx)("p",{className:"font-serif text-3xl font-bold text-[#C9A84C]",children:"₹480 Cr+"}),(0,t.jsx)("p",{className:"text-[10px] font-bold text-white/50 tracking-widest uppercase mt-2 leading-tight",children:"Portfolio Under Management"})]}),(0,t.jsxs)("div",{className:"px-4 border-r border-white/10",children:[(0,t.jsx)("p",{className:"font-serif text-3xl font-bold text-[#C9A84C]",children:"24%"}),(0,t.jsx)("p",{className:"text-[10px] font-bold text-white/50 tracking-widest uppercase mt-2 leading-tight",children:"Peak CAGR - Target"})]}),(0,t.jsxs)("div",{className:"pl-4",children:[(0,t.jsx)("p",{className:"font-serif text-3xl font-bold text-[#C9A84C]",children:"4,000+"}),(0,t.jsx)("p",{className:"text-[10px] font-bold text-white/50 tracking-widest uppercase mt-2 leading-tight",children:"Clients · 5 Countries"})]})]})]}),(0,t.jsx)("div",{className:"hero-video-container fu d4",children:(0,t.jsxs)("div",{className:"hero-video-wrap",onClick:()=>{let e=document.getElementById("hero-visual");e&&(m?(e.pause(),g(!1)):(e.play(),g(!0)))},children:[(0,t.jsx)("video",{id:"hero-visual",src:"/hero-video.mp4",poster:"/images/hero_premium.png",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:m}),!m&&(0,t.jsxs)("div",{className:"video-overlay",children:[(0,t.jsx)("div",{className:"play-btn-circle",children:(0,t.jsx)("div",{className:"play-btn-icon"})}),(0,t.jsx)("p",{className:"video-caption",children:"The story of a home in India, watched over from across the world."})]})]})})]})]}),(0,t.jsx)("section",{className:"trust",id:"trust",children:(0,t.jsxs)("div",{className:"trust-inner",children:[(0,t.jsxs)("div",{className:"trust-heading",children:[(0,t.jsx)("p",{className:"trust-eyebrow",children:"Our Track Record"}),(0,t.jsxs)("h2",{children:["Numbers That Speak ",(0,t.jsx)("em",{children:"for Themselves"})]}),(0,t.jsx)("p",{className:"text-white/70 text-sm mt-3 max-w-xl leading-relaxed",children:"Two decades of looking after South Indian property and wealth for families at home and abroad."})]}),(0,t.jsx)("div",{className:"trust-grid",children:l.map((e,a)=>(0,t.jsxs)("div",{className:"trust-item",children:[(0,t.jsx)("img",{src:n[a],alt:e.alt,loading:"lazy"}),(0,t.jsxs)("div",{className:"trust-overlay",children:[(0,t.jsx)("p",{className:"trust-num",children:e.num}),(0,t.jsx)("p",{className:"trust-label",children:e.label})]})]},e.label))}),(0,t.jsx)("p",{className:"text-[11px] text-white/50 mt-4 italic",children:"Target ranges are indicative projections, not a guarantee of returns. Past client results: 15.84% to 24.8% a year."})]})}),(0,t.jsx)("section",{className:"services",id:"services",children:(0,t.jsxs)("div",{className:"services-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"What We Do"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Everything your property needs,",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"under one roof."})]}),(0,t.jsx)("p",{className:"section-sub",children:"From everyday rental care to turning idle land into income, one team handles every part of your property and your investments."}),(0,t.jsx)("div",{className:"services-grid",children:o.map((e,a)=>(0,t.jsxs)("div",{className:"service-card",children:[(0,t.jsx)("img",{className:"service-img",src:s[a],alt:e.alt,loading:"lazy"}),(0,t.jsxs)("div",{className:"service-body",children:[(0,t.jsx)("h3",{className:"service-title",children:e.title}),(0,t.jsx)("p",{className:"service-desc",children:e.desc}),(0,t.jsx)(r.default,{className:"service-link",href:e.link,children:"Learn More →"})]})]},e.title))})]})}),(0,t.jsx)("section",{className:"why",id:"why",children:(0,t.jsx)("div",{className:"why-inner",children:(0,t.jsxs)("div",{className:"why-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"The Credence Difference"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Why NRIs and HNIs ",(0,t.jsx)("em",{children:"trust Credence."})]}),(0,t.jsx)("p",{className:"why-intro-text",children:"We are not a brokerage. We act as your dedicated wealth partner, sitting between old-style property ownership and modern asset management. We bring institutional discipline, honest reporting and real oversight to every decision, so your South Indian property keeps performing even when you are managing it from another continent."}),(0,t.jsx)("blockquote",{className:"why-pull",children:"We look after your property the way a private wealth manager looks after a portfolio: with discipline, full transparency, and a steady focus on returns."})]}),(0,t.jsxs)("div",{className:"why-features",children:[d.map((e,a)=>{let i=(0,t.jsxs)("div",{className:"why-feature-body",children:[(0,t.jsx)("span",{className:"why-tag",children:e.tag}),(0,t.jsx)("h3",{className:"why-feature-title",children:e.title}),(0,t.jsx)("p",{className:"why-feature-desc",children:e.desc})]});return"Senior Citizen Property Care"===e.title?(0,t.jsx)(r.default,{href:"/senior-care",className:"why-feature",children:i},e.title):(0,t.jsx)("div",{className:"why-feature",children:i},e.title)}),(0,t.jsx)("div",{className:"why-feature",style:{background:"rgba(255,255,255,0.02)"}})]})]})})}),(0,t.jsx)("section",{className:"who",id:"about-us",children:(0,t.jsxs)("div",{className:"who-inner",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"Who We Are"}),(0,t.jsxs)("h2",{className:"section-h2",children:["More than a real estate firm. ",(0,t.jsx)("em",{children:"Your wealth partner."})]})]}),(0,t.jsxs)("div",{className:"who-text",children:[(0,t.jsx)("p",{children:"We are a technology-led wealth and asset management team that blends deep local market knowledge with smart, data-driven analysis. Over the years we have guided NRIs, HNIs and retirees on investments, property purchases and long-term wealth plans across South India."}),(0,t.jsx)("p",{children:"We work with complete transparency, no hidden charges, and a steady focus on protecting and growing your capital. Credence Strategies was built to bring real, professional discipline to a property market that badly needed it."}),(0,t.jsx)("p",{children:"We are not a brokerage. We are your dedicated partner, treating every property decision with institutional care, so your money works as hard as you have."})]})]})}),(0,t.jsx)("section",{className:"wsu",id:"why-us",children:(0,t.jsxs)("div",{className:"wsu-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"Why Select Us"}),(0,t.jsx)("h2",{className:"section-h2",children:"The Credence advantage."}),(0,t.jsx)("div",{className:"wsu-grid",children:[{eyebrow:"Research",title:"Smart Investment Desk",desc:"A data-driven desk built around steady 12–24% CAGR style strategies, matched to your risk and your goals."},{eyebrow:"End to End",title:"Full Property Service",desc:"From buying the right property to running it day to day, one team handles the whole journey for you."},{eyebrow:"In Your Pocket",title:"Digital Wealth App",desc:"Track your portfolio, income and real estate holdings in one view, from wherever you are in the world."},{eyebrow:"Always Reachable",title:"Dedicated Relationship Manager",desc:"One trusted person who knows your situation, for every NRI and HNI client, so you are never chasing updates."}].map(e=>(0,t.jsxs)("div",{className:"wsu-card",children:[(0,t.jsx)("p",{className:"wsu-eyebrow-text",children:e.eyebrow}),(0,t.jsx)("h3",{className:"wsu-title",children:e.title}),(0,t.jsx)("p",{className:"wsu-desc",children:e.desc})]},e.title))})]})}),(0,t.jsx)("section",{className:"ai-wealth",children:(0,t.jsxs)("div",{className:"ai-inner",children:[(0,t.jsxs)("div",{className:"ai-visual",children:[(0,t.jsx)("div",{className:"ai-core",children:"🤖"}),(0,t.jsx)("div",{className:"ai-orbit ai-orbit-1",children:(0,t.jsx)("div",{className:"ai-node-point"})}),(0,t.jsx)("div",{className:"ai-orbit ai-orbit-2",children:(0,t.jsx)("div",{className:"ai-node-point"})}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(var(--gold) 1px, transparent 1px)",backgroundSize:"30px 30px"}})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"section-label",children:"Institutional Tech Stack"}),(0,t.jsxs)("h2",{className:"section-h2",children:["An ",(0,t.jsx)("em",{children:"AI-powered"})," wealth experience."]}),(0,t.jsx)("p",{className:"section-sub",children:"Our investment engine reads more than 200 data points across the South Indian property market to find anomalies and high-yield opportunities before they reach the open market."}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-10",children:[{eyebrow:"Foresight",t:"Predictive Analytics",d:"Spotting tomorrow's growth corridors early, with around 85% accuracy on where demand is heading."},{eyebrow:"Protection",t:"Risk Mitigation Engine",d:"Automated legal and financial health checks on every asset, before it ever reaches your portfolio."},{eyebrow:"Clarity",t:"Real-Time Reporting",d:"Direct, daily visibility into how your portfolio is actually performing, with nothing hidden from view."},{eyebrow:"Yield",t:"Yield Optimisation",d:"Dynamic pricing that keeps your rental income working at its best, instead of leaving money on the table."}].map(e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-gold font-semibold uppercase tracking-wider text-[10px] mb-1",children:e.eyebrow}),(0,t.jsx)("p",{className:"text-white font-serif text-lg mb-2 font-medium",children:e.t}),(0,t.jsx)("p",{className:"text-xs text-white/50 leading-relaxed",children:e.d})]},e.t))})]})]})}),(0,t.jsx)("section",{className:"cagr-band",children:(0,t.jsxs)("div",{className:"cagr-band-inner",children:[(0,t.jsx)("p",{className:"section-label",style:{justifyContent:"center",marginBottom:"12px"},children:"Investment Returns"}),(0,t.jsx)("p",{className:"cagr-num",children:"12–24% CAGR"}),(0,t.jsxs)("p",{className:"cagr-text",children:["Partner with us and your capital can be positioned for a targeted annual return of 12–24%, depending on your risk profile and time horizon. Our desk combines deep research, spread-out investments and constant monitoring to keep your portfolio pointed at your goals. ",(0,t.jsx)("strong",{children:"Real client money with us has grown 15.84% to 24.8% a year."})]}),(0,t.jsx)("p",{style:{fontSize:".75rem",color:"rgba(255,255,255,.5)",marginBottom:"28px",fontStyle:"italic"},children:"Indicative projections. Past client results, not a guarantee of future returns."}),(0,t.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-gold",children:"Know Your Potential Return"})}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",children:"Schedule a Wealth Review"})})]})]})}),(0,t.jsx)("section",{className:"dwp",id:"platforms",children:(0,t.jsxs)("div",{className:"dwp-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"Digital Wealth Platforms"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Investing beyond ",(0,t.jsx)("em",{children:"traditional real estate."})]}),(0,t.jsx)("p",{className:"dwp-desc-text",children:"Built for business owners whose money and property should be working much harder than they currently are."}),(0,t.jsxs)("div",{className:"dwp-grid",children:[(0,t.jsxs)("div",{className:"dwp-card",children:[(0,t.jsx)("div",{className:"dwp-image-wrap",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",alt:"Food Industry Investors",loading:"lazy"})}),(0,t.jsxs)("div",{className:"dwp-content",children:[(0,t.jsx)("span",{className:"dwp-tag",children:"Food Industry Investors"}),(0,t.jsx)("h3",{className:"dwp-title",children:"For Food & Hospitality Owners"}),(0,t.jsx)("p",{className:"dwp-desc",children:"We help restaurant groups and food chain owners put surplus cash into structured portfolios, while we manage their real estate cleanly through our app."})]})]}),(0,t.jsxs)("div",{className:"dwp-card",children:[(0,t.jsx)("div",{className:"dwp-image-wrap",children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1545179605-1296651e9d43?w=900&q=80",alt:"Highway & Accommodation",loading:"lazy"})}),(0,t.jsxs)("div",{className:"dwp-content",children:[(0,t.jsx)("span",{className:"dwp-tag",children:"Highway & Accommodation"}),(0,t.jsx)("h3",{className:"dwp-title",children:"For Highway & Stay Operators"}),(0,t.jsx)("p",{className:"dwp-desc",children:"For motels, fuel-station outlets and roadside stays, our app tracks each asset's return, manages tenant contracts, and frees up cash to reinvest."})]})]})]})]})}),(0,t.jsx)("section",{className:"inv-desk",id:"core-services",children:(0,t.jsxs)("div",{className:"inv-inner",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"section-label",style:{justifyContent:"center"},children:"Core Services"}),(0,t.jsxs)("h2",{className:"section-h2",children:["Invest with ",(0,t.jsx)("em",{children:"precision."})]})]}),(0,t.jsxs)("div",{className:"inv-grid",children:[(0,t.jsxs)("div",{className:"inv-card",children:[(0,t.jsx)("h3",{className:"inv-h3",children:"Smart Investment Desk"}),(0,t.jsxs)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:[(0,t.jsx)("li",{children:"Thoughtful portfolio building and risk-based allocation."}),(0,t.jsx)("li",{children:"Scenario testing built around 12–24% CAGR style targets."})]}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",style:{width:"100%"},children:"EXPLORE SERVICE →"})})]}),(0,t.jsxs)("div",{className:"inv-card",style:{borderColor:"var(--gold)",background:"rgba(201,168,76,0.05)"},children:[(0,t.jsx)("h3",{className:"inv-h3",children:"Real Estate Partnership Programs"}),(0,t.jsxs)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:[(0,t.jsx)("li",{children:"From picking the property to joint ventures, co-ownership and management."}),(0,t.jsx)("li",{children:"Income-focused plans for retirees and HNIs."})]}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-gold",style:{width:"100%"},children:"EXPLORE PROGRAMS →"})})]}),(0,t.jsxs)("div",{className:"inv-card",children:[(0,t.jsx)("h3",{className:"inv-h3",children:"Digital App Platform"}),(0,t.jsxs)("ul",{className:"text-left text-white/70 text-sm space-y-3 mb-8 ml-4 list-disc leading-relaxed",children:[(0,t.jsx)("li",{children:"One central view of every investment and property you hold."}),(0,t.jsx)("li",{children:"Live updates and alerts, so you are never left guessing."})]}),(0,t.jsx)("a",{href:"./contact",children:(0,t.jsx)("button",{className:"btn-outline",style:{width:"100%"},children:"SCHEDULE DEMO →"})})]})]})]})}),(0,t.jsx)("section",{className:"testimonials",id:"testimonials",children:(0,t.jsxs)("div",{className:"testimonials-inner",children:[(0,t.jsx)("p",{className:"section-label",children:"Client Stories"}),(0,t.jsxs)("h2",{className:"section-h2",style:{color:"var(--navy)"},children:["The voice of ",(0,t.jsx)("em",{children:"our partners."})]}),(0,t.jsx)("div",{className:"testi-grid",children:c.map(e=>(0,t.jsx)("div",{className:"testi-card",children:(0,t.jsxs)("div",{className:"testi-card-body",children:[(0,t.jsx)("div",{className:"testi-mark",children:'"'}),(0,t.jsx)("p",{className:"testi-text",children:e.text}),(0,t.jsxs)("div",{className:"testi-author",children:[(0,t.jsx)("div",{className:"testi-avatar",children:e.init}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"testi-name",children:e.name}),(0,t.jsxs)("p",{className:"testi-meta",children:[e.meta," - ",e.asset]})]})]})]})},e.name))})]})}),(0,t.jsxs)("section",{className:"cta",id:"cta",children:[(0,t.jsx)("div",{className:"cta-bg"}),(0,t.jsxs)("div",{className:"cta-inner",children:[(0,t.jsx)("p",{className:"cta-eyebrow",children:"BEGIN YOUR WEALTH JOURNEY"}),(0,t.jsxs)("h2",{children:["Ready to make your wealth ",(0,t.jsx)("em",{children:"work harder?"})]}),(0,t.jsx)("p",{className:"cta-sub",children:"Get a personal consultation: a clear view of your projections, the right assets to hold, and a plan built around your goals. No pressure, and no cost to start."}),(0,t.jsxs)("div",{className:"cta-btns",children:[(0,t.jsx)(r.default,{href:"/contact",children:(0,t.jsx)("button",{className:"btn-gold",style:{fontSize:".95rem",padding:"17px 44px"},children:"REQUEST A 1-ON-1 CONSULTATION"})}),(0,t.jsx)("button",{className:"btn-wa",onClick:()=>window.open("https://wa.me/919606400600","_blank"),children:"WHATSAPP US NOW"})]})]})]}),(0,t.jsx)("section",{className:"faq",id:"faq",children:(0,t.jsxs)("div",{className:"faq-inner",children:[(0,t.jsxs)("div",{className:"faq-header",children:[(0,t.jsx)("p",{className:"section-label",style:{color:"#8a6a2a"},children:"Common Questions"}),(0,t.jsxs)("h2",{className:"section-h2",style:{color:"var(--navy)",marginTop:"8px"},children:["Plain answers, ",(0,t.jsx)("em",{children:"no jargon."})]}),(0,t.jsx)("p",{style:{color:"#555",fontSize:"1rem",lineHeight:"1.75",marginTop:"12px",maxWidth:"700px"},children:"The real questions NRI and HNI owners ask us, answered the way we would answer a friend."})]}),(0,t.jsx)("div",{className:"faq-list",style:{marginTop:"48px"},children:p.map((a,r)=>(0,t.jsxs)("div",{className:`faq-item ${e===r?"active":""}`,children:[(0,t.jsxs)("button",{className:"faq-trigger",onClick:()=>h(e===r?null:r),style:{display:"grid",gridTemplateColumns:"80px 1fr",padding:"24px 0",width:"100%",border:"none",background:"transparent",cursor:"pointer",textAlign:"left"},children:[(0,t.jsxs)("span",{className:"faq-num",style:{margin:0,fontSize:"0.85rem",letterSpacing:"0.1em",fontWeight:"600"},children:["Q",String(r+1).padStart(2,"0")]}),(0,t.jsxs)("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,t.jsx)("span",{className:"faq-question",style:{margin:0},children:a.q}),(0,t.jsx)("svg",{className:"faq-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M6 9l6 6 6-6"})})]})]}),(0,t.jsx)("div",{className:"faq-content",style:{paddingLeft:"80px"},children:(0,t.jsx)("p",{className:"faq-answer",dangerouslySetInnerHTML:{__html:a.a}})})]},r))}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:(0,t.jsx)(r.default,{href:"/contact",children:(0,t.jsx)("button",{className:"btn-gold",children:"Talk to Us"})})})]})})]})}e.s(["default",()=>h])}]);