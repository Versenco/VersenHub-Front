/**
 * Rate Limiting Module
 * 
 * This module provides rate limiting to prevent spam and abuse
 * by limiting the number of form submissions per IP address.
 * 
 * For development: Uses in-memory storage
 * For production: Use Upstash Redis (configuration in env)
 */

interface RateLimitStore {
  count: number
  resetTime: number
}

// In-memory store for development
const memoryStore = new Map<string, RateLimitStore>()

// Configuration
const RATE_LIMIT_CONFIG = {
  maxRequests: 5,        // 5 requests
  windowMs: 3600000,     // Per hour (60 minutes)
  cleanupInterval: 600000, // Cleanup every 10 minutes
}

/**
 * In-memory rate limiting (for development)
 * Not suitable for production with multiple instances
 */
export function rateLimitMemory(key: string): boolean {
  const now = Date.now()
  const limitData = memoryStore.get(key)

  // If no entry or window has expired, reset
  if (!limitData || limitData.resetTime < now) {
    memoryStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    })
    return true
  }

  // Check if limit exceeded
  if (limitData.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return false
  }

  // Increment and allow
  limitData.count++
  return true
}

/**
 * Get rate limit status for a key
 */
export function getRateLimitStatus(key: string) {
  const now = Date.now()
  const limitData = memoryStore.get(key)

  if (!limitData || limitData.resetTime < now) {
    return {
      remaining: RATE_LIMIT_CONFIG.maxRequests,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
      isLimited: false,
    }
  }

  return {
    remaining: Math.max(0, RATE_LIMIT_CONFIG.maxRequests - limitData.count),
    resetTime: limitData.resetTime,
    isLimited: limitData.count >= RATE_LIMIT_CONFIG.maxRequests,
  }
}

/**
 * Cleanup old entries from memory store
 * Call this periodically to prevent memory leaks
 */
export function cleanupRateLimitStore() {
  const now = Date.now()
  let cleaned = 0

  for (const [key, data] of memoryStore.entries()) {
    if (data.resetTime < now) {
      memoryStore.delete(key)
      cleaned++
    }
  }

  if (cleaned > 0) {
    console.log(`[RateLimit] Cleaned up ${cleaned} expired entries`)
  }
}

/**
 * Start periodic cleanup
 * Call this once in your application startup
 */
export function startRateLimitCleanup() {
  setInterval(
    () => cleanupRateLimitStore(),
    RATE_LIMIT_CONFIG.cleanupInterval
  )
}

/**
 * For production: Redis-based rate limiting
 * TODO: Implement when Upstash credentials are available
 * 
 * export async function rateLimitRedis(key: string): Promise<boolean> {
 *   const redis = new Redis({
 *     url: process.env.UPSTASH_REDIS_REST_URL!,
 *     token: process.env.UPSTASH_REDIS_REST_TOKEN!,
 *   })
 * 
 *   const ratelimit = new Ratelimit({
 *     redis,
 *     limiter: Ratelimit.slidingWindow(5, '1 h'),
 *   })
 * 
 *   const { success } = await ratelimit.limit(key)
 *   return success
 * }
 */

/**
 * Main rate limit function - uses memory by default
 * Can be switched to Redis implementation for production
 */
export function checkRateLimit(key: string): boolean {
  // Use memory-based rate limiting for now
  // Switch to Redis in production: return await rateLimitRedis(key)
  return rateLimitMemory(key)
}
