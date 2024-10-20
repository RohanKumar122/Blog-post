import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="bg-gray-900 text-white font-bold px-7 py-4 rounded-md shadow-lg flex justify-between ">
      <div><h1 class="text-2xl text-green-400">Blog Post</h1></div>
      <div >
        <ul class="flex  space-x-10  mx-8 py-2 text-gray-400  "><li class="hover:text-cyan-50 cursor-pointer hoveer:glow-0 list-none">Home</li>
        <li class="hover:text-cyan-50 cursor-pointer hoveer:glow-0 list-none">About</li>
        <li class="hover:text-cyan-50 cursor-pointer hoveer:glow-0 list-none">Blog</li>
        <li class="hover:text-cyan-50 cursor-pointer hoveer:glow-0 list-none">ContactUs</li></ul>
      </div>
    </div>
  );
};

export default Navbar;
