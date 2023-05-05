import Navbar from '@/components/Navbar'

// Parent Layout for everything nested inside /examplePage

export default function ExamplePageLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
