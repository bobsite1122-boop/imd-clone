'use client'

import { useState } from 'react'
import { Database } from 'lucide-react'

export default function SeedButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSeed = async () => {
    if (!confirm('Seed CMS database from JSON files? Only empty records will be created.')) {
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/admin/seed', { method: 'POST' })
      const json = (await res.json()) as { seeded?: string[]; error?: string }
      if (!res.ok) {
        setMessage(json.error ?? 'Seed failed')
        setStatus('error')
        return
      }
      setMessage(
        json.seeded?.length
          ? `Seeded: ${json.seeded.join(', ')}`
          : 'Database already has content — nothing to seed.',
      )
      setStatus('done')
    } catch {
      setMessage('Failed to seed database')
      setStatus('error')
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6">
      <div className="flex items-start gap-3">
        <Database className="text-blue-600 shrink-0 mt-0.5" size={20} />
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">Initialize Database</h3>
          <p className="text-sm text-gray-500 mt-1">
            First-time setup: copy content from JSON files into Supabase.
          </p>
          {message && (
            <p
              className={`text-sm mt-2 ${status === 'error' ? 'text-red-600' : 'text-emerald-600'}`}
            >
              {message}
            </p>
          )}
          <button
            type="button"
            onClick={handleSeed}
            disabled={status === 'loading'}
            className="mt-3 min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            {status === 'loading' ? 'Seeding…' : 'Seed from JSON'}
          </button>
        </div>
      </div>
    </div>
  )
}
