import { MatchHistory, VideoLibrary } from '@goalconnect/feature-y';

export default function FeatureYDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature Y demo</h1>
      <VideoLibrary
        videos={[
          { id: 'v1', title: 'Goalkeeper training', status: 'processing', views: 9 },
          { id: 'v2', title: 'Wing play tactics', status: 'analyzed', views: 77 },
        ]}
      />
      <MatchHistory
        matches={[
          { id: 'm1', opponent: 'Red Falcons', matchDate: Date.now(), result: 'W' },
          { id: 'm2', opponent: 'City Academy', matchDate: Date.now(), result: 'D' },
        ]}
      />
    </div>
  );
}

