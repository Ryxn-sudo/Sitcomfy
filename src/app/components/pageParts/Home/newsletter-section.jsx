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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-lg">
          Join Our Community
          <span className="block text-[#e7d3b0] text-2xl md:text-3xl font-semibold mt-2 tracking-wide">Get Exclusive Offers</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl md:max-w-3xl mx-auto opacity-90 font-medium drop-shadow-sm">
          Subscribe to our newsletter for the latest trends, exclusive discounts, and interior design inspiration delivered straight to your inbox.
        </p>
        <form className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-3  text-base md:text-lg text-black bg-gradient-to-r from-[#f5e9d6] via-[#fff8ee] to-[#f5e9d6] border-2 border-[#bdac8e] shadow-md rounded-full placeholder:text-gray-500 focus:border-[#a08b5e] focus:ring-2 focus:ring-[#bdac8e]/40 focus:outline-none font-medium max-w-[60%] transition-all duration-200"
            
            required
          />
          <Button className="w-full sm:w-auto bg-[#bdac8e] hover:bg-[#a08b5e] hover:scale-105 active:scale-95 text-white py-3 md:py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-sm">
            Subscribe Now
          </Button>
        </form>
        <p className="text-xs md:text-sm mt-6 opacity-80 font-light tracking-wide">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
