import { SectionHeading } from "./section-heading"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, GraduationCap, Briefcase } from "lucide-react"
import AnimateInView from "./animate-in-view"

export default function About() {
  return (
    // Update the about section to use full width
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container max-w-7xl mx-auto">
        <AnimateInView>
          <SectionHeading title="About Me" description="Learn more about my background, skills, and interests." />
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <AnimateInView className="lg:col-span-1 flex justify-center lg:justify-start" delay={100}>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 transition-transform hover:scale-105 duration-500">
              <Image src="/placeholder.svg?height=300&width=300" alt="Profile" fill className="object-cover" />
            </div>
          </AnimateInView>

          <div className="lg:col-span-2 space-y-6">
            <AnimateInView delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                  I'm a Computer Science student passionate about web development and software engineering. My journey
                  began when I built my first website at 16, and I've been hooked ever since. I enjoy solving complex
                  problems and creating intuitive user experiences.
                </p>
              </div>
            </AnimateInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <AnimateInView delay={300}>
                <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4 transition-transform hover:scale-110 duration-300">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        B.S. in Computer Science
                        <br />
                        University Name
                        <br />
                        2020 - Present
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={400}>
                <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4 transition-transform hover:scale-110 duration-300">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Web Development Intern
                        <br />
                        Company Name
                        <br />
                        Summer 2023
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>

              <AnimateInView delay={500}>
                <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-primary/10 p-3 rounded-full mb-4 transition-transform hover:scale-110 duration-300">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">Skills</h4>
                      <p className="text-sm text-muted-foreground">
                        React, Next.js, TypeScript
                        <br />
                        Tailwind CSS, Node.js
                        <br />
                        Git, MongoDB
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
