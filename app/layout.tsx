import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/landing/Header";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Trace-SOL",
  description: "A Solana wallet analyser",
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
