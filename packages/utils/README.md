# @goalconnect/utils

Shared utility functions used across `feature-x`, `feature-y`, and `systems/*`.

## Utilities included

- `formatDate(input)`
- `clamp(value, min, max)`
- `slugify(value)`
- `safeJsonParse(value)`
- `debounce(fn, waitMs)`
- `apiFetch<T>(url, init?)`
- `assertNever(x)`

## Example

```ts
import { formatDate, slugify } from '@goalconnect/utils';

formatDate('2026-04-08'); // \"2026-04-08\"
slugify('Player Profile'); // \"player-profile\"
```
