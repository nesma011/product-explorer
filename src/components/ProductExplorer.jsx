"use client";

import { useState, useEffect } from "react";
import { filterByQuery, sortProducts } from "../lib/utils";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";

export default function ProductExplorer({ initialProducts }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    let result = filterByQuery(initialProducts, query);
    result = sortProducts(result, sort);
    setProducts(result);
  }, [query, sort, initialProducts]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Explorer</h1>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <SearchBar query={query} onSearch={setQuery} />
        </div>
        <SortSelect sort={sort} onSort={setSort} />
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
