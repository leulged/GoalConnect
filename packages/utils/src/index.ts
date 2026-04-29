export function formatDate(input: Date | number | string): string {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}

export function formatRelativeTime(
  input: Date | number | string,
  now: Date | number = Date.now()
): string {
  const date = new Date(input);
  const nowDate = new Date(now);
  if (Number.isNaN(date.getTime()) || Number.isNaN(nowDate.getTime())) return '';

  const diffMs = nowDate.getTime() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);

  if (diffSec < 0) return formatDate(input);
  if (diffSec < 60) return 'just now';

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;

  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;

  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 7) return `${diffDay}d ago`;

  return formatDate(input);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function safeJsonParse<T>(value: string): { ok: true; data: T } | { ok: false; error: string } {
  try {
    return { ok: true, data: JSON.parse(value) as T };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Unknown JSON parse error' };
  }
}

export function debounce<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  waitMs: number
): (...args: TArgs) => void {
  let t: ReturnType<typeof setTimeout> | null = null;
  return (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), waitMs);
  };
}

export async function apiFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return (await res.json()) as T;
}

export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${String(x)}`);
}

