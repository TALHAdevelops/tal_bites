import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="py-10 bg-orange-900 sm:pt-16 1g:pt-24">
      <div className="px-4 mx-auto sm:px-6 1g:px-8 max-w-7x1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
          <h1 className="text-white font-bold text-xl">TalBites</h1>
          <div>
            <p className="font-semibold text-white">Help</p>
            <ul className="mt-8 space-y-4 text-gray-200">
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Q&A</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Partners</p>
            <ul className="mt-8 space-y-4 text-gray-200">
              <li>
                <Link href="#">Our silver partners</Link>
              </li>
              <li>
                <Link href="#">Our platinum partners</Link>
              </li>
            </ul>
            </div>
          <div> 
             <p className="font-semibold text-white">Join us</p>
<ul className="mt-8 space-y-4 text-gray-200">
  <li><Link href="#">HR</Link></li>
  <li><Link href="#">Job Offers</Link></li>
</ul>
</div>
</div>
<div className="mt-20 md:mt-28 2xl:mt-32">
  <div className="sm:flex items-center sm:space-x-6">
    <ul className="flex gap-5 text-white text-3xl mb-3 sm:mb-0">
      <li><Link href="https://www.facebook.com/talhapro.stra" target="_blank"><AiFillFacebook/></Link></li>
      <li><Link href="https://www.instagram.com/tal_ha.o7/" target="_blank"><AiFillInstagram/></Link></li>
      <li><Link href="https://github.com/TALHAdevelops" target="_blank"><AiFillGithub/></Link></li>
    </ul>
    <ul className="flex gap-6 text-gray-200">
      <li><Link href="#">Privacy Policy</Link></li>
      <li><Link href="#">Terms & Conditions</Link></li>
    </ul>
  </div>
</div>
          </div>
        </div>
     
  );
};
export default Footer;
