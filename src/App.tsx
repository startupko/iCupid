import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;