"use client";

export default function PriceBadge({ price }) {
  const color = price > 50 ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800";

  return (
    <span className={`px-2 py-1 rounded text-sm font-semibold ${color}`}>
      ${price}
    </span>
  );
}
