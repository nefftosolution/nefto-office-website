import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "dist");
const indexHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexHtmlPath)) {
  console.error("index.html not found in dist. Run build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, "utf-8");

const routes = [
  // ==========================================
  // MAIN PAGES
  // ==========================================

  {
    path: "/",
    title: "NEFFTO | Digital Solutions & Technology",
    h1: "NEFFTO | Digital Solutions & Technology",
  },

  {
    path: "/about",
    title: "About Neffto Solution | Software Company in Pakistan",
    h1: "About Neffto Solution Best Software House in Bahawalpur",
  },

  {
    path: "/team",
    title: "Meet Our Software Development Team | Neffto Solution",
    h1: "Meet the Team Behind Neffto Solution",
  },

  {
    path: "/contact",
    title: "Contact Us | NEFFTO",
    h1: "Contact Us",
  },

  // ==========================================
  // SERVICES
  // ==========================================

  {
    path: "/services",
    title: "Software Development Services | Neffto Solution",
    h1: "Software Development Services",
  },

  {
    path: "/services/seo",
    title: "SEO Services in Pakistan | SEO Company in Bahawalpur",
    h1: "SEO Services That Help You Rank Higher on Google, Anywhere in the World",
  },

  {
    path: "/services/web-development",
    title: "Web Development Company in Pakistan | NEFFTO IT Solution",
    h1: "Web Development Company Building Websites That Grow Businesses Worldwide",
  },

  {
    path: "/services/app-development",
    title: "Mobile App Development Company in Pakistan | NEFFTO",
    h1: "Mobile App Development Company for Android and iOS Apps Worldwide",
  },

  {
    path: "/services/python-ml-ai",
    title: "AI Development Company in Pakistan | AI & ML | NEFFTO",
    h1: "AI Development Company Delivering Smart AI and Machine Learning Solutions Worldwide",
  },

  {
    path: "/services/graphic-design",
    title: "Graphic Design Services in Pakistan | Logo & Branding",
    h1: "Graphic Design Services for Creative, Recognisable Brands Worldwide",
  },

  {
    path: "/services/digital-marketing",
    title: "Digital Marketing Agency in Pakistan | NEFFTO IT Solution",
    h1: "Digital Marketing Agency Helping Brands Grow Leads, Sales and Reach Worldwide",
  },

  // ==========================================
  // BLOG
  // ==========================================

  {
    path: "/blogs",
    title: "Tech, AI & Web Development Blog | Neffto Solution",
    h1: "Explore Our Tech Journal",
  },

  // ==========================================
  // LEGAL / POLICY PAGES
  // ==========================================

  {
    path: "/disclaimer",
    title: "Disclaimer | Neffto Solution",
    h1: "Disclaimer",
  },

  {
    path: "/privacy-policy",
    title: "Privacy Policy | Neffto Solution",
    h1: "Privacy Policy",
  },

  {
    path: "/cookies-policy",
    title: "Cookies Policy | Neffto Solution",
    h1: "Cookies Policy",
  },

  {
    path: "/terms-and-conditions",
    title: "Terms and Conditions | Neffto Solution",
    h1: "Terms and Conditions",
  },

  {
    path: "/refund-and-cancellation-policy",
    title: "Refund and Cancellation Policy | Neffto Solution",
    h1: "Refund and Cancellation Policy",
  },

  // ==========================================
  // 404
  // ==========================================

  {
    path: "/404.html",
    title: "Page Not Found | NEFFTO",
    h1: "404 - Page Not Found",
  },
];

for (const route of routes) {
  let html = template;

  // ==========================================
  // TITLE
  // ==========================================

  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // ==========================================
  // CANONICAL
  // ==========================================

  const canonicalPath =
    route.path === "/" ? "" : route.path;

  const canonicalUrl = `https://nefftosolution.com${canonicalPath}`;

  // Remove existing canonical
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
    ""
  );

  // Add canonical
  html = html.replace(
    "</head>",
    `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`
  );

  // ==========================================
  // STATIC H1
  // ==========================================

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><h1 style="display:none;">${route.h1}</h1></div>`
  );

  // ==========================================
  // TARGET FILE
  // ==========================================

  let targetPath;

  if (route.path === "/404.html") {
    targetPath = path.join(distDir, "404.html");
  } else if (route.path === "/") {
    targetPath = path.join(distDir, "index.html");
  } else if (route.path === "/services") {
    // /services must use folder index
    targetPath = path.join(distDir, "services", "index.html");
  } else {
    const filePath = route.path.slice(1) + ".html";
    targetPath = path.join(distDir, filePath);
  }

  // Create directory
  fs.mkdirSync(path.dirname(targetPath), {
    recursive: true,
  });

  // Write HTML
  fs.writeFileSync(targetPath, html, "utf-8");

  console.log(`Generated: ${targetPath}`);
}

console.log("======================================");
console.log("SEO HTML generation complete.");
console.log("======================================");