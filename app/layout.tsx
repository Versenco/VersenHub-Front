import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://versenco.com'),
  title: {
    default: 'Versenco Cloud | Hébergement & Solutions DevOps au Bénin',
    template: '%s | Versenco Cloud'
  },
  description: 'Infrastructure Cloud locale à Cotonou. Hébergement Laravel, Node.js, Environnements de Dev (VS Code) et Solutions IA Privées. Performance et Souveraineté.',
  keywords: ['Hébergement Bénin', 'Cloud Cotonou', 'VPS Laravel', 'Code-Server', 'DevOps Afrique', 'Serveur Privé', 'Versenco', 'Proxmox', 'Infrastructure locale'],
  authors: [{ name: 'Versenco Group' }],
  creator: 'Versenco Group',
  publisher: 'Versenco Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://versenco.com',
    title: 'Versenco Cloud - Infrastructure locale puissante',
    description: 'Déployez vos apps sur une infra souveraine au Bénin. Backend Managé, PaaS et Sandbox Dev.',
    siteName: 'Versenco Cloud',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Versenco Cloud - Hébergement au Bénin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versenco Cloud - Infrastructure locale puissante',
    description: 'Déployez vos apps sur une infra souveraine au Bénin.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://versenco.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 overflow-x-hidden antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
