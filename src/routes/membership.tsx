import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/membership")({
    component: () => <div>Membership</div>
})