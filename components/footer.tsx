import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import AnimateInView from "./animate-in-view"

export default function Footer() {
  return (
    <footer className="w-full border-t py-8">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <AnimateInView className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </AnimateInView>

        <AnimateInView className="flex space-x-4" delay={100}>
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </AnimateInView>
      </div>
    </footer>
  )
}
