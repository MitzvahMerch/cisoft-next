"use client";

import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const DCDCHoodiePage = () => {
  const [showBackView, setShowBackView] = useState(false);
  const [total, setTotal] = useState(0);

  const [sizes, setSizes] = useState({
    ym: 0,
    yl: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
  });

  const updateSize = (size, value) => {
    const newValue = value === '' ? 0 : parseInt(value);
    const newSizes = { ...sizes, [size]: newValue };
    setSizes(newSizes);

    const newTotal = Object.values(newSizes).reduce((sum, current) => sum + current, 0);
    setTotal(newTotal);
  };

  const addToCart = () => {
    if (total === 0) {
      alert("Please select at least one size");
      return;
    }
    console.log('Adding to cart:', sizes);
  };

  return (
    <div className="min-h-screen bg-[#DAC2A8]">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/DcDcLogo.png"
                  alt="DCDC Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700">
                DCDC Fundraiser Store
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/images/PILogo.png"
                alt="PI Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <Card className="bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/4] relative">
                <Image
                  src={showBackView ? "/images/WhiteSweatshirtBack.png" : "/images/WhiteSweatshirtFront.png"}
                  alt="DCDC Hoodie"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setShowBackView(!showBackView)}
                  className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full"
                >
                  {showBackView ? "Show Front" : "Show Back"}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Product Details & Form */}
          <Card className="bg-white">
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold text-black mb-2">DCDC Hoodie</h1>
              <p className="text-xl font-semibold text-black mb-6">$34.99</p>

              {/* Size Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.keys(sizes).map((sizeKey) => (
                  <div key={sizeKey}>
                    <label className="block text-sm font-medium mb-2">{sizeKey.toUpperCase()}</label>
                    <input
                      type="number"
                      min="0"
                      value={sizes[sizeKey] || ''}
                      onChange={(e) => updateSize(sizeKey, e.target.value)}
                      className="w-full p-2 border rounded-md"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Total</label>
                <input
                  type="text"
                  value={total}
                  className="w-full p-2 border rounded-md bg-gray-50"
                  disabled
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2 font-medium"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Product Description */}
        <div className="mt-8 text-sm text-gray-600 text-center">
          <p>*Logo placements are approximate. An art approval will be sent within 1 business day of order.</p>
        </div>
      </div>
    </div>
  );
};

export default DCDCHoodiePage;
