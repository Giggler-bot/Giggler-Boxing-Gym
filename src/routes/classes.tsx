import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/classes")({
    component: () => <div>Classes</div>
})