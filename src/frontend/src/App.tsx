import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import SearchHomePage from './pages/SearchHomePage';
import SearchResultsPage from './pages/SearchResultsPage';

const rootRoute = createRootRoute({
  component: SiteLayout
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const searchHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: SearchHomePage
});

const searchResultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search/results',
  component: SearchResultsPage
});

const routeTree = rootRoute.addChildren([indexRoute, searchHomeRoute, searchResultsRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
