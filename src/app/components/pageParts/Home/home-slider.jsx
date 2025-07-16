"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Transform Your Living Space",
    subtitle: "Premium Sofa Collection",
    description: "Discover luxury comfort with our handcrafted sofas designed for modern living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
    ctaPrimary: "Shop Now",
    ctaSecondary: "View Collection",
    offer: "Up to 40% Off",
  },
  {
    id: 2,
    title: "Comfort Meets Style",
    subtitle: "New Arrivals",
    description: "Experience the perfect blend of contemporary design and unmatched comfort",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
    ctaPrimary: "Explore New",
    ctaSecondary: "Learn More",
    offer: "Free Delivery",
  },
  {
    id: 3,
    title: "Luxury Redefined",
    subtitle: "Premium Collection",
    description: "Indulge in our exclusive range of premium sofas crafted with finest materials",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&h=800&fit=crop",
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
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium">{slide.offer}</span>
                </div>

                <h2 className="text-lg font-medium mb-2 opacity-90">{slide.subtitle}</h2>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">{slide.title}</h1>
                <p className="text-xl mb-8 opacity-90 max-w-lg">{slide.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
                    {slide.ctaPrimary}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {slide.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
