'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Subscribe Now', href: '/#subscribenow' },
  { label: 'Support', href: '/#support' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Download/Install', href: '/install' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a2e]">
      <div className="container-main flex items-center justify-between h-[80px] md:h-[90px]">

        {/* Logo + Stethoscope + Site Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.webp"
            alt="iMD Medical Resources"
            width={64}
            height={64}
            className="rounded-full object-cover shrink-0"
            priority
          />
          <Image
            src="/stethoscope.webp"
            alt=""
            width={56}
            height={56}
            className="hidden sm:block shrink-0 opacity-90"
            aria-hidden="true"
          />
          <span className="text-white font-semibold text-base md:text-[17px] leading-snug ml-1">
            iMD Medical Resources
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] lg:text-sm font-medium text-white hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#1a1a2e] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/90 hover:text-white hover:bg-white/5 transition-colors py-3.5 px-6 border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
