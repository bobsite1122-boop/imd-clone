'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import type { FaqEntryContent } from '@/lib/cms/schemas'
import { SPECIAL_FAQ_SLUGS } from '@/lib/cms/schemas'
import { saveCmsData, StatusMessage, type SaveStatus } from '@/components/admin/cms-utils'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 150)
}

type Props = {
  initialFaqs: FaqEntryContent[]
}

export default function FaqEditor({ initialFaqs }: Props) {
  const [faqs, setFaqs] = useState<FaqEntryContent[]>(
    [...initialFaqs].sort((a, b) => a.order - b.order),
  )
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()

  const updateFaq = (index: number, patch: Partial<FaqEntryContent>) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, ...patch } : faq)),
    )
  }

  const addFaq = () => {
    const maxOrder = Math.max(0, ...faqs.map((f) => f.order))
    setFaqs((prev) => [
      ...prev,
      {
        slug: `new-faq-${Date.now()}`,
        question: 'New question?',
        answer: 'Answer here.',
        category: 'subscription',
        order: maxOrder + 1,
      },
    ])
  }

  const removeFaq = (index: number) => {
    if (faqs.length <= 1) return
    if (!confirm('Delete this FAQ item?')) return
    setFaqs((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    setStatus('saving')
    setErrorMessage(undefined)
    const result = await saveCmsData('/api/update-faq', faqs)
    if (result.success) {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setErrorMessage(result.error)
      setStatus('error')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">FAQ Items</h2>
          <p className="text-sm text-gray-500 mt-1">
            Edit questions and answers on the FAQs page.
          </p>
        </div>
        <button
          type="button"
          onClick={addFaq}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Plus size={16} />
          Add FAQ
        </button>
      </div>

      <StatusMessage status={status} message={errorMessage} />

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isSpecial = SPECIAL_FAQ_SLUGS.includes(
            faq.slug as (typeof SPECIAL_FAQ_SLUGS)[number],
          )
          return (
            <div
              key={`${faq.slug}-${index}`}
              className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">FAQ #{faq.order}</h3>
                  {isSpecial && (
                    <p className="text-xs text-amber-700 mt-1">
                      This FAQ has special layout (contact links or resources button).
                      Avoid changing its slug.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  disabled={faqs.length <= 1}
                  className="text-red-600 hover:text-red-800 disabled:opacity-40 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Delete FAQ"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block md:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Question</span>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const question = e.target.value
                      updateFaq(index, {
                        question,
                        slug: isSpecial ? faq.slug : slugify(question) || faq.slug,
                      })
                    }}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Slug</span>
                  <input
                    type="text"
                    value={faq.slug}
                    disabled={isSpecial}
                    onChange={(e) => updateFaq(index, { slug: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm font-mono disabled:bg-slate-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Category</span>
                  <select
                    value={faq.category}
                    onChange={(e) =>
                      updateFaq(index, {
                        category: e.target.value as FaqEntryContent['category'],
                      })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                  >
                    <option value="subscription">Subscription</option>
                    <option value="app">App</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Order</span>
                  <input
                    type="number"
                    min={1}
                    value={faq.order}
                    onChange={(e) =>
                      updateFaq(index, { order: parseInt(e.target.value, 10) || 1 })
                    }
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Answer</span>
                <textarea
                  value={faq.answer}
                  onChange={(e) => updateFaq(index, { answer: e.target.value })}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </label>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={status === 'saving'}
        className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-60"
      >
        Save FAQ
      </button>
    </div>
  )
}
