"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

interface SizeQuantity {
  size: string;
  quantity: number;
}

const DCDCHoodiePage = () => {
  const [sizeSelections, setSizeSelections] = useState<SizeQuantity[]>([
    { size: "YS", quantity: 0 },
    { size: "YM", quantity: 0 },
    { size: "YL", quantity: 0 },
    { size: "Small", quantity: 0 },
    { size: "Medium", quantity: 0 },
    { size: "Large", quantity: 0 },
    { size: "X-Large", quantity: 0 },
    { size: "XXL", quantity: 0 }
  ]);

  const updateQuantity = (size: string, increment: boolean) => {
    setSizeSelections(prev => prev.map(item => {
      if (item.size === size) {
        return {
          ...item,
          quantity: increment ? item.quantity + 1 : Math.max(0, item.quantity - 1)
        };
      }
      return item;
    }));
  };

  const totalItems = sizeSelections.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = totalItems * 34.99;

  return (
    <div className="min-h-screen flex items-start justify-center p-8" style={{ backgroundColor: '#DAC2A8' }}>
      <Card className="w-full max-w-[1200px] p-6 bg-white">
        <CardContent className="flex gap-8">
          {/* Left: Product Image */}
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

          {/* Right: Product Info & Controls */}
          <div className="w-1/3">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-black">DCDC Hoodie</h1>
              <p className="text-xl text-black">$34.99</p>
              
              {/* Size Selection Grid - Two Columns */}
              <div className="grid grid-cols-2 gap-2">
                {sizeSelections.map((item) => (
                  <div key={item.size} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                    <span className="text-black font-medium w-12">{item.size}</span>
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => updateQuantity(item.size, false)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="h-4 w-4 text-black" />
                      </button>
                      <span className="text-black w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.size, true)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="h-4 w-4 text-black" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total and Add to Cart */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-black font-medium">Total Items:</span>
                  <span className="text-black">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black font-medium">Total Price:</span>
                  <span className="text-black">${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-gray-200 hover:bg-gray-300 p-2 rounded-md text-black disabled:opacity-50"
                  disabled={totalItems === 0}
                >
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