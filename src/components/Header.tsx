'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-brand-charcoal">
            AeroVision Labs
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/models" className="text-gray-600 hover:text-brand-charcoal transition-colors">
              Models
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-brand-charcoal transition-colors">
              Pricing
            </Link>
            <Link href="/contribute" className="text-gray-600 hover:text-brand-charcoal transition-colors">
              Contribute
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/models">Open Model Store</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
