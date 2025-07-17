import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Star, Heart, Eye, ShoppingCart, Zap, Award, TrendingUp } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Milano Luxury Corner Sofa",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    badgeColor: "bg-green-600", // Simplified color
    badgeIcon: Award,
    description: "Luxurious corner sofa with premium Italian leather and memory foam cushions",
    colors: ["#8B4513", "#696969", "#000080"],
    features: ["Memory Foam", "Italian Leather", "10 Year Warranty"],
    discount: 19,
  },
  {
    id: 2,
    name: "Comfort Plus 3-Seater",
    price: 899,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=500&fit=crop",
    rating: 4.6,
    reviews: 89,
    badge: "New Arrival",
    badgeColor: "bg-blue-600", // Simplified color
    badgeIcon: Zap,
    description: "Modern design meets ultimate comfort with sustainable materials",
    colors: ["#D2B48C", "#A9A9A9", "#2F4F4F"],
    features: ["Eco-Friendly", "Removable Covers", "Fast Delivery"],
    discount: 18,
  },
  {
    id: 3,
    name: "Luxury Electric Recliner",
    price: 1799,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=500&fit=crop",
    rating: 4.9,
    reviews: 156,
    badge: "Premium",
    badgeColor: "bg-purple-600", // Simplified color
    badgeIcon: Award,
    description: "Electric reclining with massage function and USB charging ports",
    colors: ["#8B4513", "#000000", "#800000"],
    features: ["Electric Recliner", "Massage Function", "USB Charging"],
    discount: 18,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Handpicked for You
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Featured
            <span className="text-gray-600"> Products</span> {/* Simplified text color */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most loved pieces, carefully selected for their exceptional quality, design, and customer
            satisfaction
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3"
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  {" "}
                  {/* Fixed height for consistent image size */}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill // Use fill to cover the container
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Product Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center`}
                    >
                      <product.badgeIcon className="w-3 h-3 mr-1" />
                      {product.badge}
                    </div>
                  </div>
                  {/* Hover Actions */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-3">
                      <Button size="icon" className="bg-white/90 text-gray-900 hover:bg-white rounded-full shadow-lg">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" className="bg-white/90 text-gray-900 hover:bg-white rounded-full shadow-lg">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="icon" className="bg-white/90 text-gray-900 hover:bg-white rounded-full shadow-lg">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Color Options */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-600">Colors:</span>
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">£{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">£{product.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                      Save £{product.originalPrice - product.price}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-purple-50 rounded-3xl p-12">
          {" "}
          {/* Simplified background color */}
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-8 text-lg">Explore our complete collection of premium furniture</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
