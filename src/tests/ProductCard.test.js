import { render, screen } from "@testing-library/react";
import ProductCard from "@/app/components/ProductCard";

describe("ProductCard", () => {
  const product = {
    id: 1,
    title: "Test Product",
    image: "https://via.placeholder.com/150",
  };

  it("renders product title", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();

  });
});
