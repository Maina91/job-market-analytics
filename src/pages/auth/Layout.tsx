import { Outlet } from "@tanstack/react-router";

export function AuthLayout() {
    return (
        <div>
            <h1>auth layout</h1>
            <Outlet />
        </div>
    )
}