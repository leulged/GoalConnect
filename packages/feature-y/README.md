# @goalconnect/feature-y

Feature system 2. Demonstrates composition of `@goalconnect/ui-components` + `@goalconnect/utils`.

## Features included (2)

1. **VideoLibrary**: video grid with status badges.
2. **MatchHistory**: match list with result badge + date formatting.

## Usage

```tsx
import { VideoLibrary, MatchHistory } from '@goalconnect/feature-y';

export function Demo() {
  return (
    <>
      <VideoLibrary videos={[{ id: 'v1', title: 'Highlight 1', status: 'analyzed', views: 120 }]} />
      <MatchHistory matches={[{ id: 'm1', opponent: 'Unity FC', matchDate: Date.now(), result: 'W' }]} />
    </>
  );
}
```
