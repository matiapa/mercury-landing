import React, { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Cerrar el menú móvil si está abierto
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed w-full bg-[#0A1F44] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold text-white">Andinia</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#benefits" 
              onClick={(e) => handleScroll(e, 'benefits')}
              className="text-gray-200 hover:text-[#009688] transition-colors"
            >
              Beneficios
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleScroll(e, 'process')}
              className="text-gray-200 hover:text-[#009688] transition-colors"
            >
              Proceso
            </a>
            <a 
              href="#cases" 
              onClick={(e) => handleScroll(e, 'cases')}
              className="text-gray-200 hover:text-[#009688] transition-colors"
            >
              Casos
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleScroll(e, 'team')}
              className="text-gray-200 hover:text-[#009688] transition-colors"
            >
              Equipo
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#009688] hover:bg-[#00796B] transition-colors"
            >
              Comenzar proyecto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-[#009688] hover:bg-[#0A1F44]/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#009688]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A1F44]">
          <a
            href="#benefits"
            onClick={(e) => handleScroll(e, 'benefits')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#009688] hover:bg-[#0A1F44]/80"
          >
            Beneficios
          </a>
          <a
            href="#process"
            onClick={(e) => handleScroll(e, 'process')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#009688] hover:bg-[#0A1F44]/80"
          >
            Proceso
          </a>
          <a
            href="#cases"
            onClick={(e) => handleScroll(e, 'cases')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#009688] hover:bg-[#0A1F44]/80"
          >
            Casos
          </a>
          <a
            href="#team"
            onClick={(e) => handleScroll(e, 'team')}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-[#009688] hover:bg-[#0A1F44]/80"
          >
            Equipo
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#009688] hover:bg-[#00796B]"
          >
            Comenzar proyecto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 