'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import SymbolFieldBackground from '@/components/SymbolFieldBackground'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const features = [
    {
      icon: Download,
      title: 'Offline-Ready',
      description: 'Download models to your controller and fly without internet connection.'
    },
    {
      icon: Zap,
      title: 'Pay Once or Subscribe',
      description: 'Purchase individual models or get unlimited access with our subscription plan.'
    },
    {
      icon: Shield,
      title: 'Made for DJI MSDK v5',
      description: 'Optimized for the latest DJI controller technology and SDK.'
    }
  ]

  const testimonials = [
    {
      quote: "These models have transformed our agricultural surveying. The accuracy is incredible.",
      author: "Sarah Chen",
      role: "Agricultural Inspector"
    },
    {
      quote: "Fast, reliable, and the offline capability is a game-changer for remote sites.",
      author: "Mike Rodriguez",
      role: "Infrastructure Inspector"
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
          <div className="container mx-auto px-6 py-20">
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
                <Button asChild variant="outline" className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 text-base font-medium flex items-center justify-center gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Link href="/support">
                    Support
                  </Link>
                </Button>
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
        <section id="features" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="text-center mb-16"
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
                    <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300">
                      <div className="flex flex-col">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-8 h-8 text-brand-blue" />
                        </div>
                        <div className="font-medium text-xl text-white mb-3 text-center">{feature.title}</div>
                        <p className="text-gray-400 text-center">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="trust" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">Trusted by Industry Professionals</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Customer Success</div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                    <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300">
                      <blockquote className="text-lg text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="min-h-screen flex items-center relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Drone Operations?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join thousands of professionals who trust AeroVision Labs for their AI model needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <Button asChild className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                  <Link href="/models">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Browse Models</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
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
