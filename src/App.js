import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
