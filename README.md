# Nishchal Basyal — AI Automation Engineer Portfolio

A production-ready, fully static portfolio built with **Next.js 14**, **Tailwind CSS v3**, **shadcn/ui**, and **Framer Motion**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v3 + custom dark theme with teal accents
- **Components**: shadcn/ui (Button, Card, Badge, Tooltip)
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Internationalization**: Custom React Context (EN/DE toggle)
- **Fonts**: JetBrains Mono (body/code) + Space Grotesk (headings) via `next/font/google`
- **Deployment**: GitHub Pages (static export)

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git
- GitHub account (for Pages deployment)

## ⚡ Quick Start

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd AI Portfolio
npm install
```

Or with pnpm:

```bash
pnpm install
```

### 2. Install shadcn/ui Components

```bash
npx shadcn-ui@latest init
```

When prompted:

- **Would you like to use TypeScript?** → `Yes`
- **Which style would you like to use?** → `Default`
- **Which color would you like as the base color?** → `Slate`
- **Where is your global CSS file?** → `app/globals.css`
- **Do you want to use CSS variables for theming?** → `Yes`

Then install components:

```bash
npx shadcn-ui@latest add button card badge tooltip separator
```

### 3. Install Dependencies

```bash
npm install clsx tailwind-merge
npm install @radix-ui/react-tooltip @radix-ui/react-separator @radix-ui/react-slot
npm install framer-motion lucide-react
```

### 4. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🎨 Customization

### Personal Info

1. **Hero Terminal**: Edit `components/Hero.tsx` — replace terminal output with your data
2. **i18n Strings**: Edit `lib/i18n.ts` — all EN/DE content centralized
3. **Skills**: Edit `lib/skills.ts` — add/remove skill categories and progress
4. **Projects**: Edit `lib/projects.ts` — add project data with GitHub/notebook links
5. **Contact**: Edit `components/Contact.tsx` — update email, LinkedIn, GitHub links

### Theme Colors

All colors defined in `tailwind.config.js`:

```js
colors: {
  bg:      '#0d1117',      // Main background
  surface: '#161b22',      // Cards, surfaces
  border:  '#21262d',      // Borders
  teal:    '#14b8a6',      // Primary accent
  cyan:    '#06b6d4',      // Secondary accent
  // ... etc
}
```

To change the primary color, update `teal` and the `--primary` CSS variable in `app/globals.css`.

### Layout & Sections

Each section lives in `components/`:

- `Navbar.tsx` — Navigation + language switcher
- `Hero.tsx` — Intro + terminal card
- `CurrentlyBuilding.tsx` — Marquee banner
- `About.tsx` — Bio + photo
- `Skills.tsx` — Skill grid with progress bars
- `Projects.tsx` — Project cards
- `Roadmap.tsx` — Learning path + certifications
- `Contact.tsx` — Contact cards
- `Footer.tsx` — Footer

## 🚀 Deployment to GitHub Pages

### Step 1: Update Configuration

Edit `next.config.js`:

```js
basePath: '/your-repo-name',        // e.g., '/portfolio'
assetPrefix: '/your-repo-name',
```

### Step 2: Build & Test

```bash
npm run build
npm run start  # or use a local HTTP server to test
```

### Step 3: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-artifact@v3
        with:
          name: out
          path: out/

      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 4: Enable GitHub Pages

1. Push `.github/workflows/deploy.yml` to `main`
2. Go to your repo **Settings** → **Pages**
3. Set **Source** to `Deploy from a branch`
4. Set **Branch** to `gh-pages` / `root`

Pages will auto-deploy on every push to `main`.

### Step 5: Verify

After a few seconds, visit `https://<username>.github.io/your-repo-name/`

## 📝 Content Structure

```
lib/
  i18n.ts          ← All EN/DE strings
  skills.ts        ← Skill categories & progress
  projects.ts      ← Project data
  utils.ts         ← shadcn cn() helper

context/
  LangContext.tsx  ← i18n provider & hook

components/
  Navbar.tsx
  Hero.tsx
  ...
  ui/              ← shadcn components
```

## 🌐 i18n (English / Deutsch)

The portfolio uses a custom React Context for language switching — no external library.

**Usage in components**:

```tsx
"use client";
import { useLang } from "@/context/LangContext";
import { t } from "@/lib/i18n";

export function MyComponent() {
  const { lang } = useLang();
  return <div>{t[lang].myKey}</div>;
}
```

Language preference is stored in `localStorage` and persists across sessions.

## 📦 Build & Export

For static export (GitHub Pages):

```bash
npm run build
```

Output folder: `out/` — ready to deploy to any static host.

## 🎯 Roadmap Features

- [x] Responsive design (mobile-first)
- [x] Dark theme + teal accents
- [x] Smooth animations (Framer Motion)
- [x] i18n (EN/DE toggle)
- [x] Static export (Next.js `output: export`)
- [x] GitHub Pages ready
- [ ] Generate `.github/workflows/deploy.yml` (see Deployment section)
- [ ] Add MDX blog section
- [ ] Add CMS integration (Contentful, Sanity)
- [ ] Interactive skill filters

## 🛠️ Troubleshooting

### Build fails: "Cannot find module"

```bash
npm install
npm run build
```

### Styles not applied?

Ensure `tailwind.config.js` has correct `content` paths:

```js
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### i18n not working?

Check that `LangProvider` wraps the entire app in `app/layout.tsx`:

```tsx
import { LangProvider } from "@/context/LangContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
```

### GitHub Pages shows 404?

1. Verify `basePath` matches repo name in `next.config.js`
2. Check that workflow uploaded to `gh-pages` branch
3. Verify GitHub Pages **Settings** → **Branch** is `gh-pages` / `root`

## 📄 License

Open source. Feel free to modify and deploy.

## 🤝 Credits

Built with ❤️ using Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

---

**Questions?** Reach out via email, LinkedIn, or GitHub listed in the Contact section.
