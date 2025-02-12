import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);

    if (!product) {
        return <div>Product information not available</div>;
    }

    const handleAddToCart = () => {
        try {
            addToCart(product);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <motion.div
            className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="relative group overflow-hidden rounded-xl">
                <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => e.target.src = 'fallback-image-url.jpg'}
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    ${product.price}
                </p>
                <div className="flex items-center gap-2">
                    <motion.button
                        onClick={handleAddToCart}
                        className="flex-1 px-4 py-2.5 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 focus:outline-none flex items-center justify-center gap-2"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ShoppingCart size={18} />
                        Add to Cart
                    </motion.button>
                    <Link 
                        to={`/product/${product.id}`}
                        className="flex-1"
                    >
                        <motion.button
                            className="w-full px-4 py-2.5 text-sm font-medium border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Eye size={18} />
                            View Details
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Stock indicator */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
            </div>
        </motion.div>
    );
};

export default ProductCard;