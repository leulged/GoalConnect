'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout';
import { AdminStatsGrid, PendingApprovalsCard, AdminQuickStats } from '@/components/admin';
import { adminApi } from '@/lib/api';
import { AdminDashboardStats, Academy } from '@/types';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);
  const [pendingAcademies, setPendingAcademies] = useState<Academy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardRes, academiesRes] = await Promise.all([
          adminApi.getDashboard(),
          adminApi.getAllAcademies({ status: 'awaiting_approval', limit: 5 }),
        ]);

        setStats(dashboardRes.data.data);
        setPendingAcademies(academiesRes.data.data);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await adminApi.approveAcademy(id);
      setPendingAcademies((prev) => prev.filter((a) => a._id !== id));
      const dashboardRes = await adminApi.getDashboard();
      setStats(dashboardRes.data.data);
    } catch (error) {
      console.error('Failed to approve academy:', error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await adminApi.rejectAcademy(id, 'Does not meet requirements');
      setPendingAcademies((prev) => prev.filter((a) => a._id !== id));
    } catch (error) {
      console.error('Failed to reject academy:', error);
    }
  };

  return (
    <DashboardLayout title="Admin Dashboard" userRole="admin">
      <div className="space-y-6">
        <AdminStatsGrid stats={stats} />
        <PendingApprovalsCard
          isLoading={isLoading}
          pendingAcademies={pendingAcademies}
          onApprove={handleApprove}
          onReject={handleReject}
        />
        <AdminQuickStats stats={stats} />
      </div>
    </DashboardLayout>
  );
}
