import { Spinner } from "@/components/Spinner";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Calendar, Clock, Home, Plus, User } from "lucide-react";

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return <Spinner show={isLoading} />;
}

const AppLayout = () => {
  return (
    <>
      <main className={`max-h-screen relative flex flex-col overflow-y-auto`}>
        <RouterSpinner />

        <div className={`flex-1 flex`}>
          <Outlet />
        </div>

        <div
          className={`flex items-center justify-center gap-5 shadow p-2 bg-white fixed bottom-0 left-0 right-0 z-10`}
        >
          {(
            [
              ["/", "Home", <Home />],
              ["/about", "Calendar", <Calendar />],
              ["add", "", <Plus />],
              ["/pomodoro", "Pomodoro", <Clock />],
              ["/profile", "Profile", <User />],
            ] as const
          ).map(([to, label, icon]) => {
            if (to === "add") {
              return (
                <div
                  key={to}
                  className={`w-10 h-10 mx-2 flex items-center justify-center rounded-full bg-blue-700 text-white cursor-pointer`}
                >
                  {icon}
                </div>
              );
            }

            return (
              <div key={to}>
                <Link
                  to={to}
                  activeOptions={
                    {
                      // If the route points to the root of it's parent,
                      // make sure it's only active if it's exact
                      // exact: to === '.',
                    }
                  }
                  preload="intent"
                  className={`block py-2 px-3`}
                  // Make "active" links bold
                  activeProps={{ className: `text-blue-600` }}
                >
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span>{icon}</span>
                    <span className={`text-xs`}>{label}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <TanStackRouterDevtools position="top-right" />
    </>
  );
};

export default AppLayout;
