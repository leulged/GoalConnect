import { PlayerProfileCard, PlayerRoster } from '@goalconnect/feature-x';

export default function FeatureXDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature X demo</h1>
      <PlayerProfileCard name="Dawit Kebede" position="forward" joinedAt={Date.now()} />
      <PlayerRoster
        initialPlayers={[
          { id: 'p1', fullName: 'Dawit Kebede', position: 'forward' },
          { id: 'p2', fullName: 'Meron Tesema', position: 'midfielder' },
          { id: 'p3', fullName: 'Hanna Mulu', position: 'defender' },
        ]}
      />
    </div>
  );
}

