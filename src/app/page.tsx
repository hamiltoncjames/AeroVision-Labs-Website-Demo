'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
    <div className="min-h-screen bg-brand-offwhite">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <SymbolFieldBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-brand-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI models for real-world drone work.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pick a model, download to your controller, fly offline.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/models">
                  Open Model Store
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
                Built for Professional Drone Operations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our models are designed specifically for commercial drone applications, 
                providing the accuracy and reliability you need in the field.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-brand-blue" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-charcoal mb-4">
                Trusted by Industry Professionals
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <blockquote className="text-lg text-gray-700 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-brand-charcoal">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-6"
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
            >
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-brand-blue hover:bg-brand-blue/90">
                <Link href="/models">
                  Browse Models
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
