import { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Nuat Thai Services Inc. Contact us for service inquiries, franchise opportunities, or general questions.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-primary text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">
              We&apos;d love to hear from you. Get in touch with us for inquiries,
              bookings, or franchise opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-secondary text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-secondary text-primary mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Address</h3>
                      <address className="not-italic text-gray-700">
                        <p className="font-semibold">Nuat Thai Services Inc.</p>
                        <p>PCF BLDG. No. 20, M. Zosa St.</p>
                        <p>Capitol Site, Cebu</p>
                      </address>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">Phone</h3>
                      <p className="text-gray-700">
                        <a
                          href="tel:032-234-9302"
                          className="hover:text-accent transition-colors"
                        >
                          032-234-9302
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Franchise Inquiries */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg
                        className="w-6 h-6"
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
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        Franchise Inquiries
                      </h3>
                      <p className="text-gray-700">
                        <a
                          href="tel:09209119683"
                          className="hover:text-accent transition-colors"
                        >
                          0920-9119683
                        </a>
                        {' | '}
                        <a
                          href="tel:09228163457"
                          className="hover:text-accent transition-colors"
                        >
                          0922-8163457
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* General Inquiries */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">
                        General Inquiries
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        9:00 AM – 6:00 PM (Mon-Sat)
                      </p>
                      <p className="text-gray-700 mb-2">
                        <a
                          href="tel:09257189888"
                          className="hover:text-accent transition-colors"
                        >
                          0925-7189888
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm mb-1">
                        6:00 PM – Midnight
                      </p>
                      <p className="text-gray-700">
                        <a
                          href="tel:09228643225"
                          className="hover:text-accent transition-colors"
                        >
                          0922-8643225
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-8 bg-accent/20 rounded-xl p-6">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary">Important Notice:</strong>{' '}
                  Annabelle, Amie, Joshua and Erica are the only authorized
                  persons to transact and entertain inquiry for Nuat Thai
                  franchise. We caution the public against unauthorized
                  individuals claiming affiliation with Nuat Thai Services Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
