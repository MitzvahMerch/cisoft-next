"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const DCDCHoodiePage = () => {
  return (
    <div className="min-h-screen flex items-start justify-center p-8">
      {/* Main Container - same structure as gallery */}
      <Card className="w-full max-w-[1200px] p-6 bg-white">
        <CardContent className="flex gap-8">
          {/* Left: Product Image - using gallery proportions */}
          <div className="w-2/3">
            <div className="relative h-[400px] border-2 border-black">
              <Image
                src="/images/WhiteSweatshirtFront.png"
                alt="DCDC Hoodie"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Product Info & Controls - using gallery styling */}
          <div className="w-1/3">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">DCDC Hoodie</h1>
              <p className="text-xl">$34.99</p>
              <div className="space-y-4">
                <select className="w-full border rounded-md p-2">
                  <option value="">Select Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>X-Large</option>
                </select>
                <button className="w-full bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DCDCHoodiePage;