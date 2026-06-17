'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import type { PlanContent } from '@/lib/cms/schemas'
import { saveCmsData, StatusMessage, type SaveStatus } from '@/components/admin/cms-utils'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

type Props = {
  initialPlans: PlanContent[]
}

export default function PricingEditor({ initialPlans }: Props) {
  const [plans, setPlans] = useState<PlanContent[]>(initialPlans)
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()

  const updatePlan = (index: number, patch: Partial<PlanContent>) => {
    setPlans((prev) =>
      prev.map((plan, i) => (i === index ? { ...plan, ...patch } : plan)),
    )
  }

  const addPlan = () => {
    setPlans((prev) => [
      ...prev,
      {
        slug: `new-plan-${Date.now()}`,
        name: 'New Plan',
        price: '$0',
        days: '30 Days',
        isPopular: false,
        features: ['Feature 1'],
      },
    ])
  }

  const removePlan = (index: number) => {
    if (plans.length <= 1) return
    if (!confirm('Delete this plan?')) return
    setPlans((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    setStatus('saving')
    setErrorMessage(undefined)
    const result = await saveCmsData('/api/update-pricing', plans)
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
          <h2 className="text-xl font-bold text-slate-900">Pricing Plans</h2>
          <p className="text-sm text-gray-500 mt-1">
            Edit subscription plans shown on the home page.
          </p>
        </div>
        <button
          type="button"
          onClick={addPlan}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Plus size={16} />
          Add Plan
        </button>
      </div>

      <StatusMessage status={status} message={errorMessage} />

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <div
            key={`${plan.slug}-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-slate-900">Plan {index + 1}</h3>
              <button
                type="button"
                onClick={() => removePlan(index)}
                disabled={plans.length <= 1}
                className="text-red-600 hover:text-red-800 disabled:opacity-40 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Delete plan"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  value={plan.name}
                  onChange={(e) => {
                    const name = e.target.value
                    updatePlan(index, { name, slug: slugify(name) || plan.slug })
                  }}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Slug</span>
                <input
                  type="text"
                  value={plan.slug}
                  onChange={(e) => updatePlan(index, { slug: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm font-mono"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Price</span>
                <input
                  type="text"
                  value={plan.price}
                  onChange={(e) => updatePlan(index, { price: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Duration</span>
                <input
                  type="text"
                  value={plan.days}
                  onChange={(e) => updatePlan(index, { days: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                />
              </label>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={plan.isPopular}
                onChange={(e) => updatePlan(index, { isPopular: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Mark as popular</span>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                Features (one per line)
              </span>
              <textarea
                value={plan.features.join('\n')}
                onChange={(e) =>
                  updatePlan(index, {
                    features: e.target.value.split('\n').filter(Boolean),
                  })
                }
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={status === 'saving'}
        className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-60"
      >
        Save Pricing
      </button>
    </div>
  )
}
