'use client'

import Link from 'next/link'
import { ArrowRight, Server, Database, Code, Rocket, Package, Gamepad2, Shield, Zap, HardDrive, Cpu, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider border border-indigo-100 animate-fadeInUp">
              🇧🇯 Infrastructure Locale & Souveraine
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight animate-fadeInUp">
              Le Cloud{' '}
              <span className="text-gradient-primary">
                qui vous appartient
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fadeInUp">
              Hébergez vos applications, codez à distance et sécurisez vos données sur une infrastructure optimisée à Cotonou. 
              <span className="font-semibold text-gray-700"> Latence minimale, contrôle maximal.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp">
              <Link 
                href="/pricing" 
                className="group bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center hover:scale-105"
              >
                Voir les offres
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#infrastructure" 
                className="bg-white text-slate-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-indigo-300 transition-all flex items-center justify-center"
              >
                Notre Tech Stack
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600 animate-fadeInUp">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Proxmox LXC/VM</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Cloudflare SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Backup Quotidien</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-pink-200 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Une solution pour chaque besoin
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              De l'hébergement simple à l'intelligence artificielle privée.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Backend Managé */}
            <div id="hebergement" className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Managé</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                LXC dédié pour vos API Laravel, Node.js ou Python. Base de données PostgreSQL/MariaDB incluse et sauvegardée.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Isolation Proxmox</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Protection Cloudflare</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>SSL Automatique</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-slate-900">
                5.000 FCFA<span className="text-sm font-normal text-gray-500">/mois</span>
              </div>
            </div>

            {/* VPS & Code-Server - Featured */}
            <div id="vps" className="group p-8 rounded-3xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 transform md:-translate-y-4 hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <Code className="w-7 h-7" />
              </div>
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4">
                LE PLUS POPULAIRE
              </div>
              <h3 className="text-xl font-bold mb-3">VPS & Code-Server</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                Votre IDE (VS Code) dans le navigateur. Codez depuis une tablette ou un PC léger avec la puissance de nos serveurs.
              </p>
              <ul className="space-y-2 text-sm text-indigo-100 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>Code-Server Pré-configuré</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>Terminal Root (Sudo)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span>Accès SSH Complet</span>
                </li>
              </ul>
              <div className="text-2xl font-bold">
                15.000 FCFA<span className="text-sm font-normal text-indigo-200">/mois</span>
              </div>
            </div>

            {/* DevOps PaaS */}
            <div id="devops" className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps PaaS</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Connectez votre GitHub. Poussez votre code. Nous déployons automatiquement. L'expérience PaaS locale.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Git Webhooks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Zero Downtime Deploy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Interface Coolify</span>
                </li>
              </ul>
              <div className="text-lg font-bold text-slate-900">
                Sur devis
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Marketplace */}
            <div id="marketplace" className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <Package className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold">
                  APPS EN 1-CLIC
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Marketplace d'Applications</h3>
              <p className="text-gray-600 text-sm mb-4">
                Déployez des applications populaires en quelques clics. Configuration incluse.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-emerald-200">n8n</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-emerald-200">Nextcloud</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-emerald-200">Vaultwarden</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium border border-emerald-200">OpenWebUI</span>
              </div>
            </div>

            {/* Gaming - Coming Soon */}
            <div id="gaming" className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold">
                    BIENTÔT
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">Serveurs de Jeux</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Minecraft, Rust, CS:GO. Latence ultra-faible pour les joueurs d'Afrique de l'Ouest.
                </p>
                <div className="text-sm text-slate-400">
                  Interface Pterodactyl • Mods supportés
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Infrastructure
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Basée sur Dell Optiplex 390 et Proxmox VE. Une solution robuste et évolutive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Serveur */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="w-8 h-8 text-indigo-400" />
                <h3 className="text-lg font-bold">Serveur Principal</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span>Intel Core i5-2400 (4 cœurs)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-emerald-500" />
                  <span>16GB DDR3 RAM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-emerald-500" />
                  <span>SSD 240GB + HDD 1TB</span>
                </li>
              </ul>
            </div>

            {/* Virtualisation */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
                <h3 className="text-lg font-bold">Virtualisation</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Proxmox VE 8.x</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>LXC Containers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>KVM Virtual Machines</span>
                </li>
              </ul>
            </div>

            {/* Sécurité */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-bold">Sécurité & Réseau</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Cloudflare Tunneling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>SSL Automatique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Firewall pfSense</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-6 rounded-2xl bg-amber-900/20 border border-amber-700/50 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-amber-300 mb-2">Phase de Déploiement Initial</h4>
              <p className="text-sm text-amber-100/80 leading-relaxed">
                Actuellement en phase de déploiement : absence de redondance électrique (UPS) et RAID. 
                L'infrastructure évolue progressivement vers un uptime de 99.9%. 
                Nous proposons des sauvegardes quotidiennes pour garantir la sécurité de vos données.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à déployer votre infrastructure ?
              </h2>
              <p className="text-indigo-100 mb-8 text-lg">
                Découvrez nos plans tarifaires et choisissez la solution adaptée à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/pricing" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl inline-flex items-center justify-center"
                >
                  Voir tous les tarifs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-indigo-700 text-white border-2 border-indigo-400 px-8 py-4 rounded-xl font-bold hover:bg-indigo-800 transition-all inline-flex items-center justify-center"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  )
}
