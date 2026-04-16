# GoalConnect web (`goalconnect-web`)

Next.js app that **assembles** shared packages only (no duplicate UI logic here):

- `@goalconnect/ui-components`
- `@goalconnect/utils`
- `@goalconnect/feature-x` — player roster + profile
- `@goalconnect/feature-y` — video library + match history

## Routes

- `/` — overview and links
- `/feature-x-demo`
- `/feature-y-demo`

## Run

From monorepo root:

```bash
npm run dev -w goalconnect-web
```

Build:

```bash
npm run build -w goalconnect-web
```
