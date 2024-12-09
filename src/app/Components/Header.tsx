import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Contact Info */}
        <div className="flex space-x-6">
          <span className="flex items-center">
            <i className="fas fa-phone mr-2"></i>(225) 555-0118
          </span>
          <span className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>michelle.rivera@example.com
          </span>
        </div>
        {/* Call to Action */}
        <div className="font-bold">
          Follow Us and get a chance to win 80% off
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <nav className="bg-white shadow-md text-gray-700">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold">Bandage</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Shop</a>
            <a href="/About" className="hover:text-blue-500">About</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
            <a href="/Contact" className="hover:text-blue-500">Contact</a>
          </div>
          <div className="flex space-x-4 text-blue-500">
            <a href="#" className="hover:underline">Login / Register</a>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </nav>
    </div>


// EDitor





  );
};

export default Header;
