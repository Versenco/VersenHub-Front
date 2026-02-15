/**
 * N8N Integration Module
 * 
 * This module handles sending contact form data to the n8n webhook
 * with proper error handling and retries
 */

import axios from 'axios'
import { ContactFormData } from './validators'

interface N8nResponse {
  success: boolean
  message?: string
  timestamp: string
}

/**
 * Send contact form data to n8n webhook
 * @param data - Validated contact form data
 * @returns Response from n8n webhook
 */
export async function sendToN8n(data: ContactFormData): Promise<N8nResponse> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('N8N webhook URL not configured')
  }

  try {
    await axios.post(webhookUrl, data, {
      timeout: 10000, // 10 second timeout
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return {
      success: true,
      message: 'Form submitted successfully',
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    // Handle different types of errors
    if (axios.isAxiosError(error)) {
      const status = error.response?.status
      const errorMessage = error.response?.data?.message || error.message

      // Log error details for debugging
      console.error(`[N8N Error] Status: ${status}`, {
        message: errorMessage,
        url: webhookUrl,
        timestamp: new Date().toISOString(),
      })

      // Throw meaningful error for client
      if (status === 404) {
        throw new Error('Webhook endpoint not found')
      } else if (status === 401 || status === 403) {
        throw new Error('Unauthorized webhook access')
      } else if (status === 429) {
        throw new Error('Webhook rate limited')
      } else if (status && status >= 500) {
        throw new Error('Webhook server error')
      } else {
        throw new Error(`Webhook error: ${errorMessage}`)
      }
    }

    // Timeout or network error
    if (error instanceof Error) {
      console.error('[N8N Network Error]', error.message)
      throw new Error('Network error while sending form')
    }

    throw new Error('Unknown error while sending form')
  }
}

/**
 * Test the n8n webhook connection
 * Useful for debugging and health checks
 */
export async function testN8nWebhook(): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('N8N webhook URL not configured')
    return false
  }

  try {
    await axios.post(
      webhookUrl,
      {
        name: 'Test',
        email: 'test@example.com',
        service: 'starter',
        message: 'Test message',
      },
      {
        timeout: 5000,
      }
    )

    console.log('[N8N] Webhook test successful')
    return true
  } catch (error) {
    console.error('[N8N] Webhook test failed:', error instanceof Error ? error.message : error)
    return false
  }
}
