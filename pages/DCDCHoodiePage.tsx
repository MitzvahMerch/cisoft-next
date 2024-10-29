import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ProductPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DAC2A8' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Using the exact same card structure that works in the gallery */}
        <Card className="bg-white max-w-4xl mx-auto">
          <CardContent className="p-4 relative">
            <div className="w-full h-[600px] relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/WhiteSweatshirtFront.png"
                alt="DCDC Hoodie"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Simple selection controls */}
            <div className="mt-6 space-y-4">
              <h1 className="text-2xl font-bold text-black text-center">DCDC Hoodie</h1>
              <div className="max-w-xs mx-auto space-y-4">
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
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-4 py-3 flex justify-center bg-white">
            <p className="text-lg font-bold text-black">$34.99</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;