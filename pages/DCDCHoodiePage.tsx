"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const ProductPage = () => {
  return (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto flex gap-8">  {/* Reduced from 6xl to 4xl */}
        {/* Left: Product Image Container - Reduced size */}
        <div className="w-2/3 bg-white rounded-lg overflow-hidden border-2 border-black">  {/* Changed from w-3/4, added border */}
          <div className="relative h-[300px]">  {/* Reduced from 500px to 300px */}
            <Image
              src="/images/WhiteSweatshirtFront.png"
              alt="DCDC Hoodie"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Selection Panel */}
        <Card className="w-1/3 h-fit p-6 space-y-4">  {/* Changed from w-1/4 to match new proportions */}
          <h1 className="text-xl font-bold">DCDC Hoodie</h1>
          <p className="text-lg font-semibold">$34.99</p>
          <select className="w-full border rounded px-3 py-2">
            <option value="">Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
          <button className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Add to Cart
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;