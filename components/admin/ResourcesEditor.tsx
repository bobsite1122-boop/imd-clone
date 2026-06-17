'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import type { ResourcesContent } from '@/lib/cms/schemas'
import { saveCmsData, StatusMessage, type SaveStatus } from '@/components/admin/cms-utils'

type Props = {
  initialResources: ResourcesContent
}

export default function ResourcesEditor({ initialResources }: Props) {
  const [resources, setResources] = useState<ResourcesContent>(initialResources)
  const [status, setStatus] = useState<SaveStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()

  const updateCategory = (
    catIndex: number,
    patch: Partial<ResourcesContent['categories'][number]>,
  ) => {
    setResources((prev) => ({
      ...prev,
      categories: prev.categories.map((cat, i) =>
        i === catIndex ? { ...cat, ...patch } : cat,
      ),
    }))
  }

  const updateCategoryItem = (catIndex: number, itemIndex: number, value: string) => {
    setResources((prev) => ({
      ...prev,
      categories: prev.categories.map((cat, i) =>
        i === catIndex
          ? {
              ...cat,
              items: cat.items.map((item, j) => (j === itemIndex ? value : item)),
            }
          : cat,
      ),
    }))
  }

  const addCategoryItem = (catIndex: number) => {
    setResources((prev) => ({
      ...prev,
      categories: prev.categories.map((cat, i) =>
        i === catIndex ? { ...cat, items: [...cat.items, 'New item'] } : cat,
      ),
    }))
  }

  const removeCategoryItem = (catIndex: number, itemIndex: number) => {
    setResources((prev) => ({
      ...prev,
      categories: prev.categories.map((cat, i) =>
        i === catIndex && cat.items.length > 1
          ? { ...cat, items: cat.items.filter((_, j) => j !== itemIndex) }
          : cat,
      ),
    }))
  }

  const addCategory = () => {
    setResources((prev) => ({
      ...prev,
      categories: [
        ...prev.categories,
        { emoji: '📁', title: 'New Category', more: false, items: ['Item 1'] },
      ],
    }))
  }

  const removeCategory = (catIndex: number) => {
    if (resources.categories.length <= 1) return
    if (!confirm('Delete this category?')) return
    setResources((prev) => ({
      ...prev,
      categories: prev.categories.filter((_, i) => i !== catIndex),
    }))
  }

  const handleSave = async () => {
    setStatus('saving')
    setErrorMessage(undefined)
    const result = await saveCmsData('/api/update-resources', resources)
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
          <h2 className="text-xl font-bold text-slate-900">Resources</h2>
          <p className="text-sm text-gray-500 mt-1">
            Edit resource categories on the Databases page.
          </p>
        </div>
        <button
          type="button"
          onClick={addCategory}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Plus size={16} />
          Add Category
        </button>
      </div>

      <StatusMessage status={status} message={errorMessage} />

      <div className="space-y-4">
        {resources.categories.map((category, catIndex) => (
          <div
            key={`cat-${catIndex}`}
            className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-slate-900">Category {catIndex + 1}</h3>
              <button
                type="button"
                onClick={() => removeCategory(catIndex)}
                disabled={resources.categories.length <= 1}
                className="text-red-600 hover:text-red-800 disabled:opacity-40 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Delete category"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Emoji</span>
                <input
                  type="text"
                  value={category.emoji}
                  onChange={(e) => updateCategory(catIndex, { emoji: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-slate-700">Title</span>
                <input
                  type="text"
                  value={category.title}
                  onChange={(e) => updateCategory(catIndex, { title: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                />
              </label>
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={category.more ?? false}
                onChange={(e) => updateCategory(catIndex, { more: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Show &quot;&amp; Many More!&quot;</span>
            </label>

            <div className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Items</span>
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      updateCategoryItem(catIndex, itemIndex, e.target.value)
                    }
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeCategoryItem(catIndex, itemIndex)}
                    disabled={category.items.length <= 1}
                    className="text-red-600 hover:text-red-800 disabled:opacity-40 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addCategoryItem(catIndex)}
                className="text-sm text-blue-600 hover:text-blue-800 min-h-[44px]"
              >
                + Add item
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 space-y-4">
        <h3 className="font-semibold text-slate-900">Books Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Emoji</span>
            <input
              type="text"
              value={resources.booksSection.emoji}
              onChange={(e) =>
                setResources((prev) => ({
                  ...prev,
                  booksSection: { ...prev.booksSection, emoji: e.target.value },
                }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-slate-700">Title</span>
            <input
              type="text"
              value={resources.booksSection.title}
              onChange={(e) =>
                setResources((prev) => ({
                  ...prev,
                  booksSection: { ...prev.booksSection, title: e.target.value },
                }))
              }
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 min-h-[44px] text-sm"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Body text</span>
          <textarea
            value={resources.booksSection.body}
            onChange={(e) =>
              setResources((prev) => ({
                ...prev,
                booksSection: { ...prev.booksSection, body: e.target.value },
              }))
            }
            rows={3}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={status === 'saving'}
        className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-60"
      >
        Save Resources
      </button>
    </div>
  )
}
