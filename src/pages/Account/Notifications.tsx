import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import PageHeader from '@/components/ui/PageHeader'
import Pill from '@/components/ui/Pill'

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'model-update',
      title: 'Model Update Available',
      description: 'Weed Detection System v2.2.0 is now available for download',
      modelSlug: 'agri-weed-detector-v2',
      timestamp: '2024-01-15T10:30:00Z',
      read: false
    },
    {
      id: 2,
      type: 'device-reminder',
      title: 'Device Last Seen',
      description: 'Field Scout has not been connected for 7 days',
      deviceId: 'device-001',
      timestamp: '2024-01-14T16:45:00Z',
      read: true
    },
    {
      id: 3,
      type: 'model-update',
      title: 'Model Update Available',
      description: 'Solar Panel Inspector v1.4.0 is now available for download',
      modelSlug: 'utility-solar-inspector-v1',
      timestamp: '2024-01-13T09:15:00Z',
      read: false
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance',
      description: 'Scheduled maintenance on January 20th, 2024 from 2:00-4:00 AM AEST',
      timestamp: '2024-01-12T14:20:00Z',
      read: true
    },
    {
      id: 5,
      type: 'model-update',
      title: 'Model Update Available',
      description: 'Crop Health Monitor v1.3.0 is now available for download',
      modelSlug: 'agri-crop-monitor-v1',
      timestamp: '2024-01-11T11:00:00Z',
      read: true
    }
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'model-update':
        return '🔄'
      case 'device-reminder':
        return '📱'
      case 'system':
        return '⚙️'
      default:
        return '📢'
    }
  }

  const getNotificationAction = (notification: any) => {
    switch (notification.type) {
      case 'model-update':
        return (
          <Button 
            variant="outline" 
            size="sm"
            data-url={`/models/${notification.modelSlug}`}
          >
            View Model
          </Button>
        )
      case 'device-reminder':
        return (
          <Button 
            variant="outline" 
            size="sm"
            data-url="/account/devices"
          >
            Manage Devices
          </Button>
        )
      default:
        return null
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours} hours ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Notifications"
          description="Stay updated with model updates, device status, and system announcements"
          actions={
            <Button variant="outline" data-url="/account">
              Back to Account
            </Button>
          }
        />

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-6 hover:shadow-md transition-shadow ${
                !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">
                  {getNotificationIcon(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{notification.title}</h3>
                      <p className="text-gray-600 mt-1">{notification.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <Pill variant="default" size="sm">New</Pill>
                      )}
                      <span className="text-sm text-gray-500">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                  </div>
                  
                  {getNotificationAction(notification) && (
                    <div className="mt-3">
                      {getNotificationAction(notification)}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}
