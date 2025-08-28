'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, SortAsc, SortDesc } from 'lucide-react'
import ModelCard from './components/ModelCard'
import Filters from './components/Filters'
import { models } from '@/mock/models'

export default function ModelsCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTask, setSelectedTask] = useState('all')
  const [selectedFramework, setSelectedFramework] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredAndSortedModels = useMemo(() => {
    let filtered = models.filter(model => {
      const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           model.domain.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTask = selectedTask === 'all' || model.task === selectedTask
      const matchesFramework = selectedFramework === 'all' || model.framework === selectedFramework
      
      return matchesSearch && matchesTask && matchesFramework
    })

    filtered.sort((a, b) => {
      let aValue: any, bValue: any
      
      switch (sortBy) {
        case 'name':
          aValue = a.name
          bValue = b.name
          break
        case 'price':
          aValue = a.priceAUD
          bValue = b.priceAUD
          break
        case 'size':
          aValue = a.sizeMB
          bValue = b.sizeMB
          break
        case 'mAP':
          aValue = a.metrics.mAP
          bValue = b.metrics.mAP
          break
        default:
          aValue = a.name
          bValue = b.name
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [searchTerm, selectedTask, selectedFramework, sortBy, sortOrder])

  const tasks = ['all', ...Array.from(new Set(models.map(m => m.task)))]
  const frameworks = ['all', ...Array.from(new Set(models.map(m => m.framework)))]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            AI Model Store
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Browse our collection of specialized AI models for drone operations. 
            Download to your controller and fly offline.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 shadow-xl">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search models by name or domain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Task Type</label>
                <select
                  value={selectedTask}
                  onChange={(e) => setSelectedTask(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                >
                  {tasks.map(task => (
                    <option key={task} value={task} className="bg-gray-800">
                      {task === 'all' ? 'All Tasks' : task}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Framework</label>
                <select
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                >
                  {frameworks.map(framework => (
                    <option key={framework} value={framework} className="bg-gray-800">
                      {framework === 'all' ? 'All Frameworks' : framework}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Sort By</label>
                <div className="flex gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="size">Size</option>
                    <option value="mAP">mAP Score</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="px-3 py-2 bg-gray-800/50 border border-gray-700 hover:border-cyan-500 rounded-lg text-white hover:text-cyan-400 transition-colors"
                  >
                    {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-400">
              Showing {filteredAndSortedModels.length} of {models.length} models
            </div>
          </div>
        </motion.div>

        {/* Models Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredAndSortedModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ModelCard model={model} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedModels.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-8 shadow-xl">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No models found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
