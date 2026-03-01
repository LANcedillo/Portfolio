export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    company: "IDS Comercial",
    position: "Líder Técnico",
    duration: "2024 - Presente",
    description: ["Liderazgo de Sistemas Críticos: Dirigí el desarrollo de soluciones de integración de datos gobernadas por configuración, implementando librerías personalizadas para la comunicación dinámica entre servicios.",
      "Implementación de Soluciones de Integración: Desarrollé soluciones de integración utilizando tecnologías como Spring Boot, Apache Camel y Kafka, mejorando la eficiencia y escalabilidad de los sistemas.",
      "Colaboración Interdisciplinaria: Trabajé estrechamente con equipos de desarrollo, operaciones y gestión para garantizar la alineación de los objetivos técnicos con las necesidades del negocio.",
      "Mentoría y Desarrollo de Talento: Proporcioné orientación técnica y mentoría a miembros del equipo, fomentando un ambiente de aprendizaje continuo y crecimiento profesional.",
      "Optimización de Procesos: Identifiqué y resolví cuellos de botella en los procesos de desarrollo e integración, implementando mejoras que resultaron en una mayor eficiencia y reducción de tiempos de entrega.",
      "Gestión de Proyectos: Participé en la planificación y gestión de proyectos, asegurando la entrega oportuna de soluciones de alta calidad que cumplen con los requisitos del cliente.",
        "Innovación y Mejora Continua: Promoví la adopción de nuevas tecnologías y prácticas de desarrollo para mantener la competitividad y eficiencia del equipo en un entorno tecnológico en constante evolución.",
        "Comunicación Efectiva: Facilitó la comunicación entre equipos técnicos y no técnicos, asegurando una comprensión clara de los objetivos y desafíos del proyecto"
    ]
  },
  {
    company: "INBURSA",
    position: "Desarrollador y Analista de Software",
    duration: "2022",
    description:[ "Migré funcionalidades de sistemas legados hacia arquitecturas de microservicios con Spring Boot, incrementando la escalabilidad del sistema.",
      "Implementé estrategias de pruebas automatizadas (JUnit/Mockito) para asegurar despliegues continuos sin regresiones.",
    ]
  },
  {
    company: "Santander",
    position: "Analista de Prevención de Riesgo",
    duration: "2021",
    description: ["Desarrollé modelos analíticos basados en patrones de comportamiento para la mitigación de riesgos y detección de anomalías financieras.",
      "Optimicé el acceso a grandes volúmenes de datos mediante la refinación de consultas complejas en entornos de Data Lake.",
    ]
  },
];