# React TypeScript Project

A modern React application built with TypeScript, Vite, and Tailwind CSS.

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
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click Save

3. **Update the base path:**
   - In `vite.config.ts`, update the `base` path to match your repository name:
   ```typescript
   base: '/YOUR_REPO_NAME/'
   ```

### Automatic Deployment

Every time you push to the `main` branch, the GitHub Actions workflow will:
1. Build your project
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual Deployment

If you prefer manual deployment:
```bash
npm run build
npm run deploy
```

## Project Structure

- `src/` - Source code
- `src/components/` - React components
- `public/` - Static assets
- `.github/workflows/` - GitHub Actions workflows

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (Icons) 