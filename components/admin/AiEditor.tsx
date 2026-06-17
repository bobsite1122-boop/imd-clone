'use client'

import { useState } from 'react'
import type { CmsContentId } from '@/lib/cms/schemas'
import { saveCmsData, StatusMessage, type SaveStatus } from '@/components/admin/cms-utils'

const contentTypes: { value: CmsContentId; label: string }[] = [
  { value: 'pricing', label: 'Pricing Plans' },
  { value: 'faq', label: 'FAQ' },
  { value: 'resources', label: 'Resources' },
]

export default function AiEditor() {
  const [contentType, setContentType] = useState<CmsContentId>('pricing')
  const [instruction, setInstruction] = useState('')
  const [preview, setPreview] = useState<unknown>(null)
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!instruction.trim()) return
    setLoading(true)
    setStatus('idle')
    setErrorMessage(undefined)
    setPreview(null)

    try {
      const res = await fetch('/api/admin/ai-edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contentType, instruction, previewOnly: true }),
      })
      const json = (await res.json()) as { data?: unknown; error?: string }
      if (!res.ok) {
        setErrorMessage(json.error ?? 'AI request failed')
        setStatus('error')
        return
      }
      setPreview(json.data)
    } catch {
      setErrorMessage('Failed to connect to AI service')
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async () => {
    if (!preview) return
    setStatus('saving')
    setErrorMessage(undefined)

    const endpoints: Record<CmsContentId, string> = {
      pricing: '/api/update-pricing',
      faq: '/api/update-faq',
      resources: '/api/update-resources',
    }

    const result = await saveCmsData(endpoints[contentType], preview)
    if (result.success) {
      setStatus('success')
      setPreview(null)
      setInstruction('')
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setErrorMessage(result.error)
      setStatus('error')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">AI Assistant</h2>
        <p className="text-sm text-gray-500 mt-1">
          Describe changes in plain language. AI will update structured content only
          — never code or layout.
        </p>
      </div>

      <StatusMessage status={status} message={errorMessage} />

      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Content type</span>
          <select
            value={contentType}
            onChange={(e) => {
              setContentType(e.target.value as CmsContentId)
              setPreview(null)
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
          >
            {contentTypes.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Instruction</span>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder='e.g. "Increase the 6-month plan price to $55"'
            rows={4}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </label>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading || !instruction.trim()}
          className="min-h-[44px] px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? 'Generating preview…' : 'Generate Preview'}
        </button>
      </div>

      {preview !== null && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4">
          <h3 className="font-semibold text-slate-900">Preview changes</h3>
          <pre className="overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-xs max-h-96">
            {JSON.stringify(preview, null, 2)}
          </pre>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleApply}
              disabled={status === 'saving'}
              className="min-h-[44px] px-6 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 disabled:opacity-60"
            >
              Apply Changes
            </button>
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="min-h-[44px] px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50"
            >
              Discard Preview
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
