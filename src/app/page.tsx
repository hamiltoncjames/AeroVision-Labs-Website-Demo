'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Zap, Shield, Globe, Filter, CreditCard, Smartphone, Wifi, CheckCircle, Users, Activity, WifiOff, Smartphone as PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import SymbolFieldBackground from '@/components/SymbolFieldBackground'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const features = [
    {
      icon: Download,
      title: 'Offline-Ready',
      description: 'Low-latency, on-device inference. No cloud needed in the field.'
    },
    {
      icon: Zap,
      title: 'Pay Once or Subscribe',
      description: 'Purchase individual models or get unlimited access with our subscription plan.'
    },
    {
      icon: Globe,
      title: 'Australian Data Hosting',
      description: 'Data stays in Australia, custom model details are secret.'
    }
  ]

  const howItWorks = [
    {
      icon: Filter,
      title: 'Choose a model',
      description: 'Filter by task, device and size.'
    },
    {
      icon: CreditCard,
      title: 'Purchase',
      description: 'Licence appears in your Library immediately.'
    },
    {
      icon: Smartphone,
      title: 'Install to device',
      description: 'One-tap install to your linked controller.'
    },
    {
      icon: Wifi,
      title: 'Fly offline',
      description: 'Detections on-board; sync results when you\'re back online.'
    }
  ]

  return (
    <div className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5 pointer-events-none">
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
          <div className="border-r border-cyan-500"></div>
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-5 pointer-events-none">
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
          <div className="border-b border-cyan-500"></div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <motion.div 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  AI models for real-world drone work.
                </motion.div>
              </div>
              <motion.p 
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Pick a model, download to your controller, fly offline.
              </motion.p>
              <motion.div 
                className="flex gap-4 flex-wrap justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <Button asChild className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                    <Link href="/models">
                      <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Browse Models</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Built for Professional Drone Operations</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Our Technology</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                      <div className="flex flex-col h-full">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-8 h-8 text-brand-blue" />
                        </div>
                        <div className="font-medium text-xl text-white mb-3 text-center">{feature.title}</div>
                        <p className="text-gray-400 text-center flex-grow">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Simple and Streamlined</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">How It Works</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <step.icon className="w-8 h-8 text-brand-blue" />
                        </div>
                        <div className="font-medium text-xl text-white mb-3 text-center">{step.title}</div>
                        <p className="text-gray-400 text-center flex-grow">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Offline Section */}
        <section id="why-offline" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Designed for Real-World Operations</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Built for Reliability</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <WifiOff className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Why offline?</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                        Spotty coverage shouldn't stop a mission. Our edge models run fully offline on the controller, giving you consistent FPS and predictable latency. Use the cloud later for archiving, sharing and retraining — not for live decision-making.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                          <PhoneIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Built for DJI</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                        Optimised with DJI RC Pro and Plus controllers in mind. We profile models for FPS, memory footprint and storage, so you know exactly what fits before you fly.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Contributor program</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                        Have quality aerial imagery? Contribute datasets to improve Australian conditions and receive credit, discounts and more. We accept farmland, solar, distribution lines, and post-storm imagery (with consent where required).
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                          <Activity className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Live device status</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                        Link your controller to see connected devices, storage availability and install status at a glance. Update, roll back or reinstall models in seconds.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to discover?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                See what your drone sees
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <Button asChild className="px-8 py-4 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-lg font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                  <Link href="/models">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Browse Models</span>
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
