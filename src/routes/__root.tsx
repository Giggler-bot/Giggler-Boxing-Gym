import { createRootRoute, Outlet } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";

export const Route = createRootRoute({
  component: () => (
    <PageShell>
      <Outlet />
    </PageShell>
  )
})