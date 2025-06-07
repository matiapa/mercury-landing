import React from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorrá hasta 40 horas semanales",
      description: "Automatizamos tareas repetitivas para que te enfoques en hacer crecer tu negocio",
      color: "text-teal-600"
    },
    {
      icon: Users,
      title: "80% menos casos de soporte",
      description: "Nuestros chatbots resuelven consultas las 24hs, mejorando la experiencia del cliente",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Decisiones basadas en datos",
      description: "Convertimos tus datos en estadísticas clave para tomar mejores decisiones",
      color: "text-teal-600"
    },
    {
      icon: DollarSign,
      title: "ROI comprobado en 3 meses",
      description: "Nuestras automatizaciones se pagan solas reduciendo costos operativos",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Resultados que transforman tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas neuquinas ya están ahorrando tiempo y dinero con nuestras soluciones de IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <benefit.icon className={`h-12 w-12 ${benefit.color} mb-6`} />
              <h3 className="text-xl font-bold text-navy-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;