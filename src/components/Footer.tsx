'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">AeroVision Labs</h3>
            <p className="text-gray-300 mb-4">
              AI models for real-world drone work. Pick a model, download to your controller, fly offline.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/models" className="text-gray-300 hover:text-white transition-colors">Models</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contribute" className="text-gray-300 hover:text-white transition-colors">Contribute</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 AeroVision Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
