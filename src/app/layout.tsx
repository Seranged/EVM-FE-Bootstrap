import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type React from 'react'
import { Inter } from 'next/font/google'
import ClientProvider from './clientProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <title>EVM-FE-Boilerplate</title>
        <meta name='description' content='EVM-FE-Boilerplate' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' sizes='64x64' href='/favicon.png' />
      </head>
      <html lang='en'>
        <body className={`${inter.className}`}>
          <ClientProvider>{children}</ClientProvider>
        </body>
      </html>
    </>
  )
}
