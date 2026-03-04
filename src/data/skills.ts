// import * as skillsIcons from "../components/icons/skillsIcons";

export interface Skill {
  name: string;
  iconPath: string;
  percentage?: number; // Nuevo: 0 a 100
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
      { name: "React", iconPath:"./assets/icons/react.svg", percentage: 85, color: "bg-blue-500" },
      { name: "Tailwind CSS", iconPath:"./assets/icons/tailwind.svg", percentage: 95, color: "bg-cyan-500" },
      { name: "Vite", iconPath:"./assets/icons/vite.svg", percentage: 80, color: "bg-purple-500" },
      { name: "angular", iconPath:"./assets/icons/angular.svg", percentage: 60, color: "bg-red-800" },
      { name: "django", iconPath:"./assets/icons/django.svg", percentage: 60, color: "bg-green-800" },
    ]
  },
    {
    category: "lenguajes de programación",
    groupColor: "from-purple-600 to-pink-500",
    skills: [
      { name: "TypeScript", iconPath:"./assets/icons/typescript.svg", percentage: 75, color: "bg-blue-600" },
      { name: "Python", iconPath:"./assets/icons/python.svg", percentage: 100, color: "bg-green-500" },
      { name: "Sql", iconPath:"./assets/icons/mysql.svg", percentage: 80, color: "bg-amber-500" },
      { name: "Java", iconPath:"./assets/icons/java.svg", percentage: 90, color: "bg-red-500" },
      { name: "C++", iconPath:"./assets/icons/coding.svg", percentage: 50, color: "bg-red-500" },
    ]
  },
  {
    category: "CI/CD y DevOps",
    groupColor: "from-purple-600 to-pink-500",
    skills: [
      { name: "Git", iconPath:"./assets/icons/git.svg", percentage: 90, color: "bg-orange-500" },
      { name: "AWS Beanstalk", iconPath:"./assets/icons/react.svg", percentage: 50, color: "bg-blue-500" },
      { name: "Docker", iconPath:"./assets/icons/docker.svg", percentage: 50, color: "bg-amber-500" },
      { name: "Jenkins", iconPath:"./assets/icons/jenkins.svg", percentage: 40, color: "bg-red-500" },
      { name: "Airflow", iconPath:"./assets/icons/airflow.svg", percentage: 60, color: "bg-amber-200" },
    ]
  },
  
];