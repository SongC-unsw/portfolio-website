import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="transition-colors hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="transition-all hover:scale-105">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {liveUrl && (
          <Button asChild size="sm" className="transition-all hover:scale-105">
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
