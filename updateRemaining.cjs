const fs = require('fs');
let content = fs.readFileSync('src/data/serviceData.js', 'utf8');

const texts = {
  // Python ML AI projects
  'predictive-analytics': 'Predictive analytics machine learning model forecasting business trends and revenue',
  'chatbot-development': 'Intelligent AI chatbot handling customer support queries automatically via natural language',
  'image-recognition': 'Computer vision model identifying objects in an automated quality control system',
  // Graphic Design projects
  'logo-design': 'Professional corporate logo design concepts for a modern tech brand identity',
  'social-media-graphics': 'Engaging social media graphics and banners optimized for Instagram and Facebook engagement',
  'brand-identity': 'Complete brand identity package including typography, color palette, and business cards',
  // Digital Marketing
  'seo-services': 'Comprehensive SEO campaign strategy showing local and global search ranking improvements',
  'meta-ads': 'Meta Facebook and Instagram ad campaign dashboard with high conversion rate metrics',
  'google-ads': 'Google Ads PPC campaign analytics showing low CPC and high ROI results',
  // SEO
  'seo': 'SEO analytics dashboard tracking keyword rankings and organic traffic growth',
  'technical-seo-audit': 'In-depth technical SEO audit report highlighting site speed and indexability fixes',
  'on-page-seo-optimization': 'On-page SEO optimization checklist improving meta tags, headers, and keyword density',
  'local-seo-bahawalpur': 'Local SEO Google My Business listing optimization for a Bahawalpur business'
};

for (const [slug, altText] of Object.entries(texts)) {
  // Regex looks for `slug: "some-slug",`
  const regex = new RegExp(`(slug:\\s*"${slug}",)`, 'g');
  const replacement = slug === 'seo' ? `$1\n    imageAlt: "${altText}",` : `$1\n          altText: "${altText}",`;
  content = content.replace(regex, replacement);
}

fs.writeFileSync('src/data/serviceData.js', content);
console.log('Update completed');
