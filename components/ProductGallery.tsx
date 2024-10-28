"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, RotateCw } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductImages {
  front: string;
  back: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  images?: ProductImages;
  image?: string;
  hasMultipleViews?: boolean;
  imageScale?: string;
}

const ProductGallery = () => {
  const [showHoodieBack, setShowHoodieBack] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2024-03-15T23:59:59');
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "DCDC Hoodie",
      price: 34.99,
      images: {
        front: "/images/WhiteSweatshirtFront.png",
        back: "/images/WhiteSweatshirtBack.png"
      },
      hasMultipleViews: true,
      imageScale: "50%"
    },
    {
      id: 2,
      name: "DCDC Black Sweatpants",
      price: 34.99,
      image: "/images/DcDcBlack.png",
      imageScale: "100%"
    },
    {
      id: 3,
      name: "DCDC Dance Mom Crew",
      price: 34.99,
      image: "/images/DanceMomCrew.png",
      imageScale: "70%"
    },
    {
      id: 4,
      name: "DCDC Customizable Jersey",
      price: 34.99,
      image: "/images/JerseyExample.png",
      imageScale: "80%"  // Increased zoom level for jersey
    },
    {
      id: 5,
      name: "Dance Mom White Sweatpants",
      price: 34.99,
      image: "/images/DanceMomSweats.png",
      imageScale: "100%"
    },
    {
      id: 6,
      name: "DCDC White Sweatpants",
      price: 34.99,
      image: "/images/TeamDcDcWhite.png",
      imageScale: "100%"
    }
  ];

  const handleProductClick = (productId: number) => {
    console.log(`Navigating to product ${productId}`);
  };

  const handleToggleImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowHoodieBack(!showHoodieBack);
  };

  const getProductImage = (product: Product): string => {
    if (product.id === 1 && product.images) {
      return showHoodieBack ? product.images.back : product.images.front;
    }
    return product.image || '';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DAC2A8' }}>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="w-1/4">
              <img
                src="/images/DcDcLogo.png"
                alt="DCDC Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-bold text-black text-center">DCDC Fundraiser Store</h1>
            </div>
            
            <div className="w-1/4 flex justify-end items-center">
              <img
                src="/images/PILogo.png"  // Fixed image path
                alt="PI Logo"
                className="h-16 w-16 object-contain mr-4"
              />
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white"
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className="p-4 relative">
                <div className="w-full h-64 relative overflow-hidden">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      width: product.imageScale,
                      objectFit: 'contain',
                      maxHeight: '100%'
                    }}
                  />
                </div>
                {product.hasMultipleViews && (
                  <button
                    onClick={handleToggleImage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                    title={showHoodieBack ? "Show Front" : "Show Back"}
                  >
                    <RotateCw className="h-5 w-5 text-black" />
                  </button>
                )}
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-black">{product.name}</h2>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-3 flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <p className="text-lg font-bold text-black">${product.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="mt-12 mb-8 text-center bg-white/90 rounded-lg p-6 max-w-md mx-auto shadow-lg">
          <h2 className="text-xl font-bold text-black mb-4">Fundraiser Ends In:</h2>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <span className="text-5xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</span>
              <p className="text-sm text-black mt-1">Days</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</span>
              <p className="text-sm text-black mt-1">Hours</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <p className="text-sm text-black mt-1">Minutes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductGallery;