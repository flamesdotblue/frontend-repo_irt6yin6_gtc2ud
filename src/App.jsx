import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import ContactFooter from './components/ContactFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
