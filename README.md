# GoalConnect Monorepo

Course-compliant **component-based monorepo** using npm workspaces.

## Structure

- `packages/ui-components` — reusable ShadCN-style UI primitives
- `packages/utils` — shared utilities
- `packages/feature-x` — feature system 1 (composed React modules)
- `packages/feature-y` — feature system 2 (composed React modules)
- `systems/goalconnect-web` — **Next.js app** that assembles packages (assembly only)

## Setup

1. `npm install`
2. `npm run build`

## Run the web app (Next.js)

From the monorepo root:

- `npm run dev -w goalconnect-web`

## Build

Build all packages and systems:

- `npm run build`

## Notes

- `systems/*` should **not** re-implement shared UI or utilities; they should only assemble imports.
