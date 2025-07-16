"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import {  ShoppingCart, ChevronDown, Menu, X , User } from "lucide-react"
import SocialIconList from "../ui/SocialIcons"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  const megaMenuCategories = {
    "Shop Sofas By Type": [
      "Corner Sofas",
      "Sofa Beds",
      "U-Shape Sofas",
      "4 Seater Sofas",
      "3 Seater Sofas",
      "2 Seater Sofas",
      "Modular Sofas",
      "Recliner Sofas",
      "Armchairs",
      "Footstools",
    ],
    "Shop Sofas By Colour": [
      "Beige Sofas",
      "Grey Sofas",
      "Black Sofas",
      "Blue Sofas",
      "Brown Sofas",
      "Green Sofas",
      "Navy Sofas",
      "Cream Sofas",
    ],
    "Best Sellers": ["Carnaby Range", "Bishop Range", "Inga Range", "Cimiano Range", "Hampton Range", "Chester Range"],
    "New Ranges": ["Naples Range", "Azzuro Range", "Rupert Range", "Jacob Range", "Milano Range", "Venice Range"],
  }

  return (
    <div className="relative">
      <header className={`bg-white sticky top-0 z-30 shadow-sm transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main header */}
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <span className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors duration-200">
                Sitcomfy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/new-in"
                className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                New in
              </Link>
              
              {/* Sofas with Mega Menu */}
              <div className="relative">
                <button
                  className={`flex items-center font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                    megaMenuOpen 
                      ? 'text-gray-900 bg-gray-50 shadow-sm' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                >
                  Sofas
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <Link
                href="/beds"
                className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Beds
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
             
              <Button variant="ghost" className="hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5" />
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" className="relative hover:bg-gray-100 p-3 rounded-full">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 hover:bg-red-500 border-2 border-white">
                  0
                </Badge>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-gray-100 p-3 rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" className="flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">
                    Sitcomfy
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 p-2 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Sidebar Navigation */}
              <nav className="px-6 py-4">
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>About</span>
                  </Link>
                  <Link
                    href="/new-in"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>New in</span>
                  </Link>
                  <Link
                    href="/sofas"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Sofas</span>
                  </Link>
                  <Link
                    href="/beds"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Beds</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Contact</span>
                  </Link>
                </div>
              </nav>
              
              {/* Sidebar Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <SocialIconList />
              </div>
            </div>
          </>
        )}
      </header>

     
      {megaMenuOpen && (
        <div
          className="absolute left-8 right-8 top-full bg-white shadow-xl z-30 rounded-b-xl"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-5 gap-6">
              {/* Category Columns */}
              {Object.entries(megaMenuCategories).map(([title, items]) => (
                <div key={title} className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wide border-b border-gray-200 pb-2">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-600 hover:text-gray-900 text-sm transition-all duration-200 block py-1 hover:bg-gray-50 px-2 rounded-md -mx-2 font-medium"
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Promotional Content */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <div className="relative h-full min-h-[250px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern sofa collection" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-bold mb-2 leading-tight">Finance available</h4>
                    <Button
                      variant="outline"
                      className="bg-white/95 text-gray-900 border-white hover:bg-white hover:text-gray-900 shadow-lg font-medium text-sm"
                    >
                      Find Out More →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
