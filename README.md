# SUBAIR MOHOMED SUHITH – Personal Portfolio & Business Venture Hub

> **Professional Title:** Digital Creator & Entrepreneur  
> **Ventures:** Digitalmod Academy & Printmod Studio  
> **Theme:** Dark Navy, Electric Blue, Purple, Futuristic 3D, Premium Glassmorphism  
> **Languages:** English (EN), Tamil (TA), Sinhala (SI)  
> **Hosting Platform:** Netlify

---

## 🌟 Overview

A production-ready, ultra-modern personal portfolio and business management web platform built for **SUBAIR MOHOMED SUHITH**. Featuring futuristic glassmorphic design, trilingual internationalization, modular business profiles, privacy-respecting analytics, and an integrated admin dashboard secured by mandatory Two-Factor Authentication (WhatsApp OTP & Authenticator TOTP).

---

## 🛠️ Technology Stack

- **Frontend Core:** React 19 + TypeScript + Vite
- **Styling & Design System:** Tailwind CSS + Custom Futuristic Glassmorphism + Glow effects
- **Routing:** React Router v7 (Data Router with SPA Fallback)
- **Icons:** Lucide React
- **3D Graphics:** Three.js
- **Backend & Database:** Supabase (PostgreSQL, Auth, Storage, Row-Level Security, Edge Functions)
- **Hosting & Edge Infrastructure:** Netlify + GitHub Actions CI/CD

---

## 📁 Project Structure

```
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD pipeline verifying Netlify builds
├── public/
│   ├── _redirects              # Netlify SPA rewrite rules (/* /index.html 200)
│   ├── _headers                # Security and caching headers
│   ├── favicon.svg             # Futuristic brand emblem
│   ├── manifest.json           # Progressive Web App (PWA) manifest
│   ├── sw.js                   # Public offline caching Service Worker
│   ├── sitemap.xml             # Search engine XML sitemap
│   └── robots.txt              # Search engine crawling rules (Admin disallowed)
├── src/
│   ├── assets/                 # Brand assets, logos, and profile imagery
│   ├── components/             # Reusable modular UI components
│   │   ├── 3d/                 # Three.js futuristic hero composition
│   │   ├── admin/              # Protected admin layouts, guards, and modals
│   │   ├── layout/             # Navbar, Footer, Layout shell
│   │   ├── seo/                # Dynamic meta tags & JSON-LD schema
│   │   └── ui/                 # Buttons, cards, badges, loaders
│   ├── config/                 # Site identity & navigation configuration
│   ├── context/                # Auth, Content, Theme & Language state providers
│   ├── data/                   # Default portfolio, ventures & blog datasets
│   ├── pages/                  # All 20 public routes & admin manager views
│   │   ├── admin/              # Dashboard, Security 2FA, Media Library, Analytics
│   │   └── ...                 # Public pages (Home, About, Projects, etc.)
│   ├── router/                 # React Router configuration with lazy loading
│   ├── services/               # Supabase DB, Storage, OTP, and Telemetry services
│   ├── translations/           # English, Tamil, and Sinhala dictionaries
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # Client entry point
│   └── index.css               # Tailwind CSS & global design system
├── supabase/
│   ├── functions/              # Deno Edge Functions (send-whatsapp-otp, verify-totp)
│   └── migrations/             # 27-table master PostgreSQL schema with RLS
├── .env.example                # Template for environment variables
├── .gitignore                  # Git safety configuration (Secrets strictly excluded)
├── index.html                  # HTML5 document template
├── netlify.toml                # Netlify edge headers and SPA routing configuration
├── package.json                # Project dependencies and scripts
└── vite.config.ts              # Vite bundler configuration with vendor chunk splitting
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js (v20 or higher recommended)
- npm (v10 or higher)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio

# Install clean dependencies
npm ci
```

### 3. Environment Setup
```bash
cp .env.example .env.local
```
Update `.env.local` with your Supabase credentials when ready.

### 4. Running the Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Production Build & Verification
```bash
# Typecheck and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Netlify Production Deployment

### Method 1: Git Integration (Recommended - Automated CI/CD)
1. Push your repository to **GitHub**:
   ```bash
   git add .
   git commit -m "feat: Production-ready portfolio for Netlify"
   git push origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** → **Import an existing project** → Select **GitHub**.
4. Choose the `my-portfolio` repository.
5. Configure the build settings (automatically detected from `netlify.toml`):
   - **Base directory:** (leave empty / root)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Under **Site configuration** → **Environment variables**, add the required client variables:
   - `VITE_SITE_URL`: `https://your-site-name.netlify.app`
   - `VITE_SUPABASE_URL`: `https://<YOUR-PROJECT-ID>.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `<YOUR-SUPABASE-ANON-KEY>`
   - `VITE_WHATSAPP_NUMBER`: `947XXXXXXXX`
7. Click **Deploy site**. Netlify will build your application, issue an automatic Let's Encrypt SSL certificate, and serve it across its global edge network.

### Method 2: Manual Deploy via Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy directly to production
netlify deploy --prod --dir=dist
```

### Custom Domain Configuration on Netlify
1. Go to **Site configuration** → **Domain management** → **Add custom domain**.
2. Enter your custom domain (e.g., `subairsuhith.com`).
3. Follow the DNS instructions provided by Netlify:
   - **Apex domain:** Point an `A` record to `75.2.60.5` (or Netlify DNS).
   - **WWW subdomain:** Point a `CNAME` record to your Netlify site domain (`your-site-name.netlify.app`).
4. Netlify will automatically provision and renew your free SSL/TLS certificate.

---

## 🛡️ Security & Authentication Architecture

- **Mandatory Two-Factor Authentication (2FA):** Access to the Admin Panel (`/admin/*`) strictly requires passing a second factor. Password-only bypasses are impossible.
  1. **Primary MFA:** 6-digit WhatsApp OTP delivered via Meta WhatsApp Business Cloud API.
  2. **Backup Method A:** RFC 6238 Authenticator App (Google Authenticator / Microsoft Authenticator).
  3. **Backup Method B:** Single-use Emergency Recovery Codes (hashed in PostgreSQL).
- **Server-Side Authorization:** Admin access is verified server-side against Supabase Auth sessions and PostgreSQL `profiles` and `user_roles` tables. Client-side `localStorage` alone is never trusted for authorization.
- **Row Level Security (RLS):** All 27 database tables enforce granular policies preventing unauthorized reads, writes, and media tampering.
- **Security Headers:** Strict Transport Security (HSTS), Content-Security-Policy (CSP), X-Frame-Options (SAMEORIGIN), and X-Content-Type-Options (nosniff) enforced via `netlify.toml`.

---

## 📄 License
Private & Proprietary © 2026 SUBAIR MOHAMED SUHITH. All Rights Reserved.
