import Link from 'next/link'
import Image from 'next/image'
import { Send, Mail, MessageCircle } from 'lucide-react'

const usefulLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Subscribe Now', href: '/#subscribenow' },
  { label: 'Support', href: '/#support' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Download/Install', href: '/install' },
]

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5 3-5 3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@iMDSubscriptions', Icon: YouTubeIcon, bg: 'bg-[#ff0000]' },
  { label: 'Telegram', href: 'https://t.me/iMDAppSubscriptions', Icon: () => <Send size={18} aria-hidden="true" />, bg: 'bg-[#2aabee]' },
  { label: 'Instagram', href: '#', Icon: InstagramIcon, bg: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
  { label: 'WhatsApp', href: 'https://wa.me/923352220382', Icon: () => <MessageCircle size={18} aria-hidden="true" />, bg: 'bg-[#25d366]' },
  { label: 'Facebook', href: '#', Icon: FacebookIcon, bg: 'bg-[#1877f2]' },
]

const contactButtons = [
  {
    label: 'Message on\nTelegram',
    href: 'https://t.me/iMDrahmat',
    bg: 'bg-[#2aabee] hover:bg-[#229ed9]',
    icon: Send,
    light: false,
  },
  {
    label: 'Email us at\nsupport@imdresources.com',
    href: 'mailto:support@imdresources.com',
    bg: 'bg-white text-slate-800 hover:bg-gray-100',
    icon: Mail,
    light: true,
  },
  {
    label: 'Contact on\nWhatsApp',
    href: 'https://wa.me/923352220382',
    bg: 'bg-[#25d366] hover:bg-[#1ebe5d]',
    icon: MessageCircle,
    light: false,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] pt-12 pb-6 text-white">
      <div className="container-main">

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-white/10">

          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/logo.webp"
              alt="iMD Medical Resources"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <h3 className="text-white font-bold text-lg mt-3">
              iMD Medical Resources
            </h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-xs">
              Your trusted source for medical education and exam preparation.
            </p>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/20 inline-block min-w-[140px]">
              Useful Links
            </h4>
            <nav className="flex flex-col">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Follow Us */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-white/20 inline-block min-w-[140px]">
              Follow us on
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${social.bg} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-md`}
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us 24/7 */}
        <div className="text-center mt-8">
          <p className="text-white font-semibold text-sm mb-5">
            You can contact us 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch flex-wrap">
            {contactButtons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btn.bg} rounded-pill px-6 py-3 text-sm font-semibold flex items-center gap-2 transition-colors min-h-[44px] ${
                  btn.light ? '' : 'text-white'
                } shadow-md`}
              >
                <btn.icon size={18} aria-hidden="true" className="shrink-0" />
                <span className="whitespace-pre-line text-left leading-tight text-xs sm:text-sm">
                  {btn.label}
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Disclaimer: These are our only handles to get in contact with us.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 iMD Medical Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
