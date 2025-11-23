import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Mission & Vision', href: '/mission-vision' },
  { name: 'Franchising', href: '/franchising' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Nuat Thai"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Authentic Thai massage and aromatherapy services since 2005.
              Experience stress relief and relaxation through our professional
              acupressure techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white/80 hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-white/80 space-y-2 text-sm">
              <p>
                <strong className="text-white">Nuat Thai Services Inc.</strong>
              </p>
              <p>PCF BLDG. No. 20, M. Zosa St.</p>
              <p>Capitol Site, Cebu</p>
              <p className="pt-2">
                <strong className="text-white">Phone:</strong> 032-234-9302
              </p>
              <p>
                <strong className="text-white">Franchise Inquiries:</strong>
              </p>
              <p>0920-9119683 | 0922-8163457</p>
            </address>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="bg-primary-dark/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-white/90">
              <strong className="text-accent">Important Notice:</strong> Annabelle,
              Amie, Joshua and Erica are the only authorized persons to transact
              and entertain inquiry for Nuat Thai franchise. We caution the public
              against unauthorized individuals claiming affiliation with Nuat Thai
              Services Inc.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>&copy; 2010-{new Date().getFullYear()} nuatthaiph.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
