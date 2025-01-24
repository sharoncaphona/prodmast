import React from "react";

const Hero = () => {
  return (
    <header className="bg-gray-50 py-6">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Prodmast Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-gray-800">Prodmast</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Services</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
        </ul>

        {/* Sign Up Button */}
        <button className="hidden md:block px-6 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Hero;
