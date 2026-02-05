import { useState, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';
import { searchDataset } from '../mock/searchDataset';
import type { SearchResult } from '../mock/searchDataset';

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as { q?: string };
  const initialQuery = searchParams.q || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = searchDataset.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.snippet.toLowerCase().includes(lowerQuery) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
      );
    });

    setResults(filtered);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      navigate({ to: '/search/results', search: { q: searchQuery } });
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]">
      {/* Search header */}
      <div className="sticky top-[57px] z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-6">
            {/* Small logo */}
            <button
              onClick={() => navigate({ to: '/search' })}
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/generated/search-logo.dim_512x512.png"
                alt="Search"
                className="h-10 w-10 object-contain"
              />
            </button>

            {/* Search form */}
            <div className="flex-1 max-w-2xl">
              <SearchForm
                value={query}
                onChange={setQuery}
                onSearch={handleSearch}
                compact
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-3xl">
          <ResultsList results={results} query={query} />
        </div>
      </div>
    </div>
  );
}
