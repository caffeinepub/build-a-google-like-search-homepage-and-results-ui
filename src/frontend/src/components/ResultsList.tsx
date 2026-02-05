import { ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export interface SearchResult {
  title: string;
  url: string;
  host: string;
  snippet: string;
}

interface ResultsListProps {
  results: SearchResult[];
  query: string;
}

export default function ResultsList({ results, query }: ResultsListProps) {
  if (!query.trim()) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground text-lg">
          Enter a search query to see results
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="py-12 text-center space-y-3">
        <p className="text-foreground text-xl font-medium">
          No results found for "{query}"
        </p>
        <p className="text-muted-foreground">
          Try different keywords or check your spelling
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground mb-6">
        About {results.length} result{results.length !== 1 ? 's' : ''}
      </p>

      <div className="space-y-8">
        {results.map((result, index) => (
          <article key={index} className="group">
            <div className="space-y-1">
              {/* URL/Host line */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">{result.host}</span>
              </div>

              {/* Title */}
              <h2>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-primary hover:underline inline-flex items-center gap-1.5 group-hover:text-primary/80 transition-colors"
                >
                  {result.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </h2>

              {/* Snippet */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.snippet}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
