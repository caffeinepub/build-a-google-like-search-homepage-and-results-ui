import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Search, Sparkles } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-32">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-12 text-center">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/assets/generated/search-logo-wide.dim_1200x300.png"
              alt="Search"
              className="h-24 sm:h-32 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Discover the Web
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fast, powerful search at your fingertips. Find what you're looking for with precision and speed.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate({ to: '/search' })}
            className="gap-2 px-8 py-6 text-lg h-auto rounded-full"
          >
            <Search className="h-5 w-5" />
            Start Searching
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate({ to: '/search' })}
            className="gap-2 px-8 py-6 text-lg h-auto rounded-full"
          >
            <Sparkles className="h-5 w-5" />
            Explore Features
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full">
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Get instant results with our optimized search engine
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Smart Results</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent algorithms deliver the most relevant content
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Privacy First</h3>
            <p className="text-sm text-muted-foreground">
              Your searches are private and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
