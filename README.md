# Portfolio

A modern portfolio website built with React, Vite, and Tailwind CSS.

## Live Demo

The portfolio is automatically deployed to GitHub Pages at:
https://majdsayedtaha.github.io/portfolio/

## Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. The workflow runs automatically when you push to the `main` branch.

### Setup GitHub Pages

To enable GitHub Pages for this repository:

1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. The site will be deployed automatically on the next push to `main`

### Manual Deployment (Alternative)

If you prefer to deploy manually using the gh-pages package:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Technologies

- React
- Vite
- Tailwind CSS
- Three.js / React Three Fiber
- Framer Motion
- EmailJS
