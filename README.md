# Andinia Landing Page

Landing page para la consultora tecnológica Andinia, especializada en soluciones de inteligencia artificial y automatización.

## Características

- **Página principal**: Landing page completa con navegación, hero section, información de la empresa, casos de uso y formulario de contacto
- **Página de enlaces**: Accesible en `/links`, similar a LinkTree, con enlaces directos a diferentes canales de contacto
- **Diseño responsive**: Optimizado para dispositivos móviles y desktop
- **Estilo patagónico**: Colores inspirados en la Patagonia con un enfoque tecnológico y profesional

## Rutas disponibles

- `/` - Página principal (landing page)
- `/links` - Página de enlaces de contacto (no visible en navegación principal)

## Tecnologías utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Lucide React (iconos)

## Instalación y desarrollo

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── About.tsx       # Sección "Qué es AndinIA"
│   ├── ContactForm.tsx # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── Hero.tsx        # Sección principal
│   ├── Links.tsx       # Página de enlaces (/links)
│   ├── Navigation.tsx  # Navegación principal
│   └── ...            # Otros componentes
├── App.tsx             # Componente principal con rutas
└── main.tsx            # Punto de entrada
```

## Colores y tipografía

- **Color primario**: Azul oscuro (#0A1F44)
- **Color secundario**: Teal (#009688)
- **Tipografía**: Poppins
