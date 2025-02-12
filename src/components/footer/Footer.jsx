import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const links = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Careers', href: '/careers' },
            { name: 'Privacy Policy', href: '/privacy' }
        ],
        support: [
            { name: 'Help Center', href: '/help' },
            { name: 'Returns', href: '/returns' },
            { name: 'Shipping Info', href: '/shipping' },
            { name: 'Track Order', href: '/track' }
        ],
        social: [
            { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
            { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
            { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
        ],
        contact: [
            { icon: <Mail size={20} />, text: 'support@example.com' },
            { icon: <Phone size={20} />, text: '+1 (555) 123-4567' },
            { icon: <MapPin size={20} />, text: '123 Commerce St, NY, USA' }
        ]
    };

    return (
        <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {links.support.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            {links.contact.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-400">
                                    <span className="text-purple-400">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-8">
                    {links.social.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full bg-white/5 text-purple-400 hover:bg-white/10 transition-colors"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 pt-8 border-t border-white/10">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;