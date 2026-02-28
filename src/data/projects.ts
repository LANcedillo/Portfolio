export interface Project {
  id: number;
  title: string;
  category: 'Desarrollo' | 'Juego';
  tech: string[];
  description: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: 'Desarrollo',
    tech: ["React", "TS", "Tailwind"],
    description: "Panel de administración con gráficas en tiempo real.",
    link: "https://github.com/tu-usuario/proyecto1"
  },
  {
    id: 2,
    title: "Retro Space Invaders",
    category: 'Juego',
    tech: ["Canvas", "TS", "Logic"],
    description: "Un clon del clásico juego usando programación orientada a objetos.",
    link: "https://tu-juego.com"
  },
  {
    id: 3,
    title: "Portfolio v1",
    category: 'Desarrollo',
    tech: ["Vite", "React"],
    description: "Mi primer acercamiento al desarrollo web profesional.",
    link: "#"
  }
];