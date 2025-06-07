import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-teal-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Bot className="h-12 w-12 text-teal-400 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Mercury AI</h1>
          </div>
          
          {/* Titular Principal */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automatizamos tus procesos,
            <span className="text-teal-400 block">innovamos tu negocio</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Solucionamos tus problemas, automatizamos tus procesos, innovamos en el mercado 
            y <strong className="text-teal-400">te hacemos ganar más plata</strong>
          </p>
          
          {/* Beneficio destacado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-semibold">
              🚀 Reducimos hasta un <span className="text-teal-400 font-bold">80% de casos de soporte</span> 
              con nuestros chatbots inteligentes
            </p>
          </div>
          
          {/* CTA Principal */}
          <button 
            onClick={scrollToContact}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25 inline-flex items-center gap-3"
          >
            Agendá tu llamada gratuita
            <ArrowRight className="h-6 w-6" />
          </button>
          
          {/* Indicador local */}
          <p className="mt-6 text-sm text-gray-300">
            ✨ Soluciones hechas en Neuquén para empresas neuquinas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;