"use client";

import React, { useState } from 'react';
import { ShoppingCart, RotateCw } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Define TypeScript interfaces
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
}

const ProductGallery = () => {
  const [showHoodieBack, setShowHoodieBack] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "DCDC Hoodie",
      price: 34.99,
      images: {
        front: "/Images/WhiteSweatshirtFront.png",
        back: "/Images/WhiteSweatshirtBack.png"
      },
      hasMultipleViews: true
    },
    {
      id: 2,
      name: "DCDC Black Sweatpants",
      price: 34.99,
      image: "/Images/DcDcBlack.png",
    },
    {
      id: 3,
      name: "DCDC Dance Mom Crew",
      price: 34.99,
      image: "/Images/DanceMomCrew.png",
    },
    {
      id: 4,
      name: "DCDC Customizable Jersey",
      price: 34.99,
      image: "/Images/JerseyExample.png",
    },
    {
      id: 5,
      name: "Dance Mom White Sweatpants",
      price: 34.99,
      image: "/Images/DanceMomSweats.png",
    },
    {
      id: 6,
      name: "DCDC White Sweatpants",
      price: 34.99,
      image: "/Images/TeamDCDCWhite.png",
    }
  ];

  const handleProductClick = (productId: number) => {
    // Navigate to product detail page
    console.log(`Navigating to product ${productId}`);
  };

  const handleToggleImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click event
    setShowHoodieBack(!showHoodieBack);
  };

  const getProductImage = (product: Product): string => {
    if (product.id === 1 && product.images) {
      return showHoodieBack ? product.images.back : product.images.front;
    }
    return product.image || '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Left Image */}
            <div className="w-1/4">
              <img
                src="/Images/DcDcLogo.png"
                alt="DCDC Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            
            {/* Centered Store Name */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-bold text-center">DCDC Fundraiser Store</h1>
            </div>
            
            {/* Right Section with Image and Cart */}
            <div className="w-1/4 flex justify-end items-center">
              <img
                src="/Images/PiLogo.png"
                alt="PI Logo"
                className="h-16 w-16 object-contain mr-4"
              />
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className="p-4 relative">
                <img
                  src={getProductImage(product)}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {product.hasMultipleViews && (
                  <button
                    onClick={handleToggleImage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                    title={showHoodieBack ? "Show Front" : "Show Back"}
                  >
                    <RotateCw className="h-5 w-5 text-gray-600" />
                  </button>
                )}
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                </div>
              </CardContent>
              <CardFooter className="px-4 py-3 bg-gray-50">
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductGallery;