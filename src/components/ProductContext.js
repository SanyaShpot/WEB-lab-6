import React, { createContext, useState, useEffect } from 'react';
import { getProducts } from '../api/api';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
