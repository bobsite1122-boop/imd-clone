'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="bg-white rounded-card border border-gray-100 shadow-card divide-y divide-gray-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 px-6 cursor-pointer hover:text-brand transition-colors text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-800 text-base flex-1 pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-brand shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed px-6 pb-5">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
