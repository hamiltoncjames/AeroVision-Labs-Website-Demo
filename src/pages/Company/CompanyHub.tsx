import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'

export default function CompanyHub() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="About AeroVision Labs"
          description="Australian company developing on-device AI models for drone applications"
        />

        {/* About Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            AeroVision Labs is an Australian company dedicated to making professional-grade AI models 
            accessible to drone operators. We develop on-device models that run offline on DJI controllers, 
            enabling real-time analysis without requiring cloud connectivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Australian Operations</h3>
              <p className="text-gray-600">
                Based in Australia with local hosting infrastructure and CASA-aligned operations. 
                All our models are developed and tested in Australian conditions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">CASA Compliance</h3>
              <p className="text-gray-600">
                Our operations and model development follow Civil Aviation Safety Authority guidelines 
                for commercial drone operations in Australia.
              </p>
            </div>
          </div>
        </div>

        {/* Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company/news">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">News & Updates</h3>
              <p className="text-gray-600 mb-4">Latest company news and product announcements</p>
              <Button variant="outline" data-url="/company/news">Read News</Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company/careers">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Careers</h3>
              <p className="text-gray-600 mb-4">Join our team of AI and drone technology experts</p>
              <Button variant="outline" data-url="/company/careers">View Positions</Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company/donate">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Our Mission</h3>
              <p className="text-gray-600 mb-4">Help us develop more open-source drone AI models</p>
              <Button variant="outline" data-url="/company/donate">Donate</Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" data-url="/company/legal/terms">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-600 text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal & Trust</h3>
              <p className="text-gray-600 mb-4">Terms of service, privacy policy, and legal information</p>
              <Button variant="outline" data-url="/company/legal/terms">View Legal</Button>
            </div>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Technology</h3>
            <div className="space-y-3 text-gray-600">
              <p>• On-device AI processing for offline operation</p>
              <p>• Optimized for DJI RC Pro and RC Pro Enterprise</p>
              <p>• TensorFlow Lite and ONNX Runtime frameworks</p>
              <p>• Real-time inference at 3-15 FPS depending on model</p>
              <p>• Models sized 20-300MB for efficient storage</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries We Serve</h3>
            <div className="space-y-3 text-gray-600">
              <p>• <strong>Agriculture:</strong> Crop monitoring, weed detection, irrigation analysis</p>
              <p>• <strong>Utilities:</strong> Power line inspection, solar panel monitoring</p>
              <p>• <strong>Infrastructure:</strong> Bridge inspection, structural monitoring</p>
              <p>• <strong>Construction:</strong> Roof inspection, site monitoring</p>
              <p>• <strong>Emergency Services:</strong> Search and rescue, damage assessment</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">General Inquiries</h4>
              <p className="text-gray-600">info@aerovisionlabs.com.au</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Technical Support</h4>
              <p className="text-gray-600">support@aerovisionlabs.com.au</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Business Development</h4>
              <p className="text-gray-600">business@aerovisionlabs.com.au</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
