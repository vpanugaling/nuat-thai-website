import { Metadata } from 'next'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description:
    'Discover the mission and vision of Nuat Thai Services Inc. - creating and managing Authentic Thai Massage Centers to promote health and relaxation.',
}

export default function MissionVisionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-4">Mission & Vision</h1>
            <p className="text-xl text-white/90">
              Our commitment to authentic Thai wellness and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-primary px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Our Mission
                </h2>
              </div>
              <div className="p-8">
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic border-l-4 border-accent pl-6">
                  &ldquo;Is to create and manage an Authentic Thai Massage Center to
                  cater the old and young working class to relieve them of stress
                  and live a healthful life and to address the needs in the field
                  of relaxation in order to cope up a daily challenging
                  environment.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-primary mb-4">
              Our Objectives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to achieving these goals to serve our customers and
              community better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Diverse Health Services',
                description:
                  'Providing diverse health massage services beyond traditional Thai massage.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Employment Solutions',
                description:
                  'Contributing to employment opportunities in our community.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Franchise Expansion',
                description:
                  'Expanding through franchise opportunities nationwide.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                title: 'Entrepreneurial Support',
                description:
                  'Supporting entrepreneurs in the massage therapy industry.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Affordable Wellness',
                description:
                  'Making wellness accessible through affordable services.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Continuous Training',
                description:
                  'Advancing acupressure techniques through training in Thailand.',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
              },
            ].map((objective) => (
              <div
                key={objective.title}
                className="bg-white rounded-xl p-6 shadow-lg flex gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {objective.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-white mb-4">Our Values</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Authenticity',
              'Health & Wellness',
              'Accessibility',
              'Excellence',
            ].map((value) => (
              <div
                key={value}
                className="bg-white/10 backdrop-blur rounded-xl p-6 flex items-center justify-center"
              >
                <span className="text-accent font-bold text-lg text-center">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
