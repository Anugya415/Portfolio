# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website for K. Anugya Reddy - Full Stack Developer. Built with Next.js 15, React 19, and Tailwind CSS 4, featuring a modern single-page design with smooth animations and interactive components.

## Development Commands

All commands should be run from the `portfolio/` directory:

### Development
```bash
npm run dev
```
Starts the Next.js development server at http://localhost:3000 with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in `.next/` directory.

### Production
```bash
npm start
```
Runs the production server (requires running `npm run build` first).

### Linting
```bash
npx next lint
```
Runs ESLint with Next.js core-web-vitals configuration. ESLint config is in `eslint.config.mjs`.

## Architecture Overview

### Application Structure

This is a Next.js 15 App Router application with the following structure:

- **`app/`**: Next.js App Router directory
  - `layout.js`: Root layout with Google Fonts (Geist Sans & Geist Mono), metadata, and global styles
  - `page.js`: Main portfolio page that composes all sections
  - `globals.css`: Global styles, custom animations, Tailwind imports

- **`src/components/`**: React components for portfolio sections
  - All components use `'use client'` directive (client-side rendered)
  - Each section component handles its own intersection observer for scroll animations
  - Common pattern: fade-in animations triggered when section enters viewport

### Component Architecture

**Navigation & Layout:**
- `Header.js`: Fixed navigation with scroll-based styling, active section tracking via scroll position
- `Footer.js`: Footer section with links

**Main Sections (in order):**
1. `Hero.js`: Landing section with animated name, rotating role text, floating particles
2. `About.js`: Three-tab interface (Story, Skills, Interests) with stats display
3. `TechStack.js`: Categorized skill display (Frontend/Backend/Tools) with progress bars
4. `Projects.js`: Filterable project grid with hover effects, status badges
5. `Contact.js`: Contact form section
6. `Experience.js`: Work experience timeline

**Utilities:**
- `ClientOnlyWrapper.js`: Prevents hydration mismatches for client-only content
- `FloatingParticles.js`: Canvas-based particle animation system

### Key Technical Patterns

**Client-Side Rendering:**
All interactive components use `'use client'` directive. This is a React 19 + Next.js 15 pattern where interactivity requires client-side JavaScript.

**Intersection Observer Pattern:**
Most section components follow this pattern:
```javascript
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    },
    { threshold: 0.1 }
  );
  // ... observe logic
}, []);
```

**Hydration Safety:**
Components that generate random content or use browser APIs (like `FloatingParticles.js`) implement mounting checks to prevent SSR/client mismatches:
```javascript
const [hasMounted, setHasMounted] = useState(false);
useEffect(() => setHasMounted(true), []);
if (!hasMounted) return null;
```

**Navigation:**
Uses smooth scrolling via `scrollIntoView({ behavior: 'smooth' })` instead of Next.js routing. Sections have IDs: `home`, `about`, `skills`, `projects`, `contact`.

### Styling Architecture

**Tailwind CSS 4:**
- Configured via PostCSS (`@tailwindcss/postcss`)
- Custom theme defined inline in `globals.css` using `@theme inline`
- Extensive use of utility-first classes with gradient backgrounds, glassmorphism effects

**Custom Animations (in globals.css):**
- `@keyframes blob`: Floating blob background animations
- `@keyframes fade-in`: Section entrance animations
- `@keyframes gradient-x`: Text gradient animations
- `@keyframes float`: Subtle floating motion
- Custom animation delays: `.animation-delay-2000`, `.animation-delay-4000`

**Design System:**
- Color scheme: Dark theme with purple/blue gradients
- Glass morphism: `backdrop-blur-sm` + `bg-white/5` pattern
- Hover states: Scale transforms (1.05), color transitions, shadow effects
- Consistent spacing: 20px vertical padding for sections

### Data Patterns

**Static Data:**
Project data, tech stack, and other content are defined as constants within components. To update:
- Projects: Edit `projects` array in `Projects.js`
- Tech stack: Edit `techStack` object in `TechStack.js`
- Stats: Edit `stats` array in `About.js`

**No Backend:**
This is a static portfolio with no API routes or database. All data is hardcoded in component files.

## Configuration Files

- **`next.config.mjs`**: 
  - `outputFileTracingRoot` set to fix workspace root detection
  - Optimizes `@tailwindcss/postcss` imports
  - Custom environment variables

- **`postcss.config.mjs`**: Minimal PostCSS config with Tailwind plugin

- **`jsconfig.json`**: JavaScript project configuration for imports

- **`.gitignore`**: Standard Next.js ignore patterns

## Working with This Codebase

### Adding a New Section
1. Create component in `src/components/`
2. Add `'use client'` directive at top
3. Implement intersection observer pattern for animations
4. Add section ID for navigation
5. Import and add to `app/page.js`
6. Update navigation in `Header.js` if needed

### Modifying Animations
- Global animations: Edit keyframes in `globals.css`
- Component animations: Most use Tailwind utility classes with transition durations
- Entrance animations: Controlled by `isVisible` state + Tailwind classes

### Changing Content
- Personal info: Update `app/layout.js` metadata and component text
- Projects: Edit `projects` array in `Projects.js`
- Skills: Edit `techStack` object in `TechStack.js`
- Contact links: Check footer and contact components

### Performance Considerations
- All images use external URLs (Unsplash) - consider moving to `/public` and using next/image
- Canvas animations (FloatingParticles) may impact performance on low-end devices
- Large gradient backgrounds and blur effects can be GPU-intensive

## Notes

- **No testing framework configured**: No test files or test scripts exist
- **No TypeScript**: Pure JavaScript project (consider migration for type safety)
- **Placeholder project data**: GitHub links and live demos in Projects.js are placeholders
- **No responsive image optimization**: Consider using Next.js Image component
- **Single-page application**: No routing beyond hash-based section scrolling
