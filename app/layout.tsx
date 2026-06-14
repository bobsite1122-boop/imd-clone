import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
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

const siteTitle = 'iMD App PK | Medical Resources'
const siteDescription =
  "Pakistan's premier medical education subscription platform. Access 45,000+ medical resources."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'medical app',
    'USMLE',
    'medical subscription',
    'Pakistan',
    'medical resources',
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'en_PK',
    siteName: 'iMD App PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  )
}
