"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, RotateCw } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

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
  slug: string;
}

const ProductGallery = () => {
  const [showHoodieBack, setShowHoodieBack] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 19,
    hours: 23,
    minutes: 59
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 19);
      endDate.setHours(23, 59, 59, 999);

      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

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
      imageScale: "50%",
      slug: "DCDCHoodiePage"
    },
    {
      id: 2,
      name: "DCDC Black Sweatpants",
      price: 34.99,
      image: "/images/DcDcBlack.png",
      imageScale: "100%",
      slug: "dcdc-black-sweatpants"
    },
    {
      id: 3,
      name: "DCDC Dance Mom Crew",
      price: 34.99,
      image: "/images/DanceMomCrew.png",
      imageScale: "70%",
      slug: "dcdc-dance-mom-crew"
    },
    {
      id: 4,
      name: "DCDC Customizable Jersey",
      price: 34.99,
      image: "/images/JerseyExample.png",
      imageScale: "80%",
      slug: "dcdc-customizable-jersey"
    },
    {
      id: 5,
      name: "Dance Mom White Sweatpants",
      price: 34.99,
      image: "/images/DanceMomSweats.png",
      imageScale: "100%",
      slug: "dance-mom-white-sweatpants"
    },
    {
      id: 6,
      name: "DCDC White Sweatpants",
      price: 34.99,
      image: "/images/TeamDcDcWhite.png",
      imageScale: "100%",
      slug: "dcdc-white-sweatpants"
    }
  ];

  const handleToggleImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
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
              <Image
                src="/images/DcDcLogo.png"
                alt="DCDC Logo"
                width={64}
                height={64}
                className="object-contain"
              />
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
  <Link href={`/${product.slug}`} key={product.id} className="block"> {/* Removed /pages/ from path */}
    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white h-full flex flex-col">
      <CardContent className="p-4 relative flex-grow flex flex-col items-center"> {/* Added flex and centering */}
        <div className="w-full h-64 relative overflow-hidden flex items-center justify-center"> {/* Added flex centering */}
          <Image
            src={getProductImage(product)}
            alt={product.name}
            fill
            className="object-contain"
            style={{ 
              objectFit: 'contain',
              maxHeight: '100%',
              width: product.imageScale
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
        <div className="mt-4 text-center w-full"> {/* Added text-center */}
          <h2 className="text-lg font-semibold text-black hover:text-gray-700 transition-colors">{product.name}</h2>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 flex justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <p className="text-lg font-bold text-black">${product.price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  </Link>
))}
        </div>

        {/* Countdown Timer */}
        <div className="mt-12 mb-8 text-center bg-white/90 rounded-lg p-6 max-w-md mx-auto shadow-lg">
          <h2 className="text-xl font-bold text-black mb-4">Fundraiser Ends In:</h2>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <span className="text-5xl font-bold text-black">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <p className="text-sm text-black mt-1">Days</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-black">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <p className="text-sm text-black mt-1">Hours</p>
            </div>
            <div className="text-center">
              <span className="text-5xl font-bold text-black">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <p className="text-sm text-black mt-1">Minutes</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductGallery;