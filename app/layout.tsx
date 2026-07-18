import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/landing/Header";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Trace-SOL | Solana Wallet Analyzer",
  description:
    "Analyze any Solana wallet instantly. View SOL balance, SPL token holdings, NFT collections, transaction history, and portfolio insights in a fast, clean dashboard.",

  openGraph: {
    title: "Trace-SOL | Solana Wallet Analyzer",
    description:
      "Analyze any Solana wallet instantly. Explore balances, tokens, NFTs, transactions, and portfolio insights with Trace-SOL.",
    url: "https://trace-sol.vercel.app",
    siteName: "Trace-SOL",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Trace-SOL - Solana Wallet Analyzer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trace-SOL | Solana Wallet Analyzer",
    description:
      "Analyze any Solana wallet instantly. View balances, tokens, NFTs and transaction history.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
  <html lang="en" className={cn("font-sans", inter.variable)}>
    <body className="min-h-full flex flex-col">
       <Header/>
      {children}
    </body>
  </html>
);
}
