"use client";

import React, { useState } from 'react';
import { ShoppingCart, Minus, Plus, RotateCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const sizes = ['YS', 'YM', 'YL', 'S', 'M', 'L', 'XL', 'XXL'];

interface SizeQuantity {
  size: string;
  quantity: number;
}

const DCDCHoodiePage = () => {
  const [selectedSizes, setSelectedSizes] = useState<SizeQuantity[]>([]);
  const [showBackView, setShowBackView] = useState(false);

  const addSize = () => {
    setSelectedSizes([...selectedSizes, { size: 'S', quantity: 1 }]);
  };

  const removeSize = (index: number) => {
    setSelectedSizes(selectedSizes.filter((_, i) => i !== index));
  };

  const updateSize = (index: number, size: string) => {
    const newSizes = [...selectedSizes];
    newSizes[index].size = size;
    setSelectedSizes(newSizes);
  };

  const updateQuantity = (index: number, change: number) => {
    const newSizes = [...selectedSizes];
    const newQuantity = newSizes[index].quantity + change;
    if (newQuantity > 0) {
      newSizes[index].quantity = newQuantity;
      setSelectedSizes(newSizes);
    }
  };

  const calculateTotal = () => {
    const pricePerItem = 34.99;
    return selectedSizes.reduce((total, item) => total + (item.quantity * pricePerItem), 0);
  };

  const addToCart = () => {
    console.log('Adding to cart:', selectedSizes);
  };

  return (
    <div className="min-h-screen bg-[#DAC2A8]">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="w-1/4">
              <Link href="/">
                <Image
                  src="/images/DcDcLogo.png"
                  alt="DCDC Logo"
                  width={64}
                  height={64}
                  className="object-contain cursor-pointer"
                />
              </Link>
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

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Product Header for Mobile */}
          <div className="md:hidden mb-6">
            <h1 className="text-3xl font-bold text-black mb-2">DCDC Hoodie</h1>
            <p className="text-2xl font-bold text-black">$34.99</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <Card className="bg-white shadow-none">
                <CardContent className="p-0">
                  <div className="relative w-full h-[500px] bg-gray-50 rounded-lg">
                    <Image
                      src={showBackView ? "/images/WhiteSweatshirtBack.png" : "/images/WhiteSweatshirtFront.png"}
                      alt="DCDC Hoodie"
                      fill
                      className="object-contain p-4"
                    />
                    <button
                      onClick={() => setShowBackView(!showBackView)}
                      className="absolute right-4 bottom-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                      title={showBackView ? "Show Front" : "Show Back"}
                    >
                      <RotateCw className="h-5 w-5 text-black" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div>
              {/* Product Header for Desktop */}
              <div className="hidden md:block mb-8">
                <h1 className="text-4xl font-bold text-black mb-2">DCDC Hoodie</h1>
                <p className="text-3xl font-bold text-black">$34.99</p>
              </div>

              <div className="space-y-6">
                {selectedSizes.map((sizeObj, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <select
                      value={sizeObj.size}
                      onChange={(e) => updateSize(index, e.target.value)}
                      className="p-2 border rounded-md bg-white min-w-[100px]"
                    >
                      {sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    
                    <div className="flex items-center gap-2 bg-white rounded-md border px-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{sizeObj.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeSize(index)}
                      className="ml-auto text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  onClick={addSize}
                  className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors font-medium"
                >
                  Add Size
                </button>

                {selectedSizes.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-xl font-semibold mb-4">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    
                    <button
                      onClick={addToCart}
                      className="w-full p-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium text-lg"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DCDCHoodiePage;