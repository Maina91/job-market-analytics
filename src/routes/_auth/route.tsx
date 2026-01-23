import { AuthLayout } from '@/pages/auth/Layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout
})
