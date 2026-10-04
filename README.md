# FUERZA FIT & PLUS

Plantilla web profesional de alto impacto para centro de rendimiento físico, fuerza biomecánica y conditioning.

---

## Estructura Profesional del Proyecto

El proyecto ha sido completamente reorganizado y estructurado bajo estándares modernos de desarrollo web front-end:

```
fitandplus/
├── index.html                  # Documento principal HTML5 semántico y limpio
├── contacto.html               # Página de contacto e información de ubicación
├── fuerza-fit.html             # Página detallada del programa Fuerza Fit
├── hibridfit.html              # Página detallada del programa Hibrid Fit
├── ironlegs.html               # Página detallada del programa Iron Legs
├── warrior-challenge.html      # Página detallada de The Warrior Challenge
├── css/
│   └── style.css               # Estilos personalizados, variables CSS, animaciones y scrollbar
├── js/
│   ├── config.js               # Configuración modular del motor Tailwind CSS
│   └── main.js                 # Interactividad (menú móvil, scroll suave, notificaciones toast)
├── assets/
│   └── images/                 # Recursos multimedia, logotipos, texturas y vídeos
├── DESIGN.md                   # Guía completa de tokens, colores, tipografía y diseño
└── README.md                   # Documentación técnica y guía de uso
```

---

## Sistema de Diseño (Design Tokens)

### Paleta de Colores
- Fondo / Carbon: `#050505` / `#0E0E0E` / `#111418`
- Acento Cinético Rojo (Fit Red): `#E50914` / `#FF1820` / `#FF5448`
- Acento Neón Lima (Cronograma & Live): `#CCFF00`
- Texto Principal: `#E5E2E1` / `#F5F5F5`
- Texto Secundario: `#C3C6CE` / `#969AA0`

### Tipografías
- Display & Titulares: `Anton` (Google Fonts)
- Monospaciado Técnico & Badges: `Barlow Condensed` (Google Fonts)
- Cuerpo de Lectura & UI: `Inter` (Google Fonts)
- Iconografía: `Material Symbols Outlined` (Google Fonts)

---

## Características Implementadas

1. Separación de Responsabilidades:
   - HTML (index.html): Estructura semántica sin scripts ni estilos embebidos en el head.
   - CSS (css/style.css): Variables CSS nativas, keyframes para marquesina continua, efectos de resplandor (glow), scrollbar personalizado y drawer móvil.
   - JS Config (js/config.js): Extensión de temas, paleta de colores y tipografías para Tailwind.
   - JS Lógica (js/main.js):
     - Menú móvil desplegable responsive (Drawer interactivo con botón hamburguesa).
     - Desplazamiento suave (Smooth Scroll) compensando la altura de la cabecera fija.
     - Detección activa de sección en barra de navegación al hacer scroll.
     - Notificaciones Toast personalizadas al interactuar con franjas horarias y botones de membresía.
     - Botón flotante "Volver Arriba" (Back to Top) inteligente.

2. Secciones de la Plantilla:
   - `01. Hero Cinematográfico` (`#inicio`) con HUD de coordenadas y métricas rápidas.
   - `02. Banda Diagonal Kinética` con animación continua infinita de marquee.
   - `03. El Manifiesto FIT & PLUS` (`#manifiesto`) con composición editorial de alto contraste.
   - `04. Cronograma Semanal Fuerza Fit & Plus` (`#cronograma`) con los 6 días de la semana y badges interactivos en verde lima neón.
   - `05. Clases y Disciplinas` (`#clases`) en formato póster cinemático (Cross Training, HIIT, Power Ride, Boxing, Mobility, Hipertrofia).
   - `06. Métricas e Instalaciones` (`#instalaciones`) con tarjetas minimalistas de gran impacto.
   - `07. Planes y Tarifas` (`#tarifas`) destacando la membresía FIT & PLUS PRO.
   - `08. Galería Visual` (`#galeria`) en rejilla editorial asimétrica.
   - `09. CTA Final Cinematográfico` con llamada directa a la acción.
   - `10. Footer & Ubicación` (`#contacto`) con horarios, dirección y enlaces corporativos.

---

## Cómo Visualizar o Ejecutar

1. Abrir directamente:
   Haz doble clic sobre `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

2. Servidor local:
   - Python: `python -m http.server 3000`
   - Node (npx): `npx serve .`
   - VS Code: Extensión Live Server (clic derecho en `index.html` -> *Open with Live Server*).

---

© 2025 FUERZA FIT & PLUS
