'use client';

import { motion } from 'framer-motion';
import { Video, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { AdminDashboardStats } from '@/types';

type AdminQuickStatsProps = {
  stats: AdminDashboardStats | null;
};

export function AdminQuickStats({ stats }: AdminQuickStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid gap-4 md:grid-cols-2"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            Video Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Videos</span>
              <span className="font-medium">{stats?.videos.total || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Analyzed</span>
              <span className="font-medium text-emerald-400">{stats?.videos.analyzed || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Processing Rate</span>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                {stats?.videos.total
                  ? Math.round((stats.videos.analyzed / stats.videos.total) * 100)
                  : 0}
                %
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Platform Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Users</span>
              <span className="font-medium">{stats?.users.total || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Active Academies</span>
              <span className="font-medium text-emerald-400">{stats?.academies.approved || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Approval Rate</span>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                {stats?.academies.total
                  ? Math.round((stats.academies.approved / stats.academies.total) * 100)
                  : 0}
                %
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
