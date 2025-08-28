'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
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
  Activity as ActivityIcon
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
    <div className="min-h-screen bg-gray-50">
             {/* Top Navigation Bar */}
       <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between h-16">
             <Link href="/" className="text-2xl font-bold text-brand-charcoal">
               AeroVision Labs
             </Link>
             
             <nav className="hidden md:flex items-center space-x-8">
               <Link href="/models" className="text-gray-600 hover:text-brand-charcoal transition-colors">
                 Browse
               </Link>
               <Link href="/support" className="text-gray-600 hover:text-brand-charcoal transition-colors">
                 Support
               </Link>
               <Link href="/docs" className="text-gray-600 hover:text-brand-charcoal transition-colors">
                 Docs
               </Link>
             </nav>
             
             <div className="flex items-center space-x-4">
               <Button asChild variant="outline">
                 <Link href="/login">Login</Link>
               </Button>
             </div>
           </div>
         </div>
       </header>

      <div className="flex pt-20">
                 {/* Left Sidebar */}
         <aside className="w-80 bg-white border-r border-gray-200 min-h-screen fixed left-[20vw] top-20 linkedin-sidebar">
           <div className="p-4">
                         {/* Company Profile Card */}
             <Card className="mb-6 overflow-hidden linkedin-card">
               <div className="h-20 bg-blue-800 relative">
                 <div className="absolute top-2 right-2">
                   <Edit className="w-4 h-4 text-white cursor-pointer" />
                 </div>
                 <div className="absolute -bottom-8 left-4">
                   <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-xl">A</span>
                   </div>
                 </div>
               </div>
                             <div className="pt-10 pb-4 px-4">
                 <h2 className="text-lg font-semibold text-gray-900 mb-1">AeroVision Labs</h2>
                 <p className="text-sm text-gray-600 mb-4">3 models</p>
               </div>
            </Card>

            {/* Navigation Links */}
            <nav className="space-y-1">
              <button
                onClick={() => scrollToSection('dashboard')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeSection === 'dashboard' 
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Dashboard
              </button>
              
                             <button
                 onClick={() => scrollToSection('posts')}
                 className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                   activeSection === 'posts' 
                     ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                     : 'text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 <Bell className="w-5 h-5 mr-3" />
                 Notifications
               </button>
              
              <button
                onClick={() => scrollToSection('analytics')}
                className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                  activeSection === 'analytics' 
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                Analytics
              </button>
              
                                                            <button
                  onClick={() => scrollToSection('activity')}
                  className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                    activeSection === 'activity' 
                      ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <ActivityIcon className="w-5 h-5 mr-3" />
                  Devices
                </button>
              
                             <button
                 onClick={() => scrollToSection('inbox')}
                 className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                   activeSection === 'inbox' 
                     ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                     : 'text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 <MessageSquare className="w-5 h-5 mr-3" />
                 Support
               </button>
              
                             <button
                 onClick={() => scrollToSection('jobs')}
                 className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                   activeSection === 'jobs' 
                     ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                     : 'text-gray-700 hover:bg-gray-50'
                 }`}
               >
                 <Settings className="w-5 h-5 mr-3" />
                 Settings
               </button>
              
              
            </nav>
          </div>
        </aside>

                 {/* Main Content Area */}
         <main className="ml-[calc(20vw+20rem+1rem)] mr-[20vw] flex-1 bg-gray-50 min-h-screen">
           <div className="pl-6 py-6">
          {/* Dashboard Section */}
          <div ref={dashboardRef} className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
            
            {/* Today's Actions */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Today's actions</h2>
              <p className="text-gray-600 mb-4">Pages that complete these actions regularly grow 4x faster</p>
              
                             <div className="space-y-4">
                 <Card className="p-4 linkedin-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">Add a URL to drive more Page visitors to your website.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="link" className="text-blue-600 p-0 h-auto">
                        Add
                      </Button>
                      <X className="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                </Card>
                
                                 <Card className="p-4 linkedin-card">
                   <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900">Add a location to get discovered when members search for Pages based on location.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="link" className="text-blue-600 p-0 h-auto">
                        Add
                      </Button>
                      <X className="w-4 h-4 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Track Performance */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Track performance</h2>
              <p className="text-gray-600 mb-4">Grow your page 3x faster by leveraging insights and analytics</p>
              
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 <Card className="p-4 text-center linkedin-card">
                  <div className="text-2xl font-bold text-gray-900">7</div>
                  <div className="text-blue-600 text-sm font-medium">Search appearances</div>
                  <div className="text-gray-500 text-sm">N/A</div>
                </Card>
                
                                 <Card className="p-4 text-center linkedin-card">
                   <div className="text-2xl font-bold text-gray-900">0</div>
                   <div className="text-blue-600 text-sm font-medium">New followers</div>
                   <div className="text-gray-500 text-sm">N/A</div>
                 </Card>
                 
                 <Card className="p-4 text-center linkedin-card">
                   <div className="text-2xl font-bold text-gray-900">0</div>
                   <div className="text-blue-600 text-sm font-medium">Post impressions</div>
                   <div className="text-gray-500 text-sm">N/A</div>
                 </Card>
                 
                 <Card className="p-4 text-center linkedin-card">
                   <div className="text-2xl font-bold text-gray-900">2</div>
                   <div className="text-blue-600 text-sm font-medium">Page visitors</div>
                   <div className="text-gray-500 text-sm">N/A</div>
                 </Card>
              </div>
            </div>

                         {/* Post When It Matters */}
             <div className="mb-8">
               <Card className="p-6 linkedin-card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Post when it matters</h2>
                    <p className="text-gray-600 mb-4">Hamilton, schedule posts to reach your audience at peak engagement</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Schedule
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-purple-600" />
                    </div>
                    <MoreHorizontal className="absolute -top-2 -right-2 w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Manage Recent Posts */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Manage recent posts</h2>
              <p className="text-gray-600 mb-4">Manage your page's content and amplify your reach with boosting.</p>
              <Button variant="link" className="text-blue-600 p-0 h-auto">
                Learn more
              </Button>
            </div>
          </div>

                     {/* Analytics Section */}
           <div ref={analyticsRef} className="mb-8">
             <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
             <Card className="p-6 linkedin-card">
               <p className="text-gray-600">Analytics content would go here...</p>
             </Card>
           </div>

                       {/* Notifications Section */}
            <div ref={postsRef} className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
              <Card className="p-6 linkedin-card">
                <p className="text-gray-600">Notifications content would go here...</p>
              </Card>
            </div>

                       {/* Devices Section */}
            <div ref={activityRef} className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Devices</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ActivityIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Connected Devices</p>
                      <p className="text-sm text-gray-600">No devices connected</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

                       {/* Support Section */}
            <div ref={inboxRef} className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Support</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Support Center</p>
                      <p className="text-sm text-gray-600">Get help and contact support</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

                       {/* Settings Section */}
            <div ref={jobsRef} className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
              <Card className="p-6 linkedin-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Account Settings</p>
                      <p className="text-sm text-gray-600">Manage your account preferences</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
           </div>
         </main>
       </div>
     </div>
   )
 }
