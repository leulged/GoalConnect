'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

type AcademyWelcomeBannerProps = {
  academyName: string | undefined;
  registrationStatus?: string;
};

export function AcademyWelcomeBanner({ academyName, registrationStatus }: AcademyWelcomeBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-500/20 p-6"
    >
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {academyName || 'Academy'}!</h1>
        <p className="text-muted-foreground max-w-xl">
          Manage your players, upload videos, and track your academy&apos;s performance.
        </p>
        {registrationStatus === 'awaiting_approval' && (
          <Badge className="mt-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending Approval</Badge>
        )}
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </motion.div>
  );
}
