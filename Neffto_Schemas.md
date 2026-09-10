# Neffto Solution - SEO Schema Markup Data
*Generated for all pages. Place inside `<head>` or before `</body>` as `<script type="application/ld+json">` tags.*

---

## 1. Global / Home Page Schema
*This schema should ideally go on the Home page. It defines your organization and provides a Sitelinks Search Box.*

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nefftosolution.com/#organization",
      "name": "Neffto Solution",
      "url": "https://nefftosolution.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nefftosolution.com/logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/nefftosolution",
        "https://www.linkedin.com/company/neffto-solution",
        "https://www.instagram.com/nefftosolution"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-300-0000000",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": "en"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nefftosolution.com/#website",
      "url": "https://nefftosolution.com/",
      "name": "Neffto Solution",
      "publisher": {
        "@id": "https://nefftosolution.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://nefftosolution.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
</script>
```

---

## 2. Local Business Schema (For Contact Page)
*Helps with local SEO in Bahawalpur, Pakistan.*

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Neffto Solution",
  "image": "https://nefftosolution.com/logo.png",
  "url": "https://nefftosolution.com/contact",
  "telephone": "+92-300-0000000",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Neffto Solution Office",
    "addressLocality": "Bahawalpur",
    "addressRegion": "Punjab",
    "postalCode": "63100",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.395721,
    "longitude": 71.683333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
}
</script>
```

---

## 3. About Us Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nefftosolution.com/about-us"
  },
  "name": "About Neffto Solution",
  "description": "Learn more about Neffto Solution, our mission, vision, and the expert team driving digital transformation.",
  "publisher": {
    "@id": "https://nefftosolution.com/#organization"
  }
}
</script>
```

---

## 4. Main Services Page Schema (Collection Page)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Services - Neffto Solution",
  "description": "Explore our comprehensive suite of tech and digital services including Web, App, AI, Design, Marketing, and SEO.",
  "url": "https://nefftosolution.com/services",
  "hasPart": [
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/web-development" },
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/app-development" },
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/python-ml-ai" },
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/graphic-design" },
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/digital-marketing" },
    { "@type": "WebPage", "url": "https://nefftosolution.com/services/seo" }
  ]
}
</script>
```

---

## 5. Web Development Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Custom web development services. We build fast, secure, and scalable websites, SaaS applications, and e-commerce platforms.",
  "url": "https://nefftosolution.com/services/web-development",
  "offers": {
    "@type": "Offer",
    "url": "https://nefftosolution.com/contact",
    "priceCurrency": "USD",
    "price": "Custom",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

---

## 6. App Development Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile App Development",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Top-tier mobile app development for iOS and Android platforms using React Native, Flutter, and native technologies.",
  "url": "https://nefftosolution.com/services/app-development"
}
</script>
```

---

## 7. AI & Machine Learning Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI & Machine Learning",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Advanced Artificial Intelligence and Machine Learning solutions using Python to automate and scale your business.",
  "url": "https://nefftosolution.com/services/python-ml-ai"
}
</script>
```

---

## 8. Graphic Designing Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Graphic Design",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Professional graphic designing, UI/UX design, branding, and illustration services.",
  "url": "https://nefftosolution.com/services/graphic-design"
}
</script>
```

---

## 9. Digital Marketing Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Result-oriented digital marketing, social media campaigns, and lead generation services.",
  "url": "https://nefftosolution.com/services/digital-marketing"
}
</script>
```

---

## 10. SEO Service Page Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Search Engine Optimization (SEO)",
  "provider": {
    "@id": "https://nefftosolution.com/#organization"
  },
  "areaServed": "Worldwide",
  "description": "Advanced SEO services to rank your website higher on Google through technical, on-page, and off-page optimization.",
  "url": "https://nefftosolution.com/services/seo"
}
</script>
```

---

## 11. FAQ Page Schema (Add to pages that have FAQ sections)
*Example of FAQ schema to get rich snippets in Google.*

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Neffto Solution provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide Web Development, App Development, AI & Machine Learning, Graphic Designing, Digital Marketing, and SEO services."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Neffto Solution located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our primary office is located in Bahawalpur, Pakistan."
      }
    }
  ]
}
</script>
```
