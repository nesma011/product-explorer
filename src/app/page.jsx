import { getProducts } from "./lib/api";
import ProductExplorer from "./components/ProductExplorer";

export default async function Home({ searchParams }) {
  const products = await getProducts();
  return <ProductExplorer initialProducts={products} />;
}
