import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Wishlist Icon */}
      <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-red-50 transition-all duration-200 hover:scale-110 cursor-pointer">
        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </div>

      {/* Badge Rating*/}
      {product.rating && product.rating.rate >= 4 && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          ⭐ {product.rating.rate}
        </div>
      )}

      <Link href={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          {product.category && (
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold rounded-full mb-2">
              {product.category}
            </span>
          )}

          {/* Title */}
          <h2 className="font-bold text-lg text-gray-800 line-clamp-2 min-h-[3.5rem] mb-3 group-hover:text-purple-600 transition-colors">
            {product.title}
          </h2>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </p>
            </div>
            
            {product.rating && (
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span className="font-semibold text-gray-700">{product.rating.rate}</span>
                <span className="text-gray-400">({product.rating.count})</span>
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}