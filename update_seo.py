import re
import os

data = {
    'WebDevelopment.jsx': {
        'title': 'Web Development Services in Bahawalpur | Neffto Solution',
        'description': 'Neffto Solution provides custom web development in Bahawalpur, including business websites, e-commerce stores and web applications built for performance, usability and search visibility.',
        'canonical': 'https://nefftosolution.com/services/web-development',
        'ogTitle': 'Web Development Services in Bahawalpur | Neffto Solution',
        'ogDescription': 'Custom websites, e-commerce stores and web applications designed and developed by Neffto Solution.'
    },
    'AppDevelopment.jsx': {
        'title': 'Mobile App Development Services | Neffto Solution',
        'description': 'Top-tier mobile app development company creating custom iOS and Android applications. We turn your ideas into intuitive, high-performance mobile experiences.',
        'canonical': 'https://nefftosolution.com/services/app-development',
        'ogTitle': 'Mobile App Development Services | Neffto Solution',
        'ogDescription': 'Top-tier mobile app development company creating custom iOS and Android applications. We turn your ideas into intuitive, high-performance mobile experiences.'
    },
    'AIMachineLearning.jsx': {
        'title': 'AI & Machine Learning Solutions | Neffto Solution',
        'description': 'Python, ML, and AI solutions from one of the best software houses in Pakistan. Automate processes and gain actionable insights with predictive modeling.',
        'canonical': 'https://nefftosolution.com/services/python-ml-ai',
        'ogTitle': 'AI & Machine Learning Solutions | Neffto Solution',
        'ogDescription': 'Python, ML, and AI solutions from one of the best software houses in Pakistan. Automate processes and gain actionable insights with predictive modeling.'
    },
    'GraphicDesigning.jsx': {
        'title': 'Professional Graphic Designing | Neffto Solution',
        'description': 'Professional graphic designing services in Bahawalpur. Logos, branding, UI/UX, and marketing materials that make your brand stand out in a crowded market.',
        'canonical': 'https://nefftosolution.com/services/graphic-design',
        'ogTitle': 'Professional Graphic Designing | Neffto Solution',
        'ogDescription': 'Professional graphic designing services in Bahawalpur. Logos, branding, UI/UX, and marketing materials that make your brand stand out in a crowded market.'
    },
    'DigitalMarketing.jsx': {
        'title': 'Result-Driven Digital Marketing | Neffto Solution',
        'description': 'Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM. Maximize your ROI and grow your online presence.',
        'canonical': 'https://nefftosolution.com/services/digital-marketing',
        'ogTitle': 'Result-Driven Digital Marketing | Neffto Solution',
        'ogDescription': 'Result-driven digital marketing agency in Bahawalpur specializing in Meta Ads, Google Ads, and SMM. Maximize your ROI and grow your online presence.'
    },
    'SearchEngineOptimization.jsx': {
        'title': 'Advanced Search Engine Optimization | Neffto Solution',
        'description': 'SEO services in Bahawalpur. On page SEO, technical audits, and link building that help you rank higher on Google and drive organic traffic.',
        'canonical': 'https://nefftosolution.com/services/seo',
        'ogTitle': 'Advanced Search Engine Optimization | Neffto Solution',
        'ogDescription': 'SEO services in Bahawalpur. On page SEO, technical audits, and link building that help you rank higher on Google and drive organic traffic.'
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
      />'''
    
    # replace existing <SEO ... />
    content = re.sub(r'<SEO[^>]*\/>', new_seo, content, count=1, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")
