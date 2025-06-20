// app/providers.jsx
'use client'

import { ThemeProvider } from 'next-themes'

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  )
}