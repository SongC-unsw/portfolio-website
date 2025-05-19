"use client"

import ProjectCard from "./project-card"
import { SectionHeading } from "./section-heading"
import AnimateInView from "./animate-in-view"
import { useLanguage } from "@/contexts/language-context"

const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, cart functionality, and secure checkout process.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Conway's Life Game",
    description:
      "A simple web implementation of Conway's Game of Life using Javascript and HTML CSS",
    image: "/life-game.gif?height=400&width=600",
    tags: ["Javascript", "HTML", "CSS"],
    liveUrl: "https://conway-s-life-game-three.vercel.app/",
    githubUrl: "https://github.com/SongC-unsw/Conway-s-Life-Game",
  },
  {
    title: "Book of Answers",
    description:
      "This is a simple React application that simulates the functionality of a \"Book of Answer\". Users can click on the book cover to get a random answer.",
    image: "/Book.png?height=400&width=600",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://book-of-answers-sigma.vercel.app/",
    githubUrl: "https://github.com/SongC-unsw/Book-of-Answers",
  },
  {
    title: "Investment & FIRE Calculator",
    description:
      "A comprehensive financial calculator for compound interest projections and FIRE (Financial Independence, Retire Early) planning.",
    image: "/savings.png?height=400&width=600",
    tags: ["React", "Material UI", "Echarts"],
    liveUrl: "https://simple-compound-investment-and-fire-calculator.vercel.app/",
    githubUrl: "https://github.com/SongC-unsw/Simple-Compound-Investment-and-FIRE-Calculator",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application that displays current conditions and forecasts based on user location.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks with features like drag-and-drop, categories, and reminders.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <AnimateInView>
          <SectionHeading title={t("projects.title")} description={t("projects.description")} />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projectsData.map((project, index) => (
            <AnimateInView key={index} delay={index * 100} direction="up">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
