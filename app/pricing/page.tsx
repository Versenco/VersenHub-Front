/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Server, Code, Rocket, Package, Zap, AlertCircle } from 'lucide-react'

export default function PricingPage() {
  const [ramValue, setRamValue] = useState(2)
  const [cpuValue, setCpuValue] = useState(2)

  // Calculer le prix dynamique du VPS basé sur les ressources
  const calculateVPSPrice = () => {
    const basePrice = 10000
    const ramCost = ramValue * 1250 // 1.250 FCFA par Go
    const cpuCost = cpuValue * 2500 // 2.500 FCFA par vCPU
    return basePrice + ramCost + cpuCost
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
            Tarification Transparente
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Investissez dans votre <span className="text-gradient-primary">infrastructure</span>
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8">
            Pas de frais cachés. Choisissez le plan qui correspond à vos besoins et évoluez à votre rythme.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-indigo-300">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Support inclus</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Backup quotidien</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hébergement Web Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Server className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-900">Hébergement Web Managé</h2>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Powered by CyberPanel & LiteSpeed. Performance optimale pour vos sites WordPress, Laravel, ou PHP.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 rounded-3xl bg-gray-50 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-sm text-gray-500">Idéal pour débuter</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-black text-slate-900">
                  5.000<span className="text-lg font-normal text-gray-500"> FCFA</span>
                </div>
                <div className="text-sm text-gray-500">par mois</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>512 Mo RAM</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>1 vCPU</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>5 GB SSD</strong> de stockage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>1 Base de données</strong> MySQL/MariaDB</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SSL Gratuit (Let's Encrypt)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Panel CyberPanel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Backup hebdomadaire</span>
                </li>
              </ul>

              <Link 
                href="/contact?service=starter" 
                className="block w-full text-center bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Commander
              </Link>
            </div>

            {/* Pro Plan - Featured */}
            <div className="p-8 rounded-3xl bg-indigo-600 text-white border-2 border-indigo-500 hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                POPULAIRE
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-sm text-indigo-100">Pour les projets sérieux</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-black">
                  12.000<span className="text-lg font-normal text-indigo-200"> FCFA</span>
                </div>
                <div className="text-sm text-indigo-200">par mois</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>2 GB RAM</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>2 vCPU</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>20 GB SSD</strong> de stockage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bases de données illimitées</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SSL Gratuit (Let's Encrypt)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Panel CyberPanel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Backup quotidien</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Support prioritaire</span>
                </li>
              </ul>

              <Link 
                href="/contact?service=pro" 
                className="block w-full text-center bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Commander
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VPS & Code-Server Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">VPS & Code-Server</h2>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Environnements de développement complets avec accès root SSH ou VS Code dans le navigateur.
            </p>
          </div>

          {/* Custom VPS Builder */}
          <div className="max-w-4xl mx-auto mb-12 p-8 bg-white rounded-3xl border-2 border-indigo-200 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Configurez votre VPS</h3>
            
            <div className="space-y-8">
              {/* RAM Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">RAM (Mémoire)</label>
                  <span className="text-2xl font-bold text-indigo-600">{ramValue} GB</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="8" 
                  step="2" 
                  value={ramValue}
                  onChange={(e) => setRamValue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2 GB</span>
                  <span>4 GB</span>
                  <span>6 GB</span>
                  <span>8 GB</span>
                </div>
              </div>

              {/* CPU Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">vCPU (Processeur)</label>
                  <span className="text-2xl font-bold text-indigo-600">{cpuValue} vCPU</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="4" 
                  step="1" 
                  value={cpuValue}
                  onChange={(e) => setCpuValue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2 vCPU</span>
                  <span>3 vCPU</span>
                  <span>4 vCPU</span>
                </div>
              </div>
            </div>

            {/* Prix calculé */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-200">
              <div className="text-center">
                <div className="text-sm text-indigo-600 font-semibold mb-2">Prix estimé</div>
                <div className="text-5xl font-black text-indigo-600 mb-2">
                  {calculateVPSPrice().toLocaleString()}<span className="text-xl font-normal"> FCFA</span>
                </div>
                <div className="text-sm text-gray-600">par mois</div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Link 
                href="/contact?service=vps-custom" 
                className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
              >
                Commander ce VPS
              </Link>
              <Link 
                href="/contact" 
                className="block text-center bg-white text-indigo-600 border-2 border-indigo-200 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
              >
                Demander un devis sur mesure
              </Link>
            </div>
          </div>

          {/* Pre-configured plans */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dev Sandbox */}
            <div className="p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dev Sandbox</h3>
              <p className="text-sm text-gray-500 mb-6">VS Code dans le navigateur</p>
              
              <div className="mb-6">
                <div className="text-4xl font-black text-slate-900">
                  15.000<span className="text-lg font-normal text-gray-500"> FCFA</span>
                </div>
                <div className="text-sm text-gray-500">par mois</div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>4 GB RAM</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>2 vCPU</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Ubuntu/Debian au choix</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Code-Server (VS Code Web)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Terminal Sudo complet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Extensions pré-installées</span>
                </li>
              </ul>

              <Link 
                href="/contact?service=dev-sandbox" 
                className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
              >
                Commander
              </Link>
            </div>

            {/* Power VPS */}
            <div className="p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Power VPS</h3>
              <p className="text-sm text-gray-500 mb-6">Pour les applications exigeantes</p>
              
              <div className="mb-6">
                <div className="text-4xl font-black text-slate-900">
                  25.000<span className="text-lg font-normal text-gray-500"> FCFA</span>
                </div>
                <div className="text-sm text-gray-500">par mois</div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>8 GB RAM</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>4 vCPU</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Ubuntu/Debian au choix</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Accès Root SSH complet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Docker Ready</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Backup quotidien</span>
                </li>
              </ul>

              <Link 
                href="/contact?service=power-vps" 
                className="block w-full text-center bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Commander
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps PaaS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Rocket className="w-6 h-6 text-indigo-600" />
                <h2 className="text-3xl font-bold text-slate-900">DevOps & Déploiement Continu</h2>
              </div>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Automatisation complète avec Coolify. Git push = déploiement automatique.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">PaaS Autonome</h3>
                  <p className="text-indigo-100">Déploiement sur mesure</p>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Interface Coolify incluse</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Git Webhooks automatiques</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Zero Downtime Deployment</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Support Docker Compose</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Variables d'environnement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Logs en temps réel</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-6">
                <div className="text-center">
                  <div className="text-sm text-indigo-100 mb-2">Tarif à partir de</div>
                  <div className="text-4xl font-black mb-1">
                    30.000<span className="text-lg font-normal text-indigo-200"> FCFA</span>
                  </div>
                  <div className="text-sm text-indigo-200">par mois • Sur devis personnalisé</div>
                </div>
              </div>

              <Link 
                href="/contact?service=paas" 
                className="block w-full text-center bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-xl"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Apps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <Package className="w-6 h-6 text-emerald-600" />
                <h2 className="text-3xl font-bold text-slate-900">Marketplace d'Applications</h2>
              </div>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Déployez des applications populaires en quelques clics. Installation et configuration incluses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'n8n', desc: 'Automatisation workflow', icon: '🔄', price: '+ 8.000 FCFA/m' },
                { name: 'Nextcloud', desc: 'Cloud personnel', icon: '☁️', price: '+ 10.000 FCFA/m' },
                { name: 'Vaultwarden', desc: 'Gestionnaire de mots de passe', icon: '🔐', price: '+ 5.000 FCFA/m' },
                { name: 'OpenWebUI', desc: 'Interface IA privée', icon: '🤖', price: 'Sur devis' },
              ].map((app) => (
                <div key={app.name} className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-3xl mb-2">{app.icon}</div>
                      <h4 className="text-lg font-bold">{app.name}</h4>
                      <p className="text-sm text-gray-500">{app.desc}</p>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-emerald-600">{app.price}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
              <p className="text-sm text-gray-700">
                <strong>Installation sur VPS existant :</strong> Nous pouvons installer ces applications sur votre VPS actuel.{' '}
                <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">
                  Contactez-nous →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Infrastructure en Évolution</h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                Notre infrastructure est actuellement en phase de déploiement initial. 
                Nous n'avons pas encore de redondance électrique (UPS) ni de configuration RAID. 
                Des sauvegardes quotidiennes garantissent néanmoins la sécurité de vos données. 
                Uptime visé : 99%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins spécifiques. Nous créons des infrastructures sur mesure.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl"
          >
            Demander un devis personnalisé
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
