import { MatchHistory, VideoLibrary } from '@goalconnect/feature-y';

export default function FeatureYDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature Y demo</h1>
      <VideoLibrary
        videos={[
          { id: 'v1', title: 'Defensive shape', status: 'uploaded', views: 2 },
          { id: 'v2', title: 'Counter-attack patterns', status: 'analyzed', views: 65 },
        ]}
      />
      <MatchHistory
        matches={[
          { id: 'm1', opponent: 'Riverside FC', matchDate: Date.now(), result: 'Pending' },
          { id: 'm2', opponent: 'Eagles Academy', matchDate: Date.now(), result: 'W' },
        ]}
      />
    </div>
  );
}

