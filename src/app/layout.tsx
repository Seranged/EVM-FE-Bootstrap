import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientProvider from './clientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seranged.com/'),
  title: 'EVM-FE-Bootstrap',
  description: 'A comprehensive frontend bootstrap for EVM-compatible projects.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.seranged.com/',
    title: 'EVM-FE-Bootstrap',
    description: 'A comprehensive frontend bootstrap for EVM-compatible projects.',
    images: [
      {
        url: '/metaDataImage.png',
      },
    ],
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'manifest', url: '/favicon/site.webmanifest' },
    { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
  twitter: {
    site: '@seranged',
    creator: '@seranged',
    title: 'EVM-FE-Bootstrap',
    description: 'A comprehensive frontend bootstrap for EVM-compatible projects.',
    images: [
      {
        url: 'https://www.seranged.com/metaDataImage.png',
      },
    ],
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
