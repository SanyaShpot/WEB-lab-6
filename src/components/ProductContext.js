import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Різдвяна", price: 1500, image: "https://cdn.27.ua/sc--media--prod/default/76/c4/25/76c4258d-3cc0-4016-89c9-96a90e1b2657.jpg", height: 180, manufacturer: "EcoTree", material: "Plastic" },
    { id: 2, name: "Новорічна", price: 1200, image: "https://christmasexpres.com.ua/image/cache/catalog/image/cache/catalog/11-mary-zasnezhennaja/meri-snegeno-1000x1500-1000x1500.webp", height: 210, manufacturer: "EcoTree", material: "Plastic" },
    { id: 3, name: "Зелена", price: 1300, image: "https://auau.com.ua/wp-content/uploads/2023/11/yalbyra-3n-na-krabakh-1.jpg", height: 200, manufacturer: "EcoTree", material: "Wood" }
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
