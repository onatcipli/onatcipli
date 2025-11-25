# Project Requirements Document
## Mobile Developer Portfolio Website

**Version:** 1.0
**Date:** November 25, 2025
**Project Name:** AppForge Portfolio

---

## 1. Executive Summary

A modern, futuristic, and highly customizable portfolio website designed specifically for mobile app developers. The website dynamically showcases iOS/Android applications by fetching app data from the Apple App Store RSS feed, displays professional experience, testimonials, and personal branding—all driven by a simple JSON configuration file for easy replication and deployment.

---

## 2. Project Goals

1. **Showcase Excellence**: Create a visually stunning portfolio that highlights mobile development expertise
2. **Dynamic App Display**: Automatically fetch and display app information from Apple App Store
3. **Easy Customization**: JSON-driven content for quick personalization and multi-user deployment
4. **Performance First**: Lightning-fast static site optimized for all devices
5. **Future-Ready Design**: Modern, futuristic aesthetic with smooth animations

---

## 3. Target Audience

- Mobile App Developers (iOS/Android)
- Freelance developers seeking client work
- Job seekers in mobile development
- Agencies showcasing their app portfolio

---

## 4. Technical Stack

### 4.1 Recommended Stack

| Technology | Purpose | Reasoning |
|------------|---------|-----------|
| **Next.js 14+** | Framework | Static export, React ecosystem, excellent DX |
| **TypeScript** | Language | Type safety, better maintainability |
| **Tailwind CSS** | Styling | Rapid development, consistent design system |
| **Framer Motion** | Animations | Declarative, performant animations |
| **GSAP** | Advanced Animations | Complex scroll-based animations |
| **Three.js / React Three Fiber** | 3D Elements | Futuristic visual effects (optional) |

### 4.2 Deployment Options

| Platform | Pros | Cons |
|----------|------|------|
| **GitHub Pages** | Free, simple CI/CD | Limited to static |
| **Vercel** | Free tier, automatic deploys | Minor vendor lock-in |
| **Firebase Hosting** | Fast CDN, free tier | Requires Firebase setup |
| **Netlify** | Easy setup, free tier | Similar to Vercel |

**Recommendation**: Vercel or GitHub Pages for simplicity

### 4.3 Build Output

- Static HTML/CSS/JS export
- No server-side requirements
- CDN-ready assets

---

## 5. Features & Sections

### 5.1 Hero Section
**Priority: High**

- Full-screen immersive landing
- Animated name/title reveal
- Dynamic particle/mesh gradient background
- Floating 3D device mockups showing apps
- Call-to-action buttons (Contact, View Work)
- Subtle scroll indicator animation

**Design Notes:**
- Dark theme with neon accent colors (cyan, purple, pink gradients)
- Glassmorphism cards
- Smooth parallax scrolling

### 5.2 About Me Section
**Priority: High**

- Professional photo/avatar with animated border
- Bio text with typewriter or fade-in effect
- Key statistics (Years of Experience, Apps Published, Downloads, etc.)
- Animated counter numbers
- Tech stack icons with hover effects
- Download CV button

**Data Required (JSON):**
```json
{
  "name": "string",
  "title": "string",
  "avatar": "string (URL)",
  "bio": "string",
  "location": "string",
  "email": "string",
  "resumeUrl": "string",
  "stats": [
    { "label": "Years Experience", "value": 8 },
    { "label": "Apps Published", "value": 25 },
    { "label": "Downloads", "value": "10M+" }
  ],
  "techStack": ["Swift", "Kotlin", "Flutter", "React Native"]
}
```

### 5.3 App Portfolio Section
**Priority: Critical**

- Grid/Masonry layout of app cards
- Automatic data fetch from Apple App Store RSS/Lookup API
- App card includes:
  - App icon (with subtle glow effect)
  - App name
  - Rating stars
  - Category badge
  - Price/Free tag
  - Platform indicator (iOS/Android)
  - Brief description
  - App Store link button
- Filter by category/platform
- Smooth card hover animations (lift, glow, scale)
- Modal/detail view on click with:
  - Screenshots carousel
  - Full description
  - Version history
  - Technologies used (from JSON override)

**Apple App Store Integration:**
- Use iTunes Search API: `https://itunes.apple.com/lookup?id={APP_ID}`
- Fallback to manual JSON data if API fails
- Cache results for performance

