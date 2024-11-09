"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
      setIsCartVisible((prev) => !prev);
    };
  
    return (
      <div>
        <Navbar toggleCartVisibility={toggleCartVisibility} isCartVisible={isCartVisible} />
<div className=" mx-auto h-[500px] w-auto md:h-[500px] md:w-[700px] border-[3px] border-orange-600" >
        <h1 className="text-4xl font-bold text-center pb-6 text-orange-500  ">About Us</h1>
        <p className="md:text-lg text-center font-bold">
        TalBites is a premier food e-commerce platform dedicated to bringing delicious, high-quality meals right to your doorstep. We pride ourselves on offering a diverse menu that caters to all tastes, ensuring fresh, flavorful, and convenient dining experiences for every customer.
        </p>
        <br />
       <p className="text-lg text-center font-bold text-slate-600"> The TalBites team is a group of passionate food enthusiasts, dedicated to making your online dining experience exceptional. From our skilled chefs to our customer support experts, each member brings expertise and commitment to deliver the finest quality meals and top-notch service every time.
        </p>

       
      
       </div>
       <Footer/>
       </div>
  )
}
