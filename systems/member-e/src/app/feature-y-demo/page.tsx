import { MatchHistory, VideoLibrary } from '@goalconnect/feature-y';

export default function FeatureYDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature Y demo</h1>
      <VideoLibrary
        videos={[
          { id: 'v1', title: 'Finishing session', status: 'analyzed', views: 101 },
          { id: 'v2', title: 'Passing rondo', status: 'processing', views: 18 },
        ]}
      />
      <MatchHistory
        matches={[
          { id: 'm1', opponent: 'Southside FC', matchDate: Date.now(), result: 'L' },
          { id: 'm2', opponent: 'Northern Stars', matchDate: Date.now(), result: 'Pending' },
        ]}
      />
    </div>
  );
}

