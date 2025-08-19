import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import UseCases from './components/UseCases';
import IndustryUseCases from './components/IndustryUseCases';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Links from './components/Links';

function LandingPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Process />
      <UseCases />
      <IndustryUseCases />
      <Team />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-poppins">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;