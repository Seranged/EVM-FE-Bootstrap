'use client'
import Link from 'next/link'
import { useBlockNumber } from 'wagmi'
import { useChainId } from 'wagmi'

// Landing page localhost:3000/

export default function LandingPage() {
  const blockNumber = useBlockNumber({
    watch: true,
  })

  const chainId = useChainId()

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <div className='flex space-y-3 md:space-y-0 md:space-x-5 md:flex-row flex-col'>
          <p className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/40 p-4 flex items-center text-center justify-center'>
            EVM-FE-Bootstrap<br></br>Repository
          </p>
          <div className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/40 p-4 flex flex-col text-center justify-center'>
            <p>Watching Blocks on {chainId ? chainId : 'Loading...'}</p>
            <div className='flex items-center justify-center space-x-2'>
              <div className='relative'>
                <div
                  className={`absolute inline-flex h-full w-full rounded-full  ${
                    blockNumber.data ? 'bg-green-500' : 'bg-orange-500'
                  } opacity-75 animate-ping`}
                ></div>
                <div
                  className={`relative h-2 w-2 rounded-full ${blockNumber.data ? 'bg-green-500' : 'bg-orange-500'}`}
                ></div>
              </div>
              <p>{blockNumber.data ? Number(blockNumber.data) : 'Loading...'}</p>
            </div>
          </div>
        </div>
        <Link href='/examplePage'>
          <div className='mt-3 rounded-xl border border-slate-500 bg-gradient-to-b p-3 hover:from-zinc-800/40 hover:to-zinc-500/50'>
            Example Page
          </div>
        </Link>
      </main>
    </>
  )
}
