# Deployment Guide

This guide covers different ways to deploy the Embodied AI Club website.

## 🌐 Localhost Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🚀 Production Deployment Options

### 1. Vercel (Recommended for Next.js)

**Easy Deploy:**
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Automatic deployment on push

**CLI Deploy:**
```bash
npm install -g vercel
vercel
```

### 2. Netlify

```bash
# Build for static export
npm run build

# Deploy the 'out' directory to Netlify
```

### 3. Hugging Face Spaces (Docker)

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Upload to Hugging Face Spaces with Docker SDK.

### 4. GitHub Pages (Static Export)

Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

Then:
```bash
npm run build
# Deploy 'out' folder to GitHub Pages
```

## 🔧 Environment Variables

For production deployments, you may need:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Performance Tips

- **Images**: Use Next.js Image component for optimization
- **Fonts**: Already optimized with Google Fonts
- **CSS**: TailwindCSS purges unused styles automatically
- **Bundle**: Next.js handles code splitting automatically

## 🔍 Build Analysis

```bash
# Analyze bundle size
npm run build
npm run analyze
```

Choose the deployment method that best fits your needs!