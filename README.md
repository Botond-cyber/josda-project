# Josda Project

> **Project status:** [PLACEHOLDER: e.g. In development / MVP / Production]

## Overview

[PLACEHOLDER: Add a short description of what Josda Project does, who it is
for, and the problem it solves.]

### Key features

- [PLACEHOLDER: Feature 1]
- [PLACEHOLDER: Feature 2]
- [PLACEHOLDER: Feature 3]

### Tech stack

- **Frontend/build tool:** Vite
- **Language:** JavaScript
- **Styling:** CSS
- **Deployment:** GitHub Pages via GitHub Actions
- **Additional technologies:** [PLACEHOLDER: Add libraries, APIs, or services]

## Prerequisites

- [Node.js](https://nodejs.org/) LTS (the workflow uses the current LTS release)
- npm (included with Node.js)
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

   The server is available at <http://localhost:3000>.

4. Open the URL shown in the terminal. Vite reloads the page as source files
   change.

## Available scripts

| Command                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the Vite development server       |
| `npm run build`        | Create a production build in `dist/`    |
| `npm run preview`      | Preview the production build locally    |
| `npm run lint`         | Run Oxlint                              |
| `npm run format`       | Format project files with Prettier      |
| `npm run format:check` | Check formatting without changing files |

## Production build

Run the same checks used by continuous integration:

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

## GitHub Pages deployment

Deployment is configured in
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). A push to the
repository’s `master` branch or a manual workflow dispatch will:

1. Install dependencies with `npm ci`.
2. Run linting and formatting checks.
3. Build the site with Vite.
4. Upload `dist/` as a Pages artifact.
5. Deploy the artifact to GitHub Pages.

Before the first deployment, verify the following repository settings:

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. In **Settings → Actions → General**, allow GitHub Actions to run.
3. Push to `master`, or start **Deploy static content to Pages** from the
   **Actions** tab.

The Vite configuration automatically uses the repository name as the base path
in GitHub Actions, so asset URLs work when the site is hosted at
`https://Botond-cyber.github.io/josda-project/`.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
├── public/                        # Static files copied to the build output
├── src/
│   ├── assets/                    # Source assets
│   ├── css/                      # Stylesheets
│   └── main.js                   # Application entry point
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite and development validation config
├── package.json                   # Scripts and dependencies
└── package-lock.json              # Locked dependency tree
```

## Configuration

[PLACEHOLDER: Document required environment variables, API endpoints, feature
flags, or secrets. Never commit credentials. If no configuration is required,
state that explicitly.]

## Testing and quality checks

[PLACEHOLDER: Document the test strategy and add test commands when tests are
introduced.]

At minimum, run `npm run lint`, `npm run format:check`, and `npm run build`
before opening a pull request.

## Contributing

1. Create a focused branch from `master`.
2. Make and locally validate your changes.
3. Update documentation when behavior or setup changes.
4. Open a pull request and describe the validation performed.

[PLACEHOLDER: Add contribution rules, review requirements, issue templates, or
the preferred branch naming convention.]

## License

[PLACEHOLDER: Add the project license, copyright holder, and a link to the
license file.]

## Contact

[PLACEHOLDER: Add the maintainer/team name and the preferred support channel.]
