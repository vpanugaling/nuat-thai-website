import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Nuat Thai Foot & Body Massage | Authentic Thai Massage in Cebu',
    template: '%s | Nuat Thai',
  },
  description:
    'Experience authentic Thai massage and aromatherapy at Nuat Thai. Professional acupressure techniques for stress relief and relaxation. Serving Cebu since 2005. Franchise opportunities available.',
  keywords: [
    'Thai massage',
    'foot massage',
    'body massage',
    'aromatherapy',
    'Cebu massage',
    'spa',
    'wellness',
    'acupressure',
    'franchise',
  ],
  authors: [{ name: 'Nuat Thai Services Inc.' }],
  openGraph: {
    title: 'Nuat Thai Foot & Body Massage',
    description:
      'Authentic Thai massage and aromatherapy services since 2005. Experience stress relief and relaxation through professional acupressure techniques.',
    url: 'https://www.nuatthaiph.com',
    siteName: 'Nuat Thai',
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
