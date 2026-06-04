import { Check } from 'lucide-react'

type Plan = {
  id: number
  name: string
  price: string
  days: string
  subscribeLink: string
  extendLink: string
}

const plans: Plan[] = [
  {
    id: 1,
    name: '6 Months Subscription',
    price: '$50',
    days: '180 Days',
    subscribeLink:
      'https://wa.me/923445633373?text=*Please%20fill%20following%20details%20for%20Subscribing%3A-*%20%0ADesired%20Duration%3A%206%20months%0APurpose%3A%20%0ADesired%20Mode%20of%20payment%3A%20%0AEmail%3A%20%0ADesired%20Username%3A%20%0ADesired%20Password%3A',
    extendLink:
      'https://wa.me/923445633373?text=%E2%80%8E%20*Please%20fill%20following%20details%20for%20Extension%3A-*%0ADesired%20Duration%3A%206%20months%0ADesired%20Mode%20of%20payment%3A%20%0AiMD%20Username%3A',
  },
  {
    id: 2,
    name: '1-Year Subscription',
    price: '$75',
    days: '365 Days',
    subscribeLink:
      'https://wa.me/923445633373?text=*Please%20fill%20following%20details%20for%20Subscribing%3A-*%20%0ADesired%20Duration%3A%201%20year%0APurpose%3A%20%0ADesired%20Mode%20of%20payment%3A%20%0AEmail%3A%20%0ADesired%20Username%3A%20%0ADesired%20Password%3A',
    extendLink:
      'https://wa.me/923445633373?text=%E2%80%8E%20*Please%20fill%20following%20details%20for%20Extension%3A-*%0ADesired%20Duration%3A%201%20year%0ADesired%20Mode%20of%20payment%3A%20%0AiMD%20Username%3A',
  },
  {
    id: 3,
    name: '2-Year Subscription',
    price: '$150',
    days: '730 Days',
    subscribeLink:
      'https://wa.me/923445633373?text=*Please%20fill%20following%20details%20for%20Subscribing%3A-*%20%0ADesired%20Duration%3A%202%20years%0APurpose%3A%20%0ADesired%20Mode%20of%20payment%3A%20%0AEmail%3A%20%0ADesired%20Username%3A%20%0ADesired%20Password%3A',
    extendLink:
      'https://wa.me/923445633373?text=%E2%80%8E%20*Please%20fill%20following%20details%20for%20Extension%3A-*%0ADesired%20Duration%3A%202%20years%0ADesired%20Mode%20of%20payment%3A%20%0AiMD%20Username%3A',
  },
]

const NAVY = '#1a2a5e'

const buildFeatures = (days: string) => [
  `Full Access For ${days}`,
  'VIP Premium Plan',
  'International IP Use',
  'Unlimited Access to All Databases',
  'Unlock 45,000+ Premium Resources',
]

export default function PricingSection() {
  return (
    <section id="subscribenow" className="bg-gray-200 py-16 md:py-20">
      <div className="container-main">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-display font-black text-2xl md:text-3xl tracking-tight uppercase max-w-2xl mx-auto"
            style={{ color: '#0b1530' }}
          >
            Choose Your iMD App Subscription Plan
          </h2>
          <div className="mx-auto mt-4 h-px w-72 max-w-full bg-slate-700/60" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {plans.map((plan) => {
            const features = buildFeatures(plan.days)
            return (
              <article
                key={plan.id}
                className="bg-gray-50 border border-gray-200 rounded-md p-6 flex flex-col"
              >
                {/* Plan name */}
                <h3
                  className="text-sm md:text-base font-bold text-center mb-3"
                  style={{ color: NAVY }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <p
                  className="text-center font-display font-extrabold text-5xl mb-5"
                  style={{ color: NAVY }}
                >
                  {plan.price}
                </p>

                {/* Features */}
                <ul className="divide-y divide-gray-200 border-t border-b border-gray-200 mb-6">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 py-3 text-[13px] text-gray-600"
                    >
                      <Check
                        size={16}
                        className="text-gray-700 shrink-0"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={plan.subscribeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold py-3 rounded-md text-center text-sm uppercase tracking-wide hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
                    style={{ backgroundColor: NAVY }}
                  >
                    Subscribe Now
                  </a>
                  <a
                    href={plan.extendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold py-3 rounded-md text-center text-sm uppercase tracking-wide hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
                    style={{ backgroundColor: NAVY }}
                  >
                    Extend Now
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
