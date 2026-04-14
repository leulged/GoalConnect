# @goalconnect/ui-components

Reusable ShadCN-style UI primitives for the monorepo.

## Install (workspace)

This package is consumed via npm workspaces from `systems/*` and `packages/feature-*`.

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@goalconnect/ui-components';

export function Example() {
  return (
    <Card>
      <CardHeader><CardTitle>Hello</CardTitle></CardHeader>
      <CardContent><Button>Click</Button></CardContent>
    </Card>
  );
}
```

## Components

- `Button`, `Card`, `Input`, `Label`, `Textarea`, `Badge`, `Dialog`, `Table`