**Data Required (JSON):**
```json
{
  "apps": [
    {
      "appId": "123456789",
      "platform": "ios",
      "featured": true,
      "technologies": ["Swift", "SwiftUI", "Core Data"],
      "role": "Lead Developer",
      "customDescription": "Optional override"
    }
  ]
}
```

### 5.4 Experience/Work History Section
**Priority: High**

- Animated vertical timeline
- Company logos
- Role and duration
- Key achievements
- Technologies used
- Expand/collapse for details
- Smooth entrance animations on scroll

**Data Required (JSON):**
```json
{
  "experience": [
    {
      "company": "string",
      "logo": "string (URL)",
      "role": "string",
      "duration": "2020 - Present",
      "location": "string",
      "description": "string",
      "achievements": ["string"],
      "technologies": ["string"]
    }
  ]
}
```

### 5.5 Testimonials/Recommendations Section
**Priority: Medium**

- Carousel/slider of testimonials
- Quote styling with large quotation marks
- Recommender photo, name, title, company
- LinkedIn profile link
- Auto-play with pause on hover
- Dot/arrow navigation

**Data Required (JSON):**
```json
{
  "testimonials": [
    {
      "quote": "string",
      "author": "string",
      "title": "string",
      "company": "string",
      "avatar": "string (URL)",
      "linkedIn": "string (URL)"
    }
  ]
}
```

### 5.6 Skills & Expertise Section
**Priority: Medium**

- Visual skill bars or radar chart
- Categorized skills (Languages, Frameworks, Tools, Soft Skills)
- Animated progress indicators
- Hover tooltips with experience details

**Data Required (JSON):**
```json
{
  "skills": {
    "languages": [
      { "name": "Swift", "level": 95, "years": 6 }
    ],
    "frameworks": [...],
    "tools": [...],
    "softSkills": [...]
  }
}
```

### 5.7 Blog/Articles Section (Optional)
**Priority: Low**

- Featured articles cards
- Integration with Medium/Dev.to RSS or manual entries
- Read time estimate
- Category tags

### 5.8 Contact Section
**Priority: High**

- Contact form (using Formspree, Web3Forms, or similar)
- Social media links with animated icons
- Email copy-to-clipboard
- Optional: Calendar booking integration (Calendly)
- Map or location indicator (optional)

**Data Required (JSON):**
```json
{
  "contact": {
    "email": "string",
    "phone": "string (optional)",
    "calendlyUrl": "string (optional)",
    "socials": {
      "github": "string",
      "linkedin": "string",
      "twitter": "string",
      "dribbble": "string"
    }
  }
}
```

### 5.9 Navigation & Footer
**Priority: High**

**Navigation:**
- Sticky/fixed header with blur backdrop
- Logo/name on left
- Nav links with hover underline animation
- Mobile: Hamburger menu with slide-in drawer
- Active section indicator
- Theme toggle (dark/light) - optional

**Footer:**
- Copyright notice
- Quick links
- Social icons
- "Built with" credits
- Back to top button

---

## 6. UI/UX Design Specifications

### 6.1 Design Philosophy

**Theme:** "Neon Futurism meets Minimalist Elegance"

- Dark mode primary (light mode optional)
- High contrast for readability
- Strategic use of neon accent colors
- Generous white space
- Depth through shadows and glassmorphism

### 6.2 Color Palette

```css
/* Primary Dark Theme */
--bg-primary: #0a0a0f;
--bg-secondary: #12121a;
--bg-card: rgba(255, 255, 255, 0.05);

/* Accent Colors */
--accent-cyan: #00d4ff;
--accent-purple: #a855f7;
--accent-pink: #ec4899;
--accent-gradient: linear-gradient(135deg, #00d4ff, #a855f7, #ec4899);

/* Text Colors */
--text-primary: #ffffff;
--text-secondary: #94a3b8;
--text-muted: #64748b;

/* Glass Effect */
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: blur(10px);
```

### 6.3 Typography

```css
/* Font Family */
--font-heading: 'Space Grotesk', 'Inter', sans-serif;
--font-body: 'Inter', 'SF Pro', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Font Sizes */
--text-hero: clamp(3rem, 8vw, 6rem);
--text-h1: clamp(2rem, 5vw, 3.5rem);
--text-h2: clamp(1.5rem, 3vw, 2.5rem);
--text-h3: clamp(1.25rem, 2vw, 1.75rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

### 6.4 Spacing System

```css
/* 8px base unit */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

