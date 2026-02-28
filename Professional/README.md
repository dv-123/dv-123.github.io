# Divyanshu Bhaik — Personal Portfolio

A personal portfolio website for **Divyanshu Bhaik**, Senior Engineer at MediaTek, built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open and serve.

## Project Structure

```
Portfolio_New/
├── index.html          # HTML structure & content
├── styles.css          # All styling (layout, components, animations)
├── script.js           # Interactivity (nav, scroll animations, canvas)
├── Divyanshu_Resume.pdf
└── README.md
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, animated particle network, key stats |
| **Skills** | 6 categorized skill cards (Programming, Wireless, Networking, AI/ML, Tools, Testing) |
| **Experience** | Timeline — MediaTek (Senior Engineer + Intern) & IIT Jodhpur Research Intern |
| **Education** | NIT Hamirpur B.Tech + M.Tech with CGPA |
| **Publications** | Elsevier paper with accuracy/citation metrics |
| **Contact** | Email, phone, location, LinkedIn, GitHub |

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, keyframe animations
- **Vanilla JavaScript** — Canvas API, Intersection Observer, event listeners
- **Google Fonts** — Inter + JetBrains Mono (CDN)

## Features

- Responsive design with mobile hamburger menu
- Animated network particle canvas in hero (mouse-interactive)
- Scroll-triggered fade-in and timeline animations
- Zero dependencies — single HTML entry point

## Hosting

Since this is a static site, it can be hosted on any of the following for free:

### Netlify (Fastest)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `Portfolio_New` folder
3. Get a live URL instantly

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>`

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
| Particle animation settings | `script.js` → `MAX_DIST`, `MOUSE_DIST`, node count |
| Nav links | `index.html` → `<nav>` |

## Contact

- **Email**: dvbhaik@gmail.com
- **LinkedIn**: [divyanshu-bhaik](https://www.linkedin.com/in/divyanshu-bhaik-7438a6155/)
- **GitHub**: [dv-123](https://github.com/dv-123)
