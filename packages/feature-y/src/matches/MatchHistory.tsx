import * as React from 'react';
import { Badge, Card, CardContent, CardHeader, CardTitle } from '@goalconnect/ui-components';
import { formatDate } from '@goalconnect/utils';

export type MatchItem = {
  id: string;
  opponent: string;
  matchDate: Date | number | string;
  result: 'W' | 'D' | 'L' | 'Pending';
};

export function MatchHistory({ matches }: { matches: MatchItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Match history</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {matches.map((m) => (
          <div key={m.id} className="flex items-center justify-between rounded-md border p-3">
            <div>
              <div className="font-medium">{m.opponent}</div>
              <div className="text-sm text-muted-foreground">{formatDate(m.matchDate)}</div>
            </div>
            <Badge variant="outline">{m.result}</Badge>
          </div>
        ))}
        {matches.length === 0 && <div className="text-sm text-muted-foreground">No matches yet.</div>}
      </CardContent>
    </Card>
  );
}

