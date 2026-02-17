# Data Model: Categories Page

## Entities

### Category

- **id**: string (stable identifier; slug-like)
- **name**: string (display name)
- **icon**: string (emoji)
- **theme**: string (theme token used to select a card background style)
- **bookCount**: number

**Rules**:

- Category list is curated.
- Categories with `bookCount = 0` are not shown on the Categories page.

### Book

- **id**: string
- **title**: string
- **author**: string (optional, if available)
- **coverUrl**: string (optional, if available)
- **price**: string/number (optional, if available)

## Relationships

- A Category has many Books.
- A Book belongs to one or more Categories (as supported by the existing store data).

## Derived Views

- **TopBooksByCategory**: For each category, up to 3 books ordered by bestseller signal (sales/popularity).
