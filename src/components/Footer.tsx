'use client'

import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20 overflow-hidden">
                <Image
                  src="/images/aerovision-logo.png"
                  alt="AeroVision Labs Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-lg font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
              AeroVision Labs
            </div>
          </div>

          {/* Main Links */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <div className="space-y-1">
              <button data-url="/models" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Models</button>
              <button data-url="/support" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Support</button>
              <button data-url="/docs" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Docs</button>
              <button data-url="/contributors" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contributors</button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <div className="space-y-1">
              <button data-url="/careers" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</button>
              <button data-url="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</button>
              <button data-url="/donate" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Donate</button>
              <button data-url="/login" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Login</button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <div className="space-y-1">
              <button data-url="/how-to-get-started" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">How to get started</button>
              <button data-url="/roadmap" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Roadmap</button>
              <button data-url="/map-notes" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">mAP notes</button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button data-url="/privacy-policy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</button>
          <button data-url="/terms-conditions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">T&C's</button>
          <button data-url="/security" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Security</button>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
            <span className="text-sm">Reddit</span>
          </button>
        </div>

        {/* Fineprint */}
        <div className="text-center text-gray-500 text-xs border-t border-gray-800 pt-6">
          <p>© 2025, AeroVision Labs. DJI and DJI related products are trademarks of their respective owners; not affiliated</p>
        </div>
      </div>
    </footer>
  )
}
