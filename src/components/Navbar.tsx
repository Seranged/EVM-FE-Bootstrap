'use client'
import { FC } from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar: FC = () => {
  return (
    <>
      <div className='fixed right-5 top-4 z-50 md:right-10 md:top-10'>
        <ConnectButton.Custom>
          {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
            const connected = mounted && account && chain
            return (
              <div
                {...(!mounted && {
                  'aria-hidden': true,
                  className: 'opacity-0 cursor-default select-none',
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/50 p-2'
                        onClick={openConnectModal}
                        type='button'
                      >
                        Connect Wallet
                      </button>
                    )
                  }
                  if (chain.unsupported) {
                    return (
                      <button
                        className='rounded-xl border border-red-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/50 p-2'
                        onClick={openChainModal}
                        type='button'
                      >
                        Wrong network
                      </button>
                    )
                  }
                  return (
                    <div className='flex space-x-5'>
                      <button onClick={openChainModal} className='flex justify-center' type='button'>
                        <div className='flex space-x-2 rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/50 p-2'>
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              width={20}
                              height={20}
                              style={{ objectFit: 'contain' }}
                            />
                          )}
                          <div>{chain.name}</div>
                        </div>
                      </button>
                      <button
                        className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/50 px-3 py-2'
                        onClick={openAccountModal}
                        type='button'
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
      <div className='fixed right-80 top-10 z-10'>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[680px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-10 after:h-[190px] after:w-[840px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"></div>
      </div>
    </>
  )
}

export default Navbar
