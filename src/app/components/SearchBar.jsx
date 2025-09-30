"use client";

export default function SearchBar({ query, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      className="border px-3 py-2 rounded w-full mb-4"
    />
  );
}
