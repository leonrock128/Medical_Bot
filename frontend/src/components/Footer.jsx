import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            {/* --------Left Section --------- */}
            <div>
                <img className="mb-5 w-50" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600 text-base leading-6">
                    Patient health care is more than treatment—it’s compassion, trust, and personalized support. With safety, comfort, and prevention at the core, patients can achieve better well-being and a healthier future.
                    
                </p>
            </div>

            {/* --------Center Section --------- */}
            <div>  
                <p className="mb-5 text-xl font-medium">COMPANY</p>
                <ul className="flex flex-col gap-2 text-base text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>


            {/* --------Right Section --------- */}
            <div>
                <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-base text-gray-600">
                    <li>+91-9876543210</li>
                    <li>sammer@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* ------ Copy Right ------- */}
        <div>
            <hr className="border border-gray-300" />
            <p className="py-5 text-sm text-center">Copyright 2025@ Company - All Right Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
