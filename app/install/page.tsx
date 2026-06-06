'use client'

import { useState, type ReactNode } from 'react'

type PlatformId = 'iOS' | 'Android' | 'macOS' | 'Windows'

const TABS: PlatformId[] = ['iOS', 'Android', 'macOS', 'Windows']

const APK_URL = 'https://sg.imedicaldoctor.net/imd192.apk'

// YouTube video IDs used inside the platform instructions.
// Replace these with the latest video IDs from the iMD App YouTube channel
// when they change on https://imdresources.com/install/.
const ANDROID_VIDEO_ID = 'kJyNoecmbwQ'
const WINDOWS_DIRECT_VIDEO_ID = 'Y9NWj0J4_kk'
const WINDOWS_EMULATOR_VIDEO_ID = 'Ga9z_Z13C0g'

function StepBullet() {
  return (
    <span
      aria-hidden="true"
      className="mt-[7px] sm:mt-[8px] shrink-0 w-[10px] h-[10px] rounded-full bg-[#0e3b77]"
    />
  )
}

function StepText({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] sm:text-[14px] text-[#0e3b77] leading-relaxed">
      {children}
    </p>
  )
}

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="mt-3 relative w-full overflow-hidden rounded-lg bg-black shadow-sm aspect-video">
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

function ActivationForm({ platform }: { platform: PlatformId }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi, I'd like the ${platform} activation code.\nUsername: ${username}\nPassword: ${password}`
    const url = `https://wa.me/923352220382?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
      <label className="sr-only" htmlFor={`${platform}-username`}>
        Username
      </label>
      <input
        id={`${platform}-username`}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        autoComplete="username"
        className="w-full h-11 rounded-md border border-slate-300 bg-white px-3 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e3b77]/40 focus:border-[#0e3b77]"
      />
      <label className="sr-only" htmlFor={`${platform}-password`}>
        Password
      </label>
      <input
        id={`${platform}-password`}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        autoComplete="current-password"
        className="w-full h-11 rounded-md border border-slate-300 bg-white px-3 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e3b77]/40 focus:border-[#0e3b77]"
      />
      <button
        type="submit"
        className="w-full min-h-[44px] rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-sm font-semibold transition-colors"
      >
        Fetch Activation Code
      </button>
    </form>
  )
}

function ActivationSteps({
  platform,
  thirdStep,
}: {
  platform: PlatformId
  thirdStep: string
}) {
  return (
    <ol className="mt-3 sm:mt-4 flex flex-col gap-5">
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>Enter your Username &amp; Password:</StepText>
          <ActivationForm platform={platform} />
        </div>
      </li>
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>Copy the activation code.</StepText>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>{thirdStep}</StepText>
        </div>
      </li>
    </ol>
  )
}

function AndroidSteps() {
  return (
    <ol className="mt-3 sm:mt-4 flex flex-col gap-5">
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>Direct Download Link:</StepText>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center min-h-[52px] py-3.5 px-4 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-[15px] sm:text-base font-semibold transition-colors"
          >
            Download APK
          </a>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>Watch this video for better understanding</StepText>
          <YouTubeEmbed
            id={ANDROID_VIDEO_ID}
            title="How to install iMD App on Android"
          />
        </div>
      </li>
    </ol>
  )
}

function WindowsSteps() {
  return (
    <ol className="mt-3 sm:mt-4 flex flex-col gap-6">
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>
            <span aria-hidden="true">💻💻 </span>
            <span className="font-semibold">In Windows:</span>
          </StepText>
          <p className="mt-3 text-[13px] sm:text-[14px] text-[#0e3b77] leading-relaxed">
            If <strong className="font-semibold">16GB or higher RAM</strong>{' '}
            &mdash; follow the direct installation video guide:
          </p>
          <YouTubeEmbed
            id={WINDOWS_DIRECT_VIDEO_ID}
            title="Windows direct installation guide"
          />
        </div>
      </li>
      <li className="flex items-start gap-3">
        <StepBullet />
        <div className="flex-1 min-w-0">
          <StepText>
            If <strong className="font-semibold">8GB or lower RAM</strong>{' '}
            (or the above method is not available despite RAM) &mdash; install
            through emulator following this video:
          </StepText>
          <YouTubeEmbed
            id={WINDOWS_EMULATOR_VIDEO_ID}
            title="Windows emulator installation guide"
          />
        </div>
      </li>
    </ol>
  )
}

function PlatformContent({ tab }: { tab: PlatformId }) {
  switch (tab) {
    case 'iOS':
      return (
        <ActivationSteps
          platform="iOS"
          thirdStep="Install the app and activate as guided. DM us for futher help."
        />
      )
    case 'macOS':
      return (
        <ActivationSteps
          platform="macOS"
          thirdStep="Install the app as guided or contact us to guide you."
        />
      )
    case 'Android':
      return <AndroidSteps />
    case 'Windows':
      return <WindowsSteps />
  }
}

function PlatformTabs({
  active,
  onChange,
}: {
  active: PlatformId
  onChange: (tab: PlatformId) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Choose a platform"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
    >
      {TABS.map((tab) => {
        const isActive = active === tab
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls="platform-instructions"
            onClick={() => onChange(tab)}
            className={`min-h-[36px] px-5 sm:px-6 rounded-full text-[13px] sm:text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-[#0e3b77] text-white shadow-sm'
                : 'bg-[#eaf2fb] text-[#0e3b77] hover:bg-[#dde9f7]'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

export default function InstallPage() {
  const [activeTab, setActiveTab] = useState<PlatformId>('iOS')

  return (
    <div className="bg-[#eaf2fb] min-h-[60vh]">
      {/* Page heading */}
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 text-center">
        <div className="container-main">
          <h1 className="font-display text-[24px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0e3b77] leading-tight">
            Download and Install iMD App
          </h1>
        </div>
      </section>

      {/* Card */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto px-4 sm:px-6 max-w-[640px]">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-slate-100 px-5 sm:px-8 py-7 sm:py-9">
            <h2 className="text-center font-display text-[20px] sm:text-[22px] font-extrabold text-[#0e3b77]">
              Choose Your Platform
            </h2>

            <div className="mt-5 sm:mt-6">
              <PlatformTabs active={activeTab} onChange={setActiveTab} />
            </div>

            <div
              id="platform-instructions"
              role="tabpanel"
              aria-label={`${activeTab} instructions`}
            >
              <h3 className="mt-7 sm:mt-8 font-display text-[18px] sm:text-[20px] font-extrabold text-[#0e3b77]">
                {activeTab} Instructions
              </h3>

              <PlatformContent tab={activeTab} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
