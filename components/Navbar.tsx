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
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo + Stethoscope + Site Name */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.webp"
            alt="iMD Medical Resources logo"
            width={42}
            height={42}
            className="rounded-full object-cover"
            priority
          />
          <Image
            src="/stethoscope.webp"
            alt=""
            width={40}
            height={40}
            className="hidden sm:block opacity-90"
            aria-hidden="true"
          />
          <span className="text-white font-medium text-sm md:text-base ml-1 whitespace-nowrap">
            iMD Medical Resources
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs lg:text-sm text-white/90 hover:text-white transition-colors"
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
              className="text-sm text-white/90 hover:text-white hover:bg-white/5 transition-colors py-3 px-6"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
