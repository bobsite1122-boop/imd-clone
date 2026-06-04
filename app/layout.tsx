import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  title: 'iMD App Pakistan | Medical Resources',
  description:
    "Pakistan's premier medical education subscription platform. Access 45,000+ medical resources.",
  keywords: ['medical app', 'USMLE', 'medical subscription', 'Pakistan', 'medical resources'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sora.variable}`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
