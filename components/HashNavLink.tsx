'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'

type HashNavLinkProps = {
  href: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return false

  const html = document.documentElement
  const prev = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  target.scrollIntoView()
  html.style.scrollBehavior = prev
  return true
}

export default function HashNavLink({
  href,
  className,
  children,
  onClick,
}: HashNavLinkProps) {
  const pathname = usePathname()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.()

    // Homepage section: /#section-id
    if (href.startsWith('/#')) {
      const id = href.slice(2)

      if (pathname === '/') {
        e.preventDefault()
        scrollToId(id)
        window.history.replaceState(null, '', `#${id}`)
        return
      }

      e.preventDefault()
      window.location.assign(href)
      return
    }

    // Same-page anchor: #section-id
    if (href.startsWith('#')) {
      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()
      scrollToId(id)
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
