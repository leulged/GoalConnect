import * as React from 'react';
import { Badge, Card, CardContent, CardHeader, CardTitle } from '@goalconnect/ui-components';
import { formatDate } from '@goalconnect/utils';

export function PlayerProfileCard({
  name,
  position,
  joinedAt,
}: {
  name: string;
  position: string;
  joinedAt: Date | number | string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Badge variant="secondary">{position}</Badge>
        <span className="text-sm text-muted-foreground">Joined {formatDate(joinedAt)}</span>
      </CardContent>
    </Card>
  );
}

