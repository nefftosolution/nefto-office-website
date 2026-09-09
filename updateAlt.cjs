const fs = require('fs');
let content = fs.readFileSync('src/data/serviceData.js', 'utf8');

// 1. Web Development
content = content.replace(
  'slug: "web-development",\n    title: "Web Development",',
  'slug: "web-development",\n    title: "Web Development",\n    imageAlt: "Full stack web development team building a custom website for a Pakistani business",'
);
content = content.replace(
  'slug: "app-development",\n    title: "App Development",',
  'slug: "app-development",\n    title: "App Development",\n    imageAlt: "Custom software and automation tools built by the Neffto Solution team in Bahawalpur",'
);
content = content.replace(
  'slug: "python-ml-ai",\n    title: "AI & Machine Learning",',
  'slug: "python-ml-ai",\n    title: "AI & Machine Learning",\n    imageAlt: "Python machine learning model training on a developer workstation",'
);
content = content.replace(
  'slug: "graphic-design",\n    title: "Graphic Designing",',
  'slug: "graphic-design",\n    title: "Graphic Designing",\n    imageAlt: "Brand identity and UI UX design laid out across desktop and mobile screens",'
);
content = content.replace(
  'slug: "digital-marketing",\n    title: "Digital Marketing",',
  'slug: "digital-marketing",\n    title: "Digital Marketing",\n    imageAlt: "Digital marketing dashboard showing Google Ads and Meta Ads campaign performance",'
);
content = content.replace(
  'slug: "seo",\n    title: "Search Engine Optimization",',
  'slug: "seo",\n    title: "Search Engine Optimization",\n    imageAlt: "SEO analytics dashboard tracking keyword rankings and organic traffic growth",'
);

// Projects
content = content.replace(
  'slug: "fundbox",\n          title: "Fundbox',
  'slug: "fundbox",\n          altText: "Fundbox platform showing lines of credit and term loan options for small businesses",\n          title: "Fundbox'
);
content = content.replace(
  'slug: "offdeal",\n          title: "OffDeal',
  'slug: "offdeal",\n          altText: "OffDeal AI-powered M&A platform interface for selling a small business",\n          title: "OffDeal'
);
content = content.replace(
  'slug: "human-interest",\n          title:\n            "Human Interest',
  'slug: "human-interest",\n          altText: "Human Interest dashboard for managing 401(k) and 403(b) retirement plans",\n          title:\n            "Human Interest'
);
content = content.replace(
  'slug: "weave",\n          title:\n            "Weave',
  'slug: "weave",\n          altText: "Weave platform combining phone, texting, payments and scheduling for healthcare practices",\n          title:\n            "Weave'
);
content = content.replace(
  'slug: "firmware-security-platform",\n          title: "Firmware & Supply Chain Security Platform",',
  'slug: "firmware-security-platform",\n          altText: "Firmware security platform detecting device vulnerabilities across a hardware supply chain",\n          title: "Firmware & Supply Chain Security Platform",'
);
content = content.replace(
  'slug: "ai-finance-audit-platform",\n          title: "AI Finance Audit & Spend Management Platform",',
  'slug: "ai-finance-audit-platform",\n          altText: "AI finance audit platform automating invoice review and expense compliance checks",\n          title: "AI Finance Audit & Spend Management Platform",'
);

// We also need to add altText for other projects to make them keyword rich and unique
content = content.replace(
  'slug: "ai-supply-chain-optimizer",\n          title: "AI Supply Chain Optimizer",',
  'slug: "ai-supply-chain-optimizer",\n          altText: "AI Supply Chain Optimizer predicting inventory demand using machine learning",\n          title: "AI Supply Chain Optimizer",'
);
content = content.replace(
  'slug: "healthcare-nlp-diagnostics",\n          title: "Healthcare NLP Diagnostics Tool",',
  'slug: "healthcare-nlp-diagnostics",\n          altText: "Healthcare NLP tool analyzing medical records using natural language processing",\n          title: "Healthcare NLP Diagnostics Tool",'
);
content = content.replace(
  'slug: "tech-startup-brand-identity",\n          title: "FinTech Startup Brand Identity",',
  'slug: "tech-startup-brand-identity",\n          altText: "Modern FinTech startup brand identity with logo and UI toolkit",\n          title: "FinTech Startup Brand Identity",'
);
content = content.replace(
  'slug: "ecommerce-ui-ux-revamp",\n          title: "E-commerce Mobile App UI/UX",',
  'slug: "ecommerce-ui-ux-revamp",\n          altText: "Sleek e-commerce mobile application interface with intuitive user experience",\n          title: "E-commerce Mobile App UI/UX",'
);
content = content.replace(
  'slug: "b2b-saas-lead-gen",\n          title: "B2B SaaS Lead Generation Campaign",',
  'slug: "b2b-saas-lead-gen",\n          altText: "B2B SaaS lead generation campaign strategy showing LinkedIn and Google Ads results",\n          title: "B2B SaaS Lead Generation Campaign",'
);
content = content.replace(
  'slug: "ecommerce-revenue-scaling",\n          title: "E-Commerce Revenue Scaling",',
  'slug: "ecommerce-revenue-scaling",\n          altText: "E-commerce scaling results from targeted Meta Ads and Google Shopping campaigns",\n          title: "E-Commerce Revenue Scaling",'
);
content = content.replace(
  'slug: "national-ecommerce-seo",\n          title: "National E-Commerce SEO Dominance",',
  'slug: "national-ecommerce-seo",\n          altText: "E-commerce SEO growth chart showing organic traffic improvements",\n          title: "National E-Commerce SEO Dominance",'
);
content = content.replace(
  'slug: "local-service-seo-turnaround",\n          title: "Local Service SEO Turnaround",',
  'slug: "local-service-seo-turnaround",\n          altText: "Local SEO search rankings showing business on the first page of Google",\n          title: "Local Service SEO Turnaround",'
);


fs.writeFileSync('src/data/serviceData.js', content);
console.log('Done!');
