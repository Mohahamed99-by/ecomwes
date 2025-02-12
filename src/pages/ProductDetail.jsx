import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => {
                const foundProduct = data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Product not found</p>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Image Gallery */}
                        <div className="relative h-96 lg:h-full">
                            <motion.img
                                key={currentImageIndex}
                                src={product?.images[currentImageIndex]}
                                alt={product?.name}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                            
                            {/* Thumbnail Preview */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-white/80 rounded-full">
                                {product?.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            currentImageIndex === index 
                                                ? 'bg-purple-600 w-4' 
                                                : 'bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="px-8 py-12 lg:py-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                                <p className="mt-8 text-gray-600 leading-relaxed">{product.description}</p>
                                
                                <div className="mt-8 flex items-center">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                        ${product.price}
                                    </span>
                                    <span className="ml-4 text-sm text-gray-500">
                                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                    </span>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <motion.button
                                        onClick={() => addToCart(product)}
                                        className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ShoppingCart size={20} />
                                        Add to Cart
                                    </motion.button>
                                    <motion.button
                                        className="p-4 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-purple-500 hover:text-purple-500 transition-all duration-200"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Heart size={20} />
                                    </motion.button>
                                    <motion.button
                                        className="p-4 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-purple-500 hover:text-purple-500 transition-all duration-200"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Share2 size={20} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Thumbnail Gallery */}
                <div className="mt-6 grid grid-cols-3 gap-4 px-4">
                    {product?.images.map((image, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative rounded-lg overflow-hidden ${
                                currentImageIndex === index 
                                    ? 'ring-2 ring-purple-600' 
                                    : ''
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={image}
                                alt={`${product.name} view ${index + 1}`}
                                className="w-full h-24 object-cover"
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;