import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/Products/ProductCard';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react'; // Add this import

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Add this state

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const filteredProducts = products
        .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
        .filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    if (loading) {
        return (
            <div className="grid place-items-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
                <div className="p-6 rounded-lg backdrop-blur-md bg-white/5">
                    <p className="text-xl text-gray-300">Loading products...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="grid place-items-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
                <div className="p-6 rounded-lg backdrop-blur-md bg-white/5 border border-red-500/20">
                    <p className="text-red-400">Error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] pt-24 px-4 pb-12">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container mx-auto"
            >
                <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Products
                </h1>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="w-full px-6 py-3 pl-12 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors duration-300"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                                selectedCategory === 'all'
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                        >
                            All
                        </motion.button>
                        {categories.map(category => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
                
                {/* Results Count */}
                <div className="mb-6 text-center">
                    <p className="text-gray-400">
                        {filteredProducts.length} 
                        {filteredProducts.length === 1 ? ' product' : ' products'} found
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center p-6 rounded-lg backdrop-blur-md bg-white/5">
                            <p className="text-gray-400">
                                {searchQuery 
                                    ? 'No products found matching your search'
                                    : 'No products found in this category'
                                }
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProductList;