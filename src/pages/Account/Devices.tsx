import React from 'react'
import { devices } from '@/mock/devices'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'
import Pill from '@/components/ui/Pill'
import EmptyState from '@/components/ui/EmptyState'

export default function Devices() {
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
          title="Devices"
          description="Manage your connected DJI controllers and installed models"
          actions={
            <div className="flex gap-3">
              <Button variant="outline" data-url="/account/devices/link">
                Link New Device
              </Button>
              <Button variant="outline" data-url="/account">
                Back to Account
              </Button>
            </div>
          }
        />

        {devices.length === 0 ? (
          <EmptyState
            icon="📱"
            title="No devices connected"
            description="Link your first DJI controller to start installing and using models."
            action={
              <Button data-url="/account/devices/link">
                Link Your First Device
              </Button>
            }
          />
        ) : (
          <div className="space-y-6">
            {devices.map((device) => (
              <Card key={device.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {device.nickname}
                    </h3>
                    <p className="text-gray-600 mb-2">{device.model}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Last seen: {formatLastSeen(device.lastSeenISO)}</span>
                      <span>•</span>
                      <span>{device.installedModels.length} models installed</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-url={`/account/devices/${device.id}`}
                    >
                      Open Device
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-url="/account/library"
                    >
                      Install From Library
                    </Button>
                  </div>
                </div>

                {/* Storage Usage */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Storage Usage</span>
                    <span className="text-sm text-gray-600">
                      {device.storage.usedMB} MB / {device.storage.totalMB} MB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getStorageColor(getStoragePercentage(device.storage.usedMB, device.storage.totalMB))}`}
                      style={{ width: `${getStoragePercentage(device.storage.usedMB, device.storage.totalMB)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Installed Models */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Installed Models</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {device.installedModels.map((installedModel) => (
                      <div 
                        key={installedModel.modelId} 
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {installedModel.modelId.split('-').slice(0, -1).join(' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </div>
                          <div className="text-xs text-gray-600">v{installedModel.version}</div>
                        </div>
                        <Pill 
                          variant={installedModel.status === 'ok' ? 'success' : 'warning'} 
                          size="sm"
                        >
                          {installedModel.status === 'ok' ? 'OK' : 'Update'}
                        </Pill>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" data-url="/account/library">
              📚 Model Library
            </Button>
            <Button variant="outline" data-url="/models">
              🛒 Browse New Models
            </Button>
            <Button variant="outline" data-url="/support">
              🆘 Get Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
