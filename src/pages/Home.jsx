import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.png';
import { ShoppingBag, Globe, Truck, Clock, ArrowRight, Star } from 'lucide-react';
import electronice from '../assets/category/electronics.png';
import accessories from '../assets/category/accessories.png';
import gaming from '../assets/category/gaming.png';

import simo from '../assets/testimonials/simo.png';
import hasane from '../assets/testimonials/hasan.png';
import latfa from '../assets/testimonials/latifa.png';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Fashion Enthusiast',
        image: simo,
        comment: 'The quality of products and customer service is exceptional. I\'m always excited to shop here!',
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Tech Reviewer',
        image: hasane,
        comment: 'Best tech deals I\'ve found online. Fast shipping and great prices!',
        rating: 5
    },
    {
        id: 3,
        name: 'Emma Williams',
        role: 'Interior Designer',
        image: latfa,
        comment: 'The home decor collection is amazing. Everything arrives perfectly packaged.',
        rating: 5
    }
];

function Home() {
    const features = [
        {
            icon: <ShoppingBag size={24} />,
            title: "Premium Products",
            description: "Curated selection of high-quality items"
        },
        {
            icon: <Globe size={24} />,
            title: "Global Shipping",
            description: "Delivery available worldwide"
        },
        {
            icon: <Truck size={24} />,
            title: "Fast Delivery",
            description: "Quick and reliable shipping"
        },
        {
            icon: <Clock size={24} />,
            title: "24/7 Support",
            description: "Round-the-clock customer service"
        }
    ];

    const categories = [
        { id: 1, name: 'Electronics', image: electronice },
        { id: 2, name: 'Accessories', image: accessories },
        { id: 3, name: 'Home & Living', image: gaming }
    ];

    const featuredProducts = [
        {
            id: 1,
            name: 'Premium Headphones',
            price: 299.99,
            rating: 4.8,
            image: 'https://images.squarespace-cdn.com/content/v1/621663e7e8f5476ba5df4287/1731922474727-4GD85V3QRNP21A0XEEGP/Best-Headphone-Stand-List.jpg',
            category: 'Electronics'
        },
        {
            id: 2,
            name: 'Smart Watch Pro',
            price: 199.99,
            rating: 4.9,
            image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/n/j/n/-original-imagnrcxv6hyhugh.jpeg?q=90&crop=false',
            category: 'Accessories'
        },
        {
            id: 3,
            name: 'Gaming Console',
            price: 499.99,
            rating: 4.7,
            image: 'https://hips.hearstapps.com/hmg-prod/images/xbox-playstation-group-0057-64c3e751a896f.jpg',
            category: 'Gaming'
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32">
                <div className="absolute inset-0">
                    <img
                        src={hero}
                        alt="hero background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#1a1a1a]/50 to-[#0a0a0a]/80"></div>
                </div>

                <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight"
                    >
                        Global Shopping Experience
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto"
                    >
                        Discover unique products from around the world
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/products" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                            Explore Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Example Product Showcase */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl">
                                <img
                                    src={featuredProducts[0].image}
                                    alt="Premium Headphones"
                                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Specs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-sm text-gray-300">Active Noise Cancelling</span>
                                    </div>
                                    <span className="text-sm text-purple-400">40h Battery Life</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                    Premium Headphones
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Experience crystal-clear sound quality with our latest premium headphones.
                                    Featuring advanced noise cancellation and premium materials for ultimate comfort.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-purple-400 font-semibold mb-1">High-Fidelity</h3>
                                    <p className="text-sm text-gray-400">Studio-quality sound reproduction</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-purple-400 font-semibold mb-1">Comfort</h3>
                                    <p className="text-sm text-gray-400">Premium memory foam cushions</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-white">$299.99</span>
                                <span className="text-sm text-gray-400 line-through">$399.99</span>
                                <span className="px-3 py-1 text-sm bg-green-500/20 text-green-400 rounded-full">
                                    Save 25%
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                                >
                                    Add to Cart
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl text-white sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
                    >
                        <p className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            Featured Products

                        </p>

                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {featuredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-lg text-gray-300 mb-2">${product.price.toFixed(2)}</p>
                                    <div className="flex items-center mb-2">
                                        <Star className="text-yellow-400 w-5 h-5 mr-1" />
                                        <span className="text-gray-300">{product.rating}</span>
                                    </div>
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="text-sm text-purple-300 hover:text-purple-200 transition-colors flex items-center"
                                    >
                                        View Product <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Categories Preview */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl from-purple-400 to-pink-400  font-bold text-center mb-8 sm:mb-12"
                    >
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            Popular Categories
                        </h2>

                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20">
                                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                                    <Link
                                        to={`/products?category=${category.name.toLowerCase()}`}
                                        className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
                                    >
                                        Explore Category →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>




            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            What Our Clients Say About Us
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Don't just take our word for it. Here's what our customers have to say about their shopping experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                                        <p className="text-purple-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-300 italic">"{testimonial.comment}"</p>

                                <div className="mt-6 flex justify-end">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        Read Full Review →
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/testimonials"
                            className="inline-flex items-center px-6 py-3 bg-white/5 text-purple-400 rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            View All Reviews
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Stay Updated
                        </h2>
                        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                            Subscribe to our newsletter for exclusive offers and updates
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm sm:text-base"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Home;