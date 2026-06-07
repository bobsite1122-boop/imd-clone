'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Subscribe Now', href: '/#subscribenow' },
  { label: 'Support', href: '/#support' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Download/Install', href: '/install' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0e3b77]">
      {/* ── Top row: brand + (desktop nav) + (mobile hamburger) ── */}
      <div className="container-main flex items-center justify-between h-[60px] md:h-[64px] lg:h-[76px]">

        {/* Brand: logo + site name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
        >
          <Image
            src="/logo.png"
            alt="IMD App PK"
            width={96}
            height={96}
            priority
            className="rounded-full object-cover shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white"
          />
          <span className="text-white font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-tight truncate">
            IMD App PK
          </span>
        </Link>

        {/* Desktop nav (lg+) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] xl:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger (only below md) */}
        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="md:hidden text-white p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Tablet inline nav row (md ≤ width < lg) ── */}
      <div className="hidden md:block lg:hidden border-t border-white/10">
        <div className="container-main flex items-center justify-start gap-5 h-[40px] overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-medium transition-colors whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-white'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mobile dropdown (< md) ── */}
      <div
        className={`md:hidden bg-[#0e3b77] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm transition-colors py-3 px-6 border-b border-white/5 last:border-0 ${
                isActive(link.href)
                  ? 'text-white bg-white/10'
                  : 'text-white/90 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
