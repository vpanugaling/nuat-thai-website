'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigation,
}: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-primary z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-primary-light">
            <Image
              src="/images/logo.png"
              alt="Nuat Thai"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <button
              type="button"
              className="p-2 rounded-lg text-white hover:bg-primary-light transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-white hover:bg-primary-light hover:text-accent transition-colors font-medium"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-primary-light">
            <p className="text-white/70 text-sm text-center">
              Nuat Thai Services Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
