import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="w-1/4">
              <Image
                src="/images/DcDcLogo.png"
                alt="DCDC Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="text-2xl font-bold text-black text-center hover:text-gray-700 transition-colors">
                DCDC Fundraiser Store
              </Link>
            </div>
            
            <div className="w-1/4 flex justify-end items-center">
              <Image
                src="/images/PILogo.png"
                alt="PI Logo"
                width={64}
                height={64}
                className="object-contain mr-4"
              />
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Content */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Product Image Container */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg aspect-square relative">
            <Image
              src="/images/WhiteSweatshirtFront.png"
              alt="DCDC Hoodie Front"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Product Details Container */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">DCDC Hoodie</h1>
            
            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Size
              </label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;