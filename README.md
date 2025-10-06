This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Canonical URLs & Hreflang Implementation

This project implements proper canonical URLs and hreflang tags for multilingual SEO following Google's 2024 best practices.

### Implementation Details

- **Self-referencing canonical tags**: Each language version points to itself as canonical
- **Hreflang alternates**: Proper language targeting with Spanish as x-default
- **Base URL**: `https://www.tukistudio.tv`
- **Languages**: Spanish (es) and English (en)

### Files Modified

1. **Utility**: `/src/utils/canonical.ts` - Core canonical URL generation
2. **Layout**: `/src/app/[lng]/layout.tsx` - Global metadata
3. **Pages with canonical metadata**:
   - Homepage: `/src/app/[lng]/page.tsx`
   - Services: `/src/app/[lng]/services/page.tsx`
   - Contact: `/src/app/[lng]/contact-us/page.tsx`
   - About: `/src/app/[lng]/us/page.tsx`
   - Pharmaceutical Services: `/src/app/[lng]/pharmaceutical-services/page.tsx`
   - Project pages: `/src/app/[lng]/services/[serviceType]/[project]/page.tsx`

### How It Works

Each page generates:
```html
<!-- Self-referencing canonical -->
<link rel="canonical" href="https://www.tukistudio.tv/servicios" />

<!-- Hreflang alternates -->
<link rel="alternate" hreflang="es" href="https://www.tukistudio.tv/servicios" />
<link rel="alternate" hreflang="en" href="https://www.tukistudio.tv/en/services" />
<link rel="alternate" hreflang="x-default" href="https://www.tukistudio.tv/servicios" />
```

### Removal Plan

If you need to remove the canonical URL implementation:

#### 1. Remove Canonical Utility
```bash
rm src/utils/canonical.ts
```

#### 2. Update Layout (Required)
File: `/src/app/[lng]/layout.tsx`
- Remove import: `import { generateCanonicalMetadata } from "@/utils/canonical";`
- Convert `generateMetadata` back to static `metadata` export:
```typescript
export const metadata: Metadata = {
  title: "Tuki Studio",
  description: "Le damos vida a tus ideas.",
  verification: {
    google: "google",
  },
};
```

#### 3. Update Pages (Optional - removes page-specific SEO)
For each page, remove:
- Import: `import { generateCanonicalMetadata } from "@/utils/canonical";`
- Import: `import type { Metadata } from "next";`
- The entire `generateMetadata` function

Pages to update:
- `/src/app/[lng]/page.tsx`
- `/src/app/[lng]/services/page.tsx`
- `/src/app/[lng]/contact-us/page.tsx`
- `/src/app/[lng]/us/page.tsx`
- `/src/app/[lng]/pharmaceutical-services/page.tsx`
- `/src/app/[lng]/services/[serviceType]/[project]/page.tsx`

#### 4. Verification
After removal, check that:
- Build completes successfully: `npm run build`
- No canonical or hreflang tags appear in page source
- TypeScript errors are resolved

### SEO Impact Warning

Removing canonical URLs will:
- ❌ Remove duplicate content protection
- ❌ Remove international targeting signals
- ❌ Potentially harm search engine rankings
- ❌ Remove proper language/region targeting

Only remove if you have an alternative SEO strategy in place.
