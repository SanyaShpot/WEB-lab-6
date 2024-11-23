import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import CatalogPage from './components/CatalogPage';
import ItemPage from './components/ItemPage';
import CatalogFilters from './components/CatalogFilters';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import { ProductProvider } from './components/ProductContext';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    price: 'none',
    height: 'none',
    material: 'none',
  });

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Provider store={store}>
      <ProductProvider>
        <Router>
          <div className="app-container">
            <Header setSearchTerm={setSearchTerm} />
            <NavBar setSearchTerm={setSearchTerm} />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route
                path="/catalog"
                element={
                  <>
                    <CatalogFilters applyFilters={applyFilters} />
                    <CatalogPage searchTerm={searchTerm} filters={filters} />
                  </>
                }
              />
              <Route path="/item/:productId" element={<ItemPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </Provider>
  );
}

export default App;
