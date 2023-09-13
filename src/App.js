// src/App.js
import React from 'react';
import Hero from './screens/Hero';
import Header from './components/Header';
import AboutUs from './screens/AboutUs';
import Merchant from './screens/Merchant';
import Customer from './screens/Customer';
import Footer from './components/Footer';

function App() {

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '200vh' }}> {/* 200vh to simulate more scrollable space */}
      <Header />
      <div id='home'><Hero /></div>
      <div id='merchant'><Merchant /></div>
      <div id='customer'><Customer /></div>
      <div id='aboutUs'><AboutUs /></div>
      <Footer />
    </div>
  );
}

export default App;
