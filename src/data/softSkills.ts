export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  icon: string; // Usaremos emojis o nombres de iconos de Lucide
  color: string; // Clase de Tailwind para el borde/acento
}

export const softSkillsData: SoftSkill[] = [
  {
    id: 1,
    name: "Resolución de Problemas",
    description: "Enfoque lógico y analítico para depurar errores complejos y optimizar algoritmos.",
    icon: "🧩",
    color: "border-blue-500"
  },
  {
    id: 2,
    name: "Adaptabilidad Tecnológica",
    description: "Capacidad para dominar rápidamente nuevos stacks, desde C++ hasta React y Cloud.",
    icon: "🚀",
    color: "border-cyan-400"
  },
  {
    id: 3,
    name: "Comunicación Técnica",
    description: "Habilidad para explicar conceptos complejos a audiencias no técnicas y colaborar eficazmente.",
    icon: "🗣️",
    color: "border-purple-500"
  },
  {
    id: 4,
    name: "Trabajo en Equipo Ágil",
    description: "Experiencia colaborando bajo metodologías Scrum/Kanban y mentalidad DevOps.",
    icon: "🤝",
    color: "border-pink-500"
  },
  {
    id: 5,
    name: "Pensamiento Crítico",
    description: "Evaluación objetiva de soluciones para tomar decisiones de arquitectura fundamentadas.",
    icon: "⚖️",
    color: "border-amber-500"
  },
  {
    id: 6,
    name: "Liderazgo Técnico",
    description: "Capacidad para guiar procesos de desarrollo, mentoría y toma de iniciativas.",
    icon: "🔭",
    color: "border-red-500"
  }
];