import React from 'react'

interface KeyValueProps {
  label: string
  value: string | number | React.ReactNode
  className?: string
}

export default function KeyValue({ label, value, className = '' }: KeyValueProps) {
  return (
    <div className={`flex justify-between items-center py-2 ${className}`}>
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm text-gray-900">{value}</span>
    </div>
  )
}
