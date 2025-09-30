


//filter products by search query
export function filterByQuery(products, query) {
  if (!query) return products;
  return products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
}

// arrange products by price
export function sortProducts(products, sortType) {
  if (sortType === "price_asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (sortType === "price_desc") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return products;
}
