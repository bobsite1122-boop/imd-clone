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
    <header className="sticky top-0 z-50 bg-[#0e3b77] shadow-sm">
      <div className="container-main flex items-center justify-between h-[150px] md:h-[170px] gap-4">

        {/* Brand: logo + name */}
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 shrink-0 min-w-0"
        >
          <Image
            src="/logo.png"
            alt="iMD Medical Resources"
            width={128}
            height={128}
            priority
            className="rounded-full object-cover shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ring-2 ring-white/10"
          />
          <span className="text-white font-semibold text-base sm:text-lg md:text-[19px] leading-tight tracking-tight truncate">
            iMD Medical Resources
          </span>
        </Link>

        {/* Desktop nav (right-aligned) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] lg:text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-[#0e3b77] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
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
