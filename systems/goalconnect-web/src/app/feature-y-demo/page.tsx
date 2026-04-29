import { MatchHistory, VideoLibrary } from '@goalconnect/feature-y';

export default function FeatureYDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Feature Y demo</h1>
      <VideoLibrary
        videos={[
          { id: 'v1', title: 'Highlight reel #1', status: 'analyzed', views: 120 },
          { id: 'v2', title: 'Training drill', status: 'processing', views: 12 },
          { id: 'v3', title: 'Upload error sample', status: 'failed', views: 0 },
        ]}
      />
      <MatchHistory
        matches={[
          { id: 'm1', opponent: 'Unity FC', matchDate: Date.now(), result: 'W' },
          { id: 'm2', opponent: 'Stars Academy', matchDate: Date.now(), result: 'Pending' },
        ]}
      />
    </div>
  );
}

