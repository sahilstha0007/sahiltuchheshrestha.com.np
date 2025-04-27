import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import NextAuthProvider from "@/SessionProvider";
import { METADATA } from "@/common/constants/metadata";
import { onestSans } from "@/common/styles/fonts";

// Define a default domain for fallback
const defaultDomain = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? defaultDomain
      : process.env.DOMAIN || defaultDomain, // Use fallback here
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  const session = await getServerSession();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="a6006737-aaf9-46ed-ba31-96628f5d9931"
      ></Script>
      <body className={onestSans.className}>
        <NextTopLoader
          color="#FFD700"
          initialPosition={0.08}
          crawlSpeed={150}
          height={3}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={150}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider session={session}>
            <ThemeProviderContext>
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
