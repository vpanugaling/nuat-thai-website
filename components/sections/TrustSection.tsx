const stats = [
  {
    value: '2005',
    label: 'Established',
    description: 'Serving customers since',
  },
  {
    value: 'Cebu',
    label: 'Based',
    description: 'Proudly Filipino-owned',
  },
  {
    value: '100%',
    label: 'Authentic',
    description: 'Thai massage techniques',
  },
  {
    value: 'Franchise',
    label: 'Opportunities',
    description: 'Nationwide expansion',
  },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-white mb-4">
            Why Choose Nuat Thai?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            With years of experience and commitment to authentic Thai massage
            techniques, we deliver quality wellness services you can trust.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-accent text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-white/70 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Stress relief for working professionals',
            'Muscle pain reduction',
            'Anti-aging properties',
            'Enhanced blood circulation',
            'General relaxation',
            'Professional acupressure techniques',
          ].map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
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
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
