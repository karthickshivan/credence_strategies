import sys

file_path = 'c:/Users/Prabhu/Downloads/credence_new_changes/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Meta Tags
content = content.replace(
    '<title>Credence Strategies | South India&#x27;s Premier Real Estate Asset Management</title>',
    '<title>NRI Property &amp; Wealth Management in South India | Credence Strategies</title>'
)

content = content.replace(
    '<meta name=\"description\" content=\"South India&#x27;s most trusted real estate asset management firm, dedicated to maximizing returns for NRI and HNI clients through data-driven strategies. With 22 years of market leadership and 4,000+ satisfied clients, we deliver proven 12–24% CAGR* (Compound Annual Growth Rate) growth for your property portfolio.\"/>',
    '<meta name=\"description\" content=\"Zero brokerage property and wealth management for NRIs and HNIs across South India. 22+ years, 4,000+ clients, 12-24% CAGR target. Real results since 2004.\"/>'
)

# Add Open Graph and Canonical if not exist
og_tags = '<meta property=\"og:title\" content=\"Credence Strategies — NRI Property &amp; Wealth Management, South India\"/><meta property=\"og:description\" content=\"Zero brokerage. Real-time reporting. 12-24% CAGR target. Trusted by NRI and HNI families in 5 countries since 2004.\"/><link rel=\"canonical\" href=\"https://www.thecredenc.com/\"/>'
if og_tags not in content:
    content = content.replace('<head>', '<head>' + og_tags)

# 2. H1 & Hero Copy
content = content.replace(
    '<h1 class=\"hero-h1 fu d1\">Smart Wealth,<br/><em>Built for Long Term</em><br/>Growth.</h1>',
    '<h1 class=\"hero-h1 fu d1\">Your India Is in <em>Good Hands</em> Now.</h1>'
)

content = content.replace(
    '<p class=\"hero-sub fu d2\">Personalized investment and real estate solutions for <strong>high net worth individuals (HNIs)</strong>, <strong>NRIs</strong>, and families.<br/><span class=\"text-[10px] mt-2 block opacity-60\">*Indicative projections. Not a guarantee of returns.</span></p>',
    '<p class=\"hero-sub fu d2\">Personalised property and wealth solutions for NRIs, HNIs and families with assets in South India. We study, manage and grow what you own, with no middleman taking a cut.<br/><span class=\"text-[10px] mt-2 block opacity-60\">Real client money with us has grown 15.84% to 24.8% a year. (Past client results. Not a promise of future returns.)</span></p>'
)

content = content.replace(
    '<button class=\"btn-gold\">Request a 1-on-1 Wealth Consultation</button>',
    '<button class=\"btn-gold\">Request a 1-on-1 Consultation</button>'
)

content = content.replace(
    '<button class=\"btn-outline\">Schedule a Demo of Our Investment App</button>',
    '<button class=\"btn-outline\">See the Investment App</button>'
)

# 3. Hero Video
video_html = '<div class=\"hero-bg\" style=\"background: linear-gradient(rgba(11, 31, 58, 0.88), rgba(11, 31, 58, 0.94));\"><video src=\"images/hero_video.mp4\" autoplay muted loop playsinline style=\"width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; z-index: -1;\"></video></div>'
content = content.replace('<div class=\"hero-bg\"></div>', video_html)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Update successful.')
