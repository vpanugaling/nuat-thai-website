import { Metadata } from 'next'
import Image from 'next/image'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nuat Thai Services Inc., established in Cebu City since January 2005. We specialize in purely authentic Thai massage and aromatherapy.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90">
              Discover the story behind Nuat Thai and our commitment to authentic
              Thai wellness services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-spa.jpg"
                alt="Nuat Thai spa atmosphere"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-secondary text-primary mb-6">
                NUAT THAI Foot and Body Massage
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">NUAT THAI Foot and Body Massage</strong>{' '}
                  was established in Cebu City, beginning <strong>January 2005</strong>.
                </p>

                <p>
                  <strong className="text-primary">Nuat Thai Services Inc.</strong> is a
                  corporation functioning as both the business entity and franchisor.
                </p>

                <p>
                  Our establishment specializes in{' '}
                  <strong>purely authentic Thai massage and Thai aromatherapy</strong>.
                  Our massage technique is notably a dry massage employing acupressure
                  rather than oils or lotions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-primary mb-4">
              Benefits of Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the healing power of authentic Thai massage techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Stress Relief',
                description:
                  'Relief for contemporary professionals dealing with daily stress and pressure.',
                icon: '🧘',
              },
              {
                title: 'Muscle Pain Reduction',
                description:
                  'Effective techniques to reduce muscle tension and alleviate body pain.',
                icon: '💪',
              },
              {
                title: 'Anti-Aging Properties',
                description:
                  'Promote youthful vitality through improved circulation and relaxation.',
                icon: '✨',
              },
              {
                title: 'Enhanced Circulation',
                description:
                  'Improve blood flow throughout your body for better overall health.',
                icon: '❤️',
              },
              {
                title: 'General Relaxation',
                description:
                  'Deep relaxation through professional acupressure-based techniques.',
                icon: '😌',
              },
              {
                title: 'Professional Techniques',
                description:
                  'Therapists trained in authentic Thai massage methods and practices.',
                icon: '👐',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience Authentic Thai Massage"
        description="Visit one of our locations and discover the benefits of traditional Thai wellness services."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Franchise Info"
        secondaryButtonHref="/franchising"
      />
    </>
  )
}
