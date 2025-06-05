export const locales = ['en', 'ru'] as const
export const defaultLocale = 'en' as const

// Типизированные локали
export type Locale = (typeof locales)[number]
