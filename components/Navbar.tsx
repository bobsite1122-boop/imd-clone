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
          aria-label="iMD App PK — Home"
          className="group flex items-center gap-3 sm:gap-3.5 shrink-0 min-w-0"
        >
          <Image
            src="/logo.png"
            alt="iMD App PK"
            width={96}
            height={96}
            priority
            className="rounded-full object-cover shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white ring-2 ring-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <span className="flex flex-col leading-none min-w-0">
            <span className="font-display font-extrabold tracking-tight text-white text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] truncate">
              iMD App <span className="text-white/90">PK</span>
            </span>
            <span className="hidden sm:inline-block mt-1 text-[10.5px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/85 truncate">
              Medical Resources
            </span>
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
