# Guide de Déploiement sur Proxmox

Ce guide vous aide à déployer le site Versenco Cloud sur votre infrastructure Proxmox.

## 📋 Prérequis

- Container LXC Ubuntu 22.04 ou 24.04
- Node.js 18+ installé
- Nginx ou Caddy comme reverse proxy
- Cloudflare Tunnel configuré (optionnel mais recommandé)

---

## 🚀 Étape 1 : Préparer le Container LXC

### Créer un container dédié

```bash
# Dans Proxmox
pct create 200 local:vztmpl/ubuntu-24.04-standard_24.04-2_amd64.tar.zst \
  --hostname versenco-web \
  --memory 2048 \
  --cores 2 \
  --rootfs local-lvm:8 \
  --net0 name=eth0,bridge=vmbr0,ip=dhcp \
  --unprivileged 1

# Démarrer le container
pct start 200

# Se connecter
pct enter 200
```

---

## 🔧 Étape 2 : Installer les Dépendances

```bash
# Mettre à jour le système
apt update && apt upgrade -y

# Installer Node.js 20.x (via NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Vérifier l'installation
node --version  # devrait afficher v20.x
npm --version

# Installer Git
apt install -y git

# Installer PM2 globalement
npm install -g pm2
```

---

## 📦 Étape 3 : Déployer l'Application

```bash
# Créer un utilisateur dédié (recommandé)
adduser --disabled-password --gecos "" versenco
su - versenco

# Cloner ou transférer les fichiers
cd /home/versenco
# Option 1 : Via Git
git clone https://github.com/votre-repo/versenco-cloud.git
# Option 2 : Via SCP depuis votre machine
# scp -r versenco-cloud/ versenco@<IP>:/home/versenco/

cd versenco-cloud

# Installer les dépendances
npm install

# Configurer les variables d'environnement
nano .env.local
# Ajouter :
# NEXT_PUBLIC_WEBHOOK_URL=https://n8n.versenco.com/webhook/contact-versenco

# Builder l'application
npm run build

# Tester que tout fonctionne
npm start
# Accessible sur http://localhost:3000
```

---

## 🔄 Étape 4 : Configurer PM2

```bash
# Créer un fichier ecosystem
nano ecosystem.config.js
```

Contenu du fichier :
```javascript
module.exports = {
  apps: [{
    name: 'versenco-web',
    script: 'npm',
    args: 'start',
    cwd: '/home/versenco/versenco-cloud',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Démarrer avec PM2 :
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Suivre les instructions affichées
```

---

## 🌐 Étape 5 : Configurer Nginx

### Installer Nginx
```bash
apt install -y nginx
```

### Créer la configuration
```bash
nano /etc/nginx/sites-available/versenco-web
```

Contenu :
```nginx
server {
    listen 80;
    server_name versenco.com www.versenco.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activer la configuration :
```bash
ln -s /etc/nginx/sites-available/versenco-web /etc/nginx/sites-enabled/
nginx -t  # Tester la config
systemctl restart nginx
```

---

## 🔒 Étape 6 : Cloudflare Tunnel (Recommandé)

Au lieu de SSL/certbot, utilisez Cloudflare Tunnel pour plus de sécurité :

### Installer cloudflared
```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
dpkg -i cloudflared-linux-amd64.deb
```

### Configurer le tunnel
```bash
cloudflared tunnel login
cloudflared tunnel create versenco-web
cloudflared tunnel route dns versenco-web versenco.com
```

### Créer le fichier de config
```bash
nano ~/.cloudflared/config.yml
```

Contenu :
```yaml
tunnel: <TUNNEL-ID>
credentials-file: /root/.cloudflared/<TUNNEL-ID>.json

ingress:
  - hostname: versenco.com
    service: http://localhost:80
  - hostname: www.versenco.com
    service: http://localhost:80
  - service: http_status:404
```

### Lancer le tunnel
```bash
cloudflared tunnel run versenco-web

# Pour le démarrer au boot
cloudflared service install
systemctl start cloudflared
systemctl enable cloudflared
```

---

## 🔄 Mise à Jour de l'Application

```bash
# Se connecter au container
cd /home/versenco/versenco-cloud

# Récupérer les dernières modifications
git pull  # ou transférer les nouveaux fichiers

# Réinstaller les dépendances si nécessaire
npm install

# Rebuild
npm run build

# Redémarrer avec PM2
pm2 restart versenco-web
```

---

## 📊 Monitoring

### Vérifier le status de l'app
```bash
pm2 status
pm2 logs versenco-web
pm2 monit
```

### Vérifier Nginx
```bash
systemctl status nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

---

## 🐛 Troubleshooting

### L'application ne démarre pas
```bash
# Vérifier les logs PM2
pm2 logs versenco-web --lines 100

# Vérifier que le port 3000 est libre
netstat -tulpn | grep 3000

# Tester manuellement
cd /home/versenco/versenco-cloud
npm start
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que l'app tourne
pm2 status

# Vérifier la config Nginx
nginx -t
systemctl restart nginx
```

### Problème de performance
```bash
# Augmenter la RAM du container dans Proxmox
pct set 200 --memory 4096

# Augmenter les instances PM2
pm2 scale versenco-web 2
```

---

## 🔐 Sécurité

### Firewall
```bash
# Installer UFW
apt install -y ufw

# Autoriser SSH, HTTP, HTTPS
ufw allow 22
ufw allow 80
ufw allow 443

# Activer
ufw enable
```

### Fail2ban (optionnel)
```bash
apt install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

---

## 📈 Optimisations

### Compression dans Nginx
Ajoutez dans `/etc/nginx/nginx.conf` :
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### Caching
Next.js gère déjà le cache. Assurez-vous que `.next/` n'est pas supprimé.

---

## ✅ Checklist de Déploiement

- [ ] Container LXC créé avec ressources suffisantes
- [ ] Node.js 20+ installé
- [ ] Application déployée et buildée
- [ ] PM2 configuré et l'app démarre au boot
- [ ] Nginx installé et configuré
- [ ] Cloudflare Tunnel configuré (ou Certbot pour SSL)
- [ ] Firewall activé
- [ ] Logs vérifiés et tout fonctionne
- [ ] DNS pointé vers le serveur/tunnel
- [ ] Site accessible publiquement

---

## 📞 Support

En cas de problème : contact@versenco.com
