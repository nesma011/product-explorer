import { getProducts } from "../lib/api";
import ProductExplorer from "../components/ProductExplorer";

export default async function Home() {
  const products = await getProducts();
  return <ProductExplorer initialProducts={products} />;
}
