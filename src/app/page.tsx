import Link from 'next/link'

// Landing page localhost:3000/

export default function LandingPage() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <p className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/40 p-4'>
          EVM-FE-Bootstrap Repository
        </p>
        <Link href='/examplePage'>
          <div className='mt-3 rounded-xl border border-slate-500 bg-gradient-to-b p-3 hover:from-zinc-800/40 hover:to-zinc-500/50'>
            Example Page
          </div>
        </Link>
      </main>
    </>
  )
}
