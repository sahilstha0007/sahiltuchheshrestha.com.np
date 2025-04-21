export type Locale = (typeof locales)[number];

export const locales = ['en', 'ne'] as const;
export const defaultLocale: Locale = 'en';
