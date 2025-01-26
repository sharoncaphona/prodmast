import React from 'react';
import Header from './components/HEader';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className='font-sans'>
      <Header/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App