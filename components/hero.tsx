"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimateInView from "./animate-in-view"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="w-full py-24 md:py-32">
      <div className="container max-w-6xl mx-auto">
        <AnimateInView>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t("hero.greeting")} <span className="text-primary">Your Name</span>
          </h1>
        </AnimateInView>

        <AnimateInView delay={100}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("hero.title")}</p>
        </AnimateInView>

        <AnimateInView delay={200}>
          <p className="text-lg mb-8 text-muted-foreground">{t("hero.description")}</p>
        </AnimateInView>

        <AnimateInView delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="#projects">{t("hero.viewProjects")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
              <Link href="#contact">{t("hero.contactMe")}</Link>
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