### 6.5 Effects & Animations

**Glassmorphism Cards:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

**Glow Effect:**
```css
.glow {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2);
}
```

**Animation Guidelines:**
- Entrance animations: 0.6s ease-out
- Hover transitions: 0.3s ease
- Page transitions: 0.4s ease-in-out
- Stagger children: 0.1s delay increment
- Use `will-change` sparingly for performance
- Respect `prefers-reduced-motion`

### 6.6 Responsive Breakpoints

```css
/* Mobile First */
--bp-sm: 640px;   /* Small tablets */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Laptops */
--bp-xl: 1280px;  /* Desktops */
--bp-2xl: 1536px; /* Large screens */
```

**Mobile Considerations:**
- Touch-friendly tap targets (min 44x44px)
- Swipeable carousels
- Collapsible sections
- Bottom sheet modals
- Reduced animations on mobile
- Optimized images (WebP, lazy loading)

---

## 7. Complete JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["meta", "hero", "about", "apps", "contact"],
  "properties": {
    "meta": {
      "type": "object",
      "properties": {
        "title": { "type": "string" },
        "description": { "type": "string" },
        "url": { "type": "string" },
        "ogImage": { "type": "string" },
        "favicon": { "type": "string" },
        "themeColor": { "type": "string" },
        "googleAnalyticsId": { "type": "string" }
      }
    },
    "hero": {
      "type": "object",
      "properties": {
        "greeting": { "type": "string" },
        "name": { "type": "string" },
        "titles": { "type": "array", "items": { "type": "string" } },
        "tagline": { "type": "string" },
        "ctaPrimary": { "type": "object" },
        "ctaSecondary": { "type": "object" }
      }
    },
    "about": {
      "type": "object",
      "properties": {
        "avatar": { "type": "string" },
        "bio": { "type": "string" },
        "bioExtended": { "type": "string" },
        "location": { "type": "string" },
        "availability": { "type": "string" },
        "resumeUrl": { "type": "string" },
        "stats": { "type": "array" },
        "techStack": { "type": "array" }
      }
    },
    "apps": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "appId": { "type": "string" },
          "platform": { "enum": ["ios", "android", "both"] },
          "featured": { "type": "boolean" },
          "technologies": { "type": "array" },
          "role": { "type": "string" },
          "highlights": { "type": "array" }
        }
      }
    },
    "experience": { "type": "array" },
    "testimonials": { "type": "array" },
    "skills": { "type": "object" },
    "contact": { "type": "object" },
    "footer": { "type": "object" }
  }
}
```

---

## 8. Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── avatar.webp
│   │   └── og-image.png
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── ...
│   │   ├── sections/              # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── layout/                # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── effects/               # Visual effects
│   │       ├── ParticleBackground.tsx
│   │       ├── GradientOrb.tsx
│   │       └── FloatingDevice.tsx
│   ├── lib/
│   │   ├── appStore.ts           # Apple API integration
│   │   ├── utils.ts              # Helper functions
│   │   └── animations.ts         # Animation variants
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useAppStoreData.ts
│   ├── types/
│   │   └── index.ts              # TypeScript definitions
│   └── data/
│       └── portfolio.json        # Portfolio configuration
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 9. Apple App Store Integration

Apple provides two main methods for fetching app data programmatically:

### 9.1 iTunes Lookup API (Primary Method for Specific Apps)

The iTunes Lookup API is the best method for fetching details of **specific apps by ID** - perfect for portfolio websites.

**Endpoint:**
```
GET https://itunes.apple.com/lookup?id={APP_ID}&country={COUNTRY_CODE}
```

**Parameters:**
| Parameter | Description | Example |
|-----------|-------------|---------|
| `id` | iTunes App ID (from App Store URL) | `310633997` |
| `country` | Country code for store region | `us`, `gb`, `de` |
| `bundleId` | Alternative to ID lookup | `com.company.appname` |

**How to Find App ID:**
From App Store URL `https://apps.apple.com/us/app/whatsapp/id310633997`, the ID is `310633997`

