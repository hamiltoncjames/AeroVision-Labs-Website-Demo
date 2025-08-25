import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(price)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function calculateDiscount(originalPrice: number, discountPercentage: number): number {
  return (originalPrice * discountPercentage) / 100
}

export function getDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  return originalPrice - calculateDiscount(originalPrice, discountPercentage)
}
