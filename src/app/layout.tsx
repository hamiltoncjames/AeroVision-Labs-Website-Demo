import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AeroVision Labs - AI Models for Real-World Drone Work',
  description: 'Pick a model, download to your controller, fly offline. Premium AI models for agriculture, infrastructure, and commercial drone operations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
