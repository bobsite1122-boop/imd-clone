import { Send, MessageCircle, Mail } from 'lucide-react'
import { SUPPORT_EMAIL, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contact'

const contacts = [
  {
    label: 'Message on Telegram',
    href: TELEGRAM_URL,
    bg: 'bg-[#2aabee] hover:opacity-90',
    icon: Send,
  },
  {
    label: 'Contact on WhatsApp',
    href: WHATSAPP_URL,
    bg: 'bg-[#25d366] hover:opacity-90',
    icon: MessageCircle,
  },
  {
    label: 'Email Us',
    href: `mailto:${SUPPORT_EMAIL}`,
    bg: 'bg-indigo-600 hover:opacity-90',
    icon: Mail,
  },
]

export default function ContactSection() {
  return (
    <section id="support" className="bg-[#1a1a2e] section-pad">
      <div className="container-main text-center">

        {/* Heading */}
        <h2 className="text-white font-display text-3xl md:text-4xl font-black">
          Available 24/7 — Reach Us Anytime
        </h2>
        <p className="text-gray-400 text-lg mt-3">
          Our team responds quickly. Contact us via any platform below.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${c.bg} text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition text-lg min-h-[44px]`}
            >
              <c.icon size={22} aria-hidden="true" />
              {c.label}
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          Disclaimer: These are Our Only Contact Channels.
        </p>

      </div>
    </section>
  )
}
