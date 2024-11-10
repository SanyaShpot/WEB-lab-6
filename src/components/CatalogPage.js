import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Різдвяна", price: 1500, image: "https://cdn.27.ua/sc--media--prod/default/88/85/84/88858439-d2d7-4710-ab37-db8f343ba4dd.jpg", height: 180, manufacturer: "EcoTree", material: "Plastic" },
  { id: 2, name: "Новорічна", price: 1200, image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg", height: 210, manufacturer: "EcoTree", material: "Plastic" },
  { id: 3, name: "Зелена", price: 1300, image: "https://nashayalunka.com/upload/catalog/200/174/elitgreen.jpg", height: 200, manufacturer: "EcoTree", material: "Wood" }
];

const CatalogPage = ({ searchTerm, filters }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filters.price !== 'none') {
      filtered = filtered.sort((a, b) => (filters.price === 'asc' ? a.price - b.price : b.price - a.price));
    }

    if (filters.height !== 'none') {
      filtered = filtered.sort((a, b) => (filters.height === 'asc' ? a.height - b.height : b.height - a.height));
    }

    if (filters.material !== 'none') {
      filtered = filtered.filter(product => product.material.toLowerCase() === filters.material.toLowerCase());
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filters]);

  return (
    <main className="catalog-page">
      <h2>Catalog of Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default CatalogPage;
