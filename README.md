# Sagar Kumar — Portfolio (Next.js)

Next.js 14 App Router, TypeScript (strict), Tailwind CSS, GSAP + ScrollTrigger, Three.js.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content
- `data/content.ts` — jobs, projects, skills (typed). Per project you can set `img`, `live`, `code`, `role`; dummy image and links are used until you do. Put real screenshots in `public/images/` and use `img:"/images/zavigo.png"`.
- `tailwind.config.ts` — colours and fonts; `app/globals.css` — Tailwind layers plus the cinematic hero/marquee/pinned-track styles.
- `public/images/portrait.png` — particle source (masked grayscale portrait). Replace to change the face.

## Structure
- `app/` layout, page, metadata, sitemap, robots
- `components/sections/` Hero, Projects (case-study dialog)
- `components/three/HeroScene.tsx` particle portrait + hero scroll timeline (Three.js lazy-loaded, full cleanup)
- `components/motion/Motion.tsx` scroll animations below the hero
- `components/ui/Split.tsx` word/letter split helpers

## Deploy
Set `NEXT_PUBLIC_SITE_URL` to your production domain (used for canonical, sitemap, robots), deploy to Vercel, then submit `/sitemap.xml` in Google Search Console.
