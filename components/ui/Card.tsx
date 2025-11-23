import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  image?: string
  icon?: React.ReactNode
  className?: string
}

export default function Card({
  title,
  description,
  image,
  icon,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
