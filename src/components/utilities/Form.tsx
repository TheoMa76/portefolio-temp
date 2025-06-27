"use client"

import type React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckCircle,
  faExclamationCircle,
  faMailBulk,
  faMessage,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { Label } from "../ui/Label"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { Button } from "../ui/Button"

interface FormData {
  name: string
  email: string
  message: string
  phone?: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  phone?: string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (formData.name.trim().length < 2 && formData.name.trim().length > 0) {
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

    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Numéro de téléphone invalide"
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
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur:", error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "", phone: "" })
      }, 3000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] glow animate-float">
        <div className="text-center text-[var(--white)]">
          <FontAwesomeIcon icon={faCheckCircle} className="w-16 h-16 mx-auto mb-4 text-[var(--tertiary)]" />
          <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
          <p className="opacity-90">Merci pour votre message. Nous vous répondrons bientôt.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="glow p-8 rounded-2xl bg-[var(--white)]" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--background)] animate-float mb-2">Contactez-moi</h2>
        <p className="text-[var(--background)] text-lg font-bold opacity-90">Je serai ravi de travailler avec vous.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <FormField
          id="name"
          label="Nom (optionnel)"
          icon={faUser}
          type="text"
          value={formData.name}
          error={errors.name}
          onChange={(v) => handleInputChange("name", v)}
          placeholder="Votre nom"
        />

        <FormField
          id="email"
          label="Adresse email"
          icon={faMailBulk}
          type="email"
          value={formData.email}
          error={errors.email}
          onChange={(v) => handleInputChange("email", v)}
          placeholder="votre@email.com"
        />

        <FormField
          id="phone"
          label="Téléphone (optionnel)"
          icon={faPhone}
          type="tel"
          value={formData.phone || ""}
          error={errors.phone}
          onChange={(v) => handleInputChange("phone", v)}
          placeholder="+33 6 12 34 56 78"
        />

        <div className="space-y-2">
          <Label htmlFor="message" className="text-[var(--background)] font-medium flex items-center gap-2">
            <FontAwesomeIcon icon={faMessage} className="w-4 h-4 text-[var(--background)]" />
            Message
          </Label>
          <div className="relative">
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              placeholder="Écrivez votre message ici..."
              className={`
                bg-[var(--secondary)]/50 border-2 text-[var(--background)] placeholder:text-[var(--background)]/70
                focus:ring-2 focus:ring-[var(--tertiary)] focus:border-[var(--tertiary)] transition-all duration-300 resize-none
                ${errors.message ? "border-[var(--error)] focus:ring-[var(--error)]/50" : "border-[var(--primary)]/50 xl:hover:border-[var(--primary)]"}
              `}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <div className="absolute right-3 top-3">
                <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-[var(--error)]" />
              </div>
            )}
          </div>
          {errors.message && (
            <p id="message-error" className="text-[var(--error)] font-bold text-sm flex items-center gap-1" role="alert">
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
              bg-[var(--tertiary)] xl:hover:bg-[var(--background)] xl:hover:text-[var(--white)]
              focus:ring-4 focus:ring-[var(--tertiary)]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
              transition-all duration-300 transform xl:hover:scale-[1.02] active:scale-[0.98]
            `}
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

function FormField({
  id,
  label,
  icon,
  type,
  value,
  error,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  icon: import("@fortawesome/fontawesome-svg-core").IconDefinition
  type: string
  value: string
  error?: string
  onChange: (val: string) => void
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[var(--background)] font-medium flex items-center gap-2">
        <FontAwesomeIcon icon={icon} className="w-4 h-4 text-[var(--background)]" />
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            bg-[var(--secondary)]/50 border-2 text-[var(--background)] placeholder:text-[var(--background)]/70
            focus:ring-2 focus:ring-[var(--tertiary)] focus:border-[var(--tertiary)] transition-all duration-300
            ${error ? "border-[var(--error)] focus:ring-[var(--error)]/50" : "border-[var(--primary)]/50 xl:hover:border-[var(--primary)]"}
          `}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-[var(--error)]" />
          </div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-[var(--error)] font-bold text-sm flex items-center gap-1" role="alert">
          <FontAwesomeIcon icon={faExclamationCircle} className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}