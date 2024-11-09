"use client";
import React, { useEffect, useState } from "react";
import { products } from "../components/product"; // Import your products array here
import Image from "next/image";
import { BsStarHalf, BsStarFill, BsCart } from "react-icons/bs";

type FoodProps = {
  isCartVisible: boolean;
};

type CartItems = {
  [key: number]: number;
};

export default function Homefoods({ isCartVisible }: FoodProps) {
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensuring this effect runs only on the client side
    setIsClient(true);
    const storedCart = localStorage.getItem("products");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("products", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  const addToCart = (productId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: 0 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const itemInfo = products.find((product) => product.id === Number(key));
        if (itemInfo) {
          totalAmount += Math.floor(cartItems[key] * itemInfo.price);
        }
      }
    }
    return totalAmount;
  };

  if (!isClient) return null; // Ensuring no rendering on server-side

  return (
    <div className="my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12" id="food">
      {isCartVisible && (
        <div className="z-10 fixed p-4 right-0 top-[80px] bg-primary-color w-96 h-screen overflow-y-scroll">
          <p className="text-2xl font-bold">Your order: ${getTotalAmount()}</p>
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <div key={product.id} className="glass my-3 grid grid-cols-5 overflow-hidden">
                  <Image
                    className="rounded-lg w-[100px] h-[100px] object-cover col-span-2"
                    src={product.productImage}
                    alt="Product Image"
                  />
                  <div>
                    <p className="text-xl font-bold pl-2">{cartItems[product.id]} x</p>
                    <p className="product-details flex items-center space-x-4 italic">{product.productName}</p>
                    <p>${product.price}</p>
                  </div>
                  <div className="absolute right-0 bottom-0 gap-2 font-bold">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-600 bg-red-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      <h2 className="text-3xl p-4 w-full text-start">Food Items</h2>
      <div className="grid lg:grid-cols-4 place-items-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[300px] p-5 bg-white rounded-lg glass transition-all duration-200 hover:scale-110"
          >
            <Image
              className="rounded-lg w-[400px] h-[220px] object-cover"
              src={product.productImage}
              alt="img"
            />
            <div className="flex flex-row justify-between items-center mt-5 gap-1">
              <h2 className="font-semibold text-lg">{product.productName}</h2>
              <div className="flex">
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarHalf className="text-brightColor" />
              </div>
              <h3 className="font-semibold text-sm">${product.price}</h3>
              <button
                onClick={() => addToCart(product.id)}
                className="p-3 text-2xl w-14 rounded-xl bg-orange-400 text-white"
              >
                <BsCart className="mx-auto" />
              </button>
              {cartItems[product.id] > 0 && (
                <div className="absolute flex items-center justify-center top-5 left-5 bg-green-500 text-white rounded-full p-1">
                  {cartItems[product.id]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
