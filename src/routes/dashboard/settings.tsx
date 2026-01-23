import { Settings } from '@/pages/dashboard/Settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings')({
    component: Settings,
})

