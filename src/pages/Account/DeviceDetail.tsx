import React from 'react'
import { getDeviceById } from '@/mock/devices'
import { getModelBySlug } from '@/mock/models'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'
import Pill from '@/components/ui/Pill'
import Section from '@/components/ui/Section'
import KeyValue from '@/components/ui/KeyValue'

interface DeviceDetailProps {
  deviceId?: string
}

export default function DeviceDetail({ deviceId }: DeviceDetailProps) {
  const device = getDeviceById(deviceId || '')

  if (!device) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Device Not Found</h1>
            <p className="text-gray-600 mb-6">The requested device could not be found.</p>
            <Button data-url="/account/devices">Back to Devices</Button>
          </div>
        </div>
      </div>
    )
  }

  const formatLastSeen = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hours ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString()
  }

  const getStoragePercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100)
  }

  const getStorageColor = (percentage: number) => {
    if (percentage < 50) return 'bg-green-500'
    if (percentage < 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={device.nickname}
          description={device.model}
          actions={
            <div className="flex gap-3">
              <Button variant="outline" data-url="/account/library">
                Install From Library
              </Button>
              <Button variant="outline" data-url="/account/devices">
                Back to Devices
              </Button>
            </div>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Device Information */}
            <Section title="Device Information">
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <KeyValue label="Device Name" value={device.nickname} />
                    <KeyValue label="Model" value={device.model} />
                    <KeyValue label="Last Seen" value={formatLastSeen(device.lastSeenISO)} />
                  </div>
                  <div>
                    <KeyValue label="Status" value="Online" />
                    <KeyValue label="Models Installed" value={device.installedModels.length} />
                    <KeyValue label="Storage Used" value={`${device.storage.usedMB} MB / ${device.storage.totalMB} MB`} />
                  </div>
                </div>
              </Card>
            </Section>

            {/* Storage Usage */}
            <Section title="Storage Usage">
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Storage Usage</span>
                    <span className="text-sm text-gray-600">
                      {getStoragePercentage(device.storage.usedMB, device.storage.totalMB)}% used
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${getStorageColor(getStoragePercentage(device.storage.usedMB, device.storage.totalMB))}`}
                      style={{ width: `${getStoragePercentage(device.storage.usedMB, device.storage.totalMB)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Used:</span>
                    <span className="ml-2 font-medium">{device.storage.usedMB} MB</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Available:</span>
                    <span className="ml-2 font-medium">{device.storage.totalMB - device.storage.usedMB} MB</span>
                  </div>
                </div>
              </Card>
            </Section>

            {/* Installed Models */}
            <Section title="Installed Models">
              <Card className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Model</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Version</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {device.installedModels.map((installedModel) => {
                        const model = getModelBySlug(installedModel.modelId)
                        return (
                          <tr key={installedModel.modelId} className="border-b border-gray-100">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-gray-900">
                                  {model?.name || installedModel.modelId}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {model?.domain} • {model?.task}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              v{installedModel.version}
                            </td>
                            <td className="py-3 px-4">
                              <Pill 
                                variant={installedModel.status === 'ok' ? 'success' : 'warning'} 
                                size="sm"
                              >
                                {installedModel.status === 'ok' ? 'OK' : 'Update Available'}
                              </Pill>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                {installedModel.status === 'update-available' && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    data-url={`/models/${installedModel.modelId}`}
                                  >
                                    Update
                                  </Button>
                                )}
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  data-url={`/models/${installedModel.modelId}/changelog`}
                                >
                                  Rollback
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  data-url={`app://controller/open?model=${installedModel.modelId}`}
                                >
                                  Open on Controller
                                </Button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  data-url="/account/library"
                >
                  Install From Library
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url="/models"
                >
                  Browse New Models
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url="/support"
                >
                  Get Support
                </Button>
              </div>
            </Card>

            {/* Device Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url={`/account/devices?unlink=${device.id}`}
                >
                  Unlink Device
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-url="/support"
                >
                  Report Issue
                </Button>
              </div>
            </Card>

            {/* Device Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600">Device ID:</span>
                  <div className="font-mono text-gray-900">{device.id}</div>
                </div>
                <div>
                  <span className="text-gray-600">Controller Model:</span>
                  <div className="text-gray-900">{device.model}</div>
                </div>
                <div>
                  <span className="text-gray-600">Storage Capacity:</span>
                  <div className="text-gray-900">{device.storage.totalMB} MB</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
