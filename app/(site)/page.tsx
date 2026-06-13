import Hero from '@/components/Hero'
import PricingSection from '@/components/PricingSection'
import DarkFeatureCards from '@/components/DarkFeatureCards'

export const revalidate = 3600

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingSection />
      <DarkFeatureCards />
    </>
  )
}
