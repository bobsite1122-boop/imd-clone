export const WHATSAPP_NUMBER = '923329722201'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const TELEGRAM_URL = 'https://t.me/imd_app_pk'
export const INSTAGRAM_URL = 'https://www.instagram.com/imd_app_pk'
export const YOUTUBE_URL = 'https://youtube.com/@imdapppk'
export const FACEBOOK_URL = 'https://www.facebook.com/iMDAppPak'

export const SUPPORT_EMAIL = 'support@imdresources.com'

export function whatsAppUrl(message?: string) {
  if (!message) return WHATSAPP_URL
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
