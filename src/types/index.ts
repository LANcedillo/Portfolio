export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string; // El '?' significa que es opcional
}