import { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Franchising',
  description:
    'Explore franchise opportunities with Nuat Thai. Learn about requirements, package inclusions, and how to start your own authentic Thai massage business.',
}

const packageInclusions = [
  'Site design and layout planning',
  '4 massage chairs',
  '8 compact beds with heating equipment',
  'Massage tools (reflex sticks, Thai herbal balls)',
  'Training materials and Thai music CDs',
  'Therapist instruction covering foot massage, body massage, Swedish massage, aromatherapy, and hot oil techniques',
  'Operational guidelines and business system orientation',
  'Rights to use the Nuat Thai brand name',
]

export default function FranchisingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-4">
              Franchise Opportunities
            </h1>
            <p className="text-xl text-white/90">
              Join the Nuat Thai family and bring authentic Thai massage services
              to your community.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/franchise-spa.jpg"
                alt="Nuat Thai franchise opportunity"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-secondary text-primary mb-6">
                Start Your Own Nuat Thai Business
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuat Thai Services Inc. offers comprehensive franchise packages for
                entrepreneurs who want to enter the wellness and massage therapy
                industry. With our proven business model and authentic Thai massage
                techniques, you can establish a successful business in your area.
              </p>

              <div className="bg-accent/20 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-primary mb-2">
                  Location Requirement
                </h3>
                <p className="text-gray-700">
                  The business must occupy a{' '}
                  <strong>strategic location with at least an area of 80 sq. mtr.</strong>
                </p>
              </div>

              <Button href="/contact" variant="primary" size="lg">
                Inquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-primary mb-4">
              Franchise Package Inclusions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to start your Nuat Thai franchise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packageInclusions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-secondary text-white mb-6">
              Contact Us for Franchise Inquiries
            </h2>

            <div className="bg-white rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-primary text-xl mb-4">
                Nuat Thai Services Inc.
              </h3>
              <address className="not-italic text-gray-700 space-y-2 mb-6">
                <p>PCF Building No. 20, M. Zosa St.</p>
                <p>Capitol Site, Cebu</p>
              </address>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">
                    Franchise Inquiries:
                  </p>
                  <p className="text-lg">
                    <a
                      href="tel:09209119683"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      0920-9119683
                    </a>
                    {' | '}
                    <a
                      href="tel:09228163457"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      0922-8163457
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">
                    General Inquiries:
                  </p>
                  <p className="text-gray-700 text-sm mb-1">
                    9:00 AM – 6:00 PM, Monday – Saturday
                  </p>
                  <p className="text-lg">
                    <a
                      href="tel:09257189888"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      0925-7189888
                    </a>
                  </p>
                  <p className="text-gray-700 text-sm mt-2 mb-1">
                    6:00 PM – Midnight
                  </p>
                  <p className="text-lg">
                    <a
                      href="tel:09228643225"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      0922-8643225
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-white text-sm">
                <strong className="text-accent">Important Notice:</strong>{' '}
                Annabelle, Amie, Joshua and Erica are the only authorized persons
                to transact and entertain inquiry for Nuat Thai franchise. We
                caution the public against unauthorized individuals claiming
                affiliation with Nuat Thai Services Inc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to learn more about franchise opportunities and take
            the first step toward owning your own Nuat Thai business.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  )
}
