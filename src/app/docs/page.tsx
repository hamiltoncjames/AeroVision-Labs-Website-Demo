'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Smartphone, 
  Download, 
  Link, 
  Search, 
  ShoppingCart, 
  Upload, 
  Trash2, 
  HelpCircle,
  FileText,
  Zap,
  Shield,
  Settings,
  Monitor,
  Database
} from 'lucide-react'

const menuItems = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    path: '/docs/getting-started',
    description: 'Begin your journey with AI-powered drone operations'
  },
  {
    id: 'supported-devices',
    title: 'Supported Devices & Requirements',
    icon: Smartphone,
    path: '/docs/devices/requirements',
    description: 'Device compatibility and system requirements'
  },
  {
    id: 'install-controller',
    title: 'Install the Controller App',
    icon: Download,
    path: '/docs/install/controller',
    description: 'Step-by-step installation guide'
  },
  {
    id: 'link-device',
    title: 'Link Your Device',
    icon: Link,
    path: '/docs/devices/link',
    description: 'Connect your drone controller to the platform'
  },
  {
    id: 'browse-models',
    title: 'Browse & Choose a Model',
    icon: Search,
    path: '/docs/models/browse',
    description: 'Explore and select AI models for your needs'
  },
  {
    id: 'purchase-download',
    title: 'Purchase & Download Models',
    icon: ShoppingCart,
    path: '/docs/models/purchase',
    description: 'Complete guide to purchasing and downloading'
  },
  {
    id: 'install-to-device',
    title: 'Install to Device',
    icon: Upload,
    path: '/docs/models/install',
    description: 'Install models for offline use'
  },
  {
    id: 'delete-models',
    title: 'Delete/Uninstall Models',
    icon: Trash2,
    path: '/docs/models/delete',
    description: 'Manage storage by removing unused models'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting Basics',
    icon: HelpCircle,
    path: '/docs/troubleshooting',
    description: 'Common issues and solutions'
  }
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Getting Started</h1>
              <p className="text-xl text-gray-400">
                Welcome to AeroVision Labs documentation. This guide will help you get started with our AI models for drone operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quick Setup</h3>
                </div>
                <p className="text-gray-400 mb-4">Get up and running in minutes with our streamlined setup process.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Install the controller app
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Link your device
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Download your first model
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Requirements</h3>
                </div>
                <p className="text-gray-400 mb-4">Ensure your setup meets our system requirements for optimal performance.</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    DJI RC Pro or RC Pro Enterprise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Android 8.0 or higher
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Stable internet connection
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )
      case 'supported-devices':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Supported Devices & Requirements</h1>
              <p className="text-xl text-gray-400">
                Learn about device compatibility and system requirements for our AI models.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">DJI RC Pro Enterprise</h3>
                </div>
                <p className="text-gray-400 mb-4">Our flagship supported device with full feature compatibility.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="text-cyan-400">64GB+ recommended</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="text-cyan-400">8GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OS:</span>
                    <span className="text-cyan-400">Android 10+</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">DJI RC Pro</h3>
                </div>
                <p className="text-gray-400 mb-4">Standard controller with core feature support.</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Storage:</span>
                    <span className="text-purple-400">32GB+ recommended</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RAM:</span>
                    <span className="text-purple-400">4GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OS:</span>
                    <span className="text-purple-400">Android 8.0+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'install-controller':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Install the Controller App</h1>
              <p className="text-xl text-gray-400">
                Step-by-step guide to install the AeroVision Labs controller application on your device.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Installation Steps</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Download APK', desc: 'Download the latest APK from our secure server' },
                    { step: 2, title: 'Enable Unknown Sources', desc: 'Allow installation from unknown sources in Android settings' },
                    { step: 3, title: 'Install Application', desc: 'Run the APK installer and follow the prompts' },
                    { step: 4, title: 'Launch & Configure', desc: 'Open the app and complete initial setup' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'link-device':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Link Your Device</h1>
              <p className="text-xl text-gray-400">
                How to connect and link your drone controller to the AeroVision Labs platform.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <Link className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Device Linking Process</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Prerequisites</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Controller app installed
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Active internet connection
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Valid AeroVision Labs account
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Connection Steps</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Open controller app
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Sign in to your account
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Verify device compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'browse-models':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Browse & Choose a Model</h1>
              <p className="text-xl text-gray-400">
                Explore our catalog of AI models and learn how to select the right one for your needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Agriculture', icon: Database, color: 'from-green-600 to-emerald-600', count: '4 models' },
                { title: 'Inspection', icon: Monitor, color: 'from-blue-600 to-indigo-600', count: '3 models' },
                { title: 'Utilities', icon: Zap, color: 'from-purple-600 to-pink-600', count: '2 models' }
              ].map((category, index) => (
                <div key={index} className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.count}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Specialized AI models for {category.title.toLowerCase()} applications.
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    Browse {category.title} Models →
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )
      case 'purchase-download':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Purchase & Download Models</h1>
              <p className="text-xl text-gray-400">
                Complete guide to purchasing and downloading AI models from our marketplace.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Purchase Process</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-4">Payment Options</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">$</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Individual Models</p>
                        <p className="text-gray-400 text-xs">Pay per model</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">∞</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Subscription</p>
                        <p className="text-gray-400 text-xs">Unlimited access</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4">Download Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <p className="text-white text-sm">Select model and purchase</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <p className="text-white text-sm">Download to controller</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <p className="text-white text-sm">Install and verify</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'install-to-device':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Install to Device</h1>
              <p className="text-xl text-gray-400">
                How to install downloaded AI models to your drone controller for offline use.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Installation Guide</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Automatic Installation</h4>
                    <p className="text-gray-400 text-sm mb-4">Most models install automatically when downloaded to your controller.</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Download completes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Model auto-installs
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Ready for use
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-3">Manual Installation</h4>
                    <p className="text-gray-400 text-sm mb-4">For models requiring manual installation steps.</p>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Navigate to Downloads
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Select model file
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Follow prompts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'delete-models':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Delete/Uninstall Models</h1>
              <p className="text-xl text-gray-400">
                Learn how to remove AI models from your device to free up storage space.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Model Management</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Storage Management</h4>
                  <p className="text-gray-400 text-sm mb-4">Monitor and manage your device storage efficiently.</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-white text-sm">Total Storage</span>
                      <span className="text-cyan-400 text-sm">64GB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-white text-sm">Used by Models</span>
                      <span className="text-purple-400 text-sm">12.4GB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-white text-sm">Available</span>
                      <span className="text-green-400 text-sm">51.6GB</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Removal Process</h4>
                  <p className="text-gray-400 text-sm mb-4">Safely remove models you no longer need.</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Open Model Manager
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Select model to remove
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Confirm deletion
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Storage freed up
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'troubleshooting':
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Troubleshooting Basics</h1>
              <p className="text-xl text-gray-400">
                Common issues and solutions for using AeroVision Labs AI models.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Common Issues</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Installation Fails</h4>
                    <p className="text-gray-400 text-sm">Check device compatibility and storage space</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Model Not Loading</h4>
                    <p className="text-gray-400 text-sm">Verify model installation and restart app</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Performance Issues</h4>
                    <p className="text-gray-400 text-sm">Check device temperature and close other apps</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quick Fixes</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Restart App</h4>
                    <p className="text-gray-400 text-sm">Close and reopen the controller application</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Clear Cache</h4>
                    <p className="text-gray-400 text-sm">Clear app cache in device settings</p>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Reinstall Model</h4>
                    <p className="text-gray-400 text-sm">Delete and re-download problematic models</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      default:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Documentation</h1>
              <p className="text-xl text-gray-400">
                Select a topic from the sidebar to view comprehensive documentation.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 linkedin-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Getting Started</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Welcome to AeroVision Labs documentation. Our comprehensive guides will help you get the most out of our AI models for drone operations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h4 className="text-white font-medium mb-2">New Users</h4>
                  <p className="text-gray-400 text-sm">Start with our Getting Started guide</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Experienced Users</h4>
                  <p className="text-gray-400 text-sm">Jump directly to specific topics</p>
                </div>
              </div>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex pt-20">
        {/* Left Sidebar */}
        <aside className="w-80 bg-gray-900/70 backdrop-blur-lg border-r border-indigo-500/20 min-h-screen fixed left-[20vw] top-20 shadow-sm linkedin-sidebar">
          <div className="p-6">
            <motion.h2 
              className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Documentation
            </motion.h2>
            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-start space-x-3 px-3 py-3 text-left rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-cyan-900/20 text-cyan-400 border border-cyan-500/30 shadow-lg'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border hover:border-cyan-500/20'
                    }`}
                    data-url={item.path}
                  >
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium block">{item.title}</span>
                      <span className="text-xs text-gray-500 block mt-1">{item.description}</span>
                    </div>
                  </motion.button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-[calc(20vw+20rem+1rem)] mr-[20vw] flex-1 bg-black min-h-screen">
          <div className="pl-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
