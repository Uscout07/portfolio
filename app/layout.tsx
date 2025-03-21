import type { Metadata } from "next";
import { Passion_One } from 'next/font/google';
import Navhead from "./components/header";
import { Providers } from "./components/theme-Provider";
import "./globals.css";

const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Devfolio - Portfolio",
  description: "A portfolio website showcasing my projects and skills built with Next.js.",
  keywords: ["portfolio", "devfolio", "next.js", "developer", "projects"],
  openGraph: {
    title: "Devfolio - Portfolio",
    description: "Explore my portfolio website built with Next.js.",
    url: "https://yourdomain.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="transition-colors">
      <body className={`${passionOne.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

