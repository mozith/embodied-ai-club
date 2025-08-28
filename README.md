# Embodied AI Club Website

A modern, responsive website for the Embodied AI Club - advancing the frontier of robotic cognition through hands-on projects in collaboration with Cortex AI.

## Features

- **Modern Design**: Clean, gradient-based design with smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated components
- **Performance Optimized**: Built with Next.js 15 and TailwindCSS
- **Accessibility**: Semantic HTML and proper contrast ratios

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Space Grotesk, Inter (Google Fonts)
- **Animations**: Custom CSS keyframes and transitions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd embodied-ai-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
embodied-ai-club/
├── src/
│   └── app/
│       ├── globals.css      # Global styles and animations
│       ├── layout.tsx       # Root layout with fonts and metadata
│       └── page.tsx         # Homepage component
├── public/                  # Static assets
├── tailwind.config.ts       # TailwindCSS configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Design System

### Colors
- **Background**: `#12141a` (Dark blue-gray)
- **Text**: `#f5f5f5` (Light gray)
- **Accent**: `#00c2ff` (Bright blue)
- **Gradient**: `#0b0c10` to `#12141a`

### Typography
- **Headers**: Space Grotesk (300, 500, 700)
- **Body**: Inter (100, 300, 400, 600)

### Animations
- **fadeIn**: 0.8s ease-out
- **slideUp**: 0.6s ease-out with delay
- **pulse**: 2.5s infinite for scroll indicator

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## About the Club

The Embodied AI Club allows students to explore the future of robotics and AI through hands-on projects in collaboration with Cortex AI, a Y Combinator robotics company. Members focus on:

- **Robotic Manipulation**: Control systems & tactile feedback
- **Machine Learning Analytics**: Perception & decision-making algorithms  
- **Data Engineering**: High-fidelity datasets for ML models
- **Virtual Environments**: Photorealistic simulation & digital twins

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Live Demo**: [Coming Soon]
- **Cortex AI**: [Y Combinator Company]
- **Contact**: [Club Email]

---
