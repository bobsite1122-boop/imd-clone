import { getPlans } from '@/lib/plans'
import PlanCard from '@/components/PlanCard'

export default async function PricingSection() {
  const plans = await getPlans()

  return (
    <section id="subscribenow" className="bg-[#e8ecf2] py-14 md:py-20">
      <div className="container-main max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-display font-black text-2xl md:text-[1.7rem] leading-tight tracking-wide"
            style={{ color: '#0b1530' }}
          >
            Choose your subscription plan
          </h2>
          <div
            className="mx-auto mt-3 h-px w-64 max-w-full"
            style={{ backgroundColor: '#0b1530', opacity: 0.5 }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} linkTitle />
          ))}
        </div>
      </div>
    </section>
  )
}
