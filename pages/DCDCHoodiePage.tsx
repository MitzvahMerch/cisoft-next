"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto flex gap-8">
        {/* Left: Product Image Container */}
        <div className="w-3/4 bg-white rounded-lg overflow-hidden">
          <div className="relative aspect-square">
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
        <Card className="w-1/4 h-fit p-6 space-y-4">
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