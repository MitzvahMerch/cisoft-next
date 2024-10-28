import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/DcDcLogo.png"
                alt="DCDC Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="ml-2 text-lg font-semibold">DCDC Fundraiser Store</span>
            </div>
            <div>
              <button className="p-2">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar - Brand Info */}
          <div className="w-full lg:w-48 flex-shrink-0 mb-6 lg:mb-0">
            <div className="space-y-4">
              <div>
                <Image
                  src="/images/DcDcLogo.png"
                  alt="Team DCDC"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="font-semibold">TEAM</div>
              <div className="text-red-600 font-bold text-xl">DCDC</div>
              <div className="text-sm text-gray-600">DCDC Fundraiser Store</div>
              <div className="border-t pt-4">
                <Image
                  src="/images/PILogo.png"
                  alt="Potomac Imprints"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center - Product Image */}
          <div className="w-full lg:flex-1 lg:px-12">
            <div className="relative aspect-square max-w-2xl mx-auto">
              <Image
                src="/images/WhiteSweatshirtFront.png"
                alt="DCDC Hoodie Front"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Sidebar - Product Controls */}
          <div className="w-full lg:w-48 flex-shrink-0 mt-6 lg:mt-0">
            <div className="space-y-4">
              <h1 className="text-xl font-bold">DCDC Hoodie</h1>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Size
                </label>
                <select className="w-full border rounded px-2 py-1 text-sm">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>X-Large</option>
                </select>
              </div>
              <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 text-sm rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;