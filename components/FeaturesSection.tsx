import { BookOpen, Target, Video, Smartphone, WifiOff, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: BookOpen,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: '45,000+ Resources',
    description:
      'Massive library of medical databases, textbooks, and references all in one app.',
  },
  {
    icon: Target,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    title: 'USMLE QBanks',
    description:
      'Full access to UWorld, Amboss, Kaplan and more question banks.',
  },
  {
    icon: Video,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    title: 'Video Lectures',
    description:
      'Sketchy, Pathoma, Boards & Beyond and top educator content.',
  },
  {
    icon: Smartphone,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    title: 'All Devices',
    description:
      'Works on Android, iOS, Windows, macOS and Chrome browser seamlessly.',
  },
  {
    icon: WifiOff,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    title: 'Offline Access',
    description:
      'Download content and study without an internet connection.',
  },
  {
    icon: RefreshCw,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    title: 'Always Updated',
    description:
      'Databases auto-update so you always have the latest medical content.',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-blue-50/40 to-white section-pad"
    >
      <div className="container-main">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900">
            Everything You Need To Ace USMLE in One Platform
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Gain access to all USMLE resources — lectures, QBanks, and
            self-assessments in one subscription.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-all border border-gray-100"
            >
              <div className={`${feature.iconBg} p-3 rounded-xl w-fit mb-4`}>
                <feature.icon
                  size={24}
                  className={feature.iconColor}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
