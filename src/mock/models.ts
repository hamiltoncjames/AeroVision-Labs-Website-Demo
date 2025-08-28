export interface ModelItem {
  id: string
  slug: string
  name: string
  domain: string
  task: string
  sizeMB: number
  framework: string
  compatibleDevices: string[]
  metrics: {
    mAP: number
    fpsRCPro: number
  }
  priceAUD: number
  includedIn: string[]
  thumbnail: string
}

export const models: ModelItem[] = [
  {
    id: 'agri-crop-monitor-v1',
    slug: 'agri-crop-monitor-v1',
    name: 'Crop Health Monitor',
    domain: 'Agriculture',
    task: 'detect',
    sizeMB: 45,
    framework: 'TensorFlow',
    compatibleDevices: ['DJI RC Pro Enterprise', 'DJI RC Pro'],
    metrics: {
      mAP: 0.87,
      fpsRCPro: 12
    },
    priceAUD: 299,
    includedIn: ['Starter', 'Pro'],
    thumbnail: '/models/crop-monitor.jpg'
  },
  {
    id: 'agri-weed-detector-v2',
    slug: 'agri-weed-detector-v2',
    name: 'Weed Detection System',
    domain: 'Agriculture',
    task: 'detect',
    sizeMB: 78,
    framework: 'ONNX',
    compatibleDevices: ['DJI RC Pro Enterprise'],
    metrics: {
      mAP: 0.92,
      fpsRCPro: 8
    },
    priceAUD: 449,
    includedIn: ['Pro', 'Org'],
    thumbnail: '/models/weed-detector.jpg'
  },
  {
    id: 'utility-pole-inspector-v1',
    slug: 'utility-pole-inspector-v1',
    name: 'Power Line Inspector',
    domain: 'Utilities',
    task: 'detect',
    sizeMB: 156,
    framework: 'TensorFlow',
    compatibleDevices: ['DJI RC Pro Enterprise', 'DJI RC Pro'],
    metrics: {
      mAP: 0.89,
      fpsRCPro: 6
    },
    priceAUD: 599,
    includedIn: ['Pro', 'Org'],
    thumbnail: '/models/pole-inspector.jpg'
  },
  {
    id: 'utility-solar-inspector-v1',
    slug: 'utility-solar-inspector-v1',
    name: 'Solar Panel Inspector',
    domain: 'Utilities',
    task: 'segment',
    sizeMB: 234,
    framework: 'ONNX',
    compatibleDevices: ['DJI RC Pro Enterprise'],
    metrics: {
      mAP: 0.91,
      fpsRCPro: 4
    },
    priceAUD: 799,
    includedIn: ['Org'],
    thumbnail: '/models/solar-inspector.jpg'
  },
  {
    id: 'inspection-bridge-monitor-v1',
    slug: 'inspection-bridge-monitor-v1',
    name: 'Bridge Structural Monitor',
    domain: 'Inspection',
    task: 'detect',
    sizeMB: 189,
    framework: 'TensorFlow',
    compatibleDevices: ['DJI RC Pro Enterprise', 'DJI RC Pro'],
    metrics: {
      mAP: 0.88,
      fpsRCPro: 5
    },
    priceAUD: 649,
    includedIn: ['Pro', 'Org'],
    thumbnail: '/models/bridge-monitor.jpg'
  },
  {
    id: 'inspection-roof-inspector-v1',
    slug: 'inspection-roof-inspector-v1',
    name: 'Roof Condition Inspector',
    domain: 'Inspection',
    task: 'classify',
    sizeMB: 67,
    framework: 'ONNX',
    compatibleDevices: ['DJI RC Pro Enterprise', 'DJI RC Pro'],
    metrics: {
      mAP: 0.85,
      fpsRCPro: 10
    },
    priceAUD: 399,
    includedIn: ['Starter', 'Pro'],
    thumbnail: '/models/roof-inspector.jpg'
  },
  {
    id: 'agri-irrigation-monitor-v1',
    slug: 'agri-irrigation-monitor-v1',
    name: 'Irrigation System Monitor',
    domain: 'Agriculture',
    task: 'detect',
    sizeMB: 34,
    framework: 'TensorFlow',
    compatibleDevices: ['DJI RC Pro Enterprise', 'DJI RC Pro'],
    metrics: {
      mAP: 0.83,
      fpsRCPro: 15
    },
    priceAUD: 249,
    includedIn: ['Starter', 'Pro', 'Org'],
    thumbnail: '/models/irrigation-monitor.jpg'
  },
  {
    id: 'utility-transformer-inspector-v1',
    slug: 'utility-transformer-inspector-v1',
    name: 'Transformer Health Monitor',
    domain: 'Utilities',
    task: 'classify',
    sizeMB: 298,
    framework: 'ONNX',
    compatibleDevices: ['DJI RC Pro Enterprise'],
    metrics: {
      mAP: 0.94,
      fpsRCPro: 3
    },
    priceAUD: 899,
    includedIn: ['Org'],
    thumbnail: '/models/transformer-inspector.jpg'
  }
]

export const getModelBySlug = (slug: string): ModelItem | undefined => {
  return models.find(model => model.slug === slug)
}

export const getSimilarModels = (currentModel: ModelItem, count: number = 3): ModelItem[] => {
  return models
    .filter(model => model.id !== currentModel.id && model.domain === currentModel.domain)
    .slice(0, count)
}
