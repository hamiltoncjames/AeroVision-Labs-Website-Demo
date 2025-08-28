import React from 'react'

interface StatCardProps {
  label: string
  value: string | number
  sublabel?: string
  className?: string
}

export default function StatCard({ label, value, sublabel, className = '' }: StatCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-sm font-medium text-gray-600 mt-1">{label}</div>
        {sublabel && (
          <div className="text-xs text-gray-500 mt-1">{sublabel}</div>
        )}
      </div>
    </div>
  )
}
