import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Home, Package } from 'lucide-react';

const NavBar = () => {
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { path: '/', name: 'Home', icon: <Home size={20} /> },
        { path: '/products', name: 'Products', icon: <Package size={20} /> },
        { 
            path: '/cart', 
            name: 'Cart', 
            icon: <ShoppingCart size={20} />,
            badge: cartItems.length > 0 ? cartItems.length : null
        }
    ];

    return (
        <nav className="fixed w-full z-50">
            <div className="backdrop-blur-md bg-black/10 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            My Store
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.path}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative"
                                >
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 font-medium text-white/90 hover:text-purple-400 transition-colors duration-300"
                                    >
                                        {item.icon}
                                        {item.name}
                                        {item.badge && (
                                            <span className="absolute -top-2 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="md:hidden text-white/90 hover:text-purple-400 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
                    >
                        <div className="container mx-auto px-4 py-4">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.path}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.icon}
                                        {item.name}
                                        {item.badge && (
                                            <span className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full px-2 py-1">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;