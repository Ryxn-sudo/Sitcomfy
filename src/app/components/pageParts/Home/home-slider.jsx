"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: "Transform Your Living Space",
    subtitle: "Premium Sofa Collection",
    description: "Discover luxury comfort with our handcrafted sofas designed for modern living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&fit=crop",
    ctaPrimary: "Shop Now",
    ctaSecondary: "View Collection",
    offer: "Up to 40% Off",
  },
  {
    id: 2,
    title: "Comfort Meets Style",
    subtitle: "New Arrivals",
    description: "Experience the perfect blend of contemporary design and unmatched comfort",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop",
    ctaPrimary: "Explore New",
    ctaSecondary: "Learn More",
    offer: "Free Delivery",
  },
  {
    id: 3,
    title: "Luxury Redefined",
    subtitle: "Premium Collection",
    description: "Indulge in our exclusive range of premium sofas crafted with finest materials",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600&h=900&fit=crop",
    ctaPrimary: "Shop Premium",
    ctaSecondary: "View Details",
    offer: "0% Finance Available",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Slightly darker overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 animate-fade-in-up">
                  <span className="text-base font-medium">{slide.offer}</span>
                </div>

                <h2 className="text-xl font-medium mb-3 opacity-90 animate-fade-in-up delay-100">{slide.subtitle}</h2>
                <h1 className="text-6xl lg:text-8xl font-extrabold mb-8 leading-tight animate-fade-in-up delay-200 text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl mb-10 opacity-90 max-w-lg animate-fade-in-up delay-300">{slide.description}</p>

                <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-400">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {slide.ctaPrimary}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-xl font-semibold rounded-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {slide.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-0 transform -translate-x-1/2 flex space-x-4 z-20 max-md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full w-14 h-14"
        >
          <span className="sr-only">Previous Slide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full w-14 h-14"
        >
          <span className="sr-only">Next Slide</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-14 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
