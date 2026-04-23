# Leçon 05 — Animations

## Notions abordées

- **requestAnimationFrame** — boucle infinie pour animer frame par frame
- **deltaTime** — adapter la vitesse d'animation au framerate de l'écran
- **THREE.Clock / getElapsedTime()** — mesurer le temps écoulé depuis le début
- **Math.sin / Math.cos** — créer des mouvements fluides et circulaires
- **GSAP** — librairie d'animation externe pour des tweens précis (A → B)

---

## Lancer le projet

```bash
# Installer les dépendances (première fois uniquement)
npm install

# Lancer le serveur local
npm run dev

# Build pour la production
npm run build
```

> Le projet utilise **Vite** comme bundler, **Three.js v0.174** et **GSAP 3.12**.  
> Ouvre ensuite `http://localhost:5173` dans ton navigateur.