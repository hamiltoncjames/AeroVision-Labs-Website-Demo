'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20">
                <div className="absolute inset-[2px] bg-gray-900 rounded-[3px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                  <div className="font-bold text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">AV</div>
                </div>
              </div>
            </div>
            <div className="text-lg font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
              AeroVision Labs
            </div>
          </div>
          
          <div className="flex justify-center mb-4 md:mb-0">
            <button data-url="/models" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Models</button>
            <button data-url="/docs" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Docs</button>
            <button data-url="/support" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Support</button>
            <button data-url="/company" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">About</button>
            <button data-url="/company/legal/terms" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Terms</button>
            <button data-url="/company/legal/privacy" className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors">Privacy</button>
          </div>
          
          <div className="flex space-x-3">
            <button data-url="/company/donate" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button data-url="/support/status" className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2024 AeroVision Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
