# Tra Hoang Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Features a comprehensive theme system, mobile-first design, and optimized performance.

## ✨ Features

### 🎨 **Design & UX**
- 🌙 **Advanced Theme System**: Light, Dark, and System modes with smooth transitions
- 📱 **Mobile-First Responsive Design**: Optimized for all devices and screen sizes
- 🎯 **Modern UI/UX**: Beautiful animations, hover effects, and micro-interactions
- ♿ **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🚀 **Performance & Optimization**
- ⚡ **Fast Loading**: Vite + React for optimal performance
- 🖼️ **Image Optimization**: Lazy loading, blur placeholders, and error handling
- 📦 **Code Splitting**: Efficient bundle management
- 🔍 **SEO Optimized**: Meta tags, structured data, and performance metrics

### 🛠️ **Functionality**
- 📝 **Contact Form**: Fully functional with validation and feedback
- 🧭 **Smooth Navigation**: Mobile hamburger menu with enhanced UX
- 🔝 **Back to Top**: Floating action button for easy navigation
- 📊 **Project Showcase**: Filterable project gallery with optimized images

### 🎛️ **Developer Experience**
- 🔧 **TypeScript**: Full type safety and IntelliSense
- 📚 **Modular Architecture**: Reusable components and hooks
- 🎨 **Design System**: Consistent styling with Tailwind CSS and shadcn/ui
- 📖 **Comprehensive Documentation**: Detailed guides and examples

## 🏗️ Project Structure

```
trahoang.dev-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   ├── sections/         # Hero, About, Skills, Projects, Contact
│   │   └── ui/              # shadcn/ui components + custom components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, theme provider, validations
│   ├── pages/               # Page components
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── docs/                   # Documentation
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Clone the repository

```bash
git clone https://github.com/hoangtrongtra-dev/trahoang.dev-portfolio.git
cd trahoang.dev-portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to view the website.

### 4. Build for production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 🎨 Theme System

The portfolio features a sophisticated theme system with three modes:

- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes, modern aesthetic  
- **System Mode**: Automatically follows your device preferences

### Usage

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle"

// Desktop theme toggle
<ThemeToggle />

// Mobile theme options (in hamburger menu)
// Automatically available with enhanced UX
```

For detailed theme system documentation, see [docs/THEME_SYSTEM.md](./docs/THEME_SYSTEM.md).

## 🛠️ Key Components

### Layout Components
- **Header**: Responsive navigation with theme toggle and mobile menu
- **Footer**: Contact information and social links
- **BackToTop**: Floating action button for easy navigation

### Section Components
- **Hero**: Animated introduction with call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills with visual indicators
- **Projects**: Filterable project showcase with optimized images
- **Contact**: Functional contact form with validation

### UI Components
- **ThemeToggle**: Dropdown menu for theme selection
- **OptimizedImage**: Lazy loading images with error handling
- **Form Components**: Validated input fields with real-time feedback

## 📱 Mobile Experience

### Enhanced Mobile Navigation
- **Hamburger Menu**: Animated toggle with smooth transitions
- **Full-Screen Overlay**: Immersive mobile experience
- **Delayed Theme Section**: Better UX with progressive disclosure
- **Touch-Optimized**: Large touch targets and smooth gestures

### Mobile-First Features
- **Responsive Images**: Optimized for all screen sizes
- **Touch-Friendly**: Proper spacing and interaction areas
- **Performance**: Optimized loading for mobile networks

## 🔧 Customization

### Styling
The project uses Tailwind CSS with a custom design system. Key customization points:

```css
/* src/index.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

### Content
- Update personal information in section components
- Replace project images in `public/` directory
- Modify social links in `Header.tsx`
- Customize contact form validation in `lib/validations/`

### Theme Customization
- Modify CSS variables in `src/index.css`
- Update theme colors in `tailwind.config.ts`
- Customize theme toggle behavior in `hooks/use-theme.ts`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Other Platforms
The project builds to static files in `dist/` and can be deployed to any static hosting platform.

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- **Image Lazy Loading**: Reduces initial bundle size
- **Code Splitting**: Efficient resource loading
- **CSS Optimization**: Purged unused styles
- **Bundle Analysis**: Optimized dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Zod](https://zod.dev/) for schema validation

## 📞 Contact

- **Website**: [trahoang.dev](https://trahoang.dev)
- **Email**: contact@trahoang.dev
- **GitHub**: [@hoangtrongtra-dev](https://github.com/hoangtrongtra-dev)
- **LinkedIn**: [Tra Hoang](https://linkedin.com)

---

Built with ❤️ by Tra Hoang
