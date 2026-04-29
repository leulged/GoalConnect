'use client';

import * as React from 'react';
import { PlayerProfileCard, PlayerRoster } from '@goalconnect/feature-x';

export default function FeatureXDemoPage() {
  const initialPlayers = React.useMemo(
    () => [
      { id: 'p1', fullName: 'Abel Tesfaye', position: 'forward' as const },
      { id: 'p2', fullName: 'Kalkidan Alemu', position: 'midfielder' as const },
      { id: 'p3', fullName: 'Yared Bekele', position: 'defender' as const },
    ],
    []
  );

  const [selectedId, setSelectedId] = React.useState(initialPlayers[0]?.id ?? '');
  const selected = initialPlayers.find((p) => p.id === selectedId) ?? initialPlayers[0];

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature X demo</h1>
      {selected && (
        <PlayerProfileCard name={selected.fullName} position={selected.position} joinedAt={Date.now()} />
      )}
      <PlayerRoster
        initialPlayers={initialPlayers}
        selectedPlayerId={selectedId}
        onPlayerSelect={(p) => setSelectedId(p.id)}
      />
    </div>
  );
}

