export const WHATSAPP_NUMBER = '923329722201'

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'm interested in the iMD App subscription. Could you please share the details?"

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

export const TELEGRAM_URL = 'https://t.me/imd_app_pk'
export const INSTAGRAM_URL = 'https://www.instagram.com/imd_app_pk'
export const YOUTUBE_URL = 'https://youtube.com/@imdapppk'
export const FACEBOOK_URL = 'https://www.facebook.com/iMDAppPak'

export const SUPPORT_EMAIL = 'support@imdresources.com'

export function whatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(message)}`
}
