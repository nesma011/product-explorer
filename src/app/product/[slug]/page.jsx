import ProductDetails from "@/components/ProductDetails";
import { getProductById } from "@/lib/api";

// ISR: Revalidate this page every 60 seconds
export const revalidate = 60;

export default async function ProductPage({ params }) {
  const product = await getProductById(params.slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
