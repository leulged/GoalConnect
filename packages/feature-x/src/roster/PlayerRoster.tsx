'use client';

import * as React from 'react';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input } from '@goalconnect/ui-components';
import { debounce } from '@goalconnect/utils';

export type Player = {
  id: string;
  fullName: string;
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
};

type PositionFilter = 'all' | Player['position'];

export function PlayerRoster({
  initialPlayers,
  onAdd,
}: {
  initialPlayers: Player[];
  onAdd?: () => void;
}) {
  const [query, setQuery] = React.useState('');
  const [positionFilter, setPositionFilter] = React.useState<PositionFilter>('all');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  const applyQueryDebounce = React.useMemo(
    () =>
      debounce((q: string) => {
        setDebouncedQuery(q);
      }, 200),
    []
  );

  React.useEffect(() => {
    applyQueryDebounce(query);
  }, [applyQueryDebounce, query]);

  const players = React.useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();

    return initialPlayers.filter((p) => {
      const matchesQuery = q.length === 0 ? true : p.fullName.toLowerCase().includes(q);
      const matchesPosition = positionFilter === 'all' ? true : p.position === positionFilter;
      return matchesQuery && matchesPosition;
    });
  }, [debouncedQuery, initialPlayers, positionFilter]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Player roster</CardTitle>
        {onAdd && (
          <Button size="sm" onClick={onAdd}>
            Add player
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={positionFilter === 'all' ? 'secondary' : 'ghost'}
            onClick={() => setPositionFilter('all')}
          >
            All
          </Button>
          <Button
            type="button"
            size="sm"
            variant={positionFilter === 'goalkeeper' ? 'secondary' : 'ghost'}
            onClick={() => setPositionFilter('goalkeeper')}
          >
            GK
          </Button>
          <Button
            type="button"
            size="sm"
            variant={positionFilter === 'defender' ? 'secondary' : 'ghost'}
            onClick={() => setPositionFilter('defender')}
          >
            DEF
          </Button>
          <Button
            type="button"
            size="sm"
            variant={positionFilter === 'midfielder' ? 'secondary' : 'ghost'}
            onClick={() => setPositionFilter('midfielder')}
          >
            MID
          </Button>
          <Button
            type="button"
            size="sm"
            variant={positionFilter === 'forward' ? 'secondary' : 'ghost'}
            onClick={() => setPositionFilter('forward')}
          >
            FWD
          </Button>
        </div>
        <Input
          value={query}
          placeholder="Search by name..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="space-y-2">
          {players.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded-md border p-3">
              <div className="font-medium">{p.fullName}</div>
              <Badge variant="outline">{p.position}</Badge>
            </div>
          ))}
          {players.length === 0 && <div className="text-sm text-muted-foreground">No players found.</div>}
        </div>
      </CardContent>
    </Card>
  );
}

