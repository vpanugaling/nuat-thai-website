# Nuat Thai Website

A modern, responsive website for Nuat Thai Foot & Body Massage built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (Static Site Generation)

## Features

- Responsive design (mobile-first)
- Static Site Generation for optimal performance
- SEO optimized with meta tags
- Contact form with Formspree integration
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

### Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project" and select your GitHub repository
4. Vercel auto-detects Next.js - no configuration needed
5. Click "Deploy"

### Manual Deployment

1. Run `yarn build`
2. Upload the contents of the `out` directory to your static hosting provider

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io) for serverless form handling.

### To configure:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. Update `components/ui/ContactForm.tsx`:
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Example: `https://formspree.io/f/xabcdefg`

For local development, form submissions will be sent to Formspree directly.

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
└── next.config.js
```

## License

Copyright © 2010-2024 Nuat Thai Services Inc. All rights reserved.
