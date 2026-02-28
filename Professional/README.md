# Divyanshu Bhaik — Personal Portfolio

A personal portfolio website for **Divyanshu Bhaik**, Senior Engineer at MediaTek, built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open and serve.

**Live Site**: [https://dv-123.github.io/Professional/](https://dv-123.github.io/Professional/)

## Project Structure

```
Professional/
├── index.html              # HTML structure & content
├── styles.css              # All styling (layout, components, animations)
├── script.js               # Interactivity (nav, scroll animations, canvas)
├── Divyanshu_Resume.pdf
└── README.md
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Profile avatar, name, typewriter title, animated particle network, key stats with animated counters |
| **Skills** | 6 categorized skill cards with proficiency dot indicators (Expert / Advanced) |
| **Experience** | Timeline — MediaTek (Senior Engineer + Intern) & IIT Jodhpur Research Intern |
| **Education** | NIT Hamirpur B.Tech + M.Tech with CGPA |
| **Publications** | Elsevier paper (Biomedical Signal Processing and Control) with accuracy/citation metrics and DOI link |
| **Projects** | 6 featured GitHub projects (Lung Cancer Detection, COVID-19 Detection, CSI Estimation in 5G, Smart Road Assistant, YOLO Object Detection, Text-to-Braille) |
| **Contact** | Email, phone, location, LinkedIn, GitHub, Google Scholar + inline contact form |

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, keyframe animations
- **Vanilla JavaScript** — Canvas API, Intersection Observer, Clipboard API, localStorage
- **Google Fonts** — Inter + JetBrains Mono (CDN)

## Features

- Responsive design with mobile hamburger menu
- Dark / Light mode toggle with `localStorage` persistence
- Animated network particle canvas in hero (mouse-interactive)
- Typewriter animation cycling through role titles
- Scroll-triggered fade-in and timeline animations
- Animated counters for hero stats (count-up on load)
- Scroll progress bar at the top of the page
- Active nav link highlighting based on current section
- Back-to-top button (appears after scrolling 400px)
- Click-to-copy on email and phone with toast notification
- Inline contact form (opens mail client with pre-filled subject & body)
- Skill proficiency dot indicators on every skill card
- Zero dependencies — single HTML entry point

## Hosting

Since this is a static site, it can be hosted on any of the following for free:

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>`

### Netlify (Fastest)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `Professional` folder
3. Get a live URL instantly

### Vercel
```bash
npx vercel
```
Follow the prompts — no configuration needed.

### Cloudflare Pages
1. Connect your GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Set build command to blank, output directory to `/`
3. Deploy

## Local Preview

Open `index.html` directly in any browser — no server required.

For a local dev server (optional):
```bash
npx serve .
# or
python -m http.server 8080
```

## Customisation

| What to change | Where |
|---|---|
| Content (name, roles, skills) | `index.html` |
| Colors / fonts | `styles.css` → `:root` variables |
| Light mode colors | `styles.css` → `body.light` |
| Particle animation settings | `script.js` → `MAX_DIST`, `MOUSE_DIST`, node count |
| Typewriter phrases | `script.js` → `phrases` array |
| Nav links | `index.html` → `<nav>` |
| Profile avatar | `index.html` → `.hero-avatar-inner` (replace text with `<img>`) |
| Skill proficiency levels | `index.html` → `.skill-level` dots per card |

## Contact

- **Email**: dvbhaik@gmail.com
- **LinkedIn**: [divyanshu-bhaik](https://www.linkedin.com/in/divyanshu-bhaik-7438a6155/)
- **GitHub**: [dv-123](https://github.com/dv-123)
- **Google Scholar**: [Divyanshu Bhaik](https://scholar.google.com/citations?user=ckyPlcMAAAAJ&hl=en&oi=ao)
