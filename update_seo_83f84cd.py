import re
import os

data = {
    'WebDevelopment.jsx': {
        'title': 'Web Development Company in Pakistan | NEFFTO IT Solution',
        'description': 'NEFFTO is a web development company in Pakistan offering custom website development, full stack and Shopify development in Bahawalpur. Get a free quote.',
        'canonical': 'https://nefftosolution.com/services/web-development',
        'ogTitle': 'Web Development Company in Pakistan | NEFFTO IT Solution',
        'ogDescription': 'NEFFTO is a web development company in Pakistan offering custom website development, full stack and Shopify development in Bahawalpur. Get a free quote.',
        'keywords': 'web development company in Pakistan, web development services in Bahawalpur, custom website development, full stack web development, Shopify custom theme development, responsive website design'
    },
    'AppDevelopment.jsx': {
        'title': 'Mobile App Development Company in Pakistan | NEFFTO',
        'description': 'Android, iOS and cross-platform app development services in Bahawalpur and Pakistan. NEFFTO builds custom mobile apps that users love. Get a free quote.',
        'canonical': 'https://nefftosolution.com/services/app-development',
        'ogTitle': 'Mobile App Development Company in Pakistan | NEFFTO',
        'ogDescription': 'Android, iOS and cross-platform app development services in Bahawalpur and Pakistan. NEFFTO builds custom mobile apps that users love. Get a free quote.',
        'keywords': 'mobile app development company in Pakistan, app development services in Bahawalpur, Android app development, iOS app development, cross-platform app development, custom mobile app development'
    },
    'AIMachineLearning.jsx': {
        'title': 'AI Development Company in Pakistan | AI & ML | NEFFTO',
        'description': 'Custom AI solutions, AI chatbot development, machine learning services and AI business automation from NEFFTO, an AI development company in Pakistan.',
        'canonical': 'https://nefftosolution.com/services/ai-machine-learning',
        'ogTitle': 'AI Development Company in Pakistan | AI & ML | NEFFTO',
        'ogDescription': 'Custom AI solutions, AI chatbot development, machine learning services and AI business automation from NEFFTO, an AI development company in Pakistan.',
        'keywords': 'AI development company in Pakistan, machine learning services, AI chatbot development, custom AI solutions, business automation with AI, AI integration services'
    },
    'GraphicDesigning.jsx': {
        'title': 'Graphic Design Services in Pakistan | Logo & Branding',
        'description': 'Graphic design services in Pakistan: logo design, brand identity, UI/UX and social media post design by NEFFTO in Bahawalpur. Get a free quote today.',
        'canonical': 'https://nefftosolution.com/services/graphic-designing',
        'ogTitle': 'Graphic Design Services in Pakistan | Logo & Branding',
        'ogDescription': 'Graphic design services in Pakistan: logo design, brand identity, UI/UX and social media post design by NEFFTO in Bahawalpur. Get a free quote today.',
        'keywords': 'graphic design services in Pakistan, logo design company in Bahawalpur, brand identity design, UI/UX design services, social media post design, professional graphic designer'
    },
    'DigitalMarketing.jsx': {
        'title': 'Digital Marketing Agency in Pakistan | NEFFTO IT Solution',
        'description': 'Grow leads and sales with NEFFTO, a digital marketing agency in Pakistan offering social media marketing, Google Ads and Facebook ads services.',
        'canonical': 'https://nefftosolution.com/services/digital-marketing',
        'ogTitle': 'Digital Marketing Agency in Pakistan | NEFFTO IT Solution',
        'ogDescription': 'Grow leads and sales with NEFFTO, a digital marketing agency in Pakistan offering social media marketing, Google Ads and Facebook ads services.',
        'keywords': 'digital marketing agency in Pakistan, digital marketing services in Bahawalpur, social media marketing, Google Ads management, Facebook ads services, online marketing for small business'
    },
    'SearchEngineOptimization.jsx': {
        'title': 'SEO Services in Pakistan | SEO Company in Bahawalpur',
        'description': 'Rank higher on Google with NEFFTO\'s SEO services in Pakistan: local SEO, on-page and technical SEO, keyword research and affordable SEO packages.',
        'canonical': 'https://nefftosolution.com/services/seo',
        'ogTitle': 'SEO Services in Pakistan | SEO Company in Bahawalpur',
        'ogDescription': 'Rank higher on Google with NEFFTO\'s SEO services in Pakistan: local SEO, on-page and technical SEO, keyword research and affordable SEO packages.',
        'keywords': 'SEO services in Pakistan, SEO company in Bahawalpur, local SEO services, on-page and technical SEO, affordable SEO packages, keyword research'
    }
}

for filename, props in data.items():
    filepath = os.path.join('src', 'pages', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_seo = f'''      <SEO
        title="{props['title']}"
        description="{props['description']}"
        canonical="{props['canonical']}"
        ogTitle="{props['ogTitle']}"
        ogDescription="{props['ogDescription']}"
        schema={{JSON.stringify([serviceSchema, faqSchema])}}
        keywords="{props['keywords']}"
      />'''
    
    # replace existing <SEO ... />
    content = re.sub(r'<SEO[^>]*\/>', new_seo, content, count=1, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")
