 Product Explorer
A simple Next.js App Router project to explore products with search, sort, and detailed view.

Setup :
Clone the repo:
git clone <https://github.com/nesma011/product-explorer>
cd product-explorer

Install dependencies:
npm install

Run the dev server :
npm run dev

Visit → http://localhost:3000

Testing :
We use Jest + React Testing Library.
Run tests:
npm run test

Tests included:
 * Pure util → sortProducts & filterByQuery.
 * Server-render → ProductCard shows product title/price.
 * Client component → SearchBar interaction triggers callback.

 Server vs Client Components

Server Components:
ProductList, ProductCard
Static rendering, SEO friendly, faster load time.

Client Components:
SearchBar, SortControl
Needed for interactivity (user typing, clicking, etc.).

Choosing Server for static UI and Client only for interactive parts improves performance & reduces JS bundle size.


Performance Techniques :
* next/image → Optimized product images with lazy loading.
* next/font → Google Fonts without extra network requests.
* Dynamic import → PriceBadge is loaded only when needed.
* Server Components → Reduce JS shipped to client.
* Tailwind CSS → Utility-first styling with minimal CSS overhead.


Data Source :
Products are fetched from Fake Store API
It provides sample products with title, price, description, category, and image.


Summary:
* Built with Next.js (App Router).
* Clear separation between Server (rendering) and Client (interactivity).
* Optimized using Next.js performance features.
* Tested with Jest .
* Data powered by Fake Store API.