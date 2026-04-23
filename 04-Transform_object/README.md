# Leçon 04 — Transform Objects

## Notions abordées

- **position** — déplacer un objet dans l'espace 3D (x, y, z)
- **scale** — redimensionner un objet sur chaque axe
- **rotation** — faire pivoter un objet via des radians (Euler)
- **quaternion** — rotation alternative sans gimbal lock (abordé brièvement)
- **AxesHelper** — afficher les axes x/y/z visuellement dans la scène
- **Vector3** — classe utilisée par position et scale (méthodes : `.length()`, `.distanceTo()`, `.normalize()`, `.set()`)
- **lookAt()** — orienter automatiquement un objet vers une cible
- **Group** — regrouper plusieurs objets pour les transformer ensemble

---

## Lancer le projet

```bash
npm install
npm run dev
```

> Le projet utilise **Vite** comme bundler et **Three.js v0.174**.  
> Ouvre ensuite `http://localhost:5173` dans ton navigateur.
