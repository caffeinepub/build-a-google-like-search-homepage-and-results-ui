import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  onLuckySearch?: (query: string) => void;
  showButtons?: boolean;
  compact?: boolean;
}

export default function SearchForm({
  value,
  onChange,
  onSearch,
  onLuckySearch,
  showButtons = false,
  compact = false
}: SearchFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  const handleClear = () => {
    onChange('');
  };

  const handleLucky = () => {
    if (onLuckySearch) {
      onLuckySearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search the web..."
          className={`w-full ${compact ? 'h-11' : 'h-14'} pl-12 pr-12 text-base rounded-full border-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 transition-all`}
          autoFocus={!compact}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showButtons && (
        <div className="flex items-center justify-center gap-3">
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="px-6 rounded-md"
          >
            Search
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={handleLucky}
            className="px-6 rounded-md"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}
