import type { Metadata } from 'next'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { Download, PlayCircle, ExternalLink, Smartphone, Monitor, Apple } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import SrOnlyBreadcrumb from '@/components/SrOnlyBreadcrumb'
import { breadcrumbSchema, webPageSchema } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Download & Install iMD App',
  description:
    'Step-by-step instructions to download and install the iMD App on Android, Windows, iPhone, iPad and macOS. Get the APK, video tutorials and activation portal.',
  path: '/install',
  keywords: [
    'iMD App download',
    'iMD App install',
    'iMD APK',
    'iMD App Android',
    'iMD App Windows',
    'iMD App iPhone',
    'iMD App iPad',
    'iMD App macOS',
    'Medical Study App',
  ],
})

const APK_URL = 'https://sg.imedicaldoctor.net/imd195.apk'
const WINDOWS_VIDEO_URL = 'https://youtu.be/_KPIHa9bCF4?si=K1iLE1EeQOKa6TnI'
const WINDOWS_VIDEO_ID = '_KPIHa9bCF4'
const APPLE_VIDEO_URL =
  'https://youtube.com/shorts/nDEhK4TDBH8?si=R1FcK68lDEp_PIjD'
const APPLE_VIDEO_ID = 'nDEhK4TDBH8'
const APPLE_PORTAL_URL = 'https://en.imedicaldoctor.net/dl'

const EMULATORS = [
  { name: 'BlueStacks', url: 'https://www.bluestacks.com/' },
  { name: 'LDPlayer', url: 'https://www.ldplayer.net/' },
  { name: 'MEmu', url: 'https://www.memuplay.com/' },
] as const

const QUICK_LINKS = [
  { label: 'Android', href: '#android' },
  { label: 'Windows', href: '#windows' },
  { label: 'iPhone / iPad / macOS', href: '#apple' },
] as const

function StepNumber({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#0e3b77] text-white text-[12px] sm:text-[13px] font-bold"
    >
      {n}
    </span>
  )
}

function Step({
  n,
  title,
  children,
}: {
  n: number
  title?: string
  children: ReactNode
}) {
  return (
    <li className="flex items-start gap-3 sm:gap-3.5">
      <StepNumber n={n} />
      <div className="flex-1 min-w-0 pt-0.5 sm:pt-1 space-y-2.5">
        {title ? (
          <p className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#0e3b77] leading-snug">
            {title}
          </p>
        ) : null}
        <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-2.5">
          {children}
        </div>
      </div>
    </li>
  )
}

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-sm aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  )
}

