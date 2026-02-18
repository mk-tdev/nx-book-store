---
description: "Tasks for Categories Page implementation"
---

# Tasks: Categories Page

**Input**: Design documents from `/specs/001-categories-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Prohibited by constitution. Use manual validation tasks/steps instead.

**Organization**: Tasks are grouped by user story to enable independent implementation and manual validation of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js app**: `app/` (routes + shared UI)
- **Reusable dumb UI**: `app/components/`
- **Mock data**: `app/data/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the baseline structure and shared utilities for the feature

- [x] T001 Create route folder `app/categories/`
- [x] T002 [P] Create mock data module `app/data/mockCategories.ts`
- [x] T003 [P] Create shared breadcrumb component `app/components/Breadcrumbs.tsx`
- [x] T004 [P] Create shared category card component `app/components/CategoryCard.tsx`
- [x] T005 [P] Create shared grid component `app/components/CategoryGrid.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared behavior and data shaping required before user story work can be completed

**⚠️ CRITICAL**: No user story work can be considered complete until this phase is complete

- [x] T006 Implement curated category list + theme tokens in `app/data/mockCategories.ts`
- [x] T007 Implement logic to hide categories with `bookCount === 0` in `app/components/CategoryGrid.tsx`
- [x] T008 Implement a deterministic bestsellers selection helper (top 3 per category) in `app/data/mockCategories.ts`
- [x] T009 Define a minimal data shape for preview items (id + title, optional extra fields) in `app/data/mockCategories.ts`
- [x] T010 Add manual validation notes to `specs/001-categories-page/quickstart.md` if any steps changed during implementation

**Checkpoint**: Foundation ready - user story implementation can now proceed

---

## Phase 3: User Story 1 - Browse categories at a glance (Priority: P1) MVP

**Goal**: A user can visit `/categories` and see a hero + breadcrumb and a grid of curated category cards with counts and icons.

**Manual Validation**: Load `/categories` and confirm hero, breadcrumb, and readable card grid with name/icon/count.

### Implementation for User Story 1

- [x] T011 [US1] Implement Categories page shell in `app/categories/page.tsx` (hero section + container layout)
- [x] T012 [US1] Wire breadcrumb into `app/categories/page.tsx` using `app/components/Breadcrumbs.tsx`
- [x] T013 [US1] Render category grid in `app/categories/page.tsx` using `app/components/CategoryGrid.tsx`
- [x] T014 [P] [US1] Add empty/error UI states for missing category data in `app/categories/page.tsx`
- [x] T015 [US1] Ensure each card renders name/icon/count in `app/components/CategoryCard.tsx`
- [x] T016 [US1] Apply distinct visual theme per category in `app/components/CategoryCard.tsx`

**Checkpoint**: User Story 1 is fully functional and manually verifiable

---

## Phase 4: User Story 2 - Preview top books from category cards (Priority: P2)

**Goal**: User can reveal up to 3 bestselling books per category directly from the card.

**Manual Validation**:

- Desktop: hover a card reveals preview
- Touch: tap toggles preview; navigation remains a separate action

### Implementation for User Story 2

- [x] T017 [US2] Add preview container UI to `app/components/CategoryCard.tsx` (hidden by default)
- [x] T018 [US2] Implement desktop hover behavior in `app/components/CategoryCard.tsx`
- [x] T019 [US2] Implement touch tap-to-toggle behavior in `app/components/CategoryCard.tsx`
- [x] T020 [US2] Ensure preview shows up to 3 bestseller books per category in `app/components/CategoryCard.tsx`
- [x] T021 [US2] Ensure categories with fewer than 3 books show only available books in `app/components/CategoryCard.tsx`
- [x] T022 [US2] Ensure preview does not break layout on small screens in `app/components/CategoryCard.tsx`

**Checkpoint**: User Stories 1 and 2 are both manually verifiable

---

## Phase 5: User Story 3 - Navigate into a category (Priority: P3)

**Goal**: Selecting a category navigates to the main Books listing with that category filter applied.

**Manual Validation**: Click a category card and confirm you land on the Books listing with the selected category filter applied.

### Implementation for User Story 3

- [x] T023 [US3] Determine existing Books listing route and how category filter is expressed (URL param or query) by inspecting `app/` routes
- [x] T024 [US3] Implement navigation action in `app/components/CategoryCard.tsx` that routes to Books listing with category filter applied
- [x] T025 [US3] Ensure navigation is a separate, clear action on touch devices (not the same tap as preview toggle) in `app/components/CategoryCard.tsx`
- [x] T026 [US3] Ensure navigation is not available for hidden 0-book categories (no card rendered) via `app/components/CategoryGrid.tsx`

**Checkpoint**: All user stories are independently functional and manually verifiable

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Cleanup and UX refinement across all stories

- [x] T027 [P] Run through manual validation checklist in `specs/001-categories-page/quickstart.md` and update if needed
- [x] T028 Tighten responsive spacing/typography for hero + grid in `app/categories/page.tsx`
- [x] T029 Add basic accessibility improvements (semantic HTML, focus styles for navigation action) in `app/components/Breadcrumbs.tsx` and `app/components/CategoryCard.tsx`
- [x] T030 Code cleanup and refactoring (keep components dumb/reusable) across `app/components/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: All depend on Foundational completion
- **Polish (Final Phase)**: Depends on completing desired user stories

### User Story Dependencies

- **US1 (P1)**: No dependencies on other stories
- **US2 (P2)**: Depends on US1 components for card rendering
- **US3 (P3)**: Depends on US1/US2 card component for navigation affordance

### Within Each User Story

- Manual validation steps MUST be defined before implementation
- Shared data shaping before UI wiring
- Core UI before responsive/accessibility polish

### Parallel Opportunities

- T002–T005 can run in parallel
- Within US1, some UI state work can run in parallel if touching different files

---

## Parallel Example: User Story 1

```bash
Task: "Create shared breadcrumb component app/components/Breadcrumbs.tsx"
Task: "Create shared category card component app/components/CategoryCard.tsx"
Task: "Create shared grid component app/components/CategoryGrid.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. STOP and VALIDATE: Manually validate User Story 1

### Incremental Delivery

1. Add US1 → manual validate
2. Add US2 → manual validate
3. Add US3 → manual validate

## Notes

- Each task includes a file path and is designed to be executed independently.
- No testing tasks are included (prohibited by constitution).
