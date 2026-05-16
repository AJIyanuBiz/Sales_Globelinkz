import type { Metadata, Viewport } from "next";
import { Inter, DM_Mono, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCSS — Build Facebook Ads That Make People Stop, Click and Buy",
  description:
    "The Conversion Stack System: A 5-layer framework that builds what your campaigns need before you spend a single kobo on Facebook ads. Stop guessing, start converting.",
  keywords: [
    "Facebook ads",
    "conversion optimization",
    "digital marketing",
    "ad campaigns",
    "marketing framework",
    "TCSS",
    "Conversion Stack System",
    "customer story profile",
    "marketing course",
    "Facebook advertising Nigeria",
  ],
  authors: [{ name: "Simon Peace", url: "https://globelinkz.com" }],
  creator: "GlobeLinkz",
  publisher: "GlobeLinkz",
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "TCSS — Build Facebook Ads That Make People Stop, Click and Buy",
    description:
      "The reason your ads aren't working has nothing to do with your ads. The 5-layer framework that builds what your campaigns need before you spend.",
    siteName: "The Conversion Stack System",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCSS — Build Facebook Ads That Make People Stop, Click and Buy",
    description:
      "The reason your ads aren't working has nothing to do with your ads. Build your STACK today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmMono.variable} ${bebasNeue.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <MetaPixel />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>
    </html>
  );
}
