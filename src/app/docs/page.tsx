'use client'

import { useState } from 'react'
import { 
  BookOpen, 
  Smartphone, 
  Download, 
  Link, 
  Search, 
  ShoppingCart, 
  Upload, 
  Trash2, 
  HelpCircle 
} from 'lucide-react'

const menuItems = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    path: '/docs/getting-started'
  },
  {
    id: 'supported-devices',
    title: 'Supported Devices & Requirements',
    icon: Smartphone,
    path: '/docs/devices/requirements'
  },
  {
    id: 'install-controller',
    title: 'Install the Controller App',
    icon: Download,
    path: '/docs/install/controller'
  },
  {
    id: 'link-device',
    title: 'Link Your Device',
    icon: Link,
    path: '/docs/devices/link'
  },
  {
    id: 'browse-models',
    title: 'Browse & Choose a Model',
    icon: Search,
    path: '/docs/models/browse'
  },
  {
    id: 'purchase-download',
    title: 'Purchase & Download Models',
    icon: ShoppingCart,
    path: '/docs/models/purchase'
  },
  {
    id: 'install-to-device',
    title: 'Install to Device',
    icon: Upload,
    path: '/docs/models/install'
  },
  {
    id: 'delete-models',
    title: 'Delete/Uninstall Models',
    icon: Trash2,
    path: '/docs/models/delete'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting Basics',
    icon: HelpCircle,
    path: '/docs/troubleshooting'
  }
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Getting Started</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Welcome to AeroVision Labs documentation. This guide will help you get started with our AI models for drone operations.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'supported-devices':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Supported Devices & Requirements</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Learn about device compatibility and system requirements for our AI models.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'install-controller':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Install the Controller App</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Step-by-step guide to install the AeroVision Labs controller application on your device.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'link-device':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Link Your Device</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                How to connect and link your drone controller to the AeroVision Labs platform.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'browse-models':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Browse & Choose a Model</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Explore our catalog of AI models and learn how to select the right one for your needs.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'purchase-download':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Purchase & Download Models</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Complete guide to purchasing and downloading AI models from our marketplace.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'install-to-device':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Install to Device</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                How to install downloaded AI models to your drone controller for offline use.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'delete-models':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Delete/Uninstall Models</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Learn how to remove AI models from your device to free up storage space.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      case 'troubleshooting':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Troubleshooting Basics</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Common issues and solutions for using AeroVision Labs AI models.
              </p>
              {/* Content will be added here */}
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">
                Select a topic from the sidebar to view documentation.
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex pt-20">
                 {/* Left Sidebar */}
         <aside className="w-80 bg-white border-r border-gray-200 min-h-screen fixed left-[20vw] top-20 shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Documentation</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    data-url={item.path}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

                 {/* Main Content Area */}
         <main className="ml-[calc(20vw+20rem+1rem)] mr-[20vw] flex-1 bg-white min-h-screen">
           <div className="pl-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
