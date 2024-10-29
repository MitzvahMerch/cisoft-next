"use client";

import React from 'react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="p-4">
      {/* Main container with absolute width/height */}
      <div className="grid grid-cols-12 gap-4 mx-auto max-w-[1000px] border-2 border-red-500">  {/* Red border to debug */}
        {/* Left side: Image in fixed container */}
        <div className="col-span-8 border-2 border-black h-[400px]">  {/* Black border for image container */}
          <div className="relative w-full h-full">
            <Image
              src="/images/WhiteSweatshirtFront.png"
              alt="DCDC Hoodie"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side: Controls */}
        <div className="col-span-4 border-2 border-black p-4">  {/* Black border for controls */}
          <h1 className="text-xl font-bold mb-4">DCDC Hoodie</h1>
          <p className="text-lg mb-4">$34.99</p>
          <select className="w-full mb-4 border p-2">
            <option value="">Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
          <button className="w-full bg-gray-200 p-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;