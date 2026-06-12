import {
  INSTAGRAM_URL,
  SUPPORT_EMAIL,
  TELEGRAM_URL,
  WHATSAPP_URL,
  whatsAppUrl,
} from '@/lib/contact'

const GET_APP_URL = whatsAppUrl(
  "Hi! I'd like to get the iMD App. Please share details and pricing.",
)

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M22.05 2.6 1.95 10.4c-1.4.55-1.39 1.32-.25 1.67l5.16 1.6 11.93-7.52c.56-.34 1.08-.16.66.22L9.78 14.95l-.36 5.34c.55 0 .79-.25 1.1-.55l2.65-2.57 5.18 3.83c.95.52 1.63.25 1.86-.88l3.36-15.86c.34-1.39-.55-2.02-1.52-1.66Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const contactLinks = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: WhatsAppIcon,
    className: 'bg-[#25d366] hover:opacity-90 text-white',
  },
  {
    label: 'Instagram',
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    className:
      'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 text-white',
  },
  {
    label: 'Email',
    href: `mailto:${SUPPORT_EMAIL}`,
    icon: MailIcon,
    className: 'bg-indigo-600 hover:opacity-90 text-white',
  },
  {
    label: 'Telegram',
    href: TELEGRAM_URL,
    icon: TelegramIcon,
    className: 'bg-[#229ed9] hover:opacity-90 text-white',
  },
] as const

export default function FAQContactLinks() {
  return (
    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
      <p className="text-[12px] sm:text-[12.5px] font-semibold text-[#0e3b77]">
        Quick contact options
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 py-2 rounded-md text-[12px] sm:text-[12.5px] font-semibold transition ${link.className}`}
          >
            <link.icon />
            {link.label}
          </a>
        ))}
      </div>
      <a
        href={GET_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-5 py-2.5 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-[13px] sm:text-[14px] font-semibold transition-colors"
      >
        <WhatsAppIcon />
        Get iMD App Now
      </a>
    </div>
  )
}
