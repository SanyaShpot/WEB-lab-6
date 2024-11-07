import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import CatalogPage from './components/CatalogPage';
import ItemPage from './components/ItemPage';
import CatalogFilters from './components/CatalogFilters';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/catalog" element={<><CatalogFilters /><CatalogPage /></>} />
          <Route path="/item/:productName/:price/:height/:manufacturer/:material/:image" element={<ItemPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
