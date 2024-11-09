"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Homefoods from "../components/homefood";
import Footer from "../components/Footer";

export default function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleCartVisibility={toggleCartVisibility} isCartVisible={isCartVisible} />
      <Homefoods isCartVisible={isCartVisible} />
      <Footer />
    </div>
  );
}
