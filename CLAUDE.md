# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nouns DAO documentation site built with Next.js 15 and Nextra 4. It uses the Nextra docs theme and includes Pagefind for search functionality.

## Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build the application (includes Pagefind search index generation)
- `pnpm start` - Start production server

### Package Manager
This project uses `pnpm` as the package manager, not `npm` or `yarn`.

## Architecture

### Core Framework
- **Next.js 15** with App Router
- **Nextra 4** for documentation site generation
- **nextra-theme-docs** for the documentation theme

### File Structure
- `app/layout.tsx` - Root layout with Nextra theme configuration
- `app/[[...mdxPath]]/page.tsx` - Dynamic MDX page handler using Nextra's importPage
- `content/` - MDX documentation files (content/index.mdx is the homepage)
- `mdx-components.js` - MDX component configuration merging theme components
- `public/images/` - Static assets including logo and icon
- `public/_pagefind/` - Generated search index (created during build)

### Key Features
- **Pagefind Search**: Automatically generates search index during build via postbuild script
- **Dynamic MDX Pages**: Uses catch-all routing with generateStaticParams for MDX files
- **Lucide Icons**: Icon library for UI components
- **Theme Configuration**: Custom navbar with logo, footer with copyright, and banner

### MDX Configuration
- Uses Nextra's built-in MDX handling with theme components
- Pages are dynamically imported and rendered with metadata support
- TOC (Table of Contents) generation is handled automatically

### Build Process
1. `next build` generates the Next.js application
2. `pagefind --site .next/server/app --output-path public/_pagefind` creates search index

### Repository Context
- Part of the Nouns DAO monorepo: https://github.com/nounsDAO/nouns-monorepo/tree/master/packages/nouns-docs
- Licensed under MIT