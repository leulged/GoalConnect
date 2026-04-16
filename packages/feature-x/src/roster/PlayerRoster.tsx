'use client';

import * as React from 'react';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input } from '@goalconnect/ui-components';
import { debounce } from '@goalconnect/utils';

export type Player = {
  id: string;
  fullName: string;
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
};

export function PlayerRoster({
  initialPlayers,
  onAdd,
}: {
  initialPlayers: Player[];
  onAdd?: () => void;
}) {
  const [query, setQuery] = React.useState('');
  const [players, setPlayers] = React.useState(initialPlayers);

  const applyFilter = React.useMemo(
    () =>
      debounce((q: string) => {
        const qq = q.trim().toLowerCase();
        setPlayers(
          qq ? initialPlayers.filter((p) => p.fullName.toLowerCase().includes(qq)) : initialPlayers
        );
      }, 200),
    [initialPlayers]
  );

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
        <Input
          value={query}
          placeholder="Search by name..."
          onChange={(e) => {
            setQuery(e.target.value);
            applyFilter(e.target.value);
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

