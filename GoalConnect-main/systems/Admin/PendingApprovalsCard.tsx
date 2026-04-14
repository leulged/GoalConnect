'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Academy } from '@/types';
import { ListSpinner } from '@/components/common';

type PendingApprovalsCardProps = {
  isLoading: boolean;
  pendingAcademies: Academy[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  viewAllHref?: string;
};

export function PendingApprovalsCard({
  isLoading,
  pendingAcademies,
  onApprove,
  onReject,
  viewAllHref = '/admin/academies',
}: PendingApprovalsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Pending Academy Approvals</CardTitle>
            <CardDescription>Review and approve new academy registrations</CardDescription>
          </div>
          <Link href={viewAllHref}>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <ListSpinner className="py-8" />
          ) : pendingAcademies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-3" />
              <p className="text-muted-foreground">No pending approvals</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingAcademies.map((academy) => (
                <div
                  key={academy._id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{academy.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {academy.region} • Applied {new Date(academy.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => onReject(academy._id)}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => onApprove(academy._id)}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
