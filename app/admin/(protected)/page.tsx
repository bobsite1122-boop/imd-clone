import Link from 'next/link'
import { CreditCard, Download, HelpCircle, Database, Bot } from 'lucide-react'
import SeedButton from '@/components/admin/SeedButton'

const cards = [
  {
    href: '/admin/pricing',
    title: 'Pricing Plans',
    description: 'Edit subscription plans on the home page',
    icon: CreditCard,
  },
  {
    href: '/admin/install',
    title: 'Install',
    description: 'Edit the APK download URL on the install page',
    icon: Download,
  },
  {
    href: '/admin/faqs',
    title: 'FAQ',
    description: 'Manage frequently asked questions',
    icon: HelpCircle,
  },
  {
    href: '/admin/resources',
    title: 'Resources',
    description: 'Edit databases and resource lists',
    icon: Database,
  },
  {
    href: '/admin/ai',
    title: 'AI Assistant',
    description: 'Make changes using plain language',
    icon: Bot,
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage website content. Layout and design cannot be changed from here.
        </p>
      </div>

      <SeedButton />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map(({ href, title, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-sm transition min-h-[44px]"
          >
            <Icon className="text-blue-600 mb-3" size={24} />
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
