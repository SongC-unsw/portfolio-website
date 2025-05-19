import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimateInView from "./animate-in-view"

export default function Hero() {
  return (
    <section id="home" className="w-full py-24 md:py-32">
      <div className="container max-w-6xl mx-auto">
        <AnimateInView>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
        </AnimateInView>

        <AnimateInView delay={100}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Science Student & Developer</p>
        </AnimateInView>

        <AnimateInView delay={200}>
          <p className="text-lg mb-8 text-muted-foreground">
            I build modern web applications with React, Next.js, and Tailwind CSS. Passionate about creating clean,
            user-friendly interfaces.
          </p>
        </AnimateInView>

        <AnimateInView delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
