# Contracts: Categories Page

This document describes the data and navigation contracts needed for the Categories page.

## Navigation Contract

- **From**: Categories page
- **To**: Main Books listing
- **Behavior**: Navigating via a category card applies a category filter corresponding to the selected category.

## Data Contracts

### Curated categories

The Categories page uses a curated list of categories.

Example shape:

```json
{
  "id": "science-tech",
  "name": "Science & Tech",
  "icon": "🔬",
  "theme": "teal",
  "bookCount": 12
}
```

Rules:

- Categories with `bookCount` of `0` are not shown.

### Top 3 books preview (per category)

Example shape:

```json
{
  "categoryId": "science-tech",
  "topBooks": [
    {"id": "b1", "title": "Book Title 1"},
    {"id": "b2", "title": "Book Title 2"},
    {"id": "b3", "title": "Book Title 3"}
  ]
}
```

Rules:

- `topBooks` are the bestsellers for that category (highest sales/popularity).
- If fewer than 3 books exist, return only the available books.

## Interaction Contract

- **Desktop**: Hover reveals the preview for that category card.
- **Touch devices**: Tap toggles the preview; navigation remains a separate action.
