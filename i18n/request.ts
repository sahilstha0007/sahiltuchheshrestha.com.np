import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '../services/locale';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const validLocale = locale || 'en'; // Fallback to 'en' if locale is invalid

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});