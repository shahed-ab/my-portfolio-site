interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // 5 requests per window

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean expired records periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
      resetTime: now + WINDOW_MS,
    };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - record.count,
    resetTime: record.resetTime,
  };
}
