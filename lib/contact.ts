import { cache } from 'react'
import { reader } from '@/lib/reader'

export type ContactSettings = {
  whatsappNumber: string
  whatsappDefaultMessage: string
  whatsappExtendMessage: string
  whatsappUrl: string
  whatsappExtendUrl: string
  telegramUrl: string
  instagramUrl: string
  youtubeUrl: string
  facebookUrl: string
  supportEmail: string
}

const DEFAULT_CONTACT: ContactSettings = {
  whatsappNumber: '923329722201',
  whatsappDefaultMessage:
    "Hi! I'm interested in the iMD App subscription. Could you please share the details?",
  whatsappExtendMessage:
    'Hi! I already have an iMD App subscription and would like to extend my subscription. Could you please guide me through the renewal process?',
  whatsappUrl: '',
  whatsappExtendUrl: '',
  telegramUrl: 'https://t.me/imd_app_pk',
  instagramUrl: 'https://www.instagram.com/imd_app_pk',
  youtubeUrl: 'https://youtube.com/@imdapppk',
  facebookUrl: 'https://www.facebook.com/iMDAppPak',
  supportEmail: 'support@imdresources.com',
}

DEFAULT_CONTACT.whatsappUrl = buildWhatsAppUrl(
  DEFAULT_CONTACT.whatsappNumber,
  DEFAULT_CONTACT.whatsappDefaultMessage,
)
DEFAULT_CONTACT.whatsappExtendUrl = buildWhatsAppUrl(
  DEFAULT_CONTACT.whatsappNumber,
  DEFAULT_CONTACT.whatsappExtendMessage,
)

export function sanitizeWhatsAppNumber(raw: string | null | undefined): string {
  const digits = (raw ?? '').replace(/\D/g, '')
  return digits || DEFAULT_CONTACT.whatsappNumber
}

export function sanitizeHttpUrl(
  raw: string | null | undefined,
  fallback: string,
): string {
  if (!raw) return fallback
  try {
    const url = new URL(raw)
    if (url.protocol === 'http:' || url.protocol === 'https:') {
      return url.toString()
    }
  } catch {
    // fall through to fallback
  }
  return fallback
}

export function sanitizeEmail(raw: string | null | undefined): string {
  const email = (raw ?? '').trim()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return DEFAULT_CONTACT.supportEmail
  }
  return email
}

export function buildWhatsAppUrl(number: string, message: string) {
  const safeNumber = sanitizeWhatsAppNumber(number)
  return `https://wa.me/${safeNumber}?text=${encodeURIComponent(message)}`
}

function fromSiteSettings(settings: {
  whatsappNumber: string | null
  telegramChannelUrl: string | null
  instagramUrl: string | null
  youtubeUrl: string | null
  facebookUrl: string | null
  supportEmail: string | null
}): ContactSettings {
  const whatsappNumber = sanitizeWhatsAppNumber(settings.whatsappNumber)
  const whatsappDefaultMessage = DEFAULT_CONTACT.whatsappDefaultMessage
  const whatsappExtendMessage = DEFAULT_CONTACT.whatsappExtendMessage

  return {
    whatsappNumber,
    whatsappDefaultMessage,
    whatsappExtendMessage,
    whatsappUrl: buildWhatsAppUrl(whatsappNumber, whatsappDefaultMessage),
    whatsappExtendUrl: buildWhatsAppUrl(whatsappNumber, whatsappExtendMessage),
    telegramUrl: sanitizeHttpUrl(
      settings.telegramChannelUrl,
      DEFAULT_CONTACT.telegramUrl,
    ),
    instagramUrl: sanitizeHttpUrl(
      settings.instagramUrl,
      DEFAULT_CONTACT.instagramUrl,
    ),
    youtubeUrl: sanitizeHttpUrl(settings.youtubeUrl, DEFAULT_CONTACT.youtubeUrl),
    facebookUrl: sanitizeHttpUrl(
      settings.facebookUrl,
      DEFAULT_CONTACT.facebookUrl,
    ),
    supportEmail: sanitizeEmail(settings.supportEmail),
  }
}

export const getContactSettings = cache(async (): Promise<ContactSettings> => {
  try {
    const settings = await reader.singletons.siteSettings.read()
    if (!settings) return DEFAULT_CONTACT
    return fromSiteSettings(settings)
  } catch {
    return DEFAULT_CONTACT
  }
})
