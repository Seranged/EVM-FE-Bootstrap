import { createConfig, http } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { phantomWallet } from '@rainbow-me/rainbowkit/wallets'

const { wallets } = getDefaultWallets()
const appName = 'evm-bootstrap-repo'
const projectId = 'walletConnectId(NeedsReplacing)'

const connectors = connectorsForWallets(
  [
    ...wallets,
    {
      groupName: 'Popular',
      wallets: [phantomWallet],
    },
  ],
  {
    appName,
    projectId,
  },
)

export const wagmiConfig = createConfig({
  chains: [mainnet, arbitrum],
  ssr: true,
  connectors: connectors,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
})
