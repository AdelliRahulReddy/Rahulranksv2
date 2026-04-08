// @ts-ignore - SCSS import is handled by Next.js
import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { VideoProvider } from "@/provider/VideoProvider";
import { siteConfig, organizationSchema, websiteSchema } from "@/data/siteConfig";
import type { Metadata } from "next";

import {
  Abril_Fatface,
  DM_Sans,
  EB_Garamond,
  Kufam,
  Poppins,
  Playfair_Display,
} from "next/font/google";

// all font configure
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

const kufam = Kufam({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kufam",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.titleSuffix,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.ownerName, url: siteConfig.siteUrl }],
  creator: siteConfig.ownerName,
  publisher: siteConfig.brandName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.titleSuffix,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
    images: [
      {
        url: `${siteConfig.siteUrl}/assets/img/hero/hero-img.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.ownerName} - ${siteConfig.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleSuffix,
    description: siteConfig.description,
    creator: "@reddystack",
    images: [`${siteConfig.siteUrl}/assets/img/hero/hero-img.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [organizationSchema, websiteSchema].map(schema =>
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
  ).join("\n");

  return (
    <html
      lang="en"
      className={`
        ${abril.variable}
        ${dmSans.variable}
        ${garamond.variable}
        ${kufam.variable}
        ${poppins.variable}
        ${playfair.variable}
      `}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="scroll-smooth">
        <ThemeProvider>
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

