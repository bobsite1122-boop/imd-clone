import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import InstantAnchorLink from '@/components/InstantAnchorLink'
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SUPPORT_EMAIL,
  TELEGRAM_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
} from '@/lib/contact'

const usefulLinks = [
  { label: 'Databases & Resources', href: '/databases' },
  { label: 'Subscribe Now', href: '#subscribenow' },
  { label: 'Support', href: '#support' },
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

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M22.05 2.6 1.95 10.4c-1.4.55-1.39 1.32-.25 1.67l5.16 1.6 11.93-7.52c.56-.34 1.08-.16.66.22L9.78 14.95l-.36 5.34c.55 0 .79-.25 1.1-.55l2.65-2.57 5.18 3.83c.95.52 1.63.25 1.86-.88l3.36-15.86c.34-1.39-.55-2.02-1.52-1.66Z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
  { label: 'YouTube', href: YOUTUBE_URL, Icon: YouTubeIcon, bg: 'bg-[#ff0000]' },
  { label: 'Telegram', href: TELEGRAM_URL, Icon: () => <TelegramIcon size={18} />, bg: 'bg-[#229ed9]' },
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: InstagramIcon, bg: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]' },
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: () => <WhatsAppIcon size={18} />, bg: 'bg-[#25d366]' },
  { label: 'Facebook', href: FACEBOOK_URL, Icon: FacebookIcon, bg: 'bg-[#1877f2]' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0e3b77] pt-10 pb-8 text-white">
      <div className="container-main">

        {/* ── Top section: 3 cols at desktop, stacked below ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8 pb-8 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="IMD App PK"
              width={96}
              height={96}
              className="rounded-full object-cover bg-white w-14 h-14 sm:w-16 sm:h-16"
            />
            <h3 className="text-white font-bold text-base mt-3">
              IMD App PK
            </h3>
            <p className="text-[13px] text-blue-200 mt-1.5 leading-relaxed max-w-xs">
              Your trusted source for medical education and exam preparation.
            </p>
          </div>

          {/* Col 2 — Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm pb-2 mb-4 border-b border-white/30 block w-full">
              Useful Links
            </h4>
            <nav className="flex flex-col gap-1.5">
              {usefulLinks.map((link) =>
                link.href.startsWith('#') ? (
                  <InstantAnchorLink
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white hover:text-blue-200 transition-colors min-h-[28px] flex items-center"
                  >
                    {link.label}
                  </InstantAnchorLink>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white hover:text-blue-200 transition-colors min-h-[28px] flex items-center"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Col 3 — Follow Us */}
          <div>
            <h4 className="text-white font-semibold text-sm pb-2 mb-4 border-b border-white/30 block w-full text-center lg:text-left">
              Follow us
            </h4>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`${social.bg} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`}
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Contact Us 24/7 ── */}
        <div id="support" className="text-center pt-8 pb-4">
          <p className="text-white font-bold text-sm mb-6">
            You can contact us 24/7
          </p>

          {/* Stacks on mobile/tablet, side-by-side from lg+ */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center items-center max-w-md lg:max-w-none mx-auto">

            {/* Telegram */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#229ed9] hover:bg-[#1e8fc4] text-white rounded-[2rem] w-full lg:w-[170px] min-h-[64px] lg:min-h-[80px] flex flex-col items-center justify-center gap-1 transition-colors px-4 py-3"
            >
              <TelegramIcon size={20} />
              <span className="text-[12px] font-bold leading-tight text-center">
                Message on<br />Telegram
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="bg-white text-slate-800 hover:bg-gray-100 rounded-[2rem] w-full lg:w-[200px] min-h-[64px] lg:min-h-[80px] flex flex-col items-center justify-center gap-1 transition-colors px-4 py-3"
            >
              <Mail size={20} aria-hidden="true" />
              <span className="text-[11px] font-medium leading-tight text-center">
                Email us at<br />{SUPPORT_EMAIL}
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-[2rem] w-full lg:w-[170px] min-h-[64px] lg:min-h-[80px] flex flex-col items-center justify-center gap-1 transition-colors px-4 py-3"
            >
              <WhatsAppIcon size={20} />
              <span className="text-[12px] font-bold leading-tight text-center">
                Contact on<br />WhatsApp
              </span>
            </a>

          </div>

          <p className="text-[13px] text-blue-200 mt-6">
            Disclaimer: These are our only handles to get in contact with us.
          </p>
        </div>

      </div>
    </footer>
  )
}
