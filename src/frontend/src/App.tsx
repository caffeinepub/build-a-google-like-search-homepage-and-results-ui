import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SearchHomePage from './pages/SearchHomePage';
import SearchResultsPage from './pages/SearchResultsPage';

const rootRoute = createRootRoute({
  component: () => <RouterProvider router={router} />
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SearchHomePage
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: SearchResultsPage
});

const routeTree = rootRoute.addChildren([indexRoute, searchRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
