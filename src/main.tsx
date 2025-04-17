import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import './styles/main.scss';
import { routeTree } from './routeTree.gen';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app');

if (rootElement) {
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<RouterProvider router={router} />);
  }
} else {
  console.error("Root element with id 'app' not found.");
}