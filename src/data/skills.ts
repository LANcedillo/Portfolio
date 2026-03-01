export interface Skill {
  name: string;
  icon: string;
  percentage: number; // Nuevo: 0 a 100
  color: string;      // Color individual para la barra
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
  groupColor: string; 
}

export const skillsGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    groupColor: "from-blue-600 to-cyan-400",
    skills: [
      { name: "React", icon: "⚛️", percentage: 85, color: "bg-blue-500" },
      { name: "TypeScript", icon: "TS", percentage: 75, color: "bg-blue-600" },
      { name: "Tailwind CSS", icon: "🎨", percentage: 95, color: "bg-cyan-500" }
    ]
  },
  {
    category: "Backend & Tools",
    groupColor: "from-purple-600 to-pink-500",
    skills: [
      { name: "Node.js", icon: "🟢", percentage: 60, color: "bg-green-500" },
      { name: "Git", icon: "📁", percentage: 90, color: "bg-orange-500" },
      { name: "Vite", icon: "⚡", percentage: 80, color: "bg-purple-500" },
      { name: "Python", icon: "🐍", percentage: 100, color: "bg-green-500" },
      { name: "Sql", icon: "🗄️", percentage: 80, color: "bg-amber-500" },
      { name: "Java", icon: "☕", percentage: 90, color: "bg-red-500" },
      { name: "Spark", icon: "🔥", percentage: 90, color: "bg-red-500" },
      { name: "AWS", icon: "☁️", percentage: 50, color: "bg-blue-500" },
      { name: "Docker", icon: "🐳", percentage: 50, color: "bg-amber-500" }
    ]
  }
  
];