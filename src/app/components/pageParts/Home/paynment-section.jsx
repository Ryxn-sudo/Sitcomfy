import Image from "next/image"

export function FlexiblePaymentsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-down">Flexible Payments</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We offer a range of flexible payment options to suit your needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Payl8r */}
          <div className="bg-[#E0CCFF] rounded-full px-8 py-4 flex items-center justify-center min-w-[180px] h-[70px] shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-200 animate-fade-in-up cursor-pointer group">
            <div className="relative w-[100px] h-[60px] transition-transform duration-300 group-hover:scale-105">
              <Image src="/Paynment_Logos/payl8-removebg-preview.png" alt="Payl8r" fill className="object-contain" />
            </div>
          </div>

         {/* Stripe */}
          <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center min-w-[180px] h-[70px] shadow-md border border-gray-200 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-200 hover:border-blue-300 animate-fade-in-up cursor-pointer group" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-[140px] h-[100px] transition-transform duration-300 group-hover:scale-105">
              <Image src="/Paynment_Logos/stripe.png" alt="Stripe" fill className="object-contain" />
            </div>
          </div>

          {/* Klarna */}
          <div className="bg-[#FFC0CB] rounded-full px-8 py-4 flex items-center justify-center min-w-[180px] h-[70px] shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-200 animate-fade-in-up cursor-pointer group" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-[140px] h-[50px] transition-transform duration-300 group-hover:scale-105">
              <Image src="/Paynment_Logos/Klarna-Logo.png" alt="Klarna" fill className="object-contain" />
            </div>
          </div>

          {/* Clearpay */}
          <div className="bg-[#A2F0D0] rounded-full px-8 py-4 flex items-center justify-center min-w-[180px] h-[70px] shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-200 animate-fade-in-up cursor-pointer group" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-[140px] h-[50px] transition-transform duration-300 group-hover:scale-105">
              <Image src="/Paynment_Logos/clearpay-new.png" alt="Clearpay" fill className="object-contain" />
            </div>
          </div>

          <div className="bg-white rounded-full px-8 py-4 flex items-center justify-center min-w-[180px] h-[70px] shadow-md border border-gray-200 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-200 hover:border-gray-300 animate-fade-in-up cursor-pointer group" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-[140px] h-[50px] transition-transform duration-300 group-hover:scale-105">
              <Image src="/Paynment_Logos/snapfinance-logo.png" alt="Snap Finance" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
