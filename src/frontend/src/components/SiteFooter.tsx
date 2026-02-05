import { useNavigate } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border bg-muted/30 py-6 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Links */}
          <nav className="flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate({ to: '/' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate({ to: '/search' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Search
            </button>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026. Built with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
