import { Index } from '@/pages/dashboard/Index'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: Index,
})

