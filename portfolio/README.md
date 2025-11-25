# Mobile Developer Portfolio

A futuristic, animated portfolio website for mobile app developers. Showcases your iOS/Android apps by fetching live data from the Apple App Store.

## Features

- **Futuristic Dark Theme** - Neon cyan/purple/pink accents with glassmorphism
- **Smooth Animations** - Scroll-based animations powered by Framer Motion
- **App Store Integration** - Automatically fetches app data from iTunes API
- **Fully Responsive** - Mobile-first design that works on all devices
- **JSON Configuration** - Easy customization via single config file
- **Static Export** - Deploy anywhere (GitHub Pages, Vercel, Netlify, Firebase)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Portfolio

Edit `src/data/portfolio.json` with your information:

```json
{
  "hero": {
    "name": "Your Name",
    "titles": ["iOS Developer", "Flutter Expert"],
    "tagline": "Your tagline here"
  },
  "apps": [
    {
      "appId": "123456789",  // From App Store URL
      "platform": "ios",
      "technologies": ["Swift", "SwiftUI"],
      "role": "Lead Developer"
    }
  ]
}
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

## Deployment

### GitHub Pages (Automatic)

This repo includes a GitHub Actions workflow that automatically deploys to GitHub Pages:

1. Go to your repo **Settings > Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` branch - deployment happens automatically!

Your site will be live at: `https://username.github.io/repo-name/`

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
# Upload contents of /out folder to any static host
```

## Customization

### Adding Your Apps

Find your App ID from the App Store URL:
```
https://apps.apple.com/us/app/your-app/id123456789
                                        └── This is your App ID
```

Add to `portfolio.json`:
```json
{
  "apps": [
    {
      "appId": "123456789",
      "platform": "ios",
      "featured": true,
      "technologies": ["Swift", "SwiftUI", "Core Data"],
      "role": "Lead Developer",
      "highlights": ["1M+ downloads", "4.8 star rating"]
    }
  ]
}
```

### Sections Available

- **Hero** - Name, animated titles, tagline, CTAs
- **About** - Bio, stats, tech stack, resume download
- **Portfolio** - App cards with live App Store data
- **Experience** - Work history timeline
- **Testimonials** - Carousel of recommendations
- **Contact** - Form, email, social links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Design system
├── components/
│   ├── effects/         # Visual effects
│   ├── layout/          # Header, Footer
│   └── sections/        # Page sections
├── data/
│   └── portfolio.json   # YOUR CONFIG FILE
├── lib/
│   ├── appStore.ts      # iTunes API
│   └── animations.ts    # Animation variants
└── types/
    └── index.ts         # TypeScript types
```

## License

MIT
