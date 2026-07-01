'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
  Bot,
  CreditCard,
  Download,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Database,
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/pricing', label: 'Pricing', icon: CreditCard },
  { href: '/admin/install', label: 'Install', icon: Download },
  { href: '/admin/faqs', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/resources', label: 'Resources', icon: Database },
  { href: '/admin/ai', label: 'AI Assistant', icon: Bot },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 min-h-[44px] text-sm font-medium transition-colors ${
              active
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Icon size={18} aria-hidden="true" />
            {label}
          </Link>
        )
      })}
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: '/admin/login' })}
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 min-h-[44px] text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-700 transition-colors mt-4"
      >
        <LogOut size={18} aria-hidden="true" />
        Log out
      </button>
    </nav>
  )
}
