import { Profile } from '@/pages/dashboard/Profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/profile')({
    component: Profile,
})
