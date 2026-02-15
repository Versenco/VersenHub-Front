import { z } from 'zod'

/**
 * Schema for contact form validation
 * Ensures all incoming data is properly validated before processing
 */
export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes'),
  
  email: z.string()
    .email('Adresse email invalide')
    .max(255, 'Email trop long'),
  
  service: z.enum([
    'starter',
    'pro',
    'dev-sandbox',
    'power-vps',
    'vps-custom',
    'paas',
    'marketplace',
    'custom',
  ]).refine((val) => val, {
    message: 'Service invalide'
  }),
  
  message: z.string()
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères')
    .optional()
    .default(''),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

/**
 * Validate contact form data
 * @param data - Raw data to validate
 * @returns Validation result with data or errors
 */
export function validateContactForm(data: unknown) {
  return ContactFormSchema.safeParse(data)
}

/**
 * Sanitize user input (remove potential script tags)
 * This is an additional layer of protection
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '') // Remove iframes
    .replace(/onerror\s*=/gi, '') // Remove onerror attributes
    .replace(/onload\s*=/gi, '') // Remove onload attributes
    .trim()
}
