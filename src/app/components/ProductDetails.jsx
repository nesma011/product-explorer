"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft } from "lucide-react";

export default function ProductDetails({ product }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </Link>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-8">
              {/* Wishlist Button */}
              <div className="absolute top-4 right-4 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-red-50 transition-all duration-200 hover:scale-110 cursor-pointer">
                <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
              </div>

              {/* Rating Badge */}
              {product.rating && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  <span>{product.rating.rate}</span>
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-96 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col">
            {/* Category */}
            {product.category && (
              <span className="inline-block w-fit px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                {product.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating Details */}
            {product.rating && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating.rate)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mb-6">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Product Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl">
                <Truck className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-pink-50 p-4 rounded-xl">
                <Shield className="w-6 h-6 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Quality Guarantee</p>
                  <p className="text-sm text-gray-600">100% Authentic</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <div className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-lg">Add to Cart</span>
              </div>
              
              <div className="px-6 flex items-center justify-center bg-white border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-200 hover:scale-105 cursor-pointer">
                <Heart className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}