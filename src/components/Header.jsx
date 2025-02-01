import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Prodmast</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#home" className="text-secondary">Home</a></li>
            <li><a href="#about" className="text-secondary">About</a></li>
            <li><a href="#services" className="text-secondary">Services</a></li>
            <li><a href="#contact" className="text-secondary">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-green-900 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-800">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
