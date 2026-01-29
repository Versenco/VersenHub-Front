# 🏗️ Architecture du Code - Guide Technique

## 📂 Structure des Dossiers

```
versenco-cloud/
│
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Layout racine + SEO global
│   ├── page.tsx                 # Landing page (/)
│   ├── globals.css              # Styles globaux + utilities Tailwind
│   │
│   ├── pricing/
│   │   └── page.tsx            # Page tarifs (/pricing)
│   │
│   └── contact/
│       └── page.tsx            # Page contact (/contact)
│
├── components/                  # Composants réutilisables
│   ├── Navbar.tsx              # Navigation principale
│   └── Footer.tsx              # Footer du site
│
├── public/                      # Assets statiques
│   ├── robots.txt              # SEO crawlers
│   └── [images]                # À ajouter : favicon, og-image, etc.
│
├── Configuration
│   ├── package.json            # Dépendances npm
│   ├── tsconfig.json           # Config TypeScript
│   ├── tailwind.config.js      # Config Tailwind + couleurs
│   ├── postcss.config.js       # Config PostCSS
│   ├── next.config.js          # Config Next.js
│   └── .gitignore             # Fichiers ignorés par Git
│
└── Documentation
    ├── README.md               # Guide utilisateur
    ├── PROJECT_SUMMARY.md      # Récapitulatif du projet
    ├── DEPLOYMENT_GUIDE.md     # Guide déploiement Proxmox
    └── ASSETS_GUIDE.md         # Guide création d'images
```

---

## 🎨 Système de Design

### Couleurs (tailwind.config.js)

```javascript
// Couleurs principales
'versenco': {
  primary: '#6366f1',    // Indigo-600 - Boutons, liens
  dark: '#0f172a',       // Slate-900 - Textes, fonds sombres
  accent: '#10b981',     // Emerald-500 - Highlights, success
}

// Utilisation dans le code
className="bg-indigo-600"         // Couleur primaire
className="text-slate-900"        // Texte principal
className="text-emerald-500"      // Accents
```

### Typographie

```javascript
// Font : Inter (Google Fonts)
// Déclarée dans app/layout.tsx

// Classes Tailwind utilisées :
'font-bold'        // Titres principaux
'font-semibold'    // Sous-titres
'font-medium'      // Texte emphasized
'font-normal'      // Texte body
```

### Espacements

```javascript
// Pattern consistant
'p-8'     // Padding cartes/sections
'py-20'   // Padding vertical sections
'gap-8'   // Espacement grilles
'space-y-6' // Espacement vertical listes
```

---

## 🧩 Composants Principaux

### 1. Navbar (`components/Navbar.tsx`)

**Fonctionnalités :**
- ✅ Sticky au scroll
- ✅ Effet de flou (backdrop-blur)
- ✅ Dropdown menu "Solutions"
- ✅ Menu mobile hamburger
- ✅ État d'ouverture géré avec useState

**Props :** Aucune (composant autonome)

**États :**
```typescript
const [isScrolled, setIsScrolled] = useState(false)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
```

**Hooks utilisés :**
- `useEffect` : Détecte le scroll pour l'effet de flou
- `useState` : Gère les états d'ouverture des menus

---

### 2. Footer (`components/Footer.tsx`)

**Fonctionnalités :**
- 4 colonnes de navigation
- Informations de contact
- Badges "Made in Bénin" et "Souveraineté"
- Copyright dynamique (année actuelle)

**Structure :**
```typescript
// 4 sections
1. Brand & localisation
2. Solutions (liens services)
3. Entreprise (liens pages)
4. Support (contact, status)
```

---

### 3. Landing Page (`app/page.tsx`)

**Sections :**

1. **Hero Section**
   - Badge "Infrastructure Locale"
   - Titre avec gradient
   - 2 CTAs (Voir offres + Tech Stack)
   - Trust indicators (checkmarks)
   - Animated background blobs

2. **Services Section**
   - 3 cartes principales (Backend, VPS, DevOps)
   - VPS card featured (scale + différent style)
   - 2 cartes secondaires (Marketplace, Gaming)
   - Hover effects et transitions

3. **Infrastructure Section**
   - Fond sombre (slate-900)
   - 3 cartes techniques (Serveur, Virtual, Sécurité)
   - Disclaimer avec avertissement

4. **CTA Final**
   - Fond gradient indigo→purple
   - 2 boutons action
   - Decorative blobs

**Pattern de Code :**
```typescript
// Toutes les sections suivent ce pattern
<section className="py-20 bg-[couleur]">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      {/* Titre + description */}
    </div>
    {/* Contenu de la section */}
  </div>
</section>
```

---

### 4. Pricing Page (`app/pricing/page.tsx`)

**Sections :**

1. **Hero Pricing**
   - Fond gradient sombre
   - Badge + titre + trust indicators

2. **Hébergement Web**
   - 2 cartes : Starter & Pro
   - Pro marquée "POPULAIRE"

3. **VPS Configurateur**
   - **Sliders interactifs** (RAM & CPU)
   - Calcul dynamique du prix
   - Fonction `calculateVPSPrice()`

4. **VPS Pré-configurés**
   - Dev Sandbox
   - Power VPS

