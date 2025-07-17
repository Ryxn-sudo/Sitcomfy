"use client"
import { Header } from "@/app/components/layout/Header"
import { HeroSlider } from "@/app/components/pageParts/Home/home-slider"
import { CategoriesSection } from "@/app/components/pageParts/Home/categories-section"
import { FeaturedProducts } from "@/app/components/pageParts/Home/featured-products"
import { BenefitsSection } from "@/app/components/pageParts/Home/benifits-section"
import { NewsletterSection } from "@/app/components/pageParts/Home/newsletter-section"
import { Footer } from "@/app/components/layout/Footer"
import { FlexiblePaymentsSection } from "../pageParts/Home/paynment-section"
import { CoreValuesSection } from "../pageParts/Home/corevalues"
import { FaqChatbot } from "../pageParts/Home/faq-chatbot"


export default function HomePage() {
  return (

    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <CategoriesSection/>
      <FeaturedProducts />
      <CoreValuesSection />
      <NewsletterSection />
      <FlexiblePaymentsSection />
      <Footer />
      <FaqChatbot />
    </div>
  )
}
