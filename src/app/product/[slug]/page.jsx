import ProductDetails from "@/app/components/ProductDetails";
import { getProductById } from "@/app/lib/api";

// ISR: Revalidate this page every 60 seconds
export const revalidate = 60;

export default async function ProductPage({ params }) {
  const product = await getProductById(params.slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductDetails product={product} />;
}