5. **DevOps PaaS**
   - Carte unique sur mesure

6. **Marketplace**
   - Grid 2x2 d'applications

**Code du Slider :**
```typescript
const [ramValue, setRamValue] = useState(2)
const [cpuValue, setCpuValue] = useState(2)

const calculateVPSPrice = () => {
  const basePrice = 10000
  const ramCost = ramValue * 1250
  const cpuCost = cpuValue * 2500
  return basePrice + ramCost + cpuCost
}

// Dans le JSX
<input 
  type="range" 
  min="2" max="8" step="2"
  value={ramValue}
  onChange={(e) => setRamValue(Number(e.target.value))}
/>
```

---

### 5. Contact Page (`app/contact/page.tsx`)

**Fonctionnalités :**
- ✅ Formulaire avec validation HTML5
- ✅ Pré-remplissage via URL params
- ✅ Envoi vers webhook n8n
- ✅ États de soumission (idle/success/error)
- ✅ Feedback visuel utilisateur

**États du Formulaire :**
```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  service: searchParams.get('service') || 'backend',
  message: ''
})

const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
```

**Flux de Soumission :**
```
1. User clique "Envoyer"
   ↓
2. isSubmitting = true (bouton disabled + spinner)
   ↓
3. fetch() vers webhook n8n
   ↓
4. Si succès : submitStatus = 'success' + reset form
   Si erreur : submitStatus = 'error' + message
   ↓
5. isSubmitting = false (bouton actif)
```

**Intégration n8n :**
```typescript
const WEBHOOK_URL = 'https://n8n.versenco.com/webhook/contact-versenco'

const response = await fetch(WEBHOOK_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

---

## 🎭 Animations

### CSS Animations (globals.css)

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Tailwind Animations (tailwind.config.js)

```javascript
animation: {
  'blob': 'blob 7s infinite',      // Blobs arrière-plan
  'float': 'float 6s ease-in-out infinite',
}
```

### Transitions

```javascript
// Pattern standard pour hover
className="transition-all duration-300 hover:scale-105 hover:shadow-xl"

// Navbar scroll effect
className={`transition-all duration-300 ${
  isScrolled 
    ? 'bg-white/90 backdrop-blur-md' 
    : 'bg-transparent'
}`}
```

---

## 🔍 SEO Implementation

### Meta Tags (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://versenco.com'),
  title: {
    default: 'Titre par défaut',
    template: '%s | Versenco Cloud'  // Pour les sous-pages
  },
  description: '...',
  keywords: [...],
  openGraph: {
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

### Structure Sémantique

```html
<!-- Chaque page suit cette structure -->
<main>
  <section>           <!-- Hero -->
  <section>           <!-- Services -->
  <section>           <!-- Infrastructure -->
  <section>           <!-- CTA -->
</main>
```

---

## 🛠️ Utilities Tailwind Personnalisées

### Gradients de Texte
```javascript
// Défini dans globals.css
.text-gradient-primary {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600;
}

// Utilisation
<span className="text-gradient-primary">texte coloré</span>
```

### Glass Effect
```javascript
.glass-effect {
  @apply bg-white/90 backdrop-blur-md;
}
```

### Animation Delays
```javascript
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
```

---

## 🔌 Intégrations Externes

### 1. Google Fonts
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

### 2. Lucide Icons
```typescript
import { Server, Mail, ArrowRight } from 'lucide-react'

// Utilisation
<Server className="w-6 h-6 text-indigo-600" />
```

### 3. n8n Webhook
```typescript
// app/contact/page.tsx
const WEBHOOK_URL = 'https://n8n.versenco.com/webhook/contact-versenco'
```

---

## 📱 Responsive Design

### Breakpoints Tailwind
```javascript
// sm:  640px
// md:  768px
// lg:  1024px
// xl:  1280px
// 2xl: 1536px

// Exemple d'utilisation
className="text-4xl md:text-6xl"     // Texte plus grand sur desktop
className="grid md:grid-cols-3"      // 1 colonne mobile, 3 desktop
className="hidden md:flex"           // Caché mobile, visible desktop
```

### Mobile-First Approach
```javascript
// Toujours partir du mobile puis ajouter les breakpoints
className="w-full md:w-1/2"          // 100% mobile, 50% desktop
className="p-4 md:p-8"               // Padding réduit mobile
```

---

## 🧪 Testing & Debugging

### Console Logs Utiles
```typescript
// Vérifier les états
console.log('Form Data:', formData)
console.log('Submit Status:', submitStatus)

// Vérifier les props
console.log('Search Params:', searchParams.get('service'))
```

### DevTools React
- Installer React DevTools (extension Chrome/Firefox)
- Voir les états des composants en temps réel
- Vérifier le re-render des composants

---

## 🚀 Performance Tips

### Images Next.js
```typescript
import Image from 'next/image'

<Image 
  src="/logo.png" 
  width={200} 
  height={100} 
  alt="Logo"
  priority  // Pour les images above-the-fold
/>
```

### Lazy Loading
```typescript
// Les composants non-critiques
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

---

## 📚 Ressources & Liens Utiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Bon développement ! 💻**
