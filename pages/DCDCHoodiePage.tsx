"use client";

import React, { useState } from 'react';
import { ShoppingCart, Minus, Plus, RotateCw } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
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
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
                  DCDC Fundraiser Store
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/images/PILogo.png"
                alt="PI Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <ShoppingCart className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <span className="text-gray-900">DCDC Hoodie</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-white relative">
                <Image
                  src={showBackView ? "/images/WhiteSweatshirtBack.png" : "/images/WhiteSweatshirtFront.png"}
                  alt="DCDC Hoodie"
                  fill
                  className="object-contain p-4"
                />
                <button
                  onClick={() => setShowBackView(!showBackView)}
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  title={showBackView ? "Show Front" : "Show Back"}
                >
                  <RotateCw className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Product Details Section */}
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold text-gray-900">DCDC Hoodie</h1>
              <p className="text-3xl font-bold text-gray-900">$34.99</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {selectedSizes.map((sizeObj, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border"
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
                    
                    <div className="flex items-center border rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="px-3 py-2 hover:bg-gray-50"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center border-x">{sizeObj.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="px-3 py-2 hover:bg-gray-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeSize(index)}
                      className="ml-auto text-red-600 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {selectedSizes.length === 0 && (
                  <p className="text-gray-500 italic">No sizes selected</p>
                )}

                <button
                  onClick={addSize}
                  className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium text-gray-900"
                >
                  Add Size
                </button>
              </div>

              {selectedSizes.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between text-xl font-semibold mb-4">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <button
                    onClick={addToCart}
                    className="w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DCDCHoodiePage;