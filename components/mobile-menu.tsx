'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { key: 'mobile-about', href: '#about', text: 'About' },
    { key: 'mobile-portfolio', href: '#portfolio', text: 'Portfolio' },
    { key: 'mobile-testimonials', href: '#testimonials', text: 'Testimonials' },
    { key: 'mobile-contact', href: '#contact', text: 'Contact' },
  ]

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-300 hover:text-green-400 transition-colors">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map(item => (
              <Link
                key={item.key}
                href={item.href}
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

