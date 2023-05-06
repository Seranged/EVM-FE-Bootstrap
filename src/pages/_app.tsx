import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Inter } from 'next/font/google'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import Head from 'next/head'

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
    <>
      <Head>
        <title>EVM-FE-Boilerplate</title>
        <meta name="description" content="EVM-FE-Boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
      </Head>
      <main className={`${inter.className}`}>
        <WagmiConfig client={client}>
          <RainbowKitProvider chains={chains} modalSize="compact" theme={darkTheme()}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </main>
    </>
  )
}
