'use client'

import type { ReactNode } from 'react'

interface Props {
  href: string
  className?: string
  children: ReactNode
}

export default function InstantAnchorLink({ href, className, children }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const id = href.replace(/^#/, '')
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    target.scrollIntoView()
    html.style.scrollBehavior = prev
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
