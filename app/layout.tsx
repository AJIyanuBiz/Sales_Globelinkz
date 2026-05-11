import type { Metadata, Viewport } from "next"
import { Inter, DM_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TCSS — The Conversion Stack System | Stop Guessing. Start Converting.",
  description:
    "A complete 5-layer framework for building the foundation your Facebook ad campaigns need before you ever open the ads manager. Build your STACK: Story, Transform, Attract, Convert, Keep.",
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
  ],
  authors: [{ name: "Simon Peace", url: "https://globelinkz.com" }],
  creator: "GlobeLinkz",
  publisher: "GlobeLinkz",
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "TCSS — The Conversion Stack System",
    description:
      "Stop guessing. Start converting. The 5-layer framework that builds what your campaigns need before you spend a single kobo on Facebook ads.",
    siteName: "The Conversion Stack System",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCSS — The Conversion Stack System",
    description:
      "Stop guessing. Start converting. The 5-layer framework for Facebook ads success.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmMono.variable} ${bebasNeue.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
