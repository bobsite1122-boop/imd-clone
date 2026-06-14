import { cache } from 'react'

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
  const digits = number.replace(/\D/g, '') || DEFAULT_CONTACT.whatsappNumber
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export const getContactSettings = cache(
  async (): Promise<ContactSettings> => DEFAULT_CONTACT,
)
