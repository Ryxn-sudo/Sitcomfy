import Image from "next/image"
import { Gem, Users, Leaf, Lightbulb, DollarSign } from "lucide-react"

export function CoreValuesSection() {
  const coreValues = [
    {
      path: '/Icons/quality.png',
      title: "Uncompromising Quality",
      description:
        "Every sofa is meticulously crafted using only the finest materials for lasting comfort and durability.",
    },
    {
      path: '/Icons/users.png',
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We're dedicated to providing exceptional service and support.",
    },
    {
      path: '/Icons/leaf.png',
      title: "Sustainable Practices",
      description:
        "We are committed to eco-friendly manufacturing and sourcing, minimizing our environmental footprint.",
    },
    {
      path: '/Icons/design.png',
      title: "Innovative Design",
      description: "Pushing boundaries with contemporary designs that blend aesthetics, comfort, and functionality.",
    },
    {
      path: '/Icons/pound.png',
      title: "Exceptional Value",
      description: "Offering premium quality sofas at fair prices, ensuring you get the best for your investment.",
    },
  ]

  return (
    <section className="pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide us in crafting exceptional furniture and delivering outstanding service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1697124510483-6de81eb6d493?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Core Values"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-4xl font-bold mb-2">Crafted with Passion</h3>
              <p className="text-lg opacity-90 max-w-md">
                Every piece tells a story of dedication, quality, and timeless design.
              </p>
            </div>
          </div>

          {/* Values List Section */}
          <div className="space-y-10">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
        
                  <Image src={value.path} alt="Core Values Icon" width={32} height={32} className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
