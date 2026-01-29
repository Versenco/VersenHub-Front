'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Server, Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <Server className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Versenco<span className="text-indigo-600">.cloud</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeInUp">
                  <Link 
                    href="/#hebergement" 
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Hébergement Web</div>
                    <div className="text-xs text-gray-500">CyberPanel & LiteSpeed</div>
                  </Link>
                  <Link 
                    href="/#vps" 
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">VPS & Code-Server</div>
                    <div className="text-xs text-gray-500">Environnements Dev</div>
                  </Link>
                  <Link 
                    href="/#devops" 
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">DevOps PaaS</div>
                    <div className="text-xs text-gray-500">Déploiement Continu</div>
                  </Link>
                  <Link 
                    href="/#marketplace" 
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">Marketplace</div>
                    <div className="text-xs text-gray-500">Apps en 1-clic</div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="hover:text-indigo-600 transition-colors">
              Tarifs
            </Link>
            <Link href="/#infrastructure" className="hover:text-indigo-600 transition-colors">
              Infrastructure
            </Link>
            <Link href="/#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-indigo-500/20"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeInUp">
            <Link 
              href="/#hebergement" 
              className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hébergement Web
            </Link>
            <Link 
              href="/#vps" 
              className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VPS & Code-Server
            </Link>
            <Link 
              href="/pricing" 
              className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link 
              href="/#infrastructure" 
              className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Infrastructure
            </Link>
            <Link 
              href="/contact" 
              className="block w-full bg-slate-900 text-white text-center px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nous Contacter
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
