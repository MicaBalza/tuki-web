# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 15 TypeScript application for Tuki Studio, a creative agency portfolio website.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Internationalization**: i18next with Spanish (default) and English support
- **Animations**: Framer Motion, Lottie, Swiper
- **Forms**: React Hook Form with Nodemailer for email
- **Analytics**: Google Tag Manager integration

### Key Architecture Patterns

**Internationalization Structure**
- Routes follow `[lng]/page` pattern where `lng` is language code
- Spanish (`es`) is the fallback language, English (`en`) is secondary
- Translation files in `src/i18n/locales/[lang]/` organized by component
- Middleware handles language detection and routing

**Project Management System**
- Projects are categorized by service types (ServiceType enum)
- Each service type has its own constants file (e.g., `animationProjects.ts`)
- Media assets organized in `public/static/images/` by project type and name
- Dynamic routing: `/projects/[projectType]/[project]`

**Component Organization**
- Each component has its own directory with index.ts barrel export
- CSS Modules for component-specific styling (`styles.module.css`)
- Global styles in `src/styles/` with color variables
- Component types defined in `src/types/`

**Email Integration**
- Contact form uses React Hook Form + Nodemailer
- API route at `/api/email/route.ts` handles form submissions

**Asset Management**
- Static images organized by project type in nested folder structure
- Video assets in `public/static/video/`
- Custom fonts loaded via next/font/local (RethinkSans)

### Key Files to Know
- `src/middleware.ts` - Handles language routing and cookies
- `src/constants/` - Project data and service definitions
- `src/i18n/settings.ts` - Internationalization configuration
- `src/types/` - TypeScript type definitions
- Path aliases: `@/*` maps to `src/*`