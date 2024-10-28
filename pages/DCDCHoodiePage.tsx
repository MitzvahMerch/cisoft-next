import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ProductGallery = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DAC2A8' }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6">
          {/* First Product Card */}
          <Card className="bg-white">
            <CardContent className="p-4 relative">
              <div className="w-full h-64 relative">
                <Image
                  src="/images/WhiteSweatshirtFront.png"
                  alt="DCDC Hoodie"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-black">DCDC Hoodie</h2>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 flex justify-center bg-white">
              <p className="text-lg font-bold text-black">$34.99</p>
            </CardFooter>
          </Card>

          {/* Second Product Card */}
          <Card className="bg-white">
            <CardContent className="p-4 relative">
              <div className="w-full h-64 relative">
                <Image
                  src="/images/DcDcBlack.png"
                  alt="DCDC Black Sweatpants"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-black">DCDC Black Sweatpants</h2>
              </div>
            </CardContent>
            <CardFooter className="px-4 py-3 flex justify-center bg-white">
              <p className="text-lg font-bold text-black">$34.99</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;