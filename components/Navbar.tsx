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
    <header className="sticky top-0 z-50 bg-[#0e3b77]">
      <div className="container-main flex items-center justify-between h-[64px] md:h-[76px]">

        {/* Brand: logo + site name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
        >
          <Image
            src="/logo.png"
            alt="iMD Medical Resources"
            width={96}
            height={96}
            priority
            className="rounded-full object-cover shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white"
          />
          <span className="text-white font-semibold text-[13px] sm:text-sm md:text-[15px] leading-tight truncate">
            iMD Medical Resources
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] xl:text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden text-white p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / tablet dropdown */}
      <div
        className={`lg:hidden bg-[#0e3b77] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/90 hover:text-white hover:bg-white/5 transition-colors py-3 px-6 border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
