/**
 * Contact Form API Route
 * 
 * POST /api/contact
 * 
 * This API endpoint handles contact form submissions with:
 * - Input validation using Zod
 * - Rate limiting to prevent spam
 * - Error handling and logging
 * - Secure forwarding to n8n webhook
 */

import { NextRequest, NextResponse } from 'next/server'
import { validateContactForm, sanitizeInput } from '@/lib/validators'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendToN8n } from '@/lib/n8n'

/**
 * Get client IP address from request headers
 * Handles proxies and load balancers
 */
function getClientIP(request: NextRequest): string {
  // Try common headers used by proxies
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }

  // Fallback to request socket (may be unavailable in some environments)
  return 'unknown'
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(_request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(_request)

    // Check rate limit
    const isAllowed = checkRateLimit(clientIP)
    if (!isAllowed) {
      console.warn(`[RateLimit] Blocked submission from ${clientIP}`)
      return NextResponse.json(
        {
          success: false,
          error: 'Trop de requêtes. Veuillez réessayer plus tard.',
          code: 'RATE_LIMIT_EXCEEDED',
        },
        { status: 429 }
      )
    }

    // Parse request body
    let body: unknown
    try {
      body = await _request.json()
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Corps de la requête invalide',
          code: 'INVALID_JSON',
        },
        { status: 400 }
      )
    }

    // Validate input data
    const validation = validateContactForm(body)

    if (!validation.success) {
      const errors = validation.error.flatten()
      console.warn(`[Validation] Error from ${clientIP}:`, errors)

      return NextResponse.json(
        {
          success: false,
          error: 'Données invalides',
          code: 'VALIDATION_ERROR',
          details: errors.fieldErrors,
        },
        { status: 400 }
      )
    }

    // Sanitize inputs (extra protection)
    const sanitizedData = {
      ...validation.data,
      name: sanitizeInput(validation.data.name),
      message: sanitizeInput(validation.data.message),
    }

    console.log(`[Contact] New submission from ${clientIP}:`, {
      email: sanitizedData.email,
      service: sanitizedData.service,
      timestamp: new Date().toISOString(),
    })

    // Send to n8n webhook
    try {
      await sendToN8n(sanitizedData)

      return NextResponse.json(
        {
          success: true,
          message: 'Formulaire envoyé avec succès',
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      )
    } catch (n8nError) {
      const errorMessage = n8nError instanceof Error ? n8nError.message : 'Unknown error'

      console.error('[N8N] Failed to send webhook:', errorMessage, {
        email: sanitizedData.email,
        timestamp: new Date().toISOString(),
      })

      // Return user-friendly error even if n8n fails
      return NextResponse.json(
        {
          success: false,
          error: 'Erreur lors de l\'envoi du formulaire. Veuillez réessayer ou nous contacter directement à contact@versenco.com',
          code: 'WEBHOOK_ERROR',
        },
        { status: 503 }
      )
    }
  } catch (error) {
    // Catch-all for unexpected errors
    console.error('[API] Unexpected error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Erreur serveur interne',
        code: 'INTERNAL_SERVER_ERROR',
      },
      { status: 500 }
    )
  }
}

/**
 * OPTIONS /api/contact
 * Handle CORS preflight requests
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
