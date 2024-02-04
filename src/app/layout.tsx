'use client'
import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import Navbar from '@/components/Navbar'
import { wagmiConfig } from '@/config/wagmiConfig'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient()

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
          <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider modalSize='compact' theme={darkTheme()}>
                <Navbar />
                {children}
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </body>
      </html>
    </>
  )
}
