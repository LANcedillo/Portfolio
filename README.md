# 🚀 LACN - Portfolio Profesional

¡Bienvenido a mi portafolio! Esta es una aplicación web construida con **React + TypeScript + Tailwind CSS**, diseñada para mostrar mis proyectos, habilidades técnicas y juegos interactivos integrados usando context.

[![GitHub Pages Deployment](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?style=flat-square&logo=github)](https://lancedillo.github.io/Portfolio/)

## 🛠️ Stack Tecnológico

- **Frontend:** React 18, TypeScript, Tailwind CSS v4.
- **Routing:** React Router Dom (HashRouter para compatibilidad con GH Pages).
- **Estado Global:** Context API + useReducer (Carrito de compras y preferencias).
- **Herramientas de Construcción:** Vite.
- **Iconografía:** Lucide React & Custom SVGs de ([text](https://www.svgrepo.com/)).

## ✨ Características Principales

- **Diseño Responsivo:** Adaptado para móviles, tablets y escritorio con enfoque Mobile-First.
- **Modo Oscuro/Claro:** Implementado con persistencia de estado.
- **Mini-Juegos Integrados:**
  - `TicTacToe`: Lógica clásica de turnos.
  - `Space Invaders`: Renderizado en Canvas con detección de colisiones AABB.
- **Sistema de Skills:** Bento Grid con barras de progreso animadas y micro-interacciones.
- **Carrito de Compras:** Simulación de selección de servicios/skills utilizando arquitectura Flux (Context).

## 🎮 Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/LANcedillo/Portfolio.git](https://github.com/LANcedillo/Portfolio.git)
   ```

2. Entra a la carpeta del proyecto::
   ```bash
  cd Portfolio
```

3. Entra a la carpeta del proyecto::
   ```bash
  npm install
```

4. Inicia el servidor de desarrollo:
   ```bash
  npm run dev
  ```


## 📂 Estructura del Proyecto
src/
├── components/     # Componentes reutilizables (Navbar, Skills, Games)
├── context/        # Lógica del Carrito (Context & Reducer)
├── data/           # Configuración de proyectos y habilidades
├── pages/          # Vistas principales (Home)
├── routes/         # Configuración centralizada de navegación
└── assets/         # Imágenes e iconos SVG

## 📧 Contacto

¿Tienes alguna propuesta o quieres charlar sobre tecnología?

LinkedIn: Tu Perfil
Web: lancedillo.github.io/Portfolio/


