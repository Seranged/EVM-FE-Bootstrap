import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="rounded-xl border border-slate-500 bg-gradient-to-b from-zinc-800/30 to-zinc-500/40 p-4">
        EVM-FE-Bootstrap Repository
      </p>
    </main>
    </>
  )
}
