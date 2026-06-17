'use client'

export type SaveStatus = 'idle' | 'saving' | 'success' | 'error'

export function StatusMessage({
  status,
  message,
}: {
  status: SaveStatus
  message?: string
}) {
  if (status === 'idle') return null

  const styles = {
    saving: 'bg-blue-50 text-blue-700 border-blue-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    error: 'bg-red-50 text-red-700 border-red-200',
  }

  const labels = {
    saving: 'Saving…',
    success: message ?? 'Saved successfully.',
    error: message ?? 'Something went wrong.',
  }

  if (status === 'saving') {
    return (
      <p className={`rounded-lg border px-4 py-3 text-sm ${styles.saving}`}>
        {labels.saving}
      </p>
    )
  }

  return (
    <p
      className={`rounded-lg border px-4 py-3 text-sm ${status === 'success' ? styles.success : styles.error}`}
      role="alert"
    >
      {labels[status]}
    </p>
  )
}

export async function saveCmsData(
  endpoint: string,
  data: unknown,
): Promise<{ success: true } | { success: false; error: string }> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = (await res.json()) as { error?: string }

  if (!res.ok) {
    return { success: false, error: json.error ?? 'Failed to save' }
  }

  return { success: true }
}
