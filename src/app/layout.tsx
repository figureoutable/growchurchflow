import type { Metadata } from "next";
import { Geist_Mono, Inter, Lora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Church Flow | Websites & Short-Form Video for Churches",
    template: "%s | Church Flow",
  },
  description:
    "Creative agency building beautiful church websites and YouTube Shorts & social content so your church can focus on mission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-brand-canvas font-sans text-brand-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
