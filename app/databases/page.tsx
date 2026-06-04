import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Target, Play, BookOpen, Trophy, Stethoscope, Pill,
  Layers, Activity, Microscope, FlaskConical, Atom, Scissors,
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Databases & Resources | iMD Medical Resources',
  description: 'Browse the full library of 45,000+ medical databases, QBanks, video lectures, textbooks, and references included in your iMD subscription.',
}

type Resource = {
  category: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  items: string[]
}

const resources: Resource[] = [
  {
    category: 'QBanks',
    icon: Target,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    items: ['UWorld', 'Amboss', 'Kaplan QBank', 'OnlineMedEd'],
  },
  {
    category: 'Video Lectures',
    icon: Play,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    items: ['Sketchy', 'Pathoma', 'Boards & Beyond', 'Osmosis'],
  },
  {
    category: 'Textbooks',
    icon: BookOpen,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    items: ["First Aid", 'Robbins Pathology', "Harrison's", "Gray's Anatomy"],
  },
  {
    category: 'USMLE Prep',
    icon: Trophy,
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    items: ['NBME Practice Exams', 'UWSim', 'Free 120', 'NBME Self-Assessments'],
  },
  {
    category: 'Clinical References',
    icon: Stethoscope,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    items: ['UpToDate', 'Epocrates', 'DynaMed', 'BMJ Best Practice'],
  },
  {
    category: 'Pharmacology',
    icon: Pill,
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    items: ['Rx Bricks', 'Picmonic Pharm', 'Kaplan Pharm'],
  },
  {
    category: 'Anatomy',
    icon: Layers,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    items: ["Netter's Atlas", "Acland's Videos", "Gray's Atlas"],
  },
  {
    category: 'Physiology',
    icon: Activity,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    items: ['BRS Physiology', 'Costanzo', 'Guyton & Hall'],
  },
  {
    category: 'Microbiology',
    icon: Microscope,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    items: ['Sketchy Micro', 'Clinical Micro Made Ridiculously Simple'],
  },
  {
    category: 'Pathology',
    icon: FlaskConical,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    items: ['Pathoma', 'Goljan Rapid Review', 'Robbins Basic'],
  },
  {
    category: 'Biochemistry',
    icon: Atom,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    items: ["Lippincott", "Harper's Biochemistry", 'Kaplan Biochem'],
  },
  {
    category: 'Surgery',
    icon: Scissors,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    items: ["Schwartz's Surgery", 'Bailey & Love', 'Sabiston'],
  },
]

export default function DatabasesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 text-center">
        <div className="container-main">
          <h1 className="font-display text-4xl font-black text-slate-900">
            Databases &amp; Resources
          </h1>
          <p className="text-gray-500 text-lg mt-3">
            Everything included in your subscription
          </p>
        </div>
      </section>

      {/* Cards */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <article
              key={resource.category}
              className="bg-white border border-gray-100 rounded-card p-5 shadow-card hover:shadow-card-hover transition-all"
            >
              {/* Icon */}
              <div className={`${resource.iconBg} p-2 rounded-lg w-fit mb-3`}>
                <resource.icon size={20} className={resource.iconColor} aria-hidden="true" />
              </div>

              {/* Category name */}
              <h2 className="font-bold text-slate-800 text-base mb-3">
                {resource.category}
              </h2>

              {/* Resource pills */}
              <div className="flex flex-wrap gap-1.5">
                {resource.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-50 text-gray-600 text-xs px-2.5 py-1 rounded-pill border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-20 bg-brand/5 rounded-2xl mt-12 px-6">
          <h2 className="font-display text-3xl font-black text-slate-900">
            Want Access to All of These?
          </h2>
          <p className="text-gray-500 mt-3">
            Subscribe once and unlock every database, textbook, and lecture instantly.
          </p>
          <Link
            href="/#subscribenow"
            className="btn-primary inline-flex items-center gap-2 mt-6 min-h-[44px]"
          >
            Subscribe Now
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  )
}
