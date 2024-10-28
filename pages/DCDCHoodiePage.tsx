import React from 'react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Product Image - Left Side */}
        <div className="w-full lg:w-3/4">
          <div className="relative aspect-square">
            <Image
              src="/images/WhiteSweatshirtFront.png"
              alt="DCDC Hoodie Front"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Selection Area - Right Side */}
        <div className="w-full lg:w-1/4 flex flex-col">
          <div className="bg-white p-4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">DCDC Hoodie</h1>
              <select className="w-full border rounded px-3 py-2 mb-2">
                <option value="">Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
              <button className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded">
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