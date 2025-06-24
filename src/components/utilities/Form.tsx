"use client"

import type React from "react"

import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationCircle, faMailBulk, faMessage, faUser } from "@fortawesome/free-solid-svg-icons"
import { Label } from "../ui/Label"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Button } from "../ui/Button"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] glow animate-float">
        <div className="text-center text-[var(--white)]">
          <FontAwesomeIcon icon={faCheckCircle} className="w-16 h-16 mx-auto mb-4 text-[var(--tertiary)]" />
          <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
          <p className="opacity-90">Merci pour votre message. Nous vous répondrons bientôt.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl w-full glow overflow-hidden mx-auto p-8 rounded-2xl bg-[var(--white)] backdrop-blur-sm border border-[var(--primary)]/30" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--background)] animate-float mb-2">Contactez-moi</h2>
        <p className="text-[var(--background)] text-lg font-bold opacity-90 animate-float">Je serais ravi de travailler avec vous.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[var(--background)] font-medium flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-[var(--background)]" />
            Nom complet
          </Label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
              className={`
                bg-[var(--secondary)]/50 border-2 text-[var(--background)] placeholder:text-[var(--background)]/70
                focus:ring-2 focus:ring-[var(--tertiary)] focus:border-[var(--tertiary)]
                transition-all duration-300
                ${
                  errors.name
                    ? "border-[var(--error)] focus:border-[var(--tertiary)] focus:ring-[var(--error)]/50"
                    : "border-[var(--primary)]/50 xl:hover:border-[var(--primary)]"
                }
              `}
              placeholder="Votre nom complet"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-[var(--error)] animate-float" />
              </div>
            )}
          </div>
          {errors.name && (
            <p id="name-error" className="text-[var(--error)] font-bold animate-float text-sm flex items-center gap-1 border-[var(--error)]" role="alert">
              <FontAwesomeIcon icon={faExclamationCircle} className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[var(--background)] font-medium flex items-center gap-2">
            <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4 text-[var(--background)]" />
            Adresse email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              className={`
                bg-[var(--secondary)]/50 border-2 text-[var(--background)] placeholder:text-[var(--background)]/70
                focus:ring-2 focus:ring-[var(--tertiary)] focus:border-[var(--tertiary)]
                transition-all duration-300
                ${
                  errors.email
                    ? "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]/50"
                    : "border-[var(--primary)]/50 xl:hover:border-[var(--primary)]"
                }
              `}
              placeholder="votre@email.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-[var(--error)] animate-float" />
              </div>
            )}
          </div>
          {errors.email && (
            <p id="email-error" className="text-[var(--error)] font-bold animate-float text-sm flex items-center gap-1" role="alert">
              <FontAwesomeIcon icon={faExclamationCircle} className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[var(--background)] font-medium flex items-center gap-2">
            <FontAwesomeIcon icon={faMessage} className="w-4 h-4 text-[var(--background)]" />
            Message
          </Label>
          <div className="relative">
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
              rows={4}
              className={`
                bg-[var(--secondary)]/50 border-2 text-[var(--background)] placeholder:text-[var(--background)]/70
                focus:ring-2 focus:ring-[var(--tertiary)] focus:border-[var(--tertiary)]
                transition-all duration-300 resize-none
                ${
                  errors.message
                    ? "border-[var(--error)] focus:text-[var(--error)] focus:ring-[var(--error)]/50"
                    : "border-[var(--primary)]/50 xl:hover:border-[var(--primary)]"
                }
              `}
              placeholder="Écrivez votre message ici..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <div className="absolute right-3 top-3">
                <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-[var(--error)] animate-float" />
              </div>
            )}
          </div>
          {errors.message && (
            <p id="message-error" className="text-[var(--error)] animate-float font-bold text-sm flex items-center gap-1" role="alert">
              <FontAwesomeIcon icon={faExclamationCircle} className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-center w-full md:w-1/3 mx-auto justify-between">
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-3 rounded-2xl font-semibold text-[var(--background)] 
            bg-[var(--tertiary)] xl:hover:bg-[var(--background)] xl:hover:text-[var(--white)] cursor-pointer
            xl:hover:from-[var(--tertiary)]/90 xl:hover:to-[var(--tertiary)]
            focus:ring-4 focus:ring-[var(--tertiary)]/50
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-300 transform xl:hover:scale-[1.02] active:scale-[0.98]
            ${!isSubmitting ? "glowblue" : ""}
          `}
          aria-describedby="submit-status"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-[var(--background)]/30 border-t-[var(--background)] rounded-full animate-spin" />
              Envoi en cours...
            </div>
          ) : (
            "Envoyer le message"
          )}
        </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[var(--background)] text-md">Vos données sont sécurisées et ne seront jamais partagées</p>
      </div>
    </div>
  )
}
