# Product Explorer

A modern Next.js 15 application showcasing product exploration with search, filtering, and detailed product views. Built with the App Router architecture and optimized for performance.

## Features

- **Product Browsing**: View products with images, titles, and prices
- **Search Functionality**: Real-time product search
- **Sorting Options**: Sort products by price (ascending/descending)
- **Product Details**: Detailed product pages with full descriptions
- **Responsive Design**: Mobile-first responsive layout
- **Performance Optimized**: Server-side rendering with client-side interactivity

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **Data Source**: Fake Store API

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   ├── page.jsx          # Home page
│   └── product/
│       └── [slug]/
│           └── page.jsx   # Dynamic product pages
├── components/            # Reusable React components
│   ├── PriceBadge.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetails.jsx
│   ├── ProductExplorer.jsx
│   ├── SearchBar.jsx
│   └── SortSelect.jsx
├── lib/                   # Utility functions and API
│   ├── api.js            # API functions
│   └── utils.js          # Helper utilities
└── tests/                 # Test files
    ├── ProductCard.test.js
    ├── SearchBar.test.js
    └── utils.test.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Testing

Run the test suite using Jest and React Testing Library:

```bash
npm run test
```

### Test Coverage

- **Unit Tests**: Utility functions (`sortProducts`, `filterByQuery`)
- **Component Tests**: React component rendering and interactions
- **Integration Tests**: User interactions and callbacks

## Architecture

### Server vs Client Components

**Server Components** (Static rendering, SEO-friendly):
- `ProductCard` - Product display cards
- `ProductDetails` - Individual product pages
- `ProductExplorer` - Main product listing (server-rendered)

**Client Components** (Interactive features):
- `SearchBar` - Real-time search input
- `SortSelect` - Sorting controls

This separation optimizes performance by minimizing JavaScript bundle size while maintaining interactivity where needed.

## Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization with lazy loading
- **Server Components**: Reduced client-side JavaScript bundle
- **Dynamic Imports**: Code splitting for non-critical components
- **ISR (Incremental Static Regeneration)**: Product pages revalidate every 60 seconds
- **Tailwind CSS**: Utility-first CSS with minimal overhead

## Data Source

Products are fetched from the [Fake Store API](https://fakestoreapi.com/), providing:
- Product titles and descriptions
- Pricing information
- Product categories
- High-quality product images

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run test suite

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).