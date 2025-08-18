import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arth Vala | Portfolio",
  description: "Personal portfolio website of Arth Vala - AI, Web Dev, and Creative Tech enthusiast",
  keywords: ["portfolio", "developer", "AI", "web development", "full stack", "Arth Vala"],
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <CustomCursor />
        {children}
        <Analytics />

        <Script
          src="https://cdn.jotfor.ms/agent/embedjs/0198bb4ce4aa76e195c59ddb9533896a82b0/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
