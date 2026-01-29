'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Mail, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: searchParams.get('service') || 'backend',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    { value: 'starter', label: 'Hébergement Starter (5.000 FCFA)' },
    { value: 'pro', label: 'Hébergement Pro (12.000 FCFA)' },
    { value: 'dev-sandbox', label: 'Dev Sandbox (15.000 FCFA)' },
    { value: 'power-vps', label: 'Power VPS (25.000 FCFA)' },
    { value: 'vps-custom', label: 'VPS Personnalisé' },
    { value: 'paas', label: 'PaaS Déploiement Autonome' },
    { value: 'marketplace', label: 'Application Marketplace' },
    { value: 'custom', label: 'Autre / Infrastructure sur mesure' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Webhook n8n - À configurer avec votre URL
      const WEBHOOK_URL = 'https://n8n.versenco.com/webhook/contact-versenco'
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', service: 'backend', message: '' })
      } else {
        throw new Error('Erreur serveur')
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Parlons Infrastructure
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Vous êtes prêt à déployer ? Remplissez ce formulaire et nous configurerons votre environnement sous 24h.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl shadow-indigo-100 overflow-hidden border border-gray-100">
            
            {/* Left Side - Info */}
            <div className="bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">
                  Contactez-nous
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans la mise en place de votre infrastructure.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Localisation</h4>
                      <p className="text-sm text-slate-400">
                        Cotonou, Bénin<br />
                        Infrastructure Locale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Direct</h4>
                      <a 
                        href="mailto:contact@versenco.com" 
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        contact@versenco.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    💡 <strong className="text-white">Temps de réponse :</strong> Nous répondons généralement sous 24h les jours ouvrables.
                  </p>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 -mr-16 -mb-16"></div>
            </div>

            {/* Right Side - Form */}
            <div className="p-10 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom Complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition outline-none"
                    placeholder="Votre nom ou société"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition outline-none"
                    placeholder="vous@exemple.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Intéressé <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition outline-none cursor-pointer"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Détails du projet
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition outline-none resize-none"
                    placeholder="Lien GitHub, technos utilisées, besoins spécifiques..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30'
                      : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/30'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Envoi en cours...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Envoyé avec succès !
                    </>
                  ) : (
                    <>
                      <span>Envoyer la demande</span>
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                {/* Feedback Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                    <p className="text-sm text-emerald-700 font-medium">
                      Merci ! Nous avons bien reçu votre demande et vous répondrons sous peu.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-center">
                    <p className="text-sm text-red-700 font-medium">
                      Oups, une erreur est survenue. Vous pouvez nous écrire directement à{' '}
                      <a href="mailto:contact@versenco.com" className="font-bold hover:underline">
                        contact@versenco.com
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Autres moyens de nous contacter</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:contact@versenco.com" 
                  className="text-sm text-indigo-600 hover:underline"
                >
                  contact@versenco.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <p className="text-sm text-gray-600">Bientôt disponible</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-3xl mb-3">🕐</div>
                <h4 className="font-semibold mb-2">Horaires</h4>
                <p className="text-sm text-gray-600">Lun-Ven : 9h-18h WAT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
