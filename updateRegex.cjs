const fs = require('fs');
let content = fs.readFileSync('src/data/serviceData.js', 'utf8');

content = content.replace(/slug:\s*"web-development",\s*title:\s*"Web Development",/, 'slug: "web-development",\n    title: "Web Development",\n    imageAlt: "Full stack web development team building a custom website for a Pakistani business",');
content = content.replace(/slug:\s*"app-development",\s*title:\s*"App Development",/, 'slug: "app-development",\n    title: "App Development",\n    imageAlt: "Custom software and automation tools built by the Neffto Solution team in Bahawalpur",');
content = content.replace(/slug:\s*"python-ml-ai",\s*title:\s*"AI & Machine Learning",/, 'slug: "python-ml-ai",\n    title: "AI & Machine Learning",\n    imageAlt: "Python machine learning model training on a developer workstation",');
content = content.replace(/slug:\s*"graphic-design",\s*title:\s*"Graphic Designing",/, 'slug: "graphic-design",\n    title: "Graphic Designing",\n    imageAlt: "Brand identity and UI UX design laid out across desktop and mobile screens",');
content = content.replace(/slug:\s*"digital-marketing",\s*title:\s*"Digital Marketing",/, 'slug: "digital-marketing",\n    title: "Digital Marketing",\n    imageAlt: "Digital marketing dashboard showing Google Ads and Meta Ads campaign performance",');
content = content.replace(/slug:\s*"seo",\s*title:\s*"Search Engine Optimization",/, 'slug: "seo",\n    title: "Search Engine Optimization",\n    imageAlt: "SEO analytics dashboard tracking keyword rankings and organic traffic growth",');

content = content.replace(/slug:\s*"fundbox",\s*title:\s*"Fundbox/, 'slug: "fundbox",\n          altText: "Fundbox platform showing lines of credit and term loan options for small businesses",\n          title: "Fundbox');
content = content.replace(/slug:\s*"offdeal",\s*title:\s*"OffDeal/, 'slug: "offdeal",\n          altText: "OffDeal AI-powered M&A platform interface for selling a small business",\n          title: "OffDeal');
content = content.replace(/slug:\s*"human-interest",\s*title:\s*"Human Interest/, 'slug: "human-interest",\n          altText: "Human Interest dashboard for managing 401(k) and 403(b) retirement plans",\n          title: "Human Interest');
content = content.replace(/slug:\s*"weave",\s*title:\s*"Weave/, 'slug: "weave",\n          altText: "Weave platform combining phone, texting, payments and scheduling for healthcare practices",\n          title: "Weave');

content = content.replace(/slug:\s*"firmware-security-platform",\s*title:\s*"Firmware & Supply Chain Security Platform",/, 'slug: "firmware-security-platform",\n          altText: "Firmware security platform detecting device vulnerabilities across a hardware supply chain",\n          title: "Firmware & Supply Chain Security Platform",');
content = content.replace(/slug:\s*"ai-finance-audit-platform",\s*title:\s*"AI Finance Audit & Spend Management Platform",/, 'slug: "ai-finance-audit-platform",\n          altText: "AI finance audit platform automating invoice review and expense compliance checks",\n          title: "AI Finance Audit & Spend Management Platform",');

content = content.replace(/slug:\s*"ai-supply-chain-optimizer",\s*title:\s*"AI Supply Chain Optimizer",/, 'slug: "ai-supply-chain-optimizer",\n          altText: "AI Supply Chain Optimizer predicting inventory demand using machine learning",\n          title: "AI Supply Chain Optimizer",');
content = content.replace(/slug:\s*"healthcare-nlp-diagnostics",\s*title:\s*"Healthcare NLP Diagnostics Tool",/, 'slug: "healthcare-nlp-diagnostics",\n          altText: "Healthcare NLP tool analyzing medical records using natural language processing",\n          title: "Healthcare NLP Diagnostics Tool",');

content = content.replace(/slug:\s*"tech-startup-brand-identity",\s*title:\s*"FinTech Startup Brand Identity",/, 'slug: "tech-startup-brand-identity",\n          altText: "Modern FinTech startup brand identity with logo and UI toolkit",\n          title: "FinTech Startup Brand Identity",');
content = content.replace(/slug:\s*"ecommerce-ui-ux-revamp",\s*title:\s*"E-commerce Mobile App UI\/UX",/, 'slug: "ecommerce-ui-ux-revamp",\n          altText: "Sleek e-commerce mobile application interface with intuitive user experience",\n          title: "E-commerce Mobile App UI/UX",');

content = content.replace(/slug:\s*"b2b-saas-lead-gen",\s*title:\s*"B2B SaaS Lead Generation Campaign",/, 'slug: "b2b-saas-lead-gen",\n          altText: "B2B SaaS lead generation campaign strategy showing LinkedIn and Google Ads results",\n          title: "B2B SaaS Lead Generation Campaign",');
content = content.replace(/slug:\s*"ecommerce-revenue-scaling",\s*title:\s*"E-Commerce Revenue Scaling",/, 'slug: "ecommerce-revenue-scaling",\n          altText: "E-commerce scaling results from targeted Meta Ads and Google Shopping campaigns",\n          title: "E-Commerce Revenue Scaling",');

content = content.replace(/slug:\s*"national-ecommerce-seo",\s*title:\s*"National E-Commerce SEO Dominance",/, 'slug: "national-ecommerce-seo",\n          altText: "E-commerce SEO growth chart showing organic traffic improvements",\n          title: "National E-Commerce SEO Dominance",');
content = content.replace(/slug:\s*"local-service-seo-turnaround",\s*title:\s*"Local Service SEO Turnaround",/, 'slug: "local-service-seo-turnaround",\n          altText: "Local SEO search rankings showing business on the first page of Google",\n          title: "Local Service SEO Turnaround",');

fs.writeFileSync('src/data/serviceData.js', content);
console.log('Regex replacements done!');
