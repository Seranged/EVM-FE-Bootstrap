import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientProvider from './clientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EVM-FE-Boilerplate',
  description: 'EVM-FE-Boilerplate Description Example',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.seranged.com',
    title: 'EVM-FE-Boilerplate',
    description: 'EVM-FE-Boilerplate Description Example',
  },
  twitter: {
    site: '@seranged',
    creator: '@seranged',
    title: 'EVM-FE-Boilerplate',
    description: 'EVM-FE-Boilerplate Description Example',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
