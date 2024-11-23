import React, { useState, useContext, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from './ProductContext';
import Spinner from './Spinner';
import { getProducts } from '../api/api';

const CatalogPage = ({ searchTerm, filters }) => {
  const { setProducts, loading, setLoading } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchFilteredProducts = useCallback(async () => {
    setLoading(true);
    try {
      const validFilters = filters || {};
      const term = searchTerm || '';
  
      const fetchedProducts = await getProducts({ ...validFilters, searchTerm: term });
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching filtered products:', error);
    } finally {
      setLoading(false);
    }
  }, [filters, searchTerm, setLoading, setProducts]);
  

  useEffect(() => {
    fetchFilteredProducts();
  }, [fetchFilteredProducts]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="catalog-page">
      <h2>Catalog of Products</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </main>
  );
};

export default CatalogPage;
