import React from 'react';
import CatalogFilters from './CatalogFilters';
import ProductCard from './ProductCard';

const CatalogPage = () => {
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
        <main className="catalog-page">
            <h2>Catalog of Products</h2>
            <div className="product-grid">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </main>
    );
};

export default CatalogPage;
