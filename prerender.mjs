import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

const indexHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error("index.html not found in dist. Run build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

const routes = [
  { path: '/', title: 'NEFFTO | Digital Solutions & Technology', h1: 'NEFFTO | Digital Solutions & Technology' },
  { path: '/about', title: 'About Neffto Solution | Software Company in Pakistan', h1: 'About Neffto Solution Best Software House in Bahawalpur' },
  { path: '/contact', title: 'Contact Us | NEFFTO', h1: 'Contact Us' },
  { path: '/services', title: 'Software Development Services | Neffto Solution', h1: 'Software Development Services' },
  { path: '/services/seo', title: 'SEO Services in Pakistan | SEO Company in Bahawalpur', h1: 'SEO Services That Help You Rank Higher on Google, Anywhere in the World' },
  { path: '/services/web-development', title: 'Web Development Company in Pakistan | NEFFTO IT Solution', h1: 'Web Development Company Building Websites That Grow Businesses Worldwide' },
  { path: '/services/app-development', title: 'Mobile App Development Company in Pakistan | NEFFTO', h1: 'Mobile App Development Company for Android and iOS Apps Worldwide' },
  { path: '/services/python-ml-ai', title: 'AI Development Company in Pakistan | AI & ML | NEFFTO', h1: 'AI Development Company Delivering Smart AI and Machine Learning Solutions Worldwide' },
  { path: '/services/ai-machine-learning', title: 'AI Development Company in Pakistan | AI & ML | NEFFTO', h1: 'AI Development Company Delivering Smart AI and Machine Learning Solutions Worldwide' },
  { path: '/services/graphic-design', title: 'Graphic Design Services in Pakistan | Logo & Branding', h1: 'Graphic Design Services for Creative, Recognisable Brands Worldwide' },
  { path: '/services/graphic-designing', title: 'Graphic Design Services in Pakistan | Logo & Branding', h1: 'Graphic Design Services for Creative, Recognisable Brands Worldwide' },
  { path: '/services/digital-marketing', title: 'Digital Marketing Agency in Pakistan | NEFFTO IT Solution', h1: 'Digital Marketing Agency Helping Brands Grow Leads, Sales and Reach Worldwide' },
  { path: '/casestudies', title: 'Case Studies | NEFFTO', h1: 'Our Work' },
  { path: '/blogs', title: 'Tech, AI & Web Development Blog | Neffto Solution', h1: 'Explore Our Tech Journal' },
  { path: '/404.html', title: 'Page Not Found | NEFFTO', h1: '404 - Page Not Found' }
];

for (const route of routes) {
  let html = template;
  
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  if (route.path.startsWith('/services')) {
    const canonicalUrl = `https://nefftosolution.com${route.path}`;
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }
  
  html = html.replace('<div id="root"></div>', `<div id="root"><h1 style="display:none;">${route.h1}</h1></div>`);
  
  let targetPath;
  if (route.path === '/404.html') {
    targetPath = path.join(distDir, '404.html');
  } else if (route.path === '/') {
    targetPath = path.join(distDir, 'index.html');
  } else if (route.path === '/services') {
    targetPath = path.join(distDir, 'services', 'index.html');
  } else {
    const filePath = route.path.slice(1) + '.html';
    targetPath = path.join(distDir, filePath);
  }
  
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, html);
}
console.log("SEO injection complete.");
