import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Send, Mail, MessageCircle } from 'lucide-react'

const usefulLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Subscribe Now', href: '/#subscribenow' },
  { label: 'Support', href: '/#support' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Download/Install', href: '/install' },
]

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@iMDSubscriptions' },
  { label: 'Telegram', href: 'https://t.me/iMDAppSubscriptions' },
  { label: 'Instagram', href: '#' },
  { label: 'WhatsApp', href: 'https://wa.me/923352220382' },
  { label: 'Facebook', href: '#' },
]

const contactButtons = [
  {
    label: 'Message on Telegram',
    href: 'https://t.me/iMDrahmat',
    bg: 'bg-[#2aabee] hover:bg-[#229ed9]',
    icon: Send,
  },
  {
    label: 'Email us',
    href: 'mailto:support@imdresources.com',
    bg: 'bg-indigo-600 hover:bg-indigo-700',
    icon: Mail,
  },
  {
    label: 'Contact on WhatsApp',
    href: 'https://wa.me/923352220382',
    bg: 'bg-[#25d366] hover:bg-[#1ebe5d]',
    icon: MessageCircle,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#111827] pt-12 pb-6">
      <div className="container-main">

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">

          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="iMD Medical Resources"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="text-white font-bold text-lg ml-2">
                iMD Medical Resources
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed max-w-xs">
              Your trusted source for medical education and exam preparation.
            </p>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Useful Links
            </h4>
            <nav className="flex flex-col">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Social + Contact */}
          <div>
            {/* Follow Us */}
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <nav className="flex flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              ))}
            </nav>

            {/* Contact Us */}
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-4">
              Contact Us 24/7
            </h4>
            <div className="flex flex-col gap-2.5">
              {contactButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btn.bg} text-white rounded-lg px-4 py-2.5 text-sm font-medium flex items-center gap-2 transition-colors min-h-[44px]`}
                >
                  <btn.icon size={16} aria-hidden="true" />
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            &copy; 2025 iMD Medical Resources. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 text-right">
            Disclaimer: These are our only handles. Beware of fake accounts.
          </p>
        </div>
      </div>
    </footer>
  )
}
