export interface SearchResult {
  title: string;
  url: string;
  host: string;
  snippet: string;
  keywords: string[];
}

export const searchDataset: SearchResult[] = [
  {
    title: 'Introduction to Web Development - Complete Guide',
    url: 'https://example.com/web-dev-guide',
    host: 'example.com',
    snippet: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. This comprehensive guide covers everything from basic concepts to advanced techniques for building modern websites.',
    keywords: ['web', 'development', 'html', 'css', 'javascript', 'programming', 'tutorial']
  },
  {
    title: 'React Documentation - Getting Started',
    url: 'https://react.dev/learn',
    host: 'react.dev',
    snippet: 'The official React documentation provides a comprehensive introduction to React concepts, hooks, and best practices. Start building interactive user interfaces with this powerful library.',
    keywords: ['react', 'javascript', 'framework', 'ui', 'components', 'hooks', 'frontend']
  },
  {
    title: 'TypeScript Handbook - Official Documentation',
    url: 'https://typescriptlang.org/docs',
    host: 'typescriptlang.org',
    snippet: 'TypeScript extends JavaScript by adding types. Learn how to use TypeScript to build more robust applications with better tooling and fewer runtime errors.',
    keywords: ['typescript', 'javascript', 'types', 'programming', 'language', 'documentation']
  },
  {
    title: 'CSS Grid Layout Guide - Modern Web Design',
    url: 'https://example.com/css-grid',
    host: 'example.com',
    snippet: 'Master CSS Grid Layout with this complete guide. Learn how to create complex, responsive layouts with ease using the most powerful layout system in CSS.',
    keywords: ['css', 'grid', 'layout', 'design', 'responsive', 'web', 'frontend']
  },
  {
    title: 'Node.js Best Practices - Backend Development',
    url: 'https://example.com/nodejs-practices',
    host: 'example.com',
    snippet: 'Discover the best practices for building scalable and maintainable Node.js applications. Learn about error handling, security, testing, and performance optimization.',
    keywords: ['nodejs', 'javascript', 'backend', 'server', 'api', 'development', 'best practices']
  },
  {
    title: 'Tailwind CSS - Utility-First CSS Framework',
    url: 'https://tailwindcss.com',
    host: 'tailwindcss.com',
    snippet: 'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. Rapidly build modern websites without leaving your HTML.',
    keywords: ['tailwind', 'css', 'framework', 'utility', 'design', 'styling', 'frontend']
  },
  {
    title: 'Git Version Control Tutorial',
    url: 'https://example.com/git-tutorial',
    host: 'example.com',
    snippet: 'Learn Git version control from scratch. Understand commits, branches, merging, and collaboration workflows. Essential skills for every developer.',
    keywords: ['git', 'version control', 'github', 'collaboration', 'development', 'tools']
  },
  {
    title: 'REST API Design Best Practices',
    url: 'https://example.com/rest-api-design',
    host: 'example.com',
    snippet: 'Design better REST APIs with these proven best practices. Learn about resource naming, HTTP methods, status codes, versioning, and authentication patterns.',
    keywords: ['api', 'rest', 'design', 'backend', 'http', 'web services', 'architecture']
  },
  {
    title: 'Responsive Web Design Principles',
    url: 'https://example.com/responsive-design',
    host: 'example.com',
    snippet: 'Create websites that work beautifully on all devices. Learn the core principles of responsive web design including fluid grids, flexible images, and media queries.',
    keywords: ['responsive', 'design', 'mobile', 'web', 'css', 'layout', 'frontend']
  },
  {
    title: 'JavaScript ES6+ Features Guide',
    url: 'https://example.com/es6-features',
    host: 'example.com',
    snippet: 'Explore modern JavaScript features including arrow functions, destructuring, promises, async/await, modules, and more. Write cleaner, more efficient code.',
    keywords: ['javascript', 'es6', 'modern', 'features', 'programming', 'syntax']
  },
  {
    title: 'Web Performance Optimization Techniques',
    url: 'https://example.com/web-performance',
    host: 'example.com',
    snippet: 'Speed up your website with proven performance optimization techniques. Learn about lazy loading, code splitting, caching strategies, and image optimization.',
    keywords: ['performance', 'optimization', 'speed', 'web', 'loading', 'frontend']
  },
  {
    title: 'Docker Containerization Guide',
    url: 'https://example.com/docker-guide',
    host: 'example.com',
    snippet: 'Learn how to containerize your applications with Docker. Understand images, containers, volumes, and orchestration for consistent development and deployment.',
    keywords: ['docker', 'containers', 'devops', 'deployment', 'infrastructure', 'tools']
  },
  {
    title: 'GraphQL vs REST - API Comparison',
    url: 'https://example.com/graphql-vs-rest',
    host: 'example.com',
    snippet: 'Compare GraphQL and REST APIs to choose the right approach for your project. Understand the benefits and trade-offs of each API design pattern.',
    keywords: ['graphql', 'rest', 'api', 'comparison', 'backend', 'architecture']
  },
  {
    title: 'Web Accessibility Guidelines (WCAG)',
    url: 'https://example.com/accessibility',
    host: 'example.com',
    snippet: 'Make your websites accessible to everyone. Learn WCAG guidelines, semantic HTML, ARIA attributes, and testing tools for inclusive web development.',
    keywords: ['accessibility', 'wcag', 'a11y', 'inclusive', 'web', 'standards']
  },
  {
    title: 'MongoDB Database Tutorial',
    url: 'https://example.com/mongodb-tutorial',
    host: 'example.com',
    snippet: 'Get started with MongoDB, the popular NoSQL database. Learn about documents, collections, queries, indexing, and data modeling for modern applications.',
    keywords: ['mongodb', 'database', 'nosql', 'backend', 'data', 'storage']
  },
  {
    title: 'Vue.js Framework Documentation',
    url: 'https://vuejs.org',
    host: 'vuejs.org',
    snippet: 'The Progressive JavaScript Framework. Vue.js is approachable, versatile, and performant. Build user interfaces with an incrementally adoptable ecosystem.',
    keywords: ['vue', 'javascript', 'framework', 'frontend', 'ui', 'components']
  },
  {
    title: 'Cybersecurity Best Practices for Developers',
    url: 'https://example.com/security-practices',
    host: 'example.com',
    snippet: 'Protect your applications from common security vulnerabilities. Learn about authentication, authorization, encryption, and secure coding practices.',
    keywords: ['security', 'cybersecurity', 'authentication', 'encryption', 'development', 'best practices']
  },
  {
    title: 'Machine Learning Basics for Beginners',
    url: 'https://example.com/ml-basics',
    host: 'example.com',
    snippet: 'Introduction to machine learning concepts, algorithms, and applications. Start your journey into AI with practical examples and clear explanations.',
    keywords: ['machine learning', 'ai', 'artificial intelligence', 'algorithms', 'data science']
  },
  {
    title: 'Cloud Computing with AWS',
    url: 'https://example.com/aws-guide',
    host: 'example.com',
    snippet: 'Learn Amazon Web Services fundamentals including EC2, S3, Lambda, and more. Build scalable cloud applications with the leading cloud platform.',
    keywords: ['aws', 'cloud', 'amazon', 'infrastructure', 'deployment', 'services']
  },
  {
    title: 'Agile Development Methodology',
    url: 'https://example.com/agile-methodology',
    host: 'example.com',
    snippet: 'Understand Agile principles, Scrum framework, and iterative development. Improve team collaboration and deliver value faster with Agile practices.',
    keywords: ['agile', 'scrum', 'methodology', 'development', 'project management', 'team']
  }
];
