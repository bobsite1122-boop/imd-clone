import { Smartphone, Laptop, Monitor, Globe } from 'lucide-react'

const platforms = [
  { label: 'Android', icon: Smartphone, iconClass: 'text-green-500' },
  { label: 'iOS', icon: Smartphone, iconClass: 'text-gray-700' },
  { label: 'macOS', icon: Laptop, iconClass: 'text-gray-600' },
  { label: 'Windows', icon: Monitor, iconClass: 'text-blue-500' },
  { label: 'Chrome Browser', icon: Globe, iconClass: 'text-yellow-500' },
]

export default function PlatformBadges() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container-main">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
          Fully Available on All Your Devices
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {platforms.map((platform) => (
            <div
              key={platform.label}
              className="bg-white border border-gray-200 rounded-pill px-5 py-2.5 flex items-center gap-2 shadow-sm text-sm font-medium text-gray-600"
            >
              <platform.icon size={18} className={platform.iconClass} aria-hidden="true" />
              {platform.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
