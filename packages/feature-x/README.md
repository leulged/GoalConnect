# @goalconnect/feature-x

Feature system 1. Demonstrates composition of `@goalconnect/ui-components` + `@goalconnect/utils`.

## Features included (2)

1. **PlayerRoster**: roster list with search filtering.
2. **PlayerProfileCard**: profile summary card.

## Usage

```tsx
import { PlayerRoster, PlayerProfileCard } from '@goalconnect/feature-x';

export function Demo() {
  return (
    <>
      <PlayerProfileCard name=\"Abel\" position=\"forward\" joinedAt={Date.now()} />
      <PlayerRoster initialPlayers={[{ id: '1', fullName: 'Abel', position: 'forward' }]} />
    </>
  );
}
```
