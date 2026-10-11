const monthFmt = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** "2024-06" → Date (UTC, first day of month). */
export function parseYearMonth(value: string): Date {
  const [y, m = '1'] = value.split('-')
  return new Date(Date.UTC(Number(y), Number(m) - 1, 1))
}

/** "2024-06" → "Jun 2024"; "2024" → "2024". */
export function formatYearMonth(value: string): string {
  if (/^\d{4}$/.test(value)) return value
  return monthFmt.format(parseYearMonth(value))
}

export function formatPeriod(start: string, end?: string): string {
  if (end === undefined) return formatYearMonth(start)
  return `${formatYearMonth(start)} – ${end === 'present' ? 'Present' : formatYearMonth(end)}`
}

/** Inclusive number of months between two "YYYY-MM" values. */
export function monthsBetween(start: string, end: string | undefined, now: Date = new Date()): number {
  const s = parseYearMonth(start)
  const e = !end || end === 'present' ? now : parseYearMonth(end)
  return (e.getUTCFullYear() - s.getUTCFullYear()) * 12 + (e.getUTCMonth() - s.getUTCMonth()) + 1
}

/** 15 → "1 yr 3 mos". Returns "" when the end is unknown. */
export function formatDuration(start: string, end?: string, now: Date = new Date()): string {
  if (end === undefined) return ''
  const total = Math.max(1, monthsBetween(start, end, now))
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts: string[] = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
  return parts.join(' ')
}

/** Whole years since a "YYYY-MM" date. */
export function yearsSince(start: string, now: Date = new Date()): number {
  return Math.floor((monthsBetween(start, 'present', now) - 1) / 12)
}
