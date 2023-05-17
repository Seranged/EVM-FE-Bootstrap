// You can just delete this file if you want to use the pre-defined Next.js 404 page. I gave it incase you want to build a pre-defined and are not sure how Next.js works

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <p className='rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/40 p-4'>
        404 - Page Not Found
      </p>
    </main>
  )
}
