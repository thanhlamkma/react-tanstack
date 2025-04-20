import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/AppLayout";
import { createRootRoute, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <AppLayout />,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Button>
          <Link to="/">Start Over</Link>
        </Button>
      </div>
    );
  },
});
