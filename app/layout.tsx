import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import {
  author,
  longTailKeywords,
  primaryKeywords,
  siteDescription,
  siteLanguage,
  siteName,
  siteShortDescription,
  siteUrl,
  themeColor,
} from '@/lib/seo/site'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Buy iMD App Subscription in Pakistan | iMD App PK',
    template: '%s | iMD App PK',
  },
  description: siteShortDescription,
  keywords: [...primaryKeywords, ...longTailKeywords],
  authors: [{ name: author }],
  creator: author,
  publisher: siteName,
  category: 'Medical Education',
  openGraph: {
    title: 'Buy iMD App Subscription in Pakistan | iMD App PK',
    description: siteDescription,
    type: 'website',
    locale: 'en_PK',
    siteName,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy iMD App Subscription in Pakistan | iMD App PK',
    description: siteShortDescription,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={siteLanguage} className={`${plusJakartaSans.variable} ${sora.variable}`}>
   <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 font-sans">
  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-Q8R69NL811"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Q8R69NL811');
    `}
  </Script>
</body>
    </html>
  )
}
