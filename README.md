# GoalConnect Monorepo

Course-compliant **component-based monorepo** using npm workspaces.

## Structure

- `packages/ui-components` — reusable ShadCN-style UI primitives
- `packages/utils` — shared utilities
- `packages/feature-x` — feature system 1 (composed React modules)
- `packages/feature-y` — feature system 2 (composed React modules)
- `systems/*` — **Next.js apps** per member (assembly only by importing packages)

## Setup

1. `npm install`
2. `npm run build`

## Run a system (Next.js)

Run one system app from the monorepo root:

- `npm run dev -w member-a`
- `npm run dev -w member-b`
- `npm run dev -w member-c`
- `npm run dev -w member-d`
- `npm run dev -w member-e`

## Build

Build all packages and systems:

- `npm run build`

## Notes

- `systems/*` should **not** re-implement shared UI or utilities; they should only assemble imports.
