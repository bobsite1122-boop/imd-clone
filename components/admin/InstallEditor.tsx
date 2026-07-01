'use client'

import { useState } from 'react'
import type { InstallContent } from '@/lib/cms/schemas'
import { saveCmsData, StatusMessage, type SaveStatus } from '@/components/admin/cms-utils'

type Props = {
  initialSettings: InstallContent
}

export default function InstallEditor({ initialSettings }: Props) {
  const [settings, setSettings] = useState<InstallContent>(initialSettings)
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()

  const handleSave = async () => {
    setStatus('saving')
    setErrorMessage(undefined)
    const result = await saveCmsData('/api/update-install', settings)
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
      <div>
        <h2 className="text-xl font-bold text-slate-900">Install Settings</h2>
        <p className="text-sm text-gray-500 mt-1">
          Edit the APK download URL used on the install page.
        </p>
      </div>

      <StatusMessage status={status} message={errorMessage} />

      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Download APK URL</span>
          <input
            type="url"
            value={settings.downloadApkUrl}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, downloadApkUrl: e.target.value }))
            }
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
            placeholder="https://example.com/app.apk"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={status === 'saving'}
        className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-60"
      >
        Save Install Settings
      </button>
    </div>
  )
}
