import ProjectCard from "./project-card"
import { SectionHeading } from "./section-heading"
import AnimateInView from "./animate-in-view"

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
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <AnimateInView>
          <SectionHeading
            title="Projects"
            description="Here are some of my recent projects. Each one was built to solve a specific problem or learn new technologies."
          />
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
