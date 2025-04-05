import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | GenixAI',
  description: 'Your GenixAI dashboard - Manage your healthcare communication tools and settings.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 