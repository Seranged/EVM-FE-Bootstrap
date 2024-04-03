'use client'
import type React from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'

import Navbar from '@/components/Navbar'
import { wagmiConfig } from '@/config/wagmiConfig'

const queryClient = new QueryClient()

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize='compact' theme={darkTheme()}>
            <Navbar />
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}
