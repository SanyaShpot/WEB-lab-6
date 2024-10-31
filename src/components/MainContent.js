import React from 'react';
import ProductCard from './ProductCard';

const MainContent = () => {
    // Створюємо масив продуктів
    const products = [
        {
            name: "Classic Pine",
            price: "50",
            image: "https://via.placeholder.com/150",
            height: 180, // Додано для прикладу
            manufacturer: "Evergreen Co.",
            material: "PVC"
        },
        {
            name: "Snowy Fir",
            price: "70",
            image: "https://via.placeholder.com/150",
            height: 210, // Додано для прикладу
            manufacturer: "Winter Trees",
            material: "PE"
        },
        {
            name: "Decorated Spruce",
            price: "90",
            image: "https://via.placeholder.com/150",
            height: 200, // Додано для прикладу
            manufacturer: "Holiday Decor",
            material: "PVC"
        }
    ];

    return (
        <main className="main-content">
            <section className="intro">
                <h2>Welcome to the Christmas Tree Store!</h2>
                <p>Discover a variety of beautiful, high-quality artificial Christmas trees for your holiday needs.</p>
            </section>

            <section className="products">
                <h3>Our Top Products</h3>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MainContent;
