"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguagePicker from "./language-picker"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex h-16 items-center">
        {/* Logo/Brand - Left side */}
        <div className="flex-1">
          <Link href="/" className="font-bold text-xl transition-colors hover:text-primary">
            Portfolio
          </Link>
        </div>

        {/* Navigation - Center */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors relative group">
            {t("nav.home")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors relative group">
            {t("nav.projects")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            {t("nav.about")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
            {t("nav.contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right side - Language picker and mobile menu */}
        <div className="flex items-center justify-end gap-2 flex-1">
          {/* Language picker - rightmost position */}
          <LanguagePicker />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`absolute top-16 left-0 right-0 bg-background border-b md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-4">
            <Link
              href="#home"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#projects"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#about"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#contact"
              className="py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
