'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroImage() {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex flex-col items-center justify-center h-80 w-full max-w-[480px] gap-3">
        <span className="text-8xl">🩺</span>
        <p className="text-xl text-brand font-bold">iMD App</p>
      </div>
    )
  }

  return (
    <Image
      src="/mockup.png"
      alt="iMD App mockup"
      width={480}
      height={480}
      priority
      className="rounded-3xl shadow-2xl object-contain w-full max-w-[480px] h-auto"
      onError={() => setErrored(true)}
    />
  )
}
