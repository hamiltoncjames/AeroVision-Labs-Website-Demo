import React from 'react'

interface SectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {description && (
          <p className="mt-1 text-gray-600">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}
