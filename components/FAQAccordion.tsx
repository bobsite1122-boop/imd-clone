'use client'

import { useState } from 'react'

export type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
  startIndex?: number
}

function CaretDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      width={11}
      height={7}
      aria-hidden="true"
      className={`shrink-0 fill-[#0e3b77] transition-transform duration-200 ${
        open ? 'rotate-180' : ''
      }`}
    >
      <path d="M0 0 L12 0 L6 8 Z" />
    </svg>
  )
}

export default function FAQAccordion({ items, startIndex = 1 }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const number = startIndex + index
        return (
          <div
            key={index}
            className="bg-white rounded-[4px] border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-4 sm:py-3 text-left min-h-[44px] cursor-pointer hover:bg-slate-50/60 transition-colors"
            >
              <span className="text-[12.5px] sm:text-[13px] text-slate-700 font-normal leading-snug">
                <span className="mr-1">{number}.</span>
                {item.question}
              </span>
              <CaretDown open={isOpen} />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 pt-0 text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100">
                  <span className="block pt-3">{item.answer}</span>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
