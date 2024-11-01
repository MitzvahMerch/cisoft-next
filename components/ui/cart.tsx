"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';
import Link from 'next/link';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface SizeQuantity {
  size: string;
  quantity: number;
}

interface CartItem {
  productId: string;
  productName: string;
  price: number;
  sizes: SizeQuantity[];
  image: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.sizes.reduce((sum, size) => sum + (size.quantity * item.price), 0);
    return total + itemTotal;
  }, 0);

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.sizes.reduce((sum, size) => sum + size.quantity, 0);
  }, 0);

  const removeItem = (productId: string) => {
    const newCart = cartItems.filter(item => item.productId !== productId);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // PayPal integration functions
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: totalPrice.toFixed(2),
          currency_code: "USD"
        },
        description: `DCDC Fundraiser Store Order - ${totalItems} items`
      }]
    });
  };

  const handlePaypalApprove = async (data: any, actions: any) => {
    try {
      setIsProcessing(true);
      
      // Complete the PayPal transaction
      const details = await actions.order.capture();
      
      // Prepare order data for Firestore
      const orderData = {
        items: cartItems.map(item => ({
          productId: item.productId,
          productName: item.productName,
          price: item.price,
          sizes: item.sizes,
          totalQuantity: item.sizes.reduce((sum, size) => sum + size.quantity, 0),
          itemTotal: item.price * item.sizes.reduce((sum, size) => sum + size.quantity, 0)
        })),
        orderSummary: {
          totalAmount: totalPrice,
          totalItems: totalItems,
          currency: 'USD'
        },
        paymentDetails: {
          paypalOrderId: details.id,
          paymentStatus: details.status,
          payerEmail: details.payer.email_address,
          payerName: `${details.payer.name.given_name} ${details.payer.name.surname}`,
          transactionDate: new Date().toISOString()
        },
        shippingAddress: {
          fullName: details.purchase_units[0].shipping.name.full_name,
          address: details.purchase_units[0].shipping.address
        },
        orderStatus: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Save order to Firestore
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, orderData);

      // Clear cart after successful order
      localStorage.removeItem('cart');
      setCartItems([]);

      alert(`Thank you for your order! Your order ID is: ${docRef.id}`);
      
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DAC2A8' }}>
      {/* Navigation Header */}
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
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="max-w-4xl mx-auto p-8">
        <Card className="bg-white">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-black mb-6">Shopping Cart ({totalItems} items)</h1>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
                <Link href="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex gap-4 p-4 border rounded-lg">
                      {/* Product Image */}
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h2 className="font-semibold text-black">{item.productName}</h2>
                          <button 
                            onClick={() => removeItem(item.productId)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        
                        {/* Size Quantities */}
                        <div className="mt-2 space-y-1">
                          {item.sizes.map((size) => (
                            <div key={size.size} className="flex items-center text-sm text-gray-600">
                              <span className="w-12">{size.size}:</span>
                              <span className="ml-2">Qty: {size.quantity}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Item Total */}
                        <div className="mt-2 text-right">
                          <p className="text-black font-medium">
                            ${(item.price * item.sizes.reduce((sum, size) => sum + size.quantity, 0)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary and PayPal Integration */}
                <div className="mt-8 border-t pt-6">
                  <div className="flex justify-between text-xl font-bold text-black mb-6">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  {/* PayPal Buttons */}
                  <div className={`${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}>
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={handlePaypalApprove}
                      style={{ layout: "horizontal" }}
                    />
                  </div>

                  {isProcessing && (
                    <div className="text-center mt-4 text-gray-600">
                      Processing your order...
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;