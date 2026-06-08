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

const NAVY = '#0d1b3e'

const buildFeatures = (days: string) => [
  `Full Access For ${days}`,
  'International IP Use',
  'Unlimited Access to All Databases',
  'Unlock 45,000+ Premium Resources',
]

export default function PricingSection() {
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
          {plans.map((plan) => {
            const features = buildFeatures(plan.days)
            return (
              <article
                key={plan.id}
                className="bg-white border border-gray-200 rounded-sm p-5 flex flex-col w-full max-w-sm mx-auto md:max-w-none"
              >
                {/* Plan name */}
                <h3
                  className="text-xs md:text-sm font-semibold text-center mb-2 tracking-wide"
                  style={{ color: NAVY }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <p
                  className="text-center font-display font-black text-[2.8rem] sm:text-[3.2rem] md:text-[3.5rem] leading-none mb-5"
                  style={{ color: NAVY }}
                >
                  {plan.price}
                </p>

                {/* Features */}
                <ul className="mb-6 flex-1">
                  {features.map((feature) => (
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

                {/* Buttons */}
                <div className="flex flex-col gap-2.5 mt-auto">
                  <a
                    href={plan.subscribeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold py-3 rounded text-center text-xs uppercase tracking-widest hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
                    style={{ backgroundColor: NAVY }}
                  >
                    Subscribe Now
                  </a>
                  <a
                    href={plan.extendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold py-3 rounded text-center text-xs uppercase tracking-widest hover:opacity-90 transition min-h-[44px] flex items-center justify-center"
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
