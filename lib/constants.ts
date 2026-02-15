/**
 * Constants and Configuration
 * Shared constants used across the application
 */

export const SERVICES = [
  { value: 'starter', label: 'Hébergement Starter (5.000 FCFA)' },
  { value: 'pro', label: 'Hébergement Pro (12.000 FCFA)' },
  { value: 'dev-sandbox', label: 'Dev Sandbox (15.000 FCFA)' },
  { value: 'power-vps', label: 'Power VPS (25.000 FCFA)' },
  { value: 'vps-custom', label: 'VPS Personnalisé' },
  { value: 'paas', label: 'PaaS Déploiement Autonome' },
  { value: 'marketplace', label: 'Application Marketplace' },
  { value: 'custom', label: 'Autre / Infrastructure sur mesure' },
] as const

export type ServiceValue = typeof SERVICES[number]['value']

export const SERVICE_LABELS: Record<ServiceValue, string> = {
  starter: 'Hébergement Starter (5.000 FCFA)',
  pro: 'Hébergement Pro (12.000 FCFA)',
  'dev-sandbox': 'Dev Sandbox (15.000 FCFA)',
  'power-vps': 'Power VPS (25.000 FCFA)',
  'vps-custom': 'VPS Personnalisé',
  paas: 'PaaS Déploiement Autonome',
  marketplace: 'Application Marketplace',
  custom: 'Autre / Infrastructure sur mesure',
}

/**
 * Get label for a service value
 */
export function getServiceLabel(value: string): string {
  return SERVICE_LABELS[value as ServiceValue] || 'Service inconnu'
}

/**
 * Site configuration
 */
export const SITE_CONFIG = {
  name: 'Versenco.cloud',
  description: 'Infrastructure cloud souveraine made in Benin',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'contact@versenco.com',
  phone: '+229 40 13 80 61',
  whatsapp: 'https://wa.me/22940138061',
  location: 'Cotonou, Bénin',
} as const

/**
 * API Configuration
 */
export const API_CONFIG = {
  timeout: 10000, // 10 seconds
  retries: 3,
} as const
