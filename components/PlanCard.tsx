import Link from 'next/link'
import { Check } from 'lucide-react'
import type { Plan } from '@/lib/plans'

const NAVY = '#0d1b3e'

type PlanCardProps = {
  plan: Plan
  linkTitle?: boolean
}

export default function PlanCard({ plan, linkTitle = false }: PlanCardProps) {
  const titleContent = (
    <h3
      className="text-xs md:text-sm font-semibold text-center mb-2 tracking-wide"
      style={{ color: NAVY }}
    >
      {plan.name}
    </h3>
  )

  return (
    <article className="bg-white border border-gray-200 rounded-sm p-5 flex flex-col w-full max-w-sm mx-auto md:max-w-none">
      {linkTitle ? (
        <Link
          href={`/plans/${plan.slug}`}
          aria-label={`View ${plan.name} details`}
          className="block"
        >
          {titleContent}
        </Link>
      ) : (
        titleContent
      )}

      <p
        className="text-center font-display font-black text-[2.8rem] sm:text-[3.2rem] md:text-[3.5rem] leading-none mb-5"
        style={{ color: NAVY }}
      >
        {plan.price}
      </p>

      <ul className="mb-6 flex-1">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 py-2 text-[12.5px] text-gray-700 border-b border-gray-100 last:border-b-0"
          >
            <Check
              size={14}
              strokeWidth={3}
              className="shrink-0"
              style={{ color: NAVY }}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2.5 mt-auto">
        <a
          href={plan.subscribeWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Subscribe to ${plan.name}`}
          className="text-white font-bold py-3 rounded text-center text-xs uppercase tracking-widest hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
          style={{ backgroundColor: NAVY }}
        >
          Subscribe Now
        </a>
        <a
          href={plan.extendWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Extend ${plan.name}`}
          className="text-white font-bold py-3 rounded text-center text-xs uppercase tracking-widest hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
          style={{ backgroundColor: NAVY }}
        >
          Extend Now
        </a>
      </div>
    </article>
  )
}