function PrimaryButton({
  href,
  icon,
  children,
}: {
  href: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-lg bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-[14px] sm:text-[15px] font-semibold shadow-sm transition-colors"
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}

function SecondaryButton({
  href,
  icon,
  children,
}: {
  href: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-lg bg-white border border-[#0e3b77]/30 hover:border-[#0e3b77] hover:bg-[#eaf2fb] text-[#0e3b77] text-[14px] sm:text-[15px] font-semibold transition-colors"
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}

function PlatformCard({
  id,
  emoji,
  icon,
  title,
  subtitle,
  children,
}: {
  id: string
  emoji: string
  icon: ReactNode
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 bg-white rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-slate-100 overflow-hidden"
    >
      <header className="flex items-start sm:items-center gap-3 sm:gap-4 px-5 sm:px-8 py-5 sm:py-6 bg-[#eaf2fb]/60 border-b border-slate-100">
        <span className="shrink-0 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#0e3b77] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-[18px] sm:text-[22px] font-extrabold text-[#0e3b77] leading-tight">
            <span aria-hidden="true" className="mr-1.5">
              {emoji}
            </span>
            {title}
          </h2>
          <p className="mt-0.5 text-[12.5px] sm:text-[13px] text-slate-500">
            {subtitle}
          </p>
        </div>
      </header>
      <div className="px-5 sm:px-8 py-6 sm:py-8">{children}</div>
    </article>
  )
}

function AndroidCard() {
  return (
    <PlatformCard
      id="android"
      emoji="📱"
      icon={<Smartphone size={22} aria-hidden="true" />}
      title="How to Use iMD App on Android"
      subtitle="Install directly from the APK in a few quick steps."
    >
      <ol className="flex flex-col gap-5">
        <Step n={1} title="Download the APK">
          <p>
            Download the iMD App APK file using the button below.
          </p>
          <div className="pt-1">
            <PrimaryButton
              href={APK_URL}
              icon={<Download size={18} aria-hidden="true" />}
            >
              Download APK
            </PrimaryButton>
          </div>
        </Step>
        <Step n={2} title="Allow unknown sources">
          <p>
            Once the file is downloaded, tap it and enable{' '}
            <strong className="font-semibold text-[#0e3b77]">
              &ldquo;Allow installs from unknown sources&rdquo;
            </strong>{' '}
            for your browser or file manager (one-time setup).
          </p>
        </Step>
        <Step n={3} title="Install the app">
          <p>
            Tap{' '}
            <strong className="font-semibold text-[#0e3b77]">Install</strong>{' '}
            and wait for the installation to complete.
          </p>
        </Step>
        <Step n={4} title="Log in">
          <p>
            Open the app and log in using your{' '}
            <strong className="font-semibold text-[#0e3b77]">
              username and password
            </strong>
            .
          </p>
        </Step>
        <Step n={5} title="Start your journey">
          <p>
            Go to the{' '}
            <strong className="font-semibold text-[#0e3b77]">
              Downloads tab
            </strong>
            , search for your required Qbank, and start your academic journey.
          </p>
        </Step>
      </ol>
    </PlatformCard>
  )
}

function WindowsCard() {
  return (
    <PlatformCard
      id="windows"
      emoji="💻"
      icon={<Monitor size={22} aria-hidden="true" />}
      title="How to Use iMD App on Windows"
      subtitle="Run the iMD App on Windows using an Android emulator."
    >
      <div className="mb-6 sm:mb-7">
        <h3 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#0e3b77]">
          Video Tutorial
        </h3>
        <p className="mt-1.5 text-[13px] sm:text-[14px] text-slate-700 leading-relaxed">
          Watch the step-by-step tutorial on YouTube before you begin.
        </p>
        <div className="mt-3">
          <YouTubeEmbed
            id={WINDOWS_VIDEO_ID}
            title="How to install iMD App on Windows"
          />
        </div>
        <div className="mt-4">
          <SecondaryButton
            href={WINDOWS_VIDEO_URL}
            icon={<PlayCircle size={18} aria-hidden="true" />}
          >
            Watch on YouTube
          </SecondaryButton>
        </div>
      </div>

      <h3 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#0e3b77] mb-4">
        Steps
      </h3>
      <ol className="flex flex-col gap-5">
        <Step n={1} title="Install an Android emulator">
          <p>
            Download and install one of the following Android emulators on
            your Windows PC:
          </p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {EMULATORS.map((emu) => (
              <li key={emu.name}>
                <a
                  href={emu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 rounded-full bg-[#eaf2fb] hover:bg-[#dde9f7] text-[#0e3b77] text-[12.5px] sm:text-[13px] font-semibold transition-colors"
                >
                  {emu.name}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Step>
        <Step n={2} title="Download the iMD App APK">
          <p>Grab the latest APK file for the iMD App.</p>
          <div className="pt-1">
            <PrimaryButton
              href={APK_URL}
              icon={<Download size={18} aria-hidden="true" />}
            >
              Download APK
            </PrimaryButton>
          </div>
        </Step>
        <Step n={3} title="Open the APK with your emulator">
          <p>
            Right-click the downloaded APK and select{' '}
            <strong className="font-semibold text-[#0e3b77]">Open With</strong>{' '}
            your installed emulator.
          </p>
        </Step>
        <Step n={4} title="Launch the app">
          <p>Launch the iMD App from inside the emulator window.</p>
        </Step>
        <Step n={5} title="Log in">
          <p>
            Log in with your{' '}
            <strong className="font-semibold text-[#0e3b77]">
              username and password
            </strong>
            .
          </p>
        </Step>
        <Step n={6} title="Download your Qbank">
          <p>
            Open the{' '}
            <strong className="font-semibold text-[#0e3b77]">
              Downloads tab
            </strong>{' '}
            and download your desired Qbank to start studying.
          </p>
        </Step>
      </ol>
    </PlatformCard>
  )
}

function AppleCard() {
  return (
    <PlatformCard
      id="apple"
      emoji="🍎"
      icon={<Apple size={22} aria-hidden="true" />}
      title="How to Use iMD App on iPhone, iPad & macOS"
      subtitle="Activate via the iMD portal and the Labrange companion app."
    >
      <div className="mb-6 sm:mb-7">
        <h3 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#0e3b77]">
          Video Tutorial
        </h3>
        <p className="mt-1.5 text-[13px] sm:text-[14px] text-slate-700 leading-relaxed">
          Watch the step-by-step tutorial for iPhone, iPad and macOS.
        </p>
        <div className="mt-3">
          <YouTubeEmbed
            id={APPLE_VIDEO_ID}
            title="How to install iMD App on iPhone, iPad and macOS"
          />
        </div>
        <div className="mt-4">
          <SecondaryButton
            href={APPLE_VIDEO_URL}
            icon={<PlayCircle size={18} aria-hidden="true" />}
          >
            Watch on YouTube
          </SecondaryButton>
        </div>
      </div>

      <h3 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#0e3b77] mb-4">
        Steps
      </h3>
      <ol className="flex flex-col gap-5">
        <Step n={1} title="Open the iMD activation portal">
          <p>Visit the official iMD activation page in your browser.</p>
          <div className="pt-1">
            <PrimaryButton
              href={APPLE_PORTAL_URL}
              icon={<ExternalLink size={18} aria-hidden="true" />}
            >
              Open iOS / macOS Portal
            </PrimaryButton>
          </div>
        </Step>
        <Step n={2} title="Select your platform">
          <p>
            Choose{' '}
            <strong className="font-semibold text-[#0e3b77]">
              iOS / macOS
            </strong>{' '}
            from the available options.
          </p>
        </Step>
        <Step n={3} title="Enter your credentials">
          <p>
            Enter your{' '}
            <strong className="font-semibold text-[#0e3b77]">
              username and password
            </strong>
            .
          </p>
        </Step>
        <Step n={4} title="Generate &amp; copy the activation code">
          <p>
            Generate the activation code and{' '}
            <strong className="font-semibold text-[#0e3b77]">copy</strong> it to
            your clipboard.
          </p>
        </Step>
        <Step n={5} title="Install the Labrange app">
          <p>
            Install the{' '}
            <strong className="font-semibold text-[#0e3b77]">Labrange</strong>{' '}
            app from the App Store.
          </p>
          <div className="pt-1">
            <SecondaryButton
              href="https://apps.apple.com/app/labrange/id1448719466"
              icon={<ExternalLink size={18} aria-hidden="true" />}
            >
              Open App Store
            </SecondaryButton>
          </div>
        </Step>
        <Step n={6} title="Open Labrange">
          <p>Launch the Labrange app on your device.</p>
        </Step>
        <Step n={7} title="Paste the activation code">
          <p>Paste the copied activation code into the search field.</p>
        </Step>
        <Step n={8} title="Reopen and log in">
          <p>
            The app will close automatically. Reopen it and log in with your{' '}
            <strong className="font-semibold text-[#0e3b77]">
              username and password
            </strong>
            .
          </p>
        </Step>
        <Step n={9} title="Tap Download">
          <p>
            Tap the{' '}
            <strong className="font-semibold text-[#0e3b77]">Download</strong>{' '}
            button located in the upper-right corner.
          </p>
        </Step>
        <Step n={10} title="Get your Qbank">
          <p>
            Search for and download your desired Qbank and begin your learning
            journey.
          </p>
        </Step>
      </ol>
    </PlatformCard>
  )
}

export default function InstallPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Download & Install', path: '/install' },
  ]

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Download & Install iMD App',
            description:
              'Step-by-step instructions to download and install the iMD App on Android, Windows, iPhone, iPad and macOS.',
            path: '/install',
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <SrOnlyBreadcrumb items={breadcrumbs} />

    <div className="bg-[#eaf2fb] min-h-[60vh]">
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 text-center">
        <div className="container-main">
          <h1 className="font-display text-[24px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0e3b77] leading-tight">
            Download and Install iMD App
          </h1>
          <p className="mt-3 sm:mt-4 mx-auto max-w-xl text-[13.5px] sm:text-[15px] text-slate-600 leading-relaxed">
            Follow the simple, step-by-step guides for your device to start
            using the iMD App in minutes.
          </p>

          <nav
            aria-label="Jump to platform"
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center min-h-[40px] px-4 sm:px-5 rounded-full bg-white border border-slate-200 text-[#0e3b77] text-[12.5px] sm:text-[13px] font-semibold shadow-sm hover:bg-[#0e3b77] hover:text-white hover:border-[#0e3b77] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto px-4 sm:px-6 max-w-[720px] flex flex-col gap-6 sm:gap-8">
          <AndroidCard />
          <WindowsCard />
          <AppleCard />
        </div>
      </section>
    </div>
    </>
  )
}
