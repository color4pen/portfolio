# Portfolio

Modern portfolio site built with Astro, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Stack**: Astro + TypeScript + Tailwind CSS
- 📝 **Content Collections**: Markdown-based project management
- 🎨 **Modern Design**: Clean, minimal, and professional
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive**: Mobile-first design approach
- ⚡ **Fast**: Static site generation for optimal performance
- 🎯 **SEO Optimized**: Meta tags and semantic HTML

## Sections

1. **Hero**: Introduction with name, title, and description
2. **Skills**: Technical skills organized by category (Frontend/Backend/Infrastructure/Management)
3. **Experience**: Work history in chronological order
4. **Projects**: Featured projects with detail pages
5. **Contact**: Social links (GitHub, LinkedIn, Email)

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── projects/
│   │       ├── blog-platform.md
│   │       ├── ecommerce-platform.md
│   │       ├── task-management.md
│   │       └── weather-dashboard.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── projects/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

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

## Deployment

### GitHub Pages

The site includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger deployment

To use a custom domain or subdirectory, update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/portfolio', // For subdirectory deployment
});
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization

### Update Content

1. **Personal Info**: Edit `src/components/Hero.astro`
2. **Skills**: Modify `src/components/Skills.astro`
3. **Experience**: Update `src/components/Experience.astro`
4. **Contact Links**: Edit `src/components/Contact.astro`

### Add Projects

Create new markdown files in `src/content/projects/`:

```md
---
title: Project Name
description: Project description
tech: [Tech1, Tech2, Tech3]
role: Your Role
period: 2023 - 2024
featured: true
---

Project content here...
```

## Technologies

- [Astro](https://astro.build) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) - Content management

## License

ISC
