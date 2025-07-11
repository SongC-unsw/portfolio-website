"use client";

import ProjectCard from "./project-card";
import { SectionHeading } from "./section-heading";
import AnimateInView from "./animate-in-view";
import { useLanguage } from "@/contexts/language-context";

const projectsData = [
  {
    title: "Full-stack inventory management app",
    description:
      "A full-stack inventory management system built with Next.js, TypeScript and TailwindCSS frontend, Node.js/Express backend, and PostgreSQL database with Prisma ORM. Implemented features include real-time products updates and search and stats dashboard. Deployed on AWS infrastructure using EC2, RDS, S3, and Amplify.",
    image: "/dashboard.png?height=400&width=600",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Redux",
      "RTK Query",
      "PostgreSQL",
      "Prisma",
      "AWS",
    ],
    liveUrl: "https://main.d3qfgx2t3gznd3.amplifyapp.com/",
    githubUrl: "https://github.com/SongC-unsw/Fullstack-inventory-management",
  },
  {
    title: "Lurkforwork - A LinkedIn Clone",
    description:
      "A LinkedIn-like Social Platform. Built with Vanilla JS, HTML, CSS, and Bootstrap. Key features include user authentication (login/registration), job postings with images and timestamps, post management (edit/delete), interactive engagement (likes and comments), a follow/unfollow system, and infinite scroll for seamless browsing. Deployed on Vercel for the frontend and Railway for the backend.",
    image: "/lurkforwork.gif?height=400&width=600",
    tags: ["Javascript", "HTML", "CSS", "Bootstrap"],
    liveUrl: "https://linkedin-like-social-platform.vercel.app/",
    githubUrl: "https://github.com/SongC-unsw/LinkedIn-like-social-platform",
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
    title: "Investment & FIRE Calculator",
    description:
      "A comprehensive financial calculator for compound interest projections and FIRE (Financial Independence, Retire Early) planning.",
    image: "/savings.png?height=400&width=600",
    tags: ["React", "Material UI", "Echarts"],
    liveUrl:
      "https://simple-compound-investment-and-fire-calculator.vercel.app/",
    githubUrl:
      "https://github.com/SongC-unsw/Simple-Compound-Investment-and-FIRE-Calculator",
  },
  {
    title: "Book of Answers",
    description:
      'This is a simple React application that simulates the functionality of a "Book of Answer". Users can click on the book cover to get a random answer.',
    image: "/Book.png?height=400&width=600",
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://book-of-answers-sigma.vercel.app/",
    githubUrl: "https://github.com/SongC-unsw/Book-of-Answers",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application that displays current conditions and forecasts based on user location.",
    image: "/weather.jpg?height=400&width=600",
    tags: ["React", "Next.js", "Shadcn", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-app-ten-gray-33.vercel.app",
    githubUrl: "https://github.com/SongC-unsw/Weather-app",
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
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <AnimateInView>
          <SectionHeading
            title={t("projects.title")}
            description={t("projects.description")}
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
  );
}
