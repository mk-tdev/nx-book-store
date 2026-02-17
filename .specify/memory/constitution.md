# book-store Constitution

<!--
Sync Impact Report
- Version change: N/A → 1.0.0
- Modified principles: Template placeholders → concrete principles
- Added sections: Technology & Dependencies, Workflow & Quality Gates
- Removed sections: N/A
- Templates requiring updates:
  - → .specify/templates/plan-template.md
  - → .specify/templates/spec-template.md
  - → .specify/templates/tasks-template.md
  - → .specify/templates/constitution-template.md
- Deferred items:
  - TODO(RATIFICATION_DATE): Original adoption date unknown.
-->

## Core Principles

### I. Clean Code (Non-negotiable)

Code MUST be readable, small, and intention-revealing.

- Prefer simple, explicit logic over cleverness.
- Keep components/functions short with single responsibilities.
- Avoid premature abstractions; refactor only when repetition is real.
- Enforce consistent naming and formatting via existing linting.

### II. Simple UX (Non-negotiable)

User-facing flows MUST be obvious and low-friction.

- Prefer fewer screens, fewer steps, and clear calls to action.
- Default UI states MUST be useful (sensible defaults, clear empty states).
- Avoid power-user controls unless explicitly required.

### III. Absolutely No Testing (SUPERCEDES ALL OTHER GUIDANCE)

No unit tests, integration tests, contract tests, or end-to-end tests MUST be
created, maintained, or required.

- Do not add any test framework dependencies or test scripts.
- Do not create `tests/` directories or `*.test.*` / `*.spec.*` files.
- Validation MUST be manual and documented as a short checklist in the feature
  docs (e.g., quick manual steps to verify behavior).

### IV. Responsive Design (Non-negotiable)

The UI MUST work well on mobile, tablet, and desktop.

- Use responsive layouts by default (Tailwind breakpoints).
- Avoid fixed widths/heights unless required for a component.
- Accessibility basics MUST be respected (semantic HTML, focus states).

### V. Minimal Dependencies (Non-negotiable)

Add dependencies ONLY when the value is clear and cannot be achieved cleanly
with existing platform/framework capabilities.

- Prefer built-in Next.js/React features and straightforward utilities.
- Each new dependency MUST be justified in the PR description.
- Prefer smaller, well-maintained libraries; avoid overlapping tools.

## Technology & Dependencies

- The project MUST use Next.js, React, and Tailwind as currently declared in
  `package.json`. Do not change these versions unless explicitly directed.
- Current required versions (source of truth: `package.json`):
  - `next`: 16.1.6
  - `react`: 19.2.3
  - `react-dom`: 19.2.3
  - `tailwindcss`: ^4
- Keep configuration and build tooling minimal; avoid adding alternative UI
  frameworks or styling systems.

## Workflow & Quality Gates

- PRs MUST demonstrate:
  - Compliance with the Core Principles (especially no-testing).
  - Clean, readable code with minimal diff and minimal new dependencies.
  - Manual validation steps in the PR description or feature docs.
- Linting MUST remain enabled (existing `eslint` workflow).
- If a change adds complexity, it MUST include a simpler alternative and why
  it was rejected.

## Governance

<!--
Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan
-->

This constitution is authoritative and supersedes all other project guidance.

- Amendments MUST update this file and bump the version using semantic
  versioning.
- All changes MUST be reviewed against the Core Principles.
- If any document or template conflicts with the "Absolutely No Testing" rule,
  that rule wins and the conflicting guidance MUST be updated.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Original adoption date unknown. | **Last Amended**: 2026-02-17

<!--
Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16
-->
