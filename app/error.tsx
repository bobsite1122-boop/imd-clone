'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-[#f3f6fb]">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-2 text-sm text-slate-500 max-w-md">
        We could not load this page. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-md bg-[#0e3b77] hover:bg-[#0a2d5e] text-white text-sm font-semibold transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  )
}
