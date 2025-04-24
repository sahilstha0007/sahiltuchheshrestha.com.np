"use server";

import { cookies } from "next/headers";

import { Locale, defaultLocale } from "@/config";

// Define the name for the cookie used to store the user's locale preference.
// This name is conventionally used by next-intl.
const COOKIE_NAME = "NEXT_LOCALE";

// Retrieves the user's preferred locale from the NEXT_LOCALE cookie.
// Falls back to the defaultLocale if the cookie is not set.
export const getUserLocale = async () => {
  const cookieStore = await cookies();
  // Read the cookie value; use defaultLocale if the cookie doesn't exist or has no value.
  return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
};

// Sets the user's preferred locale in the NEXT_LOCALE cookie.
export const setUserLocale = async (locale: Locale) => {
  const cookieStore = await cookies();
  // Set the cookie with the provided locale.
  cookieStore.set(COOKIE_NAME, locale);
};
