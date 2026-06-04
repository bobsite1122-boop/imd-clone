import { CheckCircle2, MessageCircle } from 'lucide-react'

type Plan = {
  id: number
  name: string
  price: string
  days: string
  isPopular: boolean
  subscribeLink: string
  extendLink: string
}

const plans: Plan[] = [
  {
    id: 1,
    name: '6 Months Subscription',
    price: '$50',
    days: '180 Days',
    isPopular: false,
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
    isPopular: true,
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
    isPopular: false,
    subscribeLink:
      'https://wa.me/923445633373?text=*Please%20fill%20following%20details%20for%20Subscribing%3A-*%20%0ADesired%20Duration%3A%202%20years%0APurpose%3A%20%0ADesired%20Mode%20of%20payment%3A%20%0AEmail%3A%20%0ADesired%20Username%3A%20%0ADesired%20Password%3A',
    extendLink:
      'https://wa.me/923445633373?text=%E2%80%8E%20*Please%20fill%20following%20details%20for%20Extension%3A-*%0ADesired%20Duration%3A%202%20years%0ADesired%20Mode%20of%20payment%3A%20%0AiMD%20Username%3A',
  },
]

const buildFeatures = (days: string) => [
  `Full Access For ${days}`,
  'VIP Premium Plan',
  'International IP Use',
  'Unlimited Access to All Databases',
  'Unlock 45,000+ Premium Resources',
]

export default function PricingSection() {
  return (
    <section id="subscribenow" className="bg-white section-pad">
      <div className="container-main">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            CHOOSE YOUR iMD APP SUBSCRIPTION PLAN
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-brand" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
          {plans.map((plan) => {
            const features = buildFeatures(plan.days)

            const cardBaseClasses =
              'relative bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col'

            const popularClasses = plan.isPopular
              ? 'border-2 border-brand bg-blue-50/30 md:scale-105 md:z-10'
              : 'border border-gray-200'

            return (
              <article
                key={plan.id}
                className={`${cardBaseClasses} ${popularClasses}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand text-white text-xs font-bold px-4 py-1 rounded-pill shadow-md">
                    ⭐ Most Popular
                  </span>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
                  {plan.name}
                </h3>

                {/* Price */}
                <p className="text-center mb-1">
                  <span className="text-2xl align-top font-black text-brand">$</span>
                  <span className="font-display text-5xl font-black text-brand">
                    {plan.price.replace('$', '')}
                  </span>
                </p>

                {/* Days */}
                <p className="text-sm text-gray-400 mb-4 text-center">{plan.days}</p>

                {/* Divider */}
                <hr className="border-gray-100 my-4" />

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-green-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={plan.subscribeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25d366] text-white font-bold py-3 rounded-lg text-center hover:bg-green-500 transition flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    Subscribe Now
                  </a>
                  <a
                    href={plan.extendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-brand text-brand font-semibold py-3 rounded-lg text-center hover:bg-brand hover:text-white transition min-h-[44px] flex items-center justify-center"
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
