import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import UseCases from './components/UseCases';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Hero />
      <Benefits />
      <Process />
      <UseCases />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;