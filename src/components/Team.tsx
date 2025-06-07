import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Alejo Rivera",
      role: "Co-founder & IA Specialist",
      description: "Experto en automatización e inteligencia artificial con más de 5 años desarrollando soluciones innovadoras para empresas.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    },
    {
      name: "Matías Apablaza", 
      role: "Co-founder & Tech Lead",
      description: "Especialista en integración de sistemas y desarrollo de pipelines de datos. Lidera la implementación técnica de nuestras soluciones.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            El equipo detrás de la innovación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales neuquinos comprometidos con el éxito de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                <div className="flex space-x-4">
                  <button className="p-2 bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-navy-900 hover:text-white rounded-full transition-colors duration-300">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;