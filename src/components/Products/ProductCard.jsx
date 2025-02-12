import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);

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
            className="relative p-4 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Image Section */}
            <div className="relative group overflow-hidden rounded-2xl mb-4">
                <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-72 object-cover transform transition-transform duration-500"
                    onError={(e) => (e.target.src = 'fallback-image-url.jpg')}
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                        onClick={handleAddToCart}
                        className="px-6 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/30 focus:outline-none flex items-center gap-2 shadow-lg shadow-purple-500/20"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ShoppingCart size={18} />
                        Add to Cart
                    </motion.button>
                </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-3 px-2">
                {/* Name */}
                <h3 className="text-xl font-bold text-white/90">{product.name}</h3>

                {/* Price */}
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ${product.price}
                </p>

                {/* Ratings */}
                <div className="flex items-center space-x-2 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} />
                    ))}
                    <span className="text-sm text-gray-300">(4.5)</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link to={`/product/${product.id}`}>
                        <motion.button
                            className="flex-1 px-4 py-3 text-sm font-medium border border-purple-500/30 text-purple-400 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Eye size={18} />
                            Details
                        </motion.button>
                    </Link>

                    <motion.button
                        onClick={() => setIsWishlist(!isWishlist)}
                        className={`flex-1 px-4 py-3 text-sm font-medium border border-purple-500/30 rounded-xl hover:bg-purple-500/10 transition-colors duration-300 flex items-center justify-center gap-2 backdrop-blur-sm ${
                            isWishlist ? 'bg-purple-500/20 text-white' : 'text-purple-400'
                        }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Heart size={18} />
                        {isWishlist ? 'Added' : 'Wishlist'}
                    </motion.button>
                </div>
            </div>

            {/* Stock Indicator */}
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400/20 to-green-300/20 text-green-300 backdrop-blur-md border border-green-300/20">
                In Stock
            </div>
        </motion.div>
    );
};

export default ProductCard;