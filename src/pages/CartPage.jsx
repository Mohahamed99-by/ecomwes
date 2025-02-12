// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <div className="bg-white rounded-lg shadow">
                        {cartItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex justify-between items-center p-4 border-b"
                            >
                                <div className="flex items-center space-x-4">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <button 
                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                            className="px-2 py-1 bg-gray-100 rounded-l"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{item.quantity || 1}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                            className="px-2 py-1 bg-gray-100 rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <button
                            onClick={clearCart}
                            className="px-6 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                        <div className="text-xl font-bold">
                            Total: ${calculateTotal().toFixed(2)}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;