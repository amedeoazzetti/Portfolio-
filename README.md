# 🃏 Amedeo's Portfolio - Gotham Joker Edition

Un portfolio personale moderno, interattivo e ad alto impatto visivo costruito con **React**, **TypeScript**, **Vite** e **Tailwind CSS (v4)**, personalizzato con una palette di colori ispirata al leggendario nemico di Batman: **il Joker**.

Il design unisce l'atmosfera scura e profonda di Gotham City con accenti viola neon, verde tossico e rosso sorriso, creando un'esperienza utente immersiva e magnetica.

---

## ✨ Caratteristiche Principali

- **Palette Cromatica Custom (Joker Edition)**: Sfondo viola scuro Gotham, gradienti tossici verde/viola, accenti rosso sorriso.
- **Interazioni Magnetiche**: L'avatar 3D segue dolcemente il cursore del mouse tramite un effetto calamita interattivo personalizzato (`Magnet.tsx`).
- **Typographic Parallax Marquee**: Sezione animata che scorre al variare del scroll della pagina con parole chiave sul 3D e sul Web Development.
- **Sezione Progetti WIP**: Una card animata super raffinata con glow a gradiente conico e un pallino pulsante che segnala lo stato "Work in Progress" per i progetti in arrivo.
- **Clean Layout**: Semplificato rimuovendo la sezione dei servizi e della navbar "Prize" per mantenere l'esperienza fluida ed essenziale.
- **SEO Ready**: Titoli semantici ed elementi ottimizzati per l'accessibilità e la velocità.

---

## 🛠️ Tech Stack

- **Framework**: [React 18+](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)
- **Stilizzazione**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animazioni**: [Framer Motion](https://www.framer.com/motion/)
- **Icone**: [Lucide React](https://lucide.dev/)

---

## 📂 Struttura del Progetto

```text
Portfolio/
├── public/              # Risorse statiche pubbliche
├── src/
│   ├── components/      # Componenti React riutilizzabili (Hero, Marquee, About, WIP, Contact, Navbar)
│   ├── image/           # Cartella contenente l'avatar (es. 3Davatar-removebg-preview.png)
│   ├── App.tsx          # Punto di ingresso principale dell'app
│   ├── index.css        # Stili globali e configurazione temi Tailwind CSS
│   ├── main.tsx         # Inizializzazione dell'app React
│   └── types.ts         # Definizioni dei tipi TypeScript
├── package.json         # Dipendenze e script npm
├── tsconfig.json        # Configurazione TypeScript
└── vite.config.ts       # Configurazione Vite
```

---

## 🚀 Avvio Rapido in Locale

Assicurati di avere [Node.js](https://nodejs.org/) installato (consigliata versione 18 o superiore).

### 1. Clona o apri la cartella del progetto
Apri il terminale all'interno della cartella principale:
```bash
cd Portfolio
```

### 2. Installa le dipendenze
Installa tutti i pacchetti necessari tramite npm:
```bash
npm install
```

### 3. Avvia il server di sviluppo
Fai partire il server locale per testare il sito in tempo reale:
```bash
npm run dev
```
Il sito sarà disponibile all'indirizzo locale: **[http://localhost:5173](http://localhost:5173)**.

---

## 📦 Build e Produzione

Per compilare il sito ottimizzandolo per le massime performance in produzione:

```bash
# Genera i file di build pronti nella cartella /dist
npm run build

# Testa localmente la versione di produzione compilata
npm run preview
```

---

## ☁️ Deploy Rapido su Vercel

Il progetto è configurato per essere hostato facilmente su [Vercel](https://vercel.com/):

1. Connetti il tuo repository GitHub a Vercel.
2. Importa il progetto.
3. Vercel riconoscerà automaticamente la configurazione di **Vite**.
4. Clicca su **Deploy**. Ogni push sul branch `main` aggiornerà automaticamente il sito online!

---

🃏 *“Why so serious? Let's build something incredible together!”*