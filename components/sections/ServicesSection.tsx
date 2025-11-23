import Image from 'next/image'

const services = [
  {
    title: 'Foot Massage',
    description:
      'Traditional Thai foot massage using acupressure techniques to relieve tension and improve circulation.',
    image: '/images/foot-massage.jpg',
  },
  {
    title: 'Body Massage',
    description:
      'Full body Thai massage that combines stretching, pressing, and acupressure for complete relaxation.',
    image: '/images/body-massage.jpg',
  },
  {
    title: 'Aromatherapy',
    description:
      'Experience the healing power of essential oils combined with therapeutic massage techniques.',
    image: '/images/aromatherapy.jpg',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Purely authentic Thai massage and Thai aromatherapy using dry massage
            techniques with acupressure - no oils or lotions needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            We also offer <strong>Swedish Massage</strong> and{' '}
            <strong>Hot Oil Massage</strong> at select locations.
          </p>
        </div>
      </div>
    </section>
  )
}
