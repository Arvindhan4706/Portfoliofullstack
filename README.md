# Arvindhan SM — Freelance Full-Stack Web Developer

Personal portfolio website showcasing projects, services and capabilities for potential clients.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Database:** Supabase (PostgreSQL)
- **Validation:** Zod
- **Deployment:** Vercel

## Features

- Responsive design (mobile-first)
- Dark/light mode (system preference)
- Contact form with Zod validation and rate limiting
- Project showcase with status badges
- SEO optimized (metadata, sitemap, robots.txt, structured data)
- Accessibility-focused (focus states, ARIA labels, reduced motion)
- Animated value strip marquee
- Mobile navigation with keyboard support

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── globals.css              # Tailwind theme + custom CSS
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation with mobile menu
│   │   └── Footer.tsx           # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section
│   │   ├── FeaturedWork.tsx     # Project listing
│   │   ├── Services.tsx         # Services grid
│   │   ├── Process.tsx          # Process timeline
│   │   ├── WhyWorkWithMe.tsx    # Value proposition
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form
│   │   └── ValueStrip.tsx       # Animated ticker
│   └── ui/
│       └── ProjectCard.tsx      # Project card component
└── data/
    ├── projects.ts              # Project data + types
    └── site.ts                  # Site configuration
```

## Environment Variables

Create a `.env.local` file:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Contact API

The `/api/contact` endpoint:

- Validates input with Zod
- Includes honeypot spam protection
- Returns field-specific validation errors
- Stores enquiries in Supabase `messages` table

## License

Private — Arvindhan SM
