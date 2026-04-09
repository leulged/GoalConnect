'use client';

import { motion } from 'framer-motion';
import { Building2, Users, UserSearch, Clock } from 'lucide-react';
import { StatCard } from '@/components/dashboard';
import type { AdminDashboardStats } from '@/types';

type AdminStatsGridProps = {
  stats: AdminDashboardStats | null;
};

export function AdminStatsGrid({ stats }: AdminStatsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      <StatCard
        title="Total Academies"
        value={stats?.academies.total || 0}
        subtitle={`${stats?.academies.approved || 0} approved`}
        icon={Building2}
        variant="primary"
      />
      <StatCard
        title="Pending Approvals"
        value={stats?.academies.pending || 0}
        subtitle="Awaiting review"
        icon={Clock}
        variant="gold"
      />
      <StatCard
        title="Total Scouts"
        value={stats?.scouts.total || 0}
        subtitle={`${stats?.scouts.pending || 0} pending`}
        icon={UserSearch}
        variant="default"
      />
      <StatCard
        title="Total Players"
        value={stats?.players.total || 0}
        subtitle={`${stats?.videos.analyzed || 0} videos analyzed`}
        icon={Users}
        variant="primary"
      />
    </motion.div>
  );
}
