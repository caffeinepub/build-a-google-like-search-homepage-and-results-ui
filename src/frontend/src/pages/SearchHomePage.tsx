import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import SearchForm from '../components/SearchForm';

export default function SearchHomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      navigate({ to: '/search/results', search: { q: searchQuery } });
    }
  };

  const handleLuckySearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      navigate({ to: '/search/results', search: { q: searchQuery } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-32">
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
    </div>
  );
}
