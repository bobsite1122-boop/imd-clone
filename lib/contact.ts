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

export function buildWhatsAppUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

function fromSiteSettings(settings: {
  whatsappNumber: string | null
  telegramChannelUrl: string | null
  instagramUrl: string | null
  youtubeUrl: string | null
  facebookUrl: string | null
  supportEmail: string | null
}): ContactSettings {
  const whatsappNumber = settings.whatsappNumber ?? DEFAULT_CONTACT.whatsappNumber
  const whatsappDefaultMessage = DEFAULT_CONTACT.whatsappDefaultMessage
  const whatsappExtendMessage = DEFAULT_CONTACT.whatsappExtendMessage

  return {
    whatsappNumber,
    whatsappDefaultMessage,
    whatsappExtendMessage,
    whatsappUrl: buildWhatsAppUrl(whatsappNumber, whatsappDefaultMessage),
    whatsappExtendUrl: buildWhatsAppUrl(whatsappNumber, whatsappExtendMessage),
    telegramUrl: settings.telegramChannelUrl ?? DEFAULT_CONTACT.telegramUrl,
    instagramUrl: settings.instagramUrl ?? DEFAULT_CONTACT.instagramUrl,
    youtubeUrl: settings.youtubeUrl ?? DEFAULT_CONTACT.youtubeUrl,
    facebookUrl: settings.facebookUrl ?? DEFAULT_CONTACT.facebookUrl,
    supportEmail: settings.supportEmail ?? DEFAULT_CONTACT.supportEmail,
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

export function whatsAppUrl(
  message: string = DEFAULT_CONTACT.whatsappDefaultMessage,
  number: string = DEFAULT_CONTACT.whatsappNumber,
) {
  return buildWhatsAppUrl(number, message)
}

// Backward-compatible static exports for modules not yet migrated.
export const WHATSAPP_NUMBER = DEFAULT_CONTACT.whatsappNumber
export const WHATSAPP_DEFAULT_MESSAGE = DEFAULT_CONTACT.whatsappDefaultMessage
export const WHATSAPP_EXTEND_MESSAGE = DEFAULT_CONTACT.whatsappExtendMessage
export const WHATSAPP_URL = DEFAULT_CONTACT.whatsappUrl
export const WHATSAPP_EXTEND_URL = DEFAULT_CONTACT.whatsappExtendUrl
export const TELEGRAM_URL = DEFAULT_CONTACT.telegramUrl
export const INSTAGRAM_URL = DEFAULT_CONTACT.instagramUrl
export const YOUTUBE_URL = DEFAULT_CONTACT.youtubeUrl
export const FACEBOOK_URL = DEFAULT_CONTACT.facebookUrl
export const SUPPORT_EMAIL = DEFAULT_CONTACT.supportEmail
