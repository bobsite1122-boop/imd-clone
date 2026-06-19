export type PlanSeoConfig = {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  bodyParagraphs: string[]
}

export const planSeoConfigs: Record<string, PlanSeoConfig> = {
  '6-months-subscription': {
    slug: '6-months-subscription',
    title: '6 Month iMD App Subscription',
    h1: '6 Month iMD App Subscription',
    description:
      'Buy a 6 Month iMD App Subscription in Pakistan. Get full access to 45,000+ USMLE, AMC, PLAB, and medical question banks with fast activation and affordable pricing.',
    keywords: [
      '6 Month iMD App Subscription',
      'iMD App 6 Month Plan',
      'Buy iMD App Subscription',
      'Medical Study Resources',
      'USMLE Resources',
      'AMC Resources',
      'Medical Question Bank',
      'Medical Education App',
      'Buy iMD App Subscription in Pakistan',
    ],
    bodyParagraphs: [
      'The 6 Month iMD App Subscription gives medical students and healthcare professionals in Pakistan full access to premium medical study resources for 180 days. Ideal for focused USMLE Step 1 preparation, AMC exam preparation, or short-term licensing exam prep.',
      'Your subscription includes unlimited access to medical question banks, clinical references, video lectures, medical books, and 45,000+ premium resources through the iMD App — a trusted medical education app used by students worldwide.',
    ],
  },
  '1-year-subscription': {
    slug: '1-year-subscription',
    title: '1 Year iMD App Subscription',
    h1: '1 Year iMD App Subscription',
    description:
      'Buy a 1 Year iMD App Subscription — the best medical subscription for USMLE QBank, AMC QBank, and medical learning resources. Discounted annual plan with fast activation in Pakistan.',
    keywords: [
      '1 Year iMD App Subscription',
      'Annual iMD App Subscription',
      'Best Medical Subscription',
      'Medical Study App',
      'Medical Resources',
      'USMLE QBank',
      'AMC QBank',
      'Medical Learning Platform',
      'Affordable iMD App Subscription',
    ],
    bodyParagraphs: [
      'The 1 Year iMD App Subscription is our most popular annual medical education subscription, offering 365 days of full access to premium medical learning resources at a discounted price compared to monthly alternatives.',
      'Perfect for medical students and doctors preparing for USMLE, AMC, PLAB, MCCQE, FCPS, and other international medical licensing exams. Includes unlimited access to all databases, medical notes, medical books, and video lectures.',
    ],
  },
  '2-year-subscription': {
    slug: '2-year-subscription',
    title: '2 Year iMD App Subscription',
    h1: '2 Year iMD App Subscription',
    description:
      'Buy a 2 Year iMD App Subscription — the best value long-term medical study platform. 730 days of premium USMLE, AMC, and medical exam resources with discounted pricing in Pakistan.',
    keywords: [
      '2 Year iMD App Subscription',
      'Long Term iMD App Subscription',
      'Medical Study Platform',
      'Medical Education Subscription',
      'Medical Learning Resources',
      'Best Value Medical Subscription',
      'Discounted iMD App Subscription Pakistan',
      'Premium Medical Learning Resources',
    ],
    bodyParagraphs: [
      'The 2 Year iMD App Subscription offers the best value for long-term medical exam preparation. With 730 days of full access, this plan is ideal for medical students and graduates pursuing multi-step licensing exams like USMLE Step 1 and beyond.',
      'Get unlimited access to the complete iMD App medical learning platform — including medical question banks, clinical references, drug databases, video lectures, and 45,000+ premium global medical resources at the most affordable per-month rate.',
    ],
  },
}

export function getPlanSeoConfig(slug: string): PlanSeoConfig | undefined {
  return planSeoConfigs[slug]
}

export function parsePlanPrice(price: string): number {
  const numeric = price.replace(/[^0-9.]/g, '')
  return parseFloat(numeric) || 0
}
