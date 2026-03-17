# 🚀 Darshkumar Dobariya — Portfolio

> **Senior Full-Stack Engineer & AI Developer** | Python • Generative AI • MCP Server • React • Node.js • Android

A modern, responsive, and multilingual portfolio website built with **React** + **Vite**, deployed on **GitHub Pages**.

🌐 **Live:** [https://darsg.github.io/my_portfolio/](https://darsg.github.io/my_portfolio/)

---

## ✨ Features

- 🎨 **Dark/Light Theme** toggle with smooth transitions
- 🌍 **Multilingual** support (English, Spanish, French, Korean)
- 📱 **Fully Responsive** — looks great on mobile, tablet, and desktop
- ⚡ **Animated Cursor** and smooth scroll effects
- 📂 **Data-Driven** — all content lives in JSON files for easy updates
- 🖼️ **Portfolio Gallery** with screenshot carousel
- 📬 **Contact Form** via EmailJS integration
- 🔄 **Preloader** animation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite 5 | Build Tool & Dev Server |
| SCSS | Styling |
| Bootstrap 5 | Responsive Grid & Components |
| Chart.js | Skill Proficiency Charts |
| Swiper | Carousels & Sliders |
| EmailJS | Contact Form Email Delivery |
| gh-pages | GitHub Pages Deployment |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **npm** (v9 or higher, comes with Node.js)
- **Git** — [Download](https://git-scm.com/)

Verify your installation:

```bash
node --version    # Should output v18.x.x or higher
npm --version     # Should output 9.x.x or higher
git --version     # Should output git version 2.x.x
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Darsg/my_portfolio.git
cd my_portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser at **http://localhost:5173/my_portfolio/** to see the site.

---

## 📝 How to Update Content

All website content is stored in JSON files inside `public/data/`. You can update content without touching any React code:

| File | What It Controls |
|------|------------------|
| `public/data/settings.json` | Profile name, role, theme, languages, EmailJS config |
| `public/data/strings.json` | UI strings for all languages |
| `public/data/structure.json` | Navigation sections and categories |
| `public/data/sections/cover.json` | About me, testimonials, interests |
| `public/data/sections/skills.json` | Skill cards, progress bars, languages |
| `public/data/sections/experience.json` | Work experience timeline |
| `public/data/sections/education.json` | Education timeline |
| `public/data/sections/portfolio.json` | Portfolio projects and categories |
| `public/data/sections/contact.json` | Contact form and social links |

### Adding Images

Place images in `public/images/pictures/` and reference them in JSON as:
```json
"img": "images/pictures/your-image.png"
```

---

## 🌐 Deployment to GitHub Pages

### Step 1: Build the Production Bundle

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 2: Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `gh-pages -d dist`, which:
1. Builds the production bundle (via the `predeploy` script)
2. Pushes the `dist/` folder contents to the `gh-pages` branch
3. GitHub Pages automatically serves from the `gh-pages` branch

### Step 3: Verify Deployment

Visit **[https://darsg.github.io/my_portfolio/](https://darsg.github.io/my_portfolio/)** to see your live site.

> **Note:** It may take 1-2 minutes for GitHub Pages to update after deployment.

### Full Deployment Workflow (Quick Reference)

```bash
# 1. Make your changes to JSON files or code
# 2. Test locally
npm run dev

# 3. Commit your changes
git add .
git commit -m "Update portfolio content"

# 4. Push source code to main branch
git push origin main

# 5. Deploy to GitHub Pages
npm run deploy

# 6. Verify at https://darsg.github.io/my_portfolio/
```

---

## 📁 Project Structure

```
my_portfolio/
├── public/
│   ├── data/
│   │   ├── sections/          # Content JSON files
│   │   │   ├── cover.json
│   │   │   ├── skills.json
│   │   │   ├── experience.json
│   │   │   ├── education.json
│   │   │   ├── portfolio.json
│   │   │   └── contact.json
│   │   ├── settings.json      # App configuration
│   │   ├── strings.json       # Localization strings
│   │   └── structure.json     # Navigation structure
│   └── images/                # All images and assets
├── src/
│   ├── components/            # React components
│   ├── helpers/               # Utility functions
│   ├── providers/             # React context providers
│   ├── styles/                # SCSS stylesheets
│   └── main.jsx               # App entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies & scripts
```

---

## ⚙️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Run ESLint code checks |

---

## 📄 License

This project is private and not open for redistribution.

---

## 📬 Contact

- **Email:** darshdobariya3@gmail.com
- **GitHub:** [@darsg](https://github.com/darsg)
- **LinkedIn:** [darsh-dobariya](https://in.linkedin.com/in/darsh-dobariya)
