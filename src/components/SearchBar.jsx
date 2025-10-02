"use client";

export default function SearchBar({ query, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      className=" border-2 px-3 py-2 rounded w-full mb-4 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
}
