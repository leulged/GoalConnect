import { PlayerProfileCard, PlayerRoster } from '@goalconnect/feature-x';

export default function FeatureXDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature X demo</h1>
      <PlayerProfileCard name="Selamawit Hana" position="defender" joinedAt={Date.now()} />
      <PlayerRoster
        initialPlayers={[
          { id: 'p1', fullName: 'Selamawit Hana', position: 'defender' },
          { id: 'p2', fullName: 'Henok Abadi', position: 'midfielder' },
          { id: 'p3', fullName: 'Nahom Daniel', position: 'forward' },
        ]}
      />
    </div>
  );
}

