import React from 'react';

function Home() {
    return (
        <div className="container mx-auto px-4">
            <header className="text-center py-16 bg-gray-50">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
                <p className="text-xl text-gray-600">Discover amazing products at great prices</p>
            </header>

            <section className="my-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product cards will go here */}
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Category cards will go here */}
                </div>
            </section>
        </div>
    );
}

export default Home;
