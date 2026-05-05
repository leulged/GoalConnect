'use client';

import * as React from 'react';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  EmptyState,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@goalconnect/ui-components';
import { formatDate, formatRelativeTime } from '@goalconnect/utils';

export type MatchItem = {
  id: string;
  opponent: string;
  matchDate: Date | number | string;
  result: 'W' | 'D' | 'L' | 'Pending';
};

export function MatchHistory({ matches }: { matches: MatchItem[] }) {
  const [resultFilter, setResultFilter] = React.useState<'all' | MatchItem['result']>('all');
  const [sortBy, setSortBy] = React.useState<'date_desc' | 'opponent_asc'>('date_desc');

  const visibleMatches = React.useMemo(() => {
    const filtered = resultFilter === 'all' ? matches : matches.filter((m) => m.result === resultFilter);
    const sorted = [...filtered];

    if (sortBy === 'date_desc') {
      sorted.sort((a, b) => new Date(b.matchDate).getTime() - new Date(a.matchDate).getTime());
    }

    if (sortBy === 'opponent_asc') {
      sorted.sort((a, b) => a.opponent.localeCompare(b.opponent));
    }

    return sorted;
  }, [matches, resultFilter, sortBy]);

  const badgeVariantForResult = (r: MatchItem['result']): 'default' | 'secondary' | 'outline' => {
    if (r === 'W') return 'default';
    if (r === 'D') return 'secondary';
    return 'outline';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <CardTitle>Match history</CardTitle>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Sort
            <select
              className="h-9 rounded-md border bg-background px-3 text-sm text-foreground"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            >
              <option value="date_desc">Newest</option>
              <option value="opponent_asc">Opponent (A–Z)</option>
            </select>
          </label>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Tabs value={resultFilter} onValueChange={(v) => setResultFilter(v as typeof resultFilter)}>
          <TabsList className="w-full justify-start">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="W">W</TabsTrigger>
            <TabsTrigger value="D">D</TabsTrigger>
            <TabsTrigger value="L">L</TabsTrigger>
            <TabsTrigger value="Pending">Pending</TabsTrigger>
          </TabsList>
        </Tabs>
        {visibleMatches.map((m) => (
          <div key={m.id} className="flex items-center justify-between rounded-md border p-3">
            <div>
              <div className="font-medium">{m.opponent}</div>
              <div className="text-sm text-muted-foreground">
                {formatDate(m.matchDate)} • {formatRelativeTime(m.matchDate)}
              </div>
            </div>
            <Badge variant={badgeVariantForResult(m.result)}>{m.result}</Badge>
          </div>
        ))}
        {visibleMatches.length === 0 && (
          <EmptyState title="No matches found" description="Try another result filter or sort option." />
        )}
      </CardContent>
    </Card>
  );
}

