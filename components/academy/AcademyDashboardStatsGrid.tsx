'use client';

import { motion } from 'framer-motion';
import { Users, Video, Trophy, Eye } from 'lucide-react';
import { StatCard } from '@/components/dashboard';

type AcademyDashboardStatsGridProps = {
  playerCount: number;
  videosCount: number;
  matchesCount?: number;
  profileViews?: number;
};

export function AcademyDashboardStatsGrid({
  playerCount,
  videosCount,
  matchesCount = 0,
  profileViews = 0,
}: AcademyDashboardStatsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <StatCard
        title="Total Players"
        value={playerCount}
        subtitle="Active roster"
        icon={Users}
        variant="primary"
      />
      <StatCard
        title="Videos Uploaded"
        value={videosCount}
        subtitle="Highlights & matches"
        icon={Video}
        variant="default"
      />
      <StatCard
        title="Total Matches"
        value={matchesCount}
        subtitle="This season"
        icon={Trophy}
        variant="gold"
      />
      <StatCard
        title="Profile Views"
        value={profileViews}
        subtitle="By scouts"
        icon={Eye}
        variant="default"
      />
    </motion.div>
  );
}
