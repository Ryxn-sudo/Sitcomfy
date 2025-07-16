import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import Image from "next/image"

export function NewsletterSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&h=800&fit=crop&q=80"
        alt="Newsletter Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Join Our Community
          <span className="block text-[#bdac8e]">Get Exclusive Offers</span>
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Subscribe to our newsletter for the latest trends, exclusive discounts, and interior design inspiration
          delivered straight to your inbox.
        </p>
        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]"
          />
          <Button className="bg-[#bdac8e] hover:bg-[#a08b5e] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 mt-1">
            Subscribe Now
          </Button>
        </div>
        <p className="text-sm mt-6 opacity-80">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
