import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 sm:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    Shopping Cart
                </motion.h1>

                {cartItems.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 sm:py-16"
                    >
                        <ShoppingBag size={48} className="mx-auto mb-4 text-gray-500" />
                        <p className="text-gray-400 text-lg">Your cart is empty</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 divide-y divide-white/10">
                            {cartItems.map((item, index) => (
                                <motion.div 
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6"
                                >
                                    <img 
                                        src={item.images[0]} 
                                        alt={item.name} 
                                        className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-xl"
                                    />
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-lg sm:text-xl font-medium text-white">{item.name}</h3>
                                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            ${item.price}
                                        </p>
                                    </div>
                                    <div className="flex flex-row sm:flex-col items-center gap-4 w-full sm:w-auto">
                                        <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
                                            <motion.button 
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                                className="p-2 hover:bg-white/10 rounded-lg text-gray-300"
                                                disabled={(item.quantity || 1) <= 1}
                                            >
                                                <Minus size={16} />
                                            </motion.button>
                                            <span className="w-8 text-center text-white">{item.quantity || 1}</span>
                                            <motion.button 
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                                className="p-2 hover:bg-white/10 rounded-lg text-gray-300"
                                            >
                                                <Plus size={16} />
                                            </motion.button>
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 hover:bg-white/10 rounded-lg text-red-400"
                                        >
                                            <Trash2 size={20} />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={clearCart}
                                className="w-full sm:w-auto px-6 py-3 text-red-400 rounded-xl border border-red-500/30 hover:bg-red-500/10 transition-colors duration-300"
                            >
                                Clear Cart
                            </motion.button>
                            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Total: ${calculateTotal().toFixed(2)}
                            </div>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                        >
                            Proceed to Checkout
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CartPage;