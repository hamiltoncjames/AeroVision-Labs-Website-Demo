import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'
import StatCard from '@/components/ui/StatCard'
import Section from '@/components/ui/Section'

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Analytics"
          description="Track your model usage, device performance, and account activity"
          actions={
            <Button variant="outline" data-url="/account">
              Back to Account
            </Button>
          }
        />

        {/* Overview Stats */}
        <Section title="Overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              label="Models Owned"
              value="8"
              sublabel="Total purchased models"
            />
            <StatCard
              label="Active Installs"
              value="6"
              sublabel="Models installed on devices"
            />
            <StatCard
              label="Updates Pending"
              value="2"
              sublabel="Models with available updates"
            />
            <StatCard
              label="Storage Used"
              value="2.1 GB"
              sublabel="Across all devices"
            />
          </div>
        </Section>

        {/* Usage Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model Usage */}
          <Section title="Model Usage (Last 30 Days)">
            <Card className="p-6">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-gray-600">Usage chart placeholder</p>
                  <p className="text-sm text-gray-500">Model activation frequency</p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Device Performance */}
          <Section title="Device Performance">
            <Card className="p-6">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-600">Performance chart placeholder</p>
                  <p className="text-sm text-gray-500">FPS and accuracy metrics</p>
                </div>
              </div>
            </Card>
          </Section>
        </div>

        {/* Detailed Analytics */}
        <Section title="Detailed Analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Most Used Models */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Used Models</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Crop Health Monitor</div>
                    <div className="text-sm text-gray-600">Agriculture</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">47 activations</div>
                    <div className="text-sm text-gray-600">Last: 2 days ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Power Line Inspector</div>
                    <div className="text-sm text-gray-600">Utilities</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">23 activations</div>
                    <div className="text-sm text-gray-600">Last: 5 days ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Weed Detection System</div>
                    <div className="text-sm text-gray-600">Agriculture</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">18 activations</div>
                    <div className="text-sm text-gray-600">Last: 1 week ago</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Device Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Field Scout</div>
                    <div className="text-sm text-gray-600">DJI RC Pro Enterprise</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">Online</div>
                    <div className="text-sm text-gray-600">Last: 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Urban Inspector</div>
                    <div className="text-sm text-gray-600">DJI RC Pro Enterprise</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">Online</div>
                    <div className="text-sm text-gray-600">Last: 30 minutes ago</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Export Options */}
        <Section title="Export Data">
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" data-url="/account/analytics/export/usage">
              Export Usage Data
            </Button>
            <Button variant="outline" data-url="/account/analytics/export/performance">
              Export Performance Data
            </Button>
            <Button variant="outline" data-url="/account/analytics/export/devices">
              Export Device Data
            </Button>
          </div>
        </Section>
      </div>
    </div>
  )
}
