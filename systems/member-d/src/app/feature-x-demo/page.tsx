import { PlayerProfileCard, PlayerRoster } from '@goalconnect/feature-x';

export default function FeatureXDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature X demo</h1>
      <PlayerProfileCard name="Mekdes Hailu" position="goalkeeper" joinedAt={Date.now()} />
      <PlayerRoster
        initialPlayers={[
          { id: 'p1', fullName: 'Mekdes Hailu', position: 'goalkeeper' },
          { id: 'p2', fullName: 'Fitsum Kassa', position: 'defender' },
          { id: 'p3', fullName: 'Ruth Solomon', position: 'forward' },
        ]}
      />
    </div>
  );
}

