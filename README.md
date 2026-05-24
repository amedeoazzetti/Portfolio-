# 🦇 Amedeo's Portfolio - Batman Dark Knight Edition

Un portfolio personale moderno, interattivo e ad alto impatto visivo costruito con **React**, **TypeScript**, **Vite** e **Tailwind CSS (v4)**, personalizzato con una palette di colori e dettagli grafici ispirati a **Batman (il Cavaliere Oscuro)**.

Questo branch è interamente dedicato al design tattico e mil-spec del protettore di Gotham: sfondi grigio carbonio e nero metallo spazzolato, bagliori HUD blu Gotham notturno ed accenti iconici in oro utility belt.

---

## ✨ Caratteristiche Principali

- **Palette Cromatica Tattica (Batman Edition)**: Sfondo grigio carbone profondo/nero metallo, bagliori HUD azzurro Batcomputer e dettagli dorati utility belt.
- **Interazioni Magnetiche**: L'avatar 3D segue dolcemente il cursore del mouse tramite un effetto calamita interattivo personalizzato (`Magnet.tsx`).
- **Glow Bat-Segnale**: Una spettacolare combinazione di radial-gradient azzurro Gotham e oro utility belt posizionata dietro l'avatar per simulare il Bat-segnale nel cielo notturno.
- **HUD Marquee Animato**: Sezione a scorrimento orizzontale parallax con stelle dorate utility belt (`#FFB800`) pulsanti e simboli geometrici hi-tech.
- **Sezione Progetti WIP Tattica**: Card animata super raffinata con glow a gradiente conico e un pallino pulsante dorato utility belt.
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

### 2. Seleziona il branch Batman
Assicurati di essere sul branch dedicato:
```bash
git checkout batman
```

### 3. Installa le dipendenze
Installa tutti i pacchetti necessari tramite npm:
```bash
npm install
```

### 4. Avvia il server di sviluppo
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
3. Seleziona il branch `batman` per il deploy di questa versione!
4. Vercel riconoscerà automaticamente la configurazione di **Vite**.
5. Clicca su **Deploy**.

---

🦇 *“I am vengeance. I am the night. Let's build something incredible!”*