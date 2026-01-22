import { Outlet } from "@tanstack/react-router";

export function DashboardLayout() {
    return (
        <div>
            <h1>dashboard layout page</h1>
            < Outlet />
        </div>
    )
}