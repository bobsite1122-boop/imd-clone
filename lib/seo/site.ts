export const siteName = 'iMD App PK'
export const siteAlternateName = 'iMD App'

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imdapp.com.pk'

export const siteDescription =
  'iMD App PK provides discounted iMD App subscriptions with fast activation, reliable support, and affordable pricing for medical students preparing for USMLE, AMC, PLAB, MCCQE, FCPS, and other international licensing exams.'

export const siteShortDescription =
  'Discounted iMD App subscriptions for medical students and healthcare professionals in Pakistan. Fast activation, affordable pricing, 45,000+ premium medical resources.'

export const siteLocale = 'en_PK'
export const siteLanguage = 'en'
export const themeColor = '#0e3b77'
export const author = 'iMD App PK'

export const primaryKeywords = [
  'iMD App',
  'iMD App PK',
  'Buy iMD App',
  'Buy iMD App Subscription',
  'iMD App Subscription',
  'Medical Education App',
  'Medical Study Resources',
  'Medical Question Bank',
  'USMLE Resources',
  'USMLE Preparation',
  'USMLE QBank',
  'USMLE Step 1',
  'USMLE Step 1 QBank',
  'USMLE Step 1 Preparation',
  'AMC QBank',
  'AMC Exam Preparation',
  'PLAB Preparation',
  'MCCQE Preparation',
  'FCPS Preparation',
  'Medical Notes',
  'Medical Books',
  'Medical Video Lectures',
  'Medical Exam Preparation',
  'Medical Licensing Exams',
  'International Medical Exams',
  'Medical Study App',
  'Medical Learning Platform',
  'Premium Medical Resources',
  'Global Medical Resources',
  'Discount Medical Subscription',
  'Medical Exam QBank',
  'Best USMLE Resources',
  'Best AMC Resources',
  'Medical Subscription Pakistan',
  'Medical Learning Resources Pakistan',
  'Buy Medical QBank',
  'Medical Students Pakistan',
  'International Medical Study Resources',
]

export const longTailKeywords = [
  'Buy iMD App Subscription in Pakistan',
  'Affordable iMD App Subscription',
  'Discounted iMD App Subscription Pakistan',
  'Best USMLE Resources Pakistan',
  'Buy USMLE QBank Pakistan',
  'Medical Study Resources Pakistan',
  'USMLE Step 1 Preparation Pakistan',
  'AMC Preparation Pakistan',
  'PLAB Preparation Pakistan',
  'Medical Education Platform Pakistan',
  'Premium Medical Learning Resources',
  'Buy Medical Learning Subscription',
  'Global Medical Study Resources',
  'Best Medical Exam Resources',
  'Medical Licensing Exam Preparation Resources',
]

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized}`
}
