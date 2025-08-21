import React from 'react';
import { Phone, MessageCircle, Instagram, Linkedin, Globe, ArrowLeft } from 'lucide-react';

const Links = () => {
  const links = [
    {
      title: 'Llamá a nuestro agente de IA',
      subtitle: 'Conversá con nuestra IA especializada',
      icon: <Phone className="h-6 w-6" />,
      href: 'tel:+541152180904',
      color: 'bg-teal-500 hover:bg-teal-600',
      textColor: 'text-white'
    },
    {
      title: 'Contactanos por WhatsApp',
      subtitle: 'Chateá con nuestro equipo',
      icon: <MessageCircle className="h-6 w-6" />,
      href: 'tel:+5492995061329',
      color: 'bg-navy-900 hover:bg-navy-900',
      textColor: 'text-white'
    },
    {
      title: 'Instagram',
      subtitle: 'Seguinos en @andinia_solutions',
      icon: <Instagram className="h-6 w-6" />,
      href: 'https://instagram.com/andinia_solutions',
      color: 'bg-teal-500 hover:bg-teal-600',
      textColor: 'text-white'
    },
    {
      title: 'LinkedIn',
      subtitle: 'Conectá con nosotros profesionalmente',
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://linkedin.com/company/andinia/',
      color: 'bg-navy-900 hover:bg-navy-950',
      textColor: 'text-white'
    },
    {
      title: 'Nuestra web',
      subtitle: 'Descubrí más sobre Andinia',
      icon: <Globe className="h-6 w-6" />,
      href: 'https://www.andinia.solutions',
      color: 'bg-teal-500 hover:bg-teal-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-teal-700 text-white min-h-screen flex items-center pt-20"
    style={{
      backgroundImage: `linear-gradient(to bottom right, rgba(10, 31, 68, 0.95), rgba(15, 42, 68, 0.9), rgba(0, 150, 136, 0.85)), url('/51983707146_eba1c053c5_k.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="/Andinia-logo-wstroke.png" 
              alt="AndinIA Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conectá con Andinia
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Elegí la forma que prefieras para contactarnos. Estamos acá para ayudarte.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="max-w-2xl mx-auto space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`block ${link.color} ${link.textColor} p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold mb-1">
                    {link.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {link.subtitle}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
