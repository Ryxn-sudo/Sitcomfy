import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import SocialIconList from "../ui/SocialIcons"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-50 to-white border-t border-gray-200 pt-14 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Sitcomfy</h3>
            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
              Your trusted partner for premium furniture and exceptional comfort since 2010.
            </p>
            <div className="flex space-x-3">
              <SocialIconList />
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Products</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <Link href="/sofas" className="hover:text-primary transition-colors duration-150">
                  Sofas
                </Link>
              </li>
              <li>
                <Link href="/corner-sofas" className="hover:text-primary transition-colors duration-150">
                  Corner Sofas
                </Link>
              </li>
              <li>
                <Link href="/recliners" className="hover:text-primary transition-colors duration-150">
                  Recliners
                </Link>
              </li>
              <li>
                <Link href="/sofa-beds" className="hover:text-primary transition-colors duration-150">
                  Sofa Beds
                </Link>
              </li>
              <li>
                <Link href="/armchairs" className="hover:text-primary transition-colors duration-150">
                  Armchairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-150">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-primary transition-colors duration-150">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-primary transition-colors duration-150">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-primary transition-colors duration-150">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors duration-150">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3 text-gray-500 text-sm">
              <p className="flex items-center hover:text-primary transition-colors duration-150 cursor-pointer">
                <Phone className="w-4 h-4 mr-2 text-primary" /> 0800 123 4567
              </p>
              <p className="flex items-center hover:text-primary transition-colors duration-150 cursor-pointer">
                <Mail className="w-4 h-4 mr-2 text-primary" /> info@Sitcomfy.co.uk
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" /> London, UK
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-2">
          <p>&copy; 2024 Sitcomfy. All rights reserved.</p>
          <div className="flex items-center gap-3">
           
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-primary underline underline-offset-2">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary underline underline-offset-2">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
