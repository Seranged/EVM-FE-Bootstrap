import { FC } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar: FC = () => {
  return (
    <>
      <div className={`fixed right-5 top-4 md:top-10  md:right-10 z-50`}>
        <ConnectButton.Custom>
          {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
            const ready = mounted
            const connected = ready && account && chain
            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className="bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-slate-500 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:px-3 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2  lg:dark:bg-zinc-800/30"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect Wallet
                      </button>
                    )
                  }
                  if (chain.unsupported) {
                    return (
                      <button
                        className="bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-red-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:px-3 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2  lg:dark:bg-zinc-800/30"
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    )
                  }
                  return (
                    <div style={{ display: 'flex', gap: 25 }}>
                      <button onClick={openChainModal} style={{ display: 'flex', alignItems: 'center' }} type="button">
                        <div className="space-x-2 flex bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-slate-500 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:px-3 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2  lg:dark:bg-zinc-800/30">
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 25, height: 25 }}
                            />
                          )}
                          <div>{chain.name}</div>
                        </div>
                      </button>
                      <button
                        className="bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-slate-500 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:px-3 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2   lg:dark:bg-zinc-800/30"
                        onClick={openAccountModal}
                        type="button"
                      >
                        {account.displayName}
                      </button>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </div>
      <div className={`fixed top-10 right-80 z-10`}>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-10 after:h-[180px] after:w-[740px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
      </div>
    </>
  )
}

export default Navbar
