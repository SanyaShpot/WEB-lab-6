import React, { useState, useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from './ProductContext';

const CatalogPage = ({ searchTerm, filters }) => {
  const { products } = useContext(ProductContext);
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
  }, [searchTerm, filters, products]);

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
