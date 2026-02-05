import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Search, Home } from 'lucide-react';

export default function SiteHeader() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/generated/search-logo.dim_512x512.png"
              alt="Search"
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-lg hidden sm:inline">Search</span>
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Button
              variant={currentPath === '/' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => navigate({ to: '/' })}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
            <Button
              variant={currentPath.startsWith('/search') ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => navigate({ to: '/search' })}
              className="gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
