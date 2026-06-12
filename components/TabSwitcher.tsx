'use client'

type TabSwitcherProps = {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabSwitcher({ tabs, activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-xl w-fit mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 min-h-[44px] ${
            activeTab === tab
              ? 'bg-brand text-white shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
