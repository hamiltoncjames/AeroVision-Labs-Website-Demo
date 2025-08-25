export interface Model {
  id: string
  slug: string
  title: string
  category: 'Agriculture' | 'Roads' | 'Utilities' | 'Roofing'
  price: number
  rating: number
  downloads: number
  short: string
  description: string
  inputs: {
    resolution: '640p' | '1080p'
    minFps: number
    device: 'RC Pro' | 'Android'
  }
  outputs: {
    boxes: boolean
    masks?: boolean
    latencyMs: number
  }
  images: string[]
  demoVideo?: string
  tags: string[]
}

export interface Bundle {
  id: string
  name: string
  description: string
  models: string[]
  price: number
  savings: number
}

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
}

export interface LeaderboardEntry {
  name: string
  points: number
  lastContribution: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

// Models data
export const models: Model[] = [
  {
    id: 'sheep-detector-v1',
    slug: 'sheep-detector-v1',
    title: 'Sheep Detector v1 (640p)',
    category: 'Agriculture',
    price: 49,
    rating: 4.8,
    downloads: 1247,
    short: 'Accurate sheep detection for livestock management',
    description: 'Advanced sheep detection model optimized for agricultural drone operations. Provides real-time detection with high accuracy in various lighting conditions.',
    inputs: {
      resolution: '640p',
      minFps: 30,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: true,
      latencyMs: 45
    },
    images: [
      'https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/sheep-detector.mp4',
    tags: ['livestock', 'agriculture', 'detection', 'real-time']
  },
  {
    id: 'cattle-detector-v1',
    slug: 'cattle-detector-v1',
    title: 'Cattle Detector v1',
    category: 'Agriculture',
    price: 59,
    rating: 4.9,
    downloads: 2156,
    short: 'Reliable cattle detection and counting',
    description: 'Professional cattle detection model with advanced counting capabilities. Ideal for large-scale livestock operations and herd management.',
    inputs: {
      resolution: '1080p',
      minFps: 25,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: true,
      latencyMs: 52
    },
    images: [
      'https://images.unsplash.com/photo-1546445317-29d454d9687c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/cattle-detector.mp4',
    tags: ['livestock', 'agriculture', 'counting', 'herd-management']
  },
  {
    id: 'road-crack-v2',
    slug: 'road-crack-v2',
    title: 'Road Crack v2',
    category: 'Roads',
    price: 79,
    rating: 4.7,
    downloads: 3421,
    short: 'Advanced road surface crack detection',
    description: 'Enhanced road crack detection model with improved accuracy for infrastructure inspection. Detects various types of surface damage.',
    inputs: {
      resolution: '1080p',
      minFps: 30,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: true,
      latencyMs: 38
    },
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/road-crack.mp4',
    tags: ['infrastructure', 'roads', 'crack-detection', 'maintenance']
  },
  {
    id: 'powerline-insulator-crack-v1',
    slug: 'powerline-insulator-crack-v1',
    title: 'Powerline Insulator Crack v1',
    category: 'Utilities',
    price: 149,
    rating: 4.9,
    downloads: 892,
    short: 'Critical power infrastructure inspection',
    description: 'Specialized model for detecting cracks and damage in powerline insulators. Critical for preventing power outages and ensuring grid reliability.',
    inputs: {
      resolution: '1080p',
      minFps: 25,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: false,
      latencyMs: 65
    },
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/powerline-insulator.mp4',
    tags: ['utilities', 'power', 'infrastructure', 'safety']
  },
  {
    id: 'solar-panel-hotspot-v1',
    slug: 'solar-panel-hotspot-v1',
    title: 'Solar Panel Hotspot (Thermal) v1',
    category: 'Utilities',
    price: 129,
    rating: 4.8,
    downloads: 1567,
    short: 'Thermal detection for solar panel maintenance',
    description: 'Thermal imaging model for detecting hotspots in solar panels. Essential for preventive maintenance and maximizing energy production.',
    inputs: {
      resolution: '640p',
      minFps: 15,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: true,
      latencyMs: 75
    },
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/solar-panel.mp4',
    tags: ['solar', 'thermal', 'maintenance', 'energy']
  },
  {
    id: 'roof-tile-damage-terracotta-v1',
    slug: 'roof-tile-damage-terracotta-v1',
    title: 'Roof Tile Damage (Terracotta) v1',
    category: 'Roofing',
    price: 79,
    rating: 4.6,
    downloads: 2341,
    short: 'Terracotta roof tile damage detection',
    description: 'Specialized model for detecting damage in terracotta roof tiles. Helps identify areas needing repair or replacement.',
    inputs: {
      resolution: '1080p',
      minFps: 30,
      device: 'RC Pro'
    },
    outputs: {
      boxes: true,
      masks: false,
      latencyMs: 42
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    demoVideo: '/demo/roof-tile.mp4',
    tags: ['roofing', 'terracotta', 'damage-detection', 'maintenance']
  }
]

// Bundles
export const bundles: Bundle[] = [
  {
    id: 'ag-pack',
    name: 'Agriculture Pack',
    description: 'Complete livestock detection suite for agricultural operations',
    models: ['sheep-detector-v1', 'cattle-detector-v1'],
    price: 199,
    savings: 9
  },
  {
    id: 'infrastructure-pack',
    name: 'Infrastructure Pack',
    description: 'Essential models for road and utility infrastructure inspection',
    models: ['road-crack-v2', 'powerline-insulator-crack-v1'],
    price: 229,
    savings: 19
  }
]

// Subscription plans
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'all-models',
    name: 'All Models',
    price: 100,
    description: 'Unlimited access to all models and future releases',
    features: [
      'Access to all current models',
      'Future model releases included',
      'Priority support',
      'Early access to beta features'
    ]
  }
]

// Leaderboard data
export const leaderboard: LeaderboardEntry[] = [
  {
    name: 'Sarah Chen',
    points: 1200,
    lastContribution: '2024-01-15'
  },
  {
    name: 'Mike Rodriguez',
    points: 950,
    lastContribution: '2024-01-12'
  },
  {
    name: 'Alex Thompson',
    points: 800,
    lastContribution: '2024-01-10'
  },
  {
    name: 'Emma Wilson',
    points: 650,
    lastContribution: '2024-01-08'
  },
  {
    name: 'David Kim',
    points: 500,
    lastContribution: '2024-01-05'
  }
]

// FAQ data
export const faq: FAQ[] = [
  {
    question: 'How do I download models to my drone controller?',
    answer: 'After purchase, you\'ll receive a download link. Simply transfer the model file to your DJI controller via USB or the DJI Assistant app.'
  },
  {
    question: 'Do the models work offline?',
    answer: 'Yes! All models are designed to work completely offline once downloaded to your controller. No internet connection required during flight.'
  },
  {
    question: 'What\'s the difference between one-time purchase and subscription?',
    answer: 'One-time purchases give you permanent access to specific models. Subscriptions provide unlimited access to all current and future models for a monthly fee.'
  },
  {
    question: 'Can I use these models for commercial purposes?',
    answer: 'Yes, all models come with commercial licensing included. You can use them for professional drone operations and commercial projects.'
  },
  {
    question: 'How often are new models released?',
    answer: 'We release new models monthly, with major updates every quarter. Subscribers get automatic access to all new releases.'
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    quote: 'These models have transformed our agricultural surveying. The accuracy is incredible.',
    author: 'Sarah Chen',
    role: 'Agricultural Inspector'
  },
  {
    quote: 'Fast, reliable, and the offline capability is a game-changer for remote sites.',
    author: 'Mike Rodriguez',
    role: 'Infrastructure Inspector'
  },
  {
    quote: 'The subscription model is perfect for our growing operation. We always have access to the latest technology.',
    author: 'Alex Thompson',
    role: 'Drone Fleet Manager'
  }
]

// Demo flag
export const isDemo = process.env.NEXT_PUBLIC_DEMO === 'true'
