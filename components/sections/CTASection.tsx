import Button from '../ui/Button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export default function CTASection({
  title = 'Interested in a Franchise?',
  description = 'Join the Nuat Thai family and bring authentic Thai massage services to your community. We provide comprehensive support including training, equipment, and brand guidelines.',
  primaryButtonText = 'Learn About Franchising',
  primaryButtonHref = '/franchising',
  secondaryButtonText = 'Contact Us',
  secondaryButtonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="heading-secondary text-white mb-4">{title}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={primaryButtonHref} variant="primary" size="lg">
              {primaryButtonText}
            </Button>
            <Button href={secondaryButtonHref} variant="outline" size="lg">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
