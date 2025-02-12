// src/pages/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/Products/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return (
            <div className="grid place-items-center min-h-screen">
                <p className="text-xl">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="grid place-items-center min-h-screen">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="col-span-full text-center">No products found</p>
            )}
        </div>
    );
};

export default ProductList;