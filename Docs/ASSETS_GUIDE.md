# Guide des Assets à Créer

## 📸 Images Nécessaires

### 1. Open Graph Image (`/public/og-image.jpg`)
**Dimensions recommandées :** 1200x630 px

**Contenu suggéré :**
- Logo Versenco Cloud
- Tagline : "Infrastructure Cloud Souveraine - Made in Bénin"
- Visuel de serveur ou datacenter
- Couleurs : Indigo (#6366f1) et Slate (#0f172a)

**Outils pour créer :**
- Canva (template "Facebook Post")
- Figma
- Photoshop

---

### 2. Favicon (`/public/favicon.ico`)
**Dimensions :** 32x32 px (ou 16x16 et 32x32 multi-size)

**Design suggéré :**
- Icône de serveur simple
- Couleur indigo sur fond blanc
- Ou lettre "V" stylisée

**Outils :**
- Favicon.io (générateur gratuit)
- RealFaviconGenerator.net
- Figma → Export ICO

---

### 3. Apple Touch Icon (`/public/apple-touch-icon.png`)
**Dimensions :** 180x180 px

**Design :**
- Même style que le favicon mais plus détaillé
- Fond de couleur (pas transparent)
- Coins arrondis (iOS les applique automatiquement)

---

### 4. Manifest Icons (PWA - Optionnel)
Si vous voulez faire une PWA :

Créez `/public/site.webmanifest` :
```json
{
  "name": "Versenco Cloud",
  "short_name": "Versenco",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#6366f1",
  "background_color": "#0f172a",
  "display": "standalone"
}
```

---

## 🎨 Recommandations de Design

### Palette de Couleurs Versenco
```
Indigo (Primary):    #6366f1
Slate (Dark):        #0f172a
Emerald (Accent):    #10b981
Purple (Secondary):  #8b5cf6
White:               #ffffff
Gray-50:             #f9fafb
```

### Typography
- **Font principale :** Inter (Google Fonts)
- **Poids utilisés :** 300, 400, 500, 600, 700, 900

---

## 📐 Templates Canva Gratuits

1. Créez un compte sur Canva.com
2. Recherchez "Open Graph" ou "Facebook Cover"
3. Utilisez la taille personnalisée : 1200 x 630 px
4. Ajoutez :
   - Fond dégradé Indigo → Purple
   - Icône de serveur (cherchez "server icon")
   - Texte "Versenco Cloud"
   - Sous-titre "Infrastructure Locale - Bénin 🇧🇯"

---

## 🖼️ Exemples d'Images à Utiliser (Unsplash)

Pour illustrer les pages, cherchez sur Unsplash.com :
- "server room"
- "data center"
- "coding workspace"
- "modern office benin" (si disponible)

**Licence :** Toutes les images Unsplash sont gratuites et libres d'utilisation.

---

## ✅ Checklist Assets

- [ ] `/public/og-image.jpg` (1200x630)
- [ ] `/public/favicon.ico` (32x32)
- [ ] `/public/apple-touch-icon.png` (180x180)
- [ ] `/public/android-chrome-192x192.png` (192x192)
- [ ] `/public/android-chrome-512x512.png` (512x512)
- [ ] `/public/site.webmanifest`

---

## 💡 Alternative Rapide

Si vous avez besoin d'un favicon rapidement :

1. Allez sur https://favicon.io/favicon-generator/
2. Tapez "V" comme texte
3. Choisissez :
   - Background: #6366f1 (Indigo)
   - Font Color: #ffffff (White)
   - Font: Inter Bold
4. Téléchargez et placez dans `/public/`

---

## 🎯 Priorité

**Obligatoire maintenant :**
- Favicon (améliore la crédibilité)
- OG Image (partage sur réseaux sociaux)

**Optionnel plus tard :**
- PWA Manifest
- Images de fond décoratives
