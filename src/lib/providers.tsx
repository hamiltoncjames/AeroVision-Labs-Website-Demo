'use client'

import { useEffect } from 'react'
import { useUserStore, useCartStore, useOrdersStore, usePaymentStore, useContributionStore } from './store'

export function Providers({ children }: { children: React.ReactNode }) {
  const { hydrate: hydrateUser } = useUserStore()
  const { hydrate: hydrateCart } = useCartStore()
  const { hydrate: hydrateOrders } = useOrdersStore()
  const { hydrate: hydratePayment } = usePaymentStore()
  const { hydrate: hydrateContribution } = useContributionStore()

  useEffect(() => {
    // Hydrate all stores from localStorage
    hydrateUser()
    hydrateCart()
    hydrateOrders()
    hydratePayment()
    hydrateContribution()
  }, [hydrateUser, hydrateCart, hydrateOrders, hydratePayment, hydrateContribution])

  return <>{children}</>
}
