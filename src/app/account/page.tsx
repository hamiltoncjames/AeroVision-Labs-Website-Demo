'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  User, 
  Grid3X3,
  Plus,
  Eye,
  Edit,
  Settings,
  X,
  ChevronDown,
  MoreHorizontal,
  CheckCircle,
  TrendingUp,
  Calendar,
  BarChart3,
  Activity as ActivityIcon,
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState('dashboard')
  
  // Refs for scroll sections
  const dashboardRef = useRef<HTMLDivElement>(null)
  const analyticsRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)
  const activityRef = useRef<HTMLDivElement>(null)
  const inboxRef = useRef<HTMLDivElement>(null)
  const jobsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      dashboard: dashboardRef,
      analytics: analyticsRef,
      posts: postsRef,
      activity: activityRef,
      inbox: inboxRef,
      jobs: jobsRef
    }
    
    const targetRef = refs[sectionId]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AeroVision Labs
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/models" className="text-gray-300 hover:text-cyan-400 transition-colors nav-link">
                Browse
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-cyan-400 transition-colors nav-link">
                Support
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors nav-link">
                Docs
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" className="border-cyan-500/30 bg-transparent hover:bg-cyan-900/10 hover:border-cyan-500/50 text-cyan-400">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Left Sidebar */}
        <aside className="w-80 bg-gray-900/70 backdrop-blur-lg border-r border-indigo-500/20 min-h-screen fixed left-[20vw] top-20 linkedin-sidebar">
          <div className="p-4">
            {/* Company Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="mb-6 overflow-hidden linkedin-card">
                <div className="h-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
                  <div className="absolute top-2 right-2">
                    <Edit className="w-4 h-4 text-white cursor-pointer hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="absolute -bottom-8 left-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center border-2 border-cyan-400/30">
                      <span className="text-white font-bold text-xl">AV</span>
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-4 px-4">
                  <h2 className="text-lg font-semibold text-white mb-1">AeroVision Labs</h2>
                  <p className="text-sm text-gray-400 mb-4">3 models</p>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {[
                { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
                { id: 'posts', icon: Bell, label: 'Notifications' },
                { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
                { id: 'activity', icon: ActivityIcon, label: 'Devices' },
                { id: 'inbox', icon: MessageSquare, label: 'Support' },
                { id: 'jobs', icon: Settings, label: 'Settings' }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-cyan-900/20 text-cyan-400 border-l-4 border-cyan-500 shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 hover:border-l-4 hover:border-cyan-500/50'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-[calc(20vw+20rem+1rem)] mr-[20vw] flex-1 bg-black min-h-screen">
          <div className="pl-6 py-6">
            {/* Dashboard Section */}
            <motion.div 
              ref={dashboardRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Dashboard</h1>
              
              {/* Today's Actions */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">Today's actions</h2>
                <p className="text-gray-400 mb-4">Complete these actions to optimize your AI model operations</p>
                
                <div className="space-y-4">
                  <Card className="p-4 linkedin-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Add a device to start using AI models offline.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="link" className="text-cyan-400 p-0 h-auto hover:text-cyan-300">
                          Add Device
                        </Button>
                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-300 transition-colors" />
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 linkedin-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Download your first AI model to get started with drone operations.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="link" className="text-cyan-400 p-0 h-auto hover:text-cyan-300">
                          Browse Models
                        </Button>
                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-300 transition-colors" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Track Performance */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">Track performance</h2>
                <p className="text-gray-400 mb-4">Monitor your AI model usage and device performance</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="p-4 text-center linkedin-card">
                    <div className="text-2xl font-bold text-cyan-400">7</div>
                    <div className="text-cyan-400 text-sm font-medium">Models Downloaded</div>
                    <div className="text-gray-500 text-sm">This month</div>
                  </Card>
                  
                  <Card className="p-4 text-center linkedin-card">
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-purple-400 text-sm font-medium">Active Devices</div>
                    <div className="text-gray-500 text-sm">Connected</div>
                  </Card>
                  
                  <Card className="p-4 text-center linkedin-card">
                    <div className="text-2xl font-bold text-indigo-400">24</div>
                    <div className="text-indigo-400 text-sm font-medium">Flight Hours</div>
                    <div className="text-gray-500 text-sm">This week</div>
                  </Card>
                  
                  <Card className="p-4 text-center linkedin-card">
                    <div className="text-2xl font-bold text-green-400">98%</div>
                    <div className="text-green-400 text-sm font-medium">Model Accuracy</div>
                    <div className="text-gray-500 text-sm">Average</div>
                  </Card>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <Card className="p-6 linkedin-card">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-white mb-2">Quick Actions</h2>
                      <p className="text-gray-400 mb-4">Access your most used features and recent models</p>
                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white">
                        View All Models
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <MoreHorizontal className="absolute -top-2 -right-2 w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-300 transition-colors" />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Recent Activity</h2>
                <p className="text-gray-400 mb-4">Track your latest model downloads and device connections.</p>
                <Button variant="link" className="text-cyan-400 p-0 h-auto hover:text-cyan-300">
                  View full history
                </Button>
              </div>
            </motion.div>

            {/* Analytics Section */}
            <motion.div 
              ref={analyticsRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Analytics</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Performance Overview</h3>
                  <p className="text-gray-400">Detailed analytics and performance metrics for your AI models and devices.</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">89%</div>
                      <div className="text-sm text-gray-400">Model Efficiency</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">156</div>
                      <div className="text-sm text-gray-400">Total Detections</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Notifications Section */}
            <motion.div 
              ref={postsRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Notifications</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Recent Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <Bell className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-white text-sm">New model update available: Crop Health Monitor v2.1</p>
                        <p className="text-gray-400 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white text-sm">Device successfully connected: DJI RC Pro Enterprise</p>
                        <p className="text-gray-400 text-xs">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Devices Section */}
            <motion.div 
              ref={activityRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Devices</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Connected Devices</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                        <ActivityIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">DJI RC Pro Enterprise</p>
                        <p className="text-sm text-gray-400">Connected • 3 models installed</p>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                        <ActivityIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">DJI RC Pro</p>
                        <p className="text-sm text-gray-400">Connected • 1 model installed</p>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Support Section */}
            <motion.div 
              ref={inboxRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Support</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Support Center</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Get Help</p>
                        <p className="text-sm text-gray-400">Contact our support team for assistance</p>
                      </div>
                      <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/10">
                        Contact
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Documentation</p>
                        <p className="text-sm text-gray-400">Browse guides and tutorials</p>
                      </div>
                      <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/10">
                        Browse
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Settings Section */}
            <motion.div 
              ref={jobsRef} 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">Settings</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Account Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Account Preferences</p>
                        <p className="text-sm text-gray-400">Manage your account settings and preferences</p>
                      </div>
                      <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/10">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">Security</p>
                        <p className="text-sm text-gray-400">Manage your security settings and API keys</p>
                      </div>
                      <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/10">
                        Secure
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
