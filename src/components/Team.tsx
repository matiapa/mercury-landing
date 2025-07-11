import React, { useState } from 'react';
import { Linkedin, Github, ChevronDown, ChevronUp } from 'lucide-react';
import ImageWithPadding from './ImageWithPadding';

const Team = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const team = [
    {
      name: "Alejo Rivera",
      role: "Técnico en Programación y Especialista en Producto",
      description: "Aporta una visión creativa y una profunda pasión por la innovación al equipo de AndinIA. Con una trayectoria que abarca desde la creación de comunidades digitales hasta la venta de productos en línea. Después de finalizada su tecnicatura hizo una especialización en desarrollo de interfaces y gestión de productos. \n Lo que lo llevó a desarrollar soluciones para diferentes emprendimientos y hacer proyectos junto a Matías. Alejo se asegura de que cada solución de IA no solo sea tecnológicamente avanzada, sino también intuitiva y centrada en las necesidades del usuario, garantizando una adopción fluida y resultados tangibles para su negocio",
      image: "https://i.ibb.co/9HR9NV3X/Ale-1.jpg",
      imagePadding: 0, // configurable padding for each photo
      imageOffsetX: 0,
      imageOffsetY: 0,
      linkedin: "https://www.linkedin.com/in/alejobtzrivera/",
    },
    {
      name: "Matías Apablaza", 
      role: "Ingeniero Informático y Experto en Inteligencia Artificial",
      description: "Es la fuerza técnica detrás de las soluciones de vanguardia de AndinIA. Su pasión por la tecnología y la innovación lo ha llevado a destacarse en concursos internacionales (Google Science Fair e Intel ISEF) y a especializarse en inteligencia artificial y automatización de procesos en su formación como ingeniero informático. \n Su experiencia reciente en MercadoPago, donde desarrolló agentes conversacionales que resuelven el 80% de los casos de soporte, demuestra su capacidad para implementar soluciones de IA de alto impacto que optimizan operaciones y generan valor real para las empresas.",
      image: " https://i.ibb.co/zhYztDRj/Mati-2.jpg",
      imagePadding: 8, // configurable padding for each photo
      imageOffsetX: 0,
      imageOffsetY: 0,
      linkedin: "https://www.linkedin.com/in/matiasapablaza/",
      github: "https://github.com/matiapa"
    },
    {
      name: "Mateo Pitalivo", 
      role: "Licenciado en Administración de Empresas",
      description: "Es el puente entre la tecnología y la estrategia empresarial en AndinIA. Licenciado en Administración de Empresas, aporta una mirada analítica y orientada al negocio que permite al equipo entender en profundidad las necesidades y desafíos de cada cliente. Su experiencia trabajando junto a Matías y Alejo le ha permitido desarrollar una sinergia clave para transformar ideas complejas en soluciones accionables. Con una sólida formación en gestión y una gran capacidad para diagnosticar oportunidades de mejora, Mateo se encarga de que cada proyecto de IA esté alineado con los objetivos reales de las organizaciones, asegurando impacto y sostenibilidad en el tiempo.",
      image: "https://i.ibb.co/s977cyBq/Mate-1.jpg",
      imagePadding: 8, // configurable padding for each photo
      imageOffsetX: 0,
      imageOffsetY: 0,
      linkedin: "https://www.linkedin.com/in/mateo-pitalivo-9285551bb/",
    }
  ];
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            El equipo detrás de la innovación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales neuquinos comprometidos con el éxito de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <ImageWithPadding 
                    src={member.image} 
                    alt={member.name}
                    padding={member.imagePadding}
                    offsetX={member.imageOffsetX}
                    offsetY={member.imageOffsetY}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                  <div className="relative">
                    <p 
                      className={`text-gray-600 leading-relaxed mb-4 transition-all duration-300 overflow-hidden ${
                        isExpanded ? '' : 'line-clamp-12'
                      }`}
                      style={!isExpanded ? { maxHeight: '16rem' } : {}}
                    >
                      {member.description}
                    </p>
                    <button 
                      onClick={() => toggleExpanded(index)}
                      className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 mb-2"
                      aria-label={isExpanded ? 'Leer menos' : 'Leer más'}
                    >
                      <span className="text-sm">
                        {isExpanded ? 'Leer menos' : 'Leer más'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full transition-colors duration-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 hover:bg-navy-900 hover:text-white rounded-full transition-colors duration-300">
                      <Github className="h-5 w-5" />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;