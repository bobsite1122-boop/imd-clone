'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Support', href: '/#support' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Download/Install', href: '/install' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a2e] border-b border-white/10">
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="iMD Medical Resources logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-white font-bold text-base leading-tight">
            iMD Medical Resources
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors px-3 py-2 rounded"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#subscribenow"
            className="ml-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            Subscribe Now
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#1a1a2e] border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-3 px-6"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2 pb-1">
            <Link
              href="/#subscribenow"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-brand text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors min-h-[44px]"
            >
              Subscribe Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
