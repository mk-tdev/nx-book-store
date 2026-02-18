# Quickstart: Categories Page

## Goal

Add a Categories page with a hero + breadcrumb and a grid of curated category cards.

## Run

```bash
npm run dev
```

Open:

- `http://localhost:3000/categories`
- `http://localhost:3000/books`

## Manual Validation Checklist

- Page loads at `/categories`.
- Hero section and breadcrumb are visible.
- Grid shows curated categories.
- Each visible card shows:
  - Category name
  - Icon/emoji
  - Book count badge
- Categories with `0` books are not shown.
- Desktop: hover reveals up to 3 top (bestselling) books.
- Touch: tap toggles preview; a separate action navigates to Books listing.
- Selecting a category navigates to the Books listing with the category filter applied (e.g. `/books?category=fiction`).
- Layout remains readable on mobile + desktop.
