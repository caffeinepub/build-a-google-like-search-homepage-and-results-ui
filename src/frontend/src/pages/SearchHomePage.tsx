import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import SearchForm from '../components/SearchForm';

export default function SearchHomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      navigate({ to: '/search', search: { q: searchQuery } });
    }
  };

  const handleLuckySearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // For "I'm Feeling Lucky", we'll just navigate to results
      // In a real app, this would go to the first result directly
      navigate({ to: '/search', search: { q: searchQuery } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
        <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/generated/search-logo-wide.dim_1200x300.png"
              alt="Search"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Search Form */}
          <div className="w-full">
            <SearchForm
              value={query}
              onChange={setQuery}
              onSearch={handleSearch}
              onLuckySearch={handleLuckySearch}
              showButtons
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-4 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>© 2026. Built with ❤️ using</span>
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
