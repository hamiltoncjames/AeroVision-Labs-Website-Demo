import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import SpeederAnimation from '@/components/SpeederAnimation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <SpeederAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 relative z-10">
              On-Device Drone Models
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional AI models for DJI drones. Fly offline with intelligent inspection, 
              agriculture monitoring, and utility infrastructure analysis.
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                data-url="/models"
              >
                Browse Models
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3"
                data-url="/account"
              >
                Login / Account
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3"
                data-url="/support"
              >
                Support
              </Button>
            </div>
            
            {/* How it works */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">How it works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Pick</h3>
                  <p className="text-sm text-gray-600">Choose from our catalog of specialized models</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Purchase</h3>
                  <p className="text-sm text-gray-600">One-time payment, no subscriptions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Install</h3>
                  <p className="text-sm text-gray-600">Download directly to your DJI controller</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">Fly Offline</h3>
                  <p className="text-sm text-gray-600">AI processing happens on-device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/models">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agriculture Models</h3>
                <p className="text-gray-600 mb-4">Crop monitoring, weed detection, and irrigation analysis</p>
                <Button variant="outline" data-url="/models">Explore Models</Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About AeroVision</h3>
                <p className="text-gray-600 mb-4">Australian company with CASA-aligned operations</p>
                <Button variant="outline" data-url="/company">Learn More</Button>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company/donate">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Our Mission</h3>
                <p className="text-gray-600 mb-4">Help us develop more open-source drone AI models</p>
                <Button variant="outline" data-url="/company/donate">Donate</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
