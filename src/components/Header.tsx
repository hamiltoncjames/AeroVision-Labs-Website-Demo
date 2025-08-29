'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30 transition-all duration-300">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative mr-3">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20 overflow-hidden">
                  <Image
                    src="/images/aerovision-logo.png"
                    alt="AeroVision Labs Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-xl font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-400 transition-all duration-300">
                AeroVision Labs
              </div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
              <Link 
                href="/models" 
                className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                  pathname === '/models' 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Browse
              </Link>
              <Link 
                href="/support" 
                className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                  pathname === '/support' 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Support
              </Link>
              <Link 
                href="/docs" 
                className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                  pathname === '/docs' 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Docs
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <Button asChild className="contact-btn px-4 py-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300">
                <Link href="/login">
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Login</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button className="relative w-10 h-10 focus:outline-none group" aria-label="Toggle menu">
              <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out"></span>
                <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out"></span>
                <span className="block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
