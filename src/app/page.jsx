import { getProducts } from "./lib/api";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
