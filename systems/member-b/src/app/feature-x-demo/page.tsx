import { PlayerProfileCard, PlayerRoster } from '@goalconnect/feature-x';

export default function FeatureXDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature X demo</h1>
      <PlayerProfileCard name="Liya Getachew" position="midfielder" joinedAt={Date.now()} />
      <PlayerRoster
        initialPlayers={[
          { id: 'p1', fullName: 'Liya Getachew', position: 'midfielder' },
          { id: 'p2', fullName: 'Sami Yusuf', position: 'forward' },
          { id: 'p3', fullName: 'Mahi Tesfaye', position: 'goalkeeper' },
        ]}
      />
    </div>
  );
}

