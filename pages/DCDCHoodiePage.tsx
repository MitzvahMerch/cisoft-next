import React from 'react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Product Title - Fixed Top Left */}
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-bold">DCDC Hoodie</h1>
      </div>

      {/* Product Controls - Fixed Top Left under title */}
      <div className="absolute top-20 left-8 w-48">
        <select className="w-32 border border-gray-300 rounded px-2 py-1 text-sm">
          <option value="">Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
        </select>
        <button className="mt-2 px-4 py-1 bg-gray-200 text-sm rounded">
          Add to Cart
        </button>
      </div>

      {/* Product Image - Centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <Image
          src="/images/WhiteSweatshirtFront.png"
          alt="DCDC Hoodie Front"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ProductPage;