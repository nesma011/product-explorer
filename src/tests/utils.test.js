import { sortProducts, filterByQuery } from "@/app/lib/utils";

describe("utils functions", () => {
  const products = [
    { id: 1, title: "Shoes", price: 50 },
    { id: 2, title: "Shirt", price: 30 },
    { id: 3, title: "Hat", price: 70 },
  ];

  it("sorts products by price ascending", () => {
    const result = sortProducts(products, "price_asc");
    expect(result[0].price).toBe(30);
    expect(result[2].price).toBe(70);
  });

  it("filters products by query", () => {
    const result = filterByQuery(products, "sh");
    expect(result.length).toBe(2); // Shoes + Shirt
  });
});
