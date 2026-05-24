# 🦇🃏 Amedeo's Portfolio - The Dark Knight vs Clown Prince of Chaos

Un portfolio personale moderno, interattivo, fluido e ad altissimo impatto visivo costruito con **React**, **TypeScript**, **Vite** e **Tailwind CSS (v4)**.

Il sito offre un'esperienza dinamica esclusiva: **un interruttore di tema in tempo reale** che permette all'utente di selezionare istantaneamente il proprio schieramento, modificando l'intera estetica del sito in modo fluido ed immersivo tramite variabili CSS reattive.

---

## 🎭 Le Due Modalità Dinamiche

1. **🦇 Batman Mode (Default)**: 
   - **Estetica**: Tattica, militare, cyberpunk pulito e misterioso.
   - **Colori**: Sfondo carbon black (`#050507`), bagliori HUD azzurro Batcomputer, accenti in oro Utility Belt e mantello.
   - **Dettagli**: Simbolo del Bat-segnale dietro l'avatar, stelle dorate nel marquee e card WIP a tema vigilante.
   - **Interruttore**: Un tasto fluttuante dorato con l'icona del pipistrello di Gotham.

2. **🃏 Joker Mode**:
   - **Estetica**: Psichedelica, tossica, caotica e magnetica.
   - **Colori**: Sfondo viola scurissimo Gotham Night (`#08020F`), gradienti acidi verde tossico e viola elettrico, accenti rosso sorriso.
   - **Dettagli**: Aura radioattiva viola/verde dietro l'avatar, divisori al neon, scritte tridimensionali spettrali ed un'animazione rotante ipnotica.
   - **Interruttore**: Un tasto fluttuante viola/verde con un sorriso folle e scritte "HA HA" animate.

---

## ✨ Caratteristiche Tecniche e Animazioni

- **Theme Swapper Reattivo a Variabili CSS**: Gestione del tema a stato React (`App.tsx`) che inietta la classe `.theme-joker` per re-inizializzare all'istante tutte le proprietà CSS.
- **Transizioni Fluide**: Dissolvenze e morphing cromatici su background, bordi, ombre, gradienti ed icone impostati a `0.5s ease`.
- **Interazioni Magnetiche**: L'avatar 3D segue dolcemente il cursore del mouse tramite un effetto calamita interattivo personalizzato (`Magnet.tsx`).
- **Glow ed Effetti Speciali**: Ombre sfumate tridimensionali, cono di luce rotante a conic-gradient, ed aurore radiali sfocate che circondano l'avatar di Amedeo eliminando ogni imperfezione dei bordi.
- **Typographic Parallax Marquee**: Sezione animata orizzontale sensibile allo scorrimento verticale, con simboli che si adattano al tema (stelle dorate vs sorrisi/losanghe rosse).
- **Clean Layout**: Semplificato rimuovendo la sezione dei servizi e della navbar "Prize" per mantenere l'esperienza fluida ed essenziale.

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
│   ├── components/      # Componenti React riutilizzabili (Hero, Marquee, About, WIP, Contact, Navbar, ThemeToggle)
│   ├── image/           # Cartella contenente l'avatar (3Davatar-removebg-preview.png)
│   ├── App.tsx          # Punto di ingresso principale, gestione dello stato del tema e dello switcher
│   ├── index.css        # Variabili CSS di tema, stili globali e transizioni
│   ├── main.tsx         # Inizializzazione dell'app React
│   └── types.ts         # Definizioni dei tipi TypeScript
├── package.json         # Dipendenze e script npm
├── tsconfig.json        # Configurazione TypeScript
└── vite.config.ts       # Configurazione Vite
```

---

## 🚀 Avvio Rapido in Locale

Assicurati di avere [Node.js](https://nodejs.org/) installato (consigliata versione 18 o superiore).

### 1. Entra nella cartella principale:
```bash
cd Portfolio
```

### 2. Assicurati di essere sul branch dedicato:
```bash
git checkout batman
```

### 3. Installa le dipendenze:
```bash
npm install
```

### 4. Avvia il server di sviluppo:
```bash
npm run dev
```
Il sito sarà istantaneamente disponibile su: **[http://localhost:5173](http://localhost:5173)**.

---

## 📦 Build e Deploy su Vercel

```bash
# Compilazione di produzione
npm run build

# Anteprima locale
npm run preview
```

Puoi connettere il repository direttamente su **Vercel** per effettuare il deploy continuo semplicemente importando il branch `batman`. Il server leggerà in automatico la configurazione di Vite e metterà online il tuo capolavoro in un minuto.

---

🦇🃏 *“Why so serious? I am the night.” — Scegli il tuo lato della medaglia.*