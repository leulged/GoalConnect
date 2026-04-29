'use client';

import * as React from 'react';
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsList, TabsTrigger } from '@goalconnect/ui-components';
import { clamp } from '@goalconnect/utils';

export type VideoItem = {
  id: string;
  title: string;
  status: 'uploaded' | 'processing' | 'analyzed' | 'failed';
  views: number;
};

export function VideoLibrary({ videos }: { videos: VideoItem[] }) {
  const [statusFilter, setStatusFilter] = React.useState<'all' | VideoItem['status']>('all');
  const [sortBy, setSortBy] = React.useState<'views_desc' | 'title_asc'>('views_desc');

  const visibleVideos = React.useMemo(() => {
    const filtered = statusFilter === 'all' ? videos : videos.filter((v) => v.status === statusFilter);

    const sorted = [...filtered];
    if (sortBy === 'views_desc') sorted.sort((a, b) => b.views - a.views);
    if (sortBy === 'title_asc') sorted.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
  }, [sortBy, statusFilter, videos]);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <CardTitle>Video library</CardTitle>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            Sort
            <select
              className="h-9 rounded-md border bg-background px-3 text-sm text-foreground"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            >
              <option value="views_desc">Most views</option>
              <option value="title_asc">Title (A–Z)</option>
            </select>
          </label>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as typeof statusFilter)}>
          <TabsList className="w-full justify-start">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="uploaded">Uploaded</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="analyzed">Analyzed</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-3 md:grid-cols-2">
          {visibleVideos.map((v) => (
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
          {visibleVideos.length === 0 && <div className="text-sm text-muted-foreground">No videos found.</div>}
        </div>
      </CardContent>
    </Card>
  );
}

