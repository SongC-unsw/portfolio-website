import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <main className="w-full">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
