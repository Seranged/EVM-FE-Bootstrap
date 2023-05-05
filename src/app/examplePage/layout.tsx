import Navbar from '@/components/Navbar'

// Parent Layout for everything nested inside /examplePage

export default function ExamplePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
