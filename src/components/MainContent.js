import React from 'react';
import ProductCard from './ProductCard';

const MainContent = () => {
    const products = [
        {
            name: "Різдвяна",
            price: "1500",
            image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg",
            height: 180,
            manufacturer: "EcoTree",
            material: "Пластик"
        },
        {
            name: "Новорічна",
            price: "1200",
            image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg",
            height: 210,
            manufacturer: "EcoTree",
            material: "Пластик"
        },
        {
            name: "Зелена",
            price: "1300",
            image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg",
            height: 200,
            manufacturer: "EcoTree",
            material: "Пластик"
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
