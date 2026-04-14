import * as React from 'react';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@goalconnect/ui-components';
import { clamp } from '@goalconnect/utils';

export type VideoItem = {
  id: string;
  title: string;
  status: 'uploaded' | 'processing' | 'analyzed' | 'failed';
  views: number;
};

export function VideoLibrary({ videos }: { videos: VideoItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Video library</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          {videos.map((v) => (
            <div key={v.id} className="rounded-md border p-3 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="font-medium">{v.title}</div>
                <Badge variant="outline">{v.status}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">{clamp(v.views, 0, 9999)} views</div>
              <Button size="sm" variant="secondary">
                Open
              </Button>
            </div>
          ))}
          {videos.length === 0 && <div className="text-sm text-muted-foreground">No videos yet.</div>}
        </div>
      </CardContent>
    </Card>
  );
}

