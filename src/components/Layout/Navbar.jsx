// src/components/Layout/NavBar.jsx
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    My Store
                </Link>

                {/* Navigation Links */}
                <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-300">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="relative hover:text-gray-300">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="absolute top-0 right-[-10px] bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-gray-400 hover:text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;