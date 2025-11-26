import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fudge Fudge Fudge",
  description: "a hack club ysws",
  icons: {
    icon: [
      { url: '/kiss.png' },
      { url: '/kiss.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/kiss.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
