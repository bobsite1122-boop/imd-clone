import Hero from '@/components/Hero'
import PlatformBadges from '@/components/PlatformBadges'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorks from '@/components/HowItWorks'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformBadges />
      <PricingSection />
      <FeaturesSection />
      <HowItWorks />
      <ContactSection />
    </>
  )
}
