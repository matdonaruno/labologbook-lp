import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Labo Logbook | Clinical Laboratory OS",
  description: "The next-generation platform for clinical laboratories. Manage reagents, equipment, and AI workflows in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Preload hero images for faster LCP */}
        <link
          rel="preload"
          href="/images/left_hiro2.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/right_hiro2.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/labovoice_app.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
