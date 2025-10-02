"use client";

export default function SortSelect({ sort, onSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => onSort(e.target.value)}
      className="border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 px-3 py-2 rounded mb-4"
    >
      <option value="">Sort by</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
}
