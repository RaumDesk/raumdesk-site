import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RAUMDESK — Virtual Office for Remote Teams",
    template: "%s | RAUMDESK",
  },

  description:
    "Work together in a shared virtual office. Video calls, screen sharing, and collaboration tools — all in one space.",

  authors: [
    { name: "RAUMDESK Team", url: "https://raumdesk.com" },
    { name: "Danylo Ohurtsov", url: "https://ohurtsov.com" },
    { name: "Christian Khalil", url: "https://chriskhalil.vercel.app/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
