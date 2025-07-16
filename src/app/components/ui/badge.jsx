'use client'
import React from 'react'

export const Badge = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const getVariantClasses = (variant) => {
    switch (variant) {
      case 'secondary':
        return 'border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200'
      case 'destructive':
        return 'border-transparent bg-red-500 text-white hover:bg-red-600'
      case 'outline':
        return 'border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50'
      default:
        return 'border-transparent bg-blue-600 text-white hover:bg-blue-700'
    }
  }

  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
  const variantClasses = getVariantClasses(variant)
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}