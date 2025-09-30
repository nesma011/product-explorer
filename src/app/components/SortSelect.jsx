"use client";

export default function SortSelect({ sort, onSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => onSort(e.target.value)}
      className="border px-3 py-2 rounded mb-4"
    >
      <option value="">Sort by</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
}
