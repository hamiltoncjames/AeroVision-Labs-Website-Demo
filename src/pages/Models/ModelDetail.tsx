import React from 'react'
import { getModelBySlug, getSimilarModels } from '@/mock/models'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'
import Pill from '@/components/ui/Pill'
import Section from '@/components/ui/Section'
import StatCard from '@/components/ui/StatCard'

interface ModelDetailProps {
  slug?: string
}

export default function ModelDetail({ slug }: ModelDetailProps) {
  const model = getModelBySlug(slug || '')
  const similarModels = model ? getSimilarModels(model) : []

  if (!model) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Model Not Found</h1>
            <p className="text-gray-600 mb-6">The requested model could not be found.</p>
            <Button data-url="/models">Back to Catalog</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={model.name}
          description={`${model.domain} • ${model.task}`}
          actions={
            <Button variant="outline" data-url="/models">
              Back to Catalog
            </Button>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Model Preview */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Model Preview</span>
              </div>
            </Card>

            {/* Model Information */}
            <Section title="Model Information">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Domain & Task</h4>
                    <div className="flex gap-2">
                      <Pill variant="default">{model.domain}</Pill>
                      <Pill variant="default">{model.task}</Pill>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technical Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Size: {model.sizeMB} MB</div>
                      <div>Framework: {model.framework}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Compatible Devices</h4>
                  <div className="flex flex-wrap gap-2">
                    {model.compatibleDevices.map(device => (
                      <Pill key={device} variant="success">{device}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Performance Metrics */}
            <Section title="Performance Metrics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard
                  label="Mean Average Precision"
                  value={model.metrics.mAP.toFixed(2)}
                  sublabel="Detection accuracy"
                />
                <StatCard
                  label="FPS on DJI RC Pro"
                  value={model.metrics.fpsRCPro}
                  sublabel="Real-time performance"
                />
              </div>
            </Section>

            {/* Similar Models */}
            {similarModels.length > 0 && (
              <Section title="Similar Models">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {similarModels.map((similarModel) => (
                    <Card key={similarModel.id} className="p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-gray-900 mb-2">{similarModel.name}</h4>
                      <div className="flex gap-2 mb-3">
                        <Pill variant="default" size="sm">{similarModel.domain}</Pill>
                        <Pill variant="default" size="sm">{similarModel.task}</Pill>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {similarModel.sizeMB} MB • {similarModel.metrics.mAP.toFixed(2)} mAP
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        data-url={`/models/${similarModel.slug}`}
                      >
                        View Details
                      </Button>
                    </Card>
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                AUD ${model.priceAUD}
              </div>
              <div className="text-sm text-gray-600 mb-4">One-time purchase</div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Included in:</h4>
                <div className="space-y-1">
                  {model.includedIn.map(plan => (
                    <div key={plan} className="text-sm text-gray-600">• {plan}</div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  data-url="/checkout"
                >
                  Buy / Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url="/account/devices"
                >
                  Install to Device
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url={`/docs/models/${model.slug}`}
                >
                  View Documentation
                </Button>
              </div>
            </Card>

            {/* Changelog */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">v1.2.0 - January 2024</div>
                  <div className="text-sm text-gray-600">Improved detection accuracy and performance optimizations</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">v1.1.0 - December 2023</div>
                  <div className="text-sm text-gray-600">Added support for additional DJI controller models</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">v1.0.0 - November 2023</div>
                  <div className="text-sm text-gray-600">Initial release</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
