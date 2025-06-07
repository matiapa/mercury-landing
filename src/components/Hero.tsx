import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://i.ibb.co/qLTZ24hn/background-dark.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-[#0A1F44]/80 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Bot className="h-12 w-12 text-[#009688] mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Andinia</h1>
          </div>
          
          {/* Titular Principal */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Automatizamos tus procesos,
            <span className="text-[#009688] block">innovamos tu negocio</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Solucionamos tus problemas, automatizamos tus procesos, innovamos en el mercado 
            y <strong className="text-[#009688]">te hacemos ganar más plata</strong>
          </p>
          
          {/* Beneficio destacado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg md:text-xl font-semibold text-white">
              🚀 Reducimos hasta un <span className="text-[#009688] font-bold">80% de casos de soporte</span> 
              con nuestros chatbots inteligentes
            </p>
          </div>
          
          {/* CTA Principal */}
          <button 
            onClick={scrollToContact}
            className="bg-[#009688] hover:bg-[#00796B] text-white font-semibold px-8 py-4 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#009688]/25 inline-flex items-center gap-3"
          >
            Agendá tu llamada gratuita
            <ArrowRight className="h-6 w-6" />
          </button>
          
          {/* Indicador local */}
          <p className="mt-6 text-sm text-gray-200">
            ✨ Soluciones hechas en Neuquén para empresas neuquinas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;