# Dawn Oracle

Dawn Oracle is a static, multi-page frontend concept for reflective tarot and oracle readings. It presents ancient symbolic practices as a calm, modern digital experience focused on perspective rather than deterministic prediction.

> **Project status:** Frontend prototype / in development

## Overview

The site helps visitors explore questions about love, life, relationships, career, change, and personal growth through four reflective methods:

- Tarot
- Moon Oracle
- I Ching
- Numerology

The experience includes an interactive landing page concept, reading prompts, oracle profiles, method explanations, pricing concepts, a daily oracle section, and journal content placeholders. The current repository is a frontend-only prototype; authentication, payments, persistent reading history, and backend-generated interpretations are not implemented.

## Design

The interface is based on the Dawn Oracle design concept in Figma:

<https://www.figma.com/design/kmSVW2Vo7BN8jVE7OOF07y/Untitled?node-id=0-1&t=VCXc2G1MIjpyWA6w-0>

## Features

- Dawn Oracle landing page with hero section, reading prompt, daily oracle, about, pricing, journal, and CTA sections.
- Four reflective methods: Tarot, Moon Oracle, I Ching, and Numerology.
- Four oracle personas: The Seer, The Moonkeeper, The Sage, and The Weaver.
- Separate pages for methods, oracles, and pricing.
- Responsive visual design built with modular CSS files and custom artwork.
- Vite development server and production build configuration.
- HTML validation during development, Oxlint checks, and Prettier formatting.
- GitHub Pages deployment through GitHub Actions.

## Tech stack

- **Markup:** HTML
- **Styling:** CSS
- **Build tool:** Vite
- **JavaScript:** ES modules; the current `src/main.js` is the application entry point
- **Fonts:** `@fontsource/cookie`, `@fontsource/cormorant-garamond`, and `@fontsource/inter`
- **Development quality tools:** Oxlint, Prettier, and html-validate
- **Deployment:** GitHub Pages via GitHub Actions

## Prerequisites

- [Node.js](https://nodejs.org/) LTS
- npm, included with Node.js
- Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

## Development setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Botond-cyber/josda-project.git
   cd josda-project
   ```

2. Install the exact dependency versions from the lockfile:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Vite serves the site at <http://localhost:3000>.

4. Open the URL shown in the terminal. Vite reloads the page as source files change.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Build all configured pages into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint across the repository |
| `npm run format` | Format project files with Prettier |
| `npm run format:check` | Check formatting without changing files |

## Production build and checks

Run the main local checks before opening a pull request:

```bash
npm ci
npm run lint
npm run format:check
npm run build
```

To preview the generated site:

```bash
npm run preview
```

The Vite configuration also validates the main HTML document while the development server is running with `html-validate`.

## Pages

Vite is configured to build these HTML entry points:

- `index.html` — Dawn Oracle landing page and reading entry point
- `src/pages/methods.html` — descriptions and comparisons for the four methods
- `src/pages/oracles.html` — oracle personas and their specialties
- `src/pages/pricing.html` — subscription plans, individual readings, comparison table, and FAQ

## GitHub Pages deployment

Deployment is defined in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). A push to the `master` branch or a manual workflow dispatch:

1. Checks out the repository.
2. Installs the current Node.js LTS release and npm dependencies.
3. Runs Oxlint.
4. Formats the repository with Prettier.
5. Builds the site with Vite.
6. Uploads `dist/` as a GitHub Pages artifact.
7. Deploys the artifact to GitHub Pages.

The Vite configuration uses the repository name as the base path in GitHub Actions. The deployed site is intended to be available at:

<https://Botond-cyber.github.io/josda-project/>

Before deploying, ensure the repository's Pages source is set to **GitHub Actions** under **Settings → Pages**.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
├── public/                        # Static files copied to the build output
├── src/
│   ├── assets/                    # Images, illustrations, icons, and card artwork
│   ├── css/                      # Shared and page-specific stylesheets
│   ├── pages/                    # Methods, oracles, and pricing pages
│   └── main.js                   # JavaScript entry point
├── index.html                     # Dawn Oracle landing page
├── vite.config.js                 # Vite, HTML validation, and multi-page build config
├── package.json                   # Scripts and dependencies
└── package-lock.json              # Locked dependency tree
```

## Configuration

No environment variables, API keys, or external services are currently required to run the frontend. Do not commit credentials or other secrets if integrations are added later.

## Testing and quality checks

There is currently no automated test suite. Before submitting changes, run:

```bash
npm run lint
npm run format:check
npm run build
```

Manually check the generated pages with `npm run preview`, including navigation, responsive layouts, images, and links between the landing page and the three secondary pages.

## Contributing

1. Create a focused branch from `master`.
2. Make the smallest coherent change possible.
3. Keep page content, links, and responsive styling consistent across the site.
4. Run linting, formatting checks, and a production build locally.
5. Update this README when setup, scripts, pages, or deployment behavior changes.
6. Open a pull request describing the change and the validation performed.

## License

No license has been specified for this repository yet. Until a license is added, the project should not be assumed to be available for reuse, redistribution, or modification outside the repository.

## Contact

For project questions or proposed changes, open an issue in the [GitHub repository](https://github.com/Botond-cyber/josda-project/issues). The design reference is available in the [Figma file](https://www.figma.com/design/kmSVW2Vo7BN8jVE7OOF07y/Untitled?node-id=0-1&t=VCXc2G1MIjpyWA6w-0).
