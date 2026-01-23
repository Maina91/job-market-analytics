import { DashboardLayout } from '@/pages/dashboard/Layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})
