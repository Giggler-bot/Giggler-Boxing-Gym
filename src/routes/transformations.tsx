import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transformations")({
    component: () => <div>Transformation</div>
})