**Complete Response Fields:**
```json
{
  "resultCount": 1,
  "results": [{
    // Basic Info
    "trackId": 310633997,
    "trackName": "WhatsApp Messenger",
    "bundleId": "net.whatsapp.WhatsApp",
    "version": "24.20.78",
    "description": "Full app description...",

    // Artwork & Screenshots
    "artworkUrl60": "https://...",
    "artworkUrl100": "https://...",
    "artworkUrl512": "https://...",
    "screenshotUrls": ["https://..."],
    "ipadScreenshotUrls": ["https://..."],
    "appletvScreenshotUrls": ["https://..."],

    // Ratings & Reviews
    "averageUserRating": 4.7,
    "averageUserRatingForCurrentVersion": 4.6,
    "userRatingCount": 15000000,
    "userRatingCountForCurrentVersion": 50000,

    // Pricing
    "price": 0,
    "formattedPrice": "Free",
    "currency": "USD",

    // Categories & Genres
    "primaryGenreName": "Social Networking",
    "primaryGenreId": 6005,
    "genres": ["Social Networking", "Utilities"],
    "genreIds": ["6005", "6002"],

    // Developer Info
    "artistId": 310633997,
    "artistName": "WhatsApp Inc.",
    "artistViewUrl": "https://apps.apple.com/...",
    "sellerName": "WhatsApp Inc.",
    "sellerUrl": "https://www.whatsapp.com",

    // Technical Details
    "minimumOsVersion": "12.0",
    "supportedDevices": ["iPhone", "iPad", "iPod"],
    "fileSizeBytes": "123456789",
    "languageCodesISO2A": ["EN", "ES", "FR"],
    "features": ["iosUniversal"],
    "isGameCenterEnabled": false,

    // Content Rating
    "contentAdvisoryRating": "12+",
    "trackContentRating": "12+",
    "advisories": ["Infrequent/Mild..."],

    // Dates
    "releaseDate": "2009-05-04T07:00:00Z",
    "currentVersionReleaseDate": "2024-10-15T07:00:00Z",
    "releaseNotes": "Bug fixes and improvements...",

    // Links
    "trackViewUrl": "https://apps.apple.com/us/app/whatsapp/id310633997",

    // Metadata
    "kind": "software",
    "wrapperType": "software"
  }]
}
```

### 9.2 Apple RSS Feeds (For Charts & Discovery)

Apple also provides RSS feeds for app charts via the Marketing Tools:

**New v2 Endpoint (Current):**
```
https://rss.applemarketingtools.com/api/v2/{country}/apps/{feed-type}/{limit}/apps.json
```

**Feed Types Available:**
- `top-free` - Top Free Apps
- `top-paid` - Top Paid Apps
- `top-grossing` - Top Grossing Apps
- `new-apps-we-love` - Featured New Apps
- `new-games-we-love` - Featured New Games

**Example:**
```
https://rss.applemarketingtools.com/api/v2/us/apps/top-free/25/apps.json
```

**Legacy Endpoints (May Still Work):**
```
https://itunes.apple.com/us/rss/toppaidapplications/limit=100/genre=6014/json
https://itunes.apple.com/us/rss/topfreeapplications/limit=100/json
```

**RSS Feed Generator Tool:**
Visit https://rss.applemarketingtools.com/ to generate custom feed URLs via UI.

### 9.3 Customer Reviews RSS

To fetch app reviews:
```
https://itunes.apple.com/{country}/rss/customerreviews/page=1/id={APP_ID}/sortby=mostrecent/json
```

**Example:**
```
https://itunes.apple.com/us/rss/customerreviews/page=1/id=310633997/sortby=mostrecent/json
```

### 9.4 Implementation Strategy

**Build-Time Data Fetching:**
```typescript
// lib/appStore.ts
interface AppStoreApp {
  trackId: number;
  trackName: string;
  artworkUrl512: string;
  screenshotUrls: string[];
  averageUserRating: number;
  // ... other fields
}

async function fetchAppData(appId: string, country = 'us'): Promise<AppStoreApp | null> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${appId}&country=${country}`
    );
    const data = await response.json();

    if (data.resultCount === 0) {
      return null;
    }

    return data.results[0];
  } catch (error) {
    console.error(`Failed to fetch app ${appId}:`, error);
    return null;
  }
}
```

**Data Merging Strategy:**
1. Read app IDs from `portfolio.json`
2. Fetch live data from iTunes API at build time
3. Merge with custom portfolio data (technologies, role, achievements)
4. Generate static pages with combined data
5. Cache responses to avoid rate limiting (20 requests/minute limit)

### 9.5 Fallback Strategy

If API fails or app is unavailable:
1. **Primary**: Use cached data from previous successful build
2. **Secondary**: Use manually provided override data from JSON
3. **Tertiary**: Display placeholder card with "Details unavailable"

### 9.6 Rate Limiting & CORS

**Rate Limits:**
- iTunes Search API: ~20 requests/minute
- For heavy usage: Consider Apple's Enterprise Partner Feed (EPF)

**CORS Note:**
- The iTunes API has CORS restrictions for browser-side requests
- **Solution**: Fetch data at build time (SSG) or use API routes (SSR)
- Next.js static generation solves this perfectly

---

## 10. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size | < 200KB (gzipped) |

### 10.1 Optimization Strategies

- Next.js Image optimization
- Font subsetting and preloading
- CSS purging with Tailwind
- Code splitting by route
- Lazy loading below-fold content
- WebP/AVIF image formats
- Preconnect to external domains

---

## 11. SEO Requirements

- Semantic HTML structure
- Meta tags (title, description, OG, Twitter)
- JSON-LD structured data (Person, SoftwareApplication)
- Sitemap.xml generation
- Robots.txt configuration
- Canonical URLs
- Alt text for all images

---

## 12. Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Color contrast ratios (4.5:1 minimum)
- Reduced motion support
- ARIA labels where needed

---

## 13. Browser Support

| Browser | Versions |
|---------|----------|
| Chrome | Last 2 |
| Firefox | Last 2 |
| Safari | Last 2 |
| Edge | Last 2 |
| Mobile Safari | iOS 14+ |
| Chrome Android | Last 2 |

---

## 14. Development Phases

### Phase 1: Foundation (Core)
- [ ] Project setup (Next.js, TypeScript, Tailwind)
- [ ] Design system implementation (colors, typography, spacing)
- [ ] Basic component library (Button, Card, Badge, etc.)
- [ ] JSON data loading and typing
- [ ] Apple App Store API integration

### Phase 2: Sections (Structure)
- [ ] Hero section with basic animation
- [ ] About section with stats
- [ ] Portfolio grid with app cards
- [ ] Experience timeline
- [ ] Contact section with form

### Phase 3: Polish (Enhancement)
- [ ] Advanced animations (Framer Motion)
- [ ] Scroll-based animations
- [ ] Background effects (particles, gradients)
- [ ] Testimonials carousel
- [ ] Skills visualization

### Phase 4: Optimization (Performance)
- [ ] Image optimization
- [ ] Bundle analysis and reduction
- [ ] SEO implementation
- [ ] Accessibility audit
- [ ] Cross-browser testing

### Phase 5: Deployment (Launch)
- [ ] Environment configuration
- [ ] Build optimization
- [ ] Deploy to hosting platform
- [ ] Custom domain setup
- [ ] Analytics integration

---

## 15. Future Enhancements

- Dark/Light theme toggle
- Multi-language support (i18n)
- Blog integration (MDX)
- Google Play Store integration
- Case study pages per app
- Interactive 3D elements
- AI-powered chatbot assistant
- Animation preference controls

---

## 16. Sample Portfolio Data

A complete example JSON file will be provided as `portfolio.example.json` demonstrating all configurable options.

---

## 17. Success Criteria

1. **Visual Impact**: Visitors are impressed within 3 seconds
2. **Information Clarity**: Key info accessible within 10 seconds
3. **Performance**: All Lighthouse scores > 90
4. **Responsiveness**: Flawless experience on all devices
5. **Reusability**: New portfolio deployable in < 30 minutes

---

## Appendix A: Inspiration & References

- [Brittany Chiang](https://brittanychiang.com/) - Developer portfolio
- [Cuberto](https://cuberto.com/) - Futuristic agency site
- [Linear](https://linear.app/) - Modern SaaS design
- [Vercel](https://vercel.com/) - Clean, dark theme
- [Stripe](https://stripe.com/) - Gradient effects

---

## Appendix B: Asset Requirements

- High-quality avatar photo (500x500px minimum)
- App screenshots (optional, fetched from API)
- Company logos for experience section
- Testimonial author photos
- Custom favicon and OG image

---

*Document prepared for: Mobile Developer Portfolio Project*
*Ready for implementation upon approval*
