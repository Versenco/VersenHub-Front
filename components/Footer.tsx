import Link from 'next/link'
import { Server, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400 text-sm">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Server className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Versenco<span className="text-indigo-600">.cloud</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Infrastructure Cloud souveraine basée à Cotonou, Bénin. 
              Performance locale, impact national.
            </p>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-0.5 text-indigo-500" />
              <span className="text-xs">Cotonou, Bénin</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#hebergement" className="hover:text-white transition-colors">
                  Hébergement Web
                </Link>
              </li>
              <li>
                <Link href="/#vps" className="hover:text-white transition-colors">
                  VPS & Code-Server
                </Link>
              </li>
              <li>
                <Link href="/#devops" className="hover:text-white transition-colors">
                  DevOps PaaS
                </Link>
              </li>
              <li>
                <Link href="/#marketplace" className="hover:text-white transition-colors">
                  Marketplace Apps
                </Link>
              </li>
              <li>
                <Link href="/#gaming" className="hover:text-white transition-colors">
                  Gaming (Bientôt)
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#infrastructure" className="hover:text-white transition-colors">
                  Notre Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Tarification
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@versenco.com" 
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@versenco.com</span>
                </a>
              </li>
              <li>
                <Link href="/status" className="hover:text-white transition-colors">
                  Status Système
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-slate-600">
            &copy; {currentYear} Versenco Group. Hébergé localement sur Proxmox.
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">
              🇧🇯 Made in Bénin
            </span>
            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 rounded-full border border-emerald-900">
              ✓ Souveraineté des données
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
