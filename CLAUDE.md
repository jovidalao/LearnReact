# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a learning repository focused on full-stack development with React, Next.js, and React Native. It contains multiple project implementations that demonstrate progressive skill development, from basic React applications to complex full-stack systems.

## Project Structure

The repository contains several independent projects, each in its own directory:

- **calculator-app**: React + Vite application with basic state management
- **e-commerce-platform**: TypeScript React app with context API and routing
- **personal-portfolio**: Next.js application with Tailwind CSS
- **task-management-system**: Full-stack Next.js app with Prisma, NextAuth, and database
- **todo-app**: React + Vite app with Tailwind CSS
- **weather-dashboard**: React + Vite app with external API integration

## Common Development Commands

### React/Vite Projects (calculator-app, todo-app, weather-dashboard)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### TypeScript React Projects (e-commerce-platform)
```bash
npm run dev        # Start development server
npm run build      # TypeScript compile + Vite build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Next.js Projects (personal-portfolio, task-management-system)
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run Next.js linting
```

### Task Management System (Database Operations)
```bash
npx prisma db push      # Push schema changes to database
npx prisma studio       # Open Prisma Studio GUI
npx prisma generate     # Generate Prisma client
```

## Architecture Patterns

### React Applications
- **State Management**: Local state with useState/useReducer, Context API for global state
- **Styling**: CSS modules, Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development and building
- **Component Structure**: Functional components with hooks

### Next.js Applications  
- **App Router**: Uses Next.js 13+ app directory structure
- **Authentication**: NextAuth.js with custom providers (task-management-system)
- **Database**: Prisma ORM with SQLite for development
- **Styling**: Tailwind CSS with PostCSS
- **TypeScript**: Full TypeScript support across Next.js projects

### Key Technologies Used
- **Frontend**: React 18+, Next.js 15, TypeScript
- **Styling**: Tailwind CSS, CSS modules
- **State Management**: React Context, local component state
- **Database**: Prisma + SQLite (task-management-system)
- **Authentication**: NextAuth.js (task-management-system)
- **Build Tools**: Vite, Next.js built-in bundling

## Working with Projects

Each project is self-contained with its own dependencies. Navigate to the specific project directory before running commands:

```bash
cd calculator-app && npm run dev
cd task-management-system && npm run dev
```

The task-management-system requires database setup:
```bash
cd task-management-system
npx prisma db push
npm run dev
```