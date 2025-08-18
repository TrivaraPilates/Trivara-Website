# Overview

This is a boutique Pilates studio website for Trivāra Pilates, a Reformer Pilates studio located in Scarborough. The application is built as a full-stack web application with a React frontend and Express backend. The name "Trivāra" comes from Sanskrit words "Tri" (three) and "Vara" (blessings), representing the three gifts cultivated: strength of body, clarity of mind, and peace of soul.

The website serves as a landing page and lead generation tool for the studio, featuring information about classes, the studio's philosophy, upcoming events, and a newsletter signup system. The design emphasizes warm, earthy tones (beige, cream, brown) to create a welcoming, boutique fitness atmosphere.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for the brand color palette
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **API Pattern**: RESTful endpoints for newsletter signups and contact messages
- **Data Storage**: In-memory storage with interface abstraction for easy database migration
- **Validation**: Zod schemas for runtime type checking and validation
- **Development**: Hot module replacement and error overlay for development experience

## Data Storage Design
- **Current**: Memory-based storage using Map data structures
- **Schema**: Drizzle ORM with PostgreSQL dialect for future database integration
- **Tables**: Users (authentication ready), newsletter signups, and contact messages
- **Migration Ready**: Database configuration and migration setup prepared for production deployment

## Design System
- **Typography**: Playfair Display serif font for headings (boutique elegance) and Inter sans-serif for body text (readability)
- **Color Palette**: Custom CSS variables implementing warm neutrals (beige, cream, sand) and earthy browns (chocolate, coffee, taupe)
- **Component Library**: Comprehensive UI component set including forms, buttons, dialogs, and navigation elements
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## User Experience Features
- **Smooth Navigation**: Scroll-to-section navigation with offset calculations
- **Sticky CTA**: Persistent "Book a Class" button for conversion optimization
- **Form Handling**: Newsletter signup and contact forms with validation and user feedback
- **Toast Notifications**: User feedback system for form submissions and actions
- **Loading States**: Proper loading and error states for async operations

# External Dependencies

## UI and Styling
- **Radix UI**: Accessibility-focused primitive components for dialogs, forms, navigation, and interactions
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer for cross-browser compatibility
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media icons

## Development and Build Tools
- **Vite**: Build tool with React plugin for fast development and production builds
- **TypeScript**: Type checking and enhanced development experience
- **ESBuild**: Fast JavaScript bundler for server-side code
- **Replit Integration**: Development environment plugins for runtime error handling and debugging

## Database and Validation
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Runtime type validation and schema definition
- **Neon Database**: PostgreSQL-compatible serverless database (configured but not actively used)

## State Management and HTTP
- **TanStack React Query**: Server state management, caching, and synchronization
- **Wouter**: Lightweight routing library for single-page application navigation

## Fonts and Assets
- **Google Fonts**: Playfair Display and Inter font families loaded via CDN
- **Unsplash**: High-quality stock photography for hero images and class illustrations

The architecture prioritizes developer experience, type safety, and scalability while maintaining a clean separation between frontend presentation, backend logic, and data storage concerns.