'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import TabSwitcher from '@/components/TabSwitcher'

type Step = { title: string; desc: string }

const platformSteps: Record<string, Step[]> = {
  Android: [
    {
      title: 'Open the download link',
      desc: 'Click the Android download link sent to you via WhatsApp/Email after subscribing.',
    },
    {
      title: 'Allow unknown sources',
      desc: "In your Android Settings → Security, enable 'Install from unknown sources'.",
    },
    {
      title: 'Install the APK',
      desc: 'Open the downloaded .apk file and follow the on-screen installation steps.',
    },
    {
      title: 'Launch & login',
      desc: 'Open iMD App, enter your username and password from your welcome email.',
    },
    {
      title: 'Start downloading resources',
      desc: 'Browse and download your preferred medical databases and textbooks.',
    },
  ],
  iOS: [
    {
      title: 'Open your welcome email or WhatsApp',
      desc: 'After subscribing, you will receive a personal iOS installation link via WhatsApp or email.',
    },
    {
      title: 'Tap the installation link on your iPhone/iPad',
      desc: "Open the link directly on your iOS device. Tap 'Allow' when prompted to install the profile.",
    },
    {
      title: 'Trust the developer profile',
      desc: "Go to Settings → General → VPN & Device Management and tap 'Trust' on the iMD profile.",
    },
    {
      title: 'Launch iMD App',
      desc: 'Open the app from your home screen and log in with your username and password.',
    },
    {
      title: 'Download your content',
      desc: 'Browse the resource library and download databases for offline study.',
    },
  ],
  Windows: [
    {
      title: 'Receive your download link',
      desc: 'Check the WhatsApp message or email sent after subscribing for your Windows installer link.',
    },
    {
      title: 'Download the installer',
      desc: 'Click the link to download the iMD App Windows setup (.exe) file to your PC.',
    },
    {
      title: 'Run the installer',
      desc: "Double-click the .exe file. If Windows SmartScreen appears, click 'More info' → 'Run anyway'.",
    },
    {
      title: 'Launch & login',
      desc: 'Open iMD App from the desktop shortcut and sign in with your credentials.',
    },
    {
      title: 'Download resources',
      desc: 'Select and download your preferred databases. External drives are supported for large libraries.',
    },
  ],
  macOS: [
    {
      title: 'Receive your download link',
      desc: 'After subscribing, your personal macOS download link will be sent via WhatsApp or email.',
    },
    {
      title: 'Download the .dmg file',
      desc: 'Click the link and save the iMD App disk image (.dmg) to your Mac.',
    },
    {
      title: 'Open and install',
      desc: "Double-click the .dmg, drag iMD App to your Applications folder. If prompted, go to System Settings → Privacy & Security and allow the app.",
    },
    {
      title: 'Launch & login',
      desc: 'Open iMD App from Applications or Spotlight, and enter your username and password.',
    },
    {
      title: 'Start studying',
      desc: 'Download content directly within the app. Ensure you have sufficient storage for large databases.',
    },
  ],
}

const TABS = ['Android', 'iOS', 'Windows', 'macOS']

export default function InstallPage() {
  const [activeTab, setActiveTab] = useState('Android')
  const steps = platformSteps[activeTab]

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-center">
        <div className="container-main">
          <h1 className="text-white font-display text-4xl font-black">
            Download &amp; Install iMD App
          </h1>
          <p className="text-gray-400 text-lg mt-3">
            Follow the simple steps for your device
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">

        {/* Tab Switcher */}
        <TabSwitcher tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Steps */}
        <div className="mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 mb-8">
              <div className="w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-slate-800">{step.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-10 flex gap-3 items-start">
          <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-amber-800">Official Downloads Only</p>
            <p className="text-sm text-amber-700 mt-1">
              After subscribing, you will receive your personal download link and credentials via
              WhatsApp/Email. Never download iMD App from unofficial or third-party sources.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl font-bold text-slate-800">Not subscribed yet?</p>
          <Link
            href="/#subscribenow"
            className="btn-primary inline-block mt-4 min-h-[44px] leading-[44px] px-8"
          >
            Get a Subscription Now →
          </Link>
        </div>

      </div>
    </>
  )
}
