# Research: Categories Page

## Decisions

- **Top 3 definition**: Bestsellers (highest sales / popularity).
- **Touch interaction**: Tap card toggles preview; navigation is a separate action.
- **Category list**: Fixed curated list; categories with 0 books are hidden.
- **Navigation destination**: Main Books listing with category filter applied.

## Rationale

- Keeps UX consistent across devices (hover vs touch).
- Avoids adding new ranking logic beyond an existing popularity/bestseller signal.
- Ensures curated merchandising intent while preventing empty categories from cluttering the page.

## Alternatives considered

- Data-driven categories only: rejected because it may omit intended categories.
- Always-visible top 3 books: rejected due to visual clutter and reduced scanability.
- Disabled 0-book categories: rejected in favor of hiding for a cleaner grid.
