import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Inter } from 'next/font/google'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

// WAGMI Chains
const { chains, provider } = configureChains(
  [mainnet, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'EVM-FE-Boilerplate',
  chains,
})

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains} modalSize="compact" theme={darkTheme()}>
          <Navbar />
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}
