import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Corner Sofas",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
    count: "120+ styles",
    description: "Perfect for spacious living rooms",
    href: "/corner-sofas",
  },
  {
    name: "3 Seater Sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
    count: "85+ styles",
    description: "Ideal for family gatherings",
    href: "/3-seater-sofas",
  },
  {
    name: "2 Seater Sofas",
    image: "https://images.unsplash.com/photo-1708758487256-8a3a73565dc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&h=400&fit=crop",
    count: "95+ styles",
    description: "Compact yet comfortable",
    href: "/2-seater-sofas",
  },
  {
    name: "Recliner Sofas",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop",
    count: "45+ styles",
    description: "Ultimate relaxation experience",
    href: "/recliner-sofas",
  },
  {
    name: "Sofa Beds",
    image: "https://images.unsplash.com/photo-1669004753992-cfe24bd8410b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dfit=crop",
    count: "35+ styles",
    description: "Space-saving solutions",
    href: "/sofa-beds",
  },
  {
    name: "Armchairs",
    image: "https://images.unsplash.com/photo-1714872245785-674ae3038d21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&h=400&fit=crop",
    count: "60+ styles",
    description: "Personal comfort zones",
    href: "/armchairs",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Explore Our Collection
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Shop by
            <span className="text-gray-600">
              {" "}
              Category
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of premium furniture designed to transform your living space into
            a haven of comfort and style
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Featured Badge */}
                    {category.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Hover Content */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-2xl font-bold mb-2">{category.count}</h4>
                        <p className="text-sm opacity-90 mb-4 px-4">{category.description}</p>
                        <Button className="bg-white text-gray-900 hover:bg-gray-100">
                          Explore Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                      <span className="text-sm text-gray-900 font-medium group-hover:text-gray-700 transition-colors duration-300">
                        View Collection →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
