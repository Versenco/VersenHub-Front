# Versenco Cloud - Site Web Professionnel

Site web moderne en Next.js 14 pour Versenco Cloud, infrastructure cloud souveraine basée au Bénin.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## 📦 Installation

```bash
# Cloner le projet
cd versenco-cloud

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🎨 Structure du Projet

```
versenco-cloud/
├── app/
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Styles globaux
│   ├── pricing/
│   │   └── page.tsx        # Page tarifs avec slider
│   └── contact/
│       └── page.tsx        # Formulaire de contact
├── components/
│   ├── Navbar.tsx          # Navigation avec dropdown
│   └── Footer.tsx          # Footer du site
├── public/                 # Assets statiques
│   └── og-image.jpg        # Image Open Graph (à ajouter)
└── package.json
```

## ⚙️ Configuration

### Webhook n8n

Dans `app/contact/page.tsx`, ligne 24, configurez votre URL de webhook :

```typescript
const WEBHOOK_URL = 'https://n8n.versenco.com/webhook/contact-versenco'
```

### SEO & Meta Tags

Les meta tags sont configurés dans `app/layout.tsx`. Personnalisez :
- URL du site
- Images Open Graph
- Description

## 🎨 Personnalisation des Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'versenco': {
    primary: '#6366f1',   // Indigo-600
    dark: '#0f172a',      // Slate-900
    accent: '#10b981',    // Emerald-500
  },
}
```

## 📄 Pages Disponibles

### 1. Landing Page (`/`)
- Hero avec CTA
- Services (Hébergement, VPS, DevOps, Marketplace)
- Infrastructure technique
- Section CTA finale

### 2. Page Pricing (`/pricing`)
- Plans d'hébergement web (Starter, Pro)
- VPS configurables avec sliders
- Plans pré-configurés (Dev Sandbox, Power VPS)
- DevOps PaaS
- Marketplace d'applications

### 3. Page Contact (`/contact`)
- Formulaire avec intégration n8n
- Informations de contact
- Pré-remplissage automatique via URL params
  - Exemple : `/contact?service=pro`

## 🔧 Développement

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
```

## 🌐 Déploiement

### Sur Vercel (Recommandé)

1. Connectez votre repo GitHub
2. Vercel détectera automatiquement Next.js
3. Déployez !

### Sur votre infrastructure Proxmox

1. Build le projet :
```bash
npm run build
```

2. Configurez un reverse proxy (nginx/caddy)

3. Lancez avec PM2 :
```bash
pm2 start npm --name "versenco-web" -- start
```

## 🎯 Features

✅ Design moderne et professionnel inspiré de l'index.html original
✅ Responsive mobile-first
✅ SEO optimisé avec meta tags complets
✅ Navbar sticky avec effet de flou
✅ Animations fluides
✅ Slider de ressources interactif
✅ Formulaire de contact avec intégration n8n
✅ Dark mode dans certaines sections
✅ Marketplace d'applications
✅ Thème "Made in Bénin"

## 📝 À Faire

- [ ] Ajouter l'image OG (`public/og-image.jpg`)
- [ ] Configurer l'URL du webhook n8n
- [ ] Ajouter le favicon (`public/favicon.ico`)
- [ ] Créer les pages légales (Mentions légales, Confidentialité)
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Implémenter un système de statut (page `/status`)

## 💡 Notes Importantes

### Tarification
Les prix sont en FCFA (Franc CFA) selon le cahier des charges :
- Hébergement Starter : 5.000 FCFA/mois
- Hébergement Pro : 12.000 FCFA/mois
- Dev Sandbox : 15.000 FCFA/mois
- Power VPS : 25.000 FCFA/mois
- PaaS : à partir de 30.000 FCFA/mois

### Infrastructure
Le site mentionne l'infrastructure actuelle :
- Dell Optiplex 390
- Proxmox VE
- Absence de RAID/UPS (phase initiale)
- Localisation : Cotonou, Bénin

## 🤝 Support

Pour toute question : contact@versenco.com

## 📜 Licence

© 2026 Versenco Group. Tous droits réservés.
