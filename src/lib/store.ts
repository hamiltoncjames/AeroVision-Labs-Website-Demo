import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { generateId } from './utils'

// User Store
interface User {
  id: string
  email: string
  name: string
  activeSubscription: boolean
  subscriptionExpiry?: string
}

interface UserStore {
  user: User | null
  login: (email: string, name: string) => void
  logout: () => void
  updateSubscription: (active: boolean, expiry?: string) => void
  hydrate: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      login: (email: string, name: string) => {
        set({
          user: {
            id: generateId(),
            email,
            name,
            activeSubscription: false
          }
        })
      },
      logout: () => set({ user: null }),
      updateSubscription: (active: boolean, expiry?: string) => {
        const user = get().user
        if (user) {
          set({
            user: {
              ...user,
              activeSubscription: active,
              subscriptionExpiry: expiry
            }
          })
        }
      },
      hydrate: () => {
        // This will be called by the provider to hydrate from localStorage
      }
    }),
    {
      name: 'user-store',
      version: 1
    }
  )
)

// Payment Store
interface PaymentCard {
  brand: string
  last4: string
  exp: string
}

interface PaymentStore {
  card: PaymentCard | null
  saveCard: (card: PaymentCard) => void
  clearCard: () => void
  hydrate: () => void
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set) => ({
      card: null,
      saveCard: (card: PaymentCard) => set({ card }),
      clearCard: () => set({ card: null }),
      hydrate: () => {
        // This will be called by the provider to hydrate from localStorage
      }
    }),
    {
      name: 'payment-store',
      version: 1
    }
  )
)

// Cart Store
interface CartItem {
  modelId: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (modelId: string, quantity?: number) => void
  removeItem: (modelId: string) => void
  updateQuantity: (modelId: string, quantity: number) => void
  clearCart: () => void
  hydrate: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (modelId: string, quantity = 1) => {
        const { items } = get()
        const existingItem = items.find(item => item.modelId === modelId)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.modelId === modelId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          })
        } else {
          set({
            items: [...items, { modelId, quantity }]
          })
        }
      },
      removeItem: (modelId: string) => {
        const { items } = get()
        set({
          items: items.filter(item => item.modelId !== modelId)
        })
      },
      updateQuantity: (modelId: string, quantity: number) => {
        const { items } = get()
        set({
          items: items.map(item =>
            item.modelId === modelId
              ? { ...item, quantity }
              : item
          )
        })
      },
      clearCart: () => set({ items: [] }),
      hydrate: () => {
        // This will be called by the provider to hydrate from localStorage
      }
    }),
    {
      name: 'cart-store',
      version: 1
    }
  )
)

// Orders Store
interface Order {
  id: string
  date: string
  items: Array<{
    modelId: string
    title: string
    price: number
    quantity: number
  }>
  total: number
  type: 'one-time' | 'subscription'
  licenseKey?: string
  discountApplied?: number
}

interface OrdersStore {
  orders: Order[]
  placeOrder: (items: Order['items'], total: number, type: Order['type'], discountApplied?: number) => void
  hydrate: () => void
}

export const useOrdersStore = create<OrdersStore>()(
  persist(
    (set, get) => ({
      orders: [],
      placeOrder: (items, total, type, discountApplied) => {
        const order: Order = {
          id: generateId(),
          date: new Date().toISOString(),
          items,
          total,
          type,
          licenseKey: type === 'one-time' ? generateId() : undefined,
          discountApplied
        }
        
        set({
          orders: [order, ...get().orders]
        })
      },
      hydrate: () => {
        // This will be called by the provider to hydrate from localStorage
      }
    }),
    {
      name: 'orders-store',
      version: 1
    }
  )
)

// Contribution Store
interface Contribution {
  id: string
  title: string
  url: string
  description: string
  category: string
  pointsAwarded: number
  date: string
}

interface ContributionStore {
  contributions: Contribution[]
  addContribution: (contribution: Omit<Contribution, 'id' | 'date' | 'pointsAwarded'>) => void
  getTotalPoints: () => number
  getDiscountPercentage: () => number
  hydrate: () => void
}

export const useContributionStore = create<ContributionStore>()(
  persist(
    (set, get) => ({
      contributions: [],
      addContribution: (contribution) => {
        const pointsAwarded = 100 // Base points for each contribution
        const newContribution: Contribution = {
          ...contribution,
          id: generateId(),
          date: new Date().toISOString(),
          pointsAwarded
        }
        
        set({
          contributions: [newContribution, ...get().contributions]
        })
      },
      getTotalPoints: () => {
        return get().contributions.reduce((total, contribution) => total + contribution.pointsAwarded, 0)
      },
      getDiscountPercentage: () => {
        const totalPoints = get().getTotalPoints()
        const discountPercent = Math.floor(totalPoints / 100) * 10
        return Math.min(discountPercent, 40) // Cap at 40%
      },
      hydrate: () => {
        // This will be called by the provider to hydrate from localStorage
      }
    }),
    {
      name: 'contribution-store',
      version: 1
    }
  )
)
