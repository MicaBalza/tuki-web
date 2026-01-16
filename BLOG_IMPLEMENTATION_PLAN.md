# Blog Implementation Plan

## Overview

Implementation of a complete blog view with featured post hero, latest posts section, and a grid of all blog posts. All content will use placeholders.

## Analysis from Design

Based on the provided image, the blog page consists of:

### 1. **Hero Section (Featured Post)**

- **Background**: Purple (`--purple: #6a68d4`)
- **Layout**: Two-column layout
  - **Left Column**:
    - Date label (e.g., "Diciembre / 01 / 2025")
    - Large title
    - Description text (2-3 paragraphs)
    - Scroll down indicator (chevron icon)
  - **Right Column**:
    - Placeholder image/video thumbnail

### 2. **"Últimos Posts" (Latest Posts) Section**

- **Background**: White
- **Title**: "Últimos Posts" heading
- **Layout**: Asymmetric two-column grid
  - **Left**: One large featured post card (larger image)
  - **Right**: Two smaller post cards stacked vertically
- **Card Components**:
  - Placeholder image
  - Post title
  - Date label

### 3. **"Todos Los Posts" (All Posts) Section**

- **Background**: White
- **Title**: "Todos Los Posts" heading
- **Layout**: 3-column grid (responsive)
- **Card Components** (9 posts visible):
  - Placeholder image
  - Post title ("Otro Título de Blog")
  - Date label ("Diciembre / 01 / 2025")

## File Structure

```
src/
  app/
    [lng]/
      blog/
        page.tsx                    # Main blog page (UPDATE)
        page.module.css             # Blog page styles (CREATE)
  components/
    Blog/                           # New folder
      BlogHero/
        BlogHero.tsx                # Featured post hero section
        BlogHero.module.css
      BlogCard/
        BlogCard.tsx                # Reusable blog card component
        BlogCard.module.css
      LatestPosts/
        LatestPosts.tsx             # Latest posts section
        LatestPosts.module.css
      AllPosts/
        AllPosts.tsx                # All posts grid section
        AllPosts.module.css
  types/
    blog.ts                         # Blog post type definitions (CREATE)
```

## Data Structure

