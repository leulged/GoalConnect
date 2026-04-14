import { MatchHistory, VideoLibrary } from '@goalconnect/feature-y';

export default function FeatureYDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature Y demo</h1>
      <VideoLibrary
        videos={[
          { id: 'v1', title: 'U17 match analysis', status: 'analyzed', views: 44 },
          { id: 'v2', title: 'Warm-up routine', status: 'uploaded', views: 5 },
        ]}
      />
      <MatchHistory
        matches={[
          { id: 'm1', opponent: 'Blue Lions', matchDate: Date.now(), result: 'D' },
          { id: 'm2', opponent: 'Green Wolves', matchDate: Date.now(), result: 'L' },
        ]}
      />
    </div>
  );
}

