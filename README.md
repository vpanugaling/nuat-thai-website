# Nuat Thai Website

A modern, responsive website for Nuat Thai Foot & Body Massage built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Netlify (Static Site Generation)

## Features

- Responsive design (mobile-first)
- Static Site Generation for optimal performance
- SEO optimized with meta tags
- Contact form with Netlify Forms integration
- Modern, clean UI with brand colors

## Pages

- **Home** - Hero, services, trust indicators, CTA
- **About Us** - Company history and benefits
- **Mission & Vision** - Mission statement and objectives
- **Franchising** - Franchise information and contact
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Build for production (static export)
yarn build
```

The static files will be generated in the `out` directory.

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Build settings are configured in `netlify.toml`:
   - Build command: `yarn build`
   - Publish directory: `out`
3. Deploy!

### Manual Deployment

1. Run `yarn build`
2. Upload the contents of the `out` directory to your static hosting provider

## Contact Form

The contact form uses Netlify Forms for serverless form handling. When deployed to Netlify, forms are automatically detected and processed.

For local development, form submissions will not work - deploy to Netlify to test form functionality.

## Brand Colors

- **Primary (Blue):** `#28156e`
- **Accent (Yellow):** `#f6e704`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── mission-vision/     # Mission & Vision page
│   ├── franchising/        # Franchising page
│   └── contact/            # Contact page
├── components/
│   ├── ui/                 # UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ContactForm.tsx
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── TrustSection.tsx
│       └── CTASection.tsx
├── public/
│   └── images/             # Static images
├── tailwind.config.ts
├── next.config.js
└── netlify.toml
```

## License

Copyright © 2010-2024 Nuat Thai Services Inc. All rights reserved.
