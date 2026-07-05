# LILLA SOLAR Appliances Inv. Ltd. — Website

Marketing site for LILLA SOLAR, built with Next.js (App Router), TypeScript, Tailwind CSS,
Framer Motion, Lucide React icons and Swiper.js. Frontend-only — no backend, auth, or database.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

All copy lives in plain data files so non-developers can update it without touching components:

- `data/products.ts` — product catalogue cards
- `data/services.ts` — services list
- `data/whyChooseUs.ts` — "Why Choose Us" feature cards
- `data/process.ts` — installation timeline steps
- `data/testimonials.ts` — customer testimonials
- `data/faqs.ts` — FAQ accordion
- `data/gallery.ts` — gallery grid items
- `data/brands.ts` — trusted brand names
- `lib/site.ts` — company name, tagline, phone/WhatsApp/email/address, nav links

## Real photography

Every image is currently a gradient placeholder (`components/ui/GradientPlaceholder.tsx`) so the
site runs with zero external image dependencies. Swap these for real photos by replacing the
placeholder with a Next.js `<Image>` component once you have installation photos to use.

## WhatsApp number

Update `whatsappNumber` in `lib/site.ts` (international format, digits only, no `+`) — it feeds
every "Request Quote", "Get a Quote" and the floating chat button across the site.

## Build for production

```bash
npm run build
npm run start
```
