"use client"

import type React from "react"

import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import AnimateInView from "./animate-in-view"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)

    // In a real application, you would send the form data to your backend or a form service
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container max-w-7xl mx-auto">
        <AnimateInView>
          <SectionHeading title={t("contact.title")} description={t("contact.description")} />
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <AnimateInView delay={100}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{t("contact.getInTouch")}</h3>
              <p className="text-muted-foreground">{t("contact.opportunities")}</p>

              <div className="space-y-4 mt-8">
                <div className="flex items-center group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t("contact.email")}</h4>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t("contact.phone")}</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{t("contact.location")}</h4>
                    <p className="text-muted-foreground">City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={200}>
            <div>
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-fade-in">
                  <strong className="font-bold">{t("contact.thankYou")}</strong>
                  <span className="block sm:inline"> {t("contact.messageSent")}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Input
                      name="name"
                      placeholder={t("contact.yourName")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Input
                      name="email"
                      type="email"
                      placeholder={t("contact.yourEmail")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div className="transition-all duration-300 hover:translate-x-1">
                    <Textarea
                      name="message"
                      placeholder={t("contact.yourMessage")}
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t("contact.sending")}
                      </span>
                    ) : (
                      t("contact.sendMessage")
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
