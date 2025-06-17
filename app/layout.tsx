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
  description: "A portfolio website showcasing my projects and skills",
  keywords: ["portfolio", "devfolio", "next.js", "developer", "projects"],
  openGraph: {
    title: "Devfolio - Portfolio",
    description: "Explore my portfolio website",
    type: "website",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Devfolio Portfolio Preview",
      },
    ],
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