### Blog Post Type

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string; // ISO format
  thumbnail: string; // Image URL or path
  category?: string;
  author?: string;
  featured?: boolean;
}
```

## Components Breakdown

### 1. BlogHero Component

**Props**: `{ post: BlogPost }`

**Features**:

- Full-width purple background section
- Responsive two-column layout
- Left side: Date, title, excerpt
- Right side: Thumbnail image placeholder
- Scroll indicator at bottom center
- Mobile: Stack vertically

### 2. BlogCard Component

**Props**: `{ post: BlogPost, size?: 'small' | 'large' }`

**Features**:

- Reusable card for displaying blog posts
- Image placeholder with aspect ratio
- Post title (clickable)
- Date display
- Two size variants for different layouts
- Hover effects

### 3. LatestPosts Component

**Props**: `{ posts: BlogPost[] }` (expects 3 posts)

**Features**:

- Section title "Últimos Posts"
- Grid layout: 1 large + 2 small cards
- Responsive: stacks on mobile

### 4. AllPosts Component

**Props**: `{ posts: BlogPost[] }`

**Features**:

- Section title "Todos Los Posts"
- 3-column responsive grid
- Uniform card sizes
- Responsive: 2 columns on tablet, 1 on mobile

### 5. Main Blog Page

**File**: `src/app/[lng]/blog/page.tsx`

**Features**:

- Fetch/generate placeholder blog posts (12-15 posts)
- Render BlogHero with featured post
- Render LatestPosts with 3 recent posts
- Render AllPosts with all posts
- Include ContactUs component at bottom
- Proper PageContainer usage
- SEO metadata

## Styling Approach

### Colors

- Purple background: `var(--purple)` (#6a68d4)
- White text on purple sections
- Black/dark text on white sections
- Date labels: `var(--light-purple)` or purple with opacity

### Typography

- Hero title: Large, bold (similar to other hero sections)
- Section titles: Medium-large, consistent with site
- Card titles: Medium, readable
- Dates: Small, secondary styling

### Spacing

- Consistent padding/margins with existing components
- Proper gaps in grid layouts
- Section spacing similar to homepage

### Responsive Breakpoints

- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

## Placeholder Data

### Real Blog Posts (Initial Content)

Two blog posts to start with:

1. **Post 1**: Vídeos institucionales y corporativos

   - Slug: `videos-institucionales-corporativos-empresa`
   - Topic: Institutional and corporate videos
   - Date: Recent (December 2025 - January 2026)
   - Image: Located in `public/static/images/blog/`

2. **Post 2**: Vídeos explicativos y de lanzamiento
   - Slug: `videos-explicativos-lanzamiento-producto`
   - Topic: Explainer and product launch videos
   - Date: Recent (December 2025 - January 2026)
   - Image: Located in `public/static/images/blog/`

### Data Structure

- Create constants file: `src/constants/blogPosts.ts`
- Similar pattern to existing constants (animationProjects.ts, brandingProjects.ts, etc.)
- Support for both ES and EN content
- Each blog post includes:
  - id, slug, title, excerpt, content (full HTML/markdown)
  - date, thumbnail path
  - SEO metadata (meta description, AI description)
  - featured flag

### Placeholder Images

Images stored in `public/static/images/blog/` directory

## Implementation Steps

1. **Create Type Definitions** (`types/blog.ts`) ✅

   - Define BlogPost interface
   - Export related types

2. **Create BlogCard Component** ✅

   - Implement base card structure
   - Add size variants
   - Style with module CSS (no border-radius)
   - Add hover effects

3. **Create BlogHero Component** ✅

   - Implement two-column layout
   - Style with purple background
   - Add scroll indicator below text column (left side)
   - Scroll indicator clicks to navigate to Latest Posts section
   - Make responsive
   - No rounded borders

4. **Create LatestPosts Component** ✅

   - Implement asymmetric grid layout
   - Use BlogCard component
   - Add section title
   - Make responsive

5. **Create AllPosts Component** ✅

   - Implement 3-column grid
   - Use BlogCard component
   - Add section title
   - Make responsive

6. **Create Blog Post Constants** (`constants/blogPosts.ts`) ✅

   - Create constants file similar to animationProjects.ts pattern
   - Add both ES and EN versions of blog posts
   - Include helper functions (getBlogPosts, getFeaturedPost, getBlogPostBySlug)
   - Two initial blog posts with full content

7. **Update Blog Page** (`app/[lng]/blog/page.tsx`) ✅

   - Import blog post data from constants
   - Display logic:
     - Hero: Last/most recent post (index 0)
     - Latest Posts: Next 3 posts (indices 1-3)
     - All Posts: Remaining posts (index 4+)
   - Support both ES and EN languages
   - Compose all components
   - Conditionally render sections based on available posts

8. **Add Navigation Links** ✅

   - Added "Blog" to navbar constants
   - Purple color assigned
   - Works in both desktop and mobile menus
   - Routes localized for ES and EN

9. **Internationalization** ✅
   - Added blog.json translations for ES and EN
   - Created separate blog post arrays for each language
   - Helper functions support language parameter

## Internationalization (i18n)

### Required Translations

- "Últimos Posts" / "Latest Posts"
- "Todos Los Posts" / "All Posts"
- Date formatting (Spanish vs English)
- Placeholder blog titles and content in both languages

### Implementation

- Use existing i18n setup from the project
- Add blog-related translations to locale files
- Format dates according to locale

## Accessibility Considerations

- Semantic HTML (article, section, header)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation for cards
- Focus states on interactive elements
- ARIA labels where needed

## Individual Blog Post Pages

### Implementation Complete ✅

Created dynamic route structure for individual blog post pages:

**File Structure**:

- `src/app/[lng]/blog/[slug]/page.tsx` - Dynamic blog post page
- `src/app/[lng]/blog/[slug]/page.module.css` - Post page styles

**Features**:

- Dynamic routing by slug
- Date display matching blog landing page format
- Rich HTML content rendering (h1-h3, p, ol, ul, blockquote)
- Styled numbered lists with purple circle numbers
- FAQ section with nude background blockquotes
- Responsive design (desktop, tablet, mobile)
- 404 handling for non-existent posts
- Internationalization support (ES/EN)
- Maximum content width: 900px
- Clean typography and spacing

**Content Structure** (from constants):

- HTML-formatted content with semantic tags
- Multiple heading levels for hierarchy
- Ordered lists for benefits/steps
- Unordered lists for quick tips
- Blockquotes for FAQ sections
- Strong tags for emphasis

**Route Pattern**:

- ES: `/es/blog/videos-institucionales-corporativos-empresa`
- EN: `/en/blog/institutional-corporate-videos-company`

## Future Enhancements

- Pagination for AllPosts
- Category filtering
- Search functionality
- Dynamic data fetching from CMS/API
- Loading states
- Error handling
- Social sharing buttons
- Read time estimation
- Related posts section at bottom of individual posts
- Back to blog button
- Next/Previous post navigation

## Additional Requirements

### Navigation Integration

- Add "Blog" link to navbar (both desktop and mobile versions)
- Position: After "Contact Us" link
- Color: Nude (`--nude`)
- Must work for both ES and EN routes
- Update navbar constants and translations

### Design Specifications

- No rounded borders on any elements (border-radius: 0)
- Sharp corners for all images, cards, and containers

## Questions/Decisions Needed

1. **Placeholder Images**: Which approach? (Gray divs, external service, or SVG)
2. **Blog Post Count**: How many placeholder posts? (Suggesting 12-15)
3. **Scroll Indicator**: Interactive or decorative?
4. **Card Hover Effects**: Simple scale or more elaborate?
5. **Individual Post Pages**: Should we create route structure now or later?
6. **Date Format**: "Diciembre / 01 / 2025" or "01/12/2025" or other?
7. **Featured Post Selection**: Always first post or specific criteria?

## Estimated Complexity

- **Components**: Medium (reusable patterns)
- **Styling**: Medium (grid layouts, responsive design)
- **Data Structure**: Low (simple placeholders)
- **Overall**: Medium complexity, ~2-3 hours implementation

---

**Next Steps**: Review this plan, provide feedback on decisions needed, then proceed with implementation.
