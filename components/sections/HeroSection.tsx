import Image from 'next/image'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-thai-massage.jpg"
          alt="Traditional Thai massage using acupressure techniques"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-accent italic mb-4 font-medium">
            &ldquo;There is no instrument more precise than human hand&rdquo;
          </p>
          <h1 className="heading-primary text-white mb-6">
            Authentic Thai Massage & Aromatherapy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience stress relief and relaxation through our professional
            acupressure techniques. Serving Cebu since 2005.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book Now
            </Button>
            <Button href="/franchising" variant="outline" size="lg">
              Franchise Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
