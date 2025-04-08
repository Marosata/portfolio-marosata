const skills = [
    {
      category: "Langages de programmation",
      items: [
        {
          name: "Java",
          description: "Un langage robuste utilisé pour le développement d'applications d'entreprise.",
          advantage: "Polyvalent et portable.",
          disadvantage: "Syntaxe parfois verbeuse.",
          image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
          experience: 4
        },
        {
          name: "PHP",
          description: "Langage côté serveur pour le développement web.",
          advantage: "Facile à apprendre et largement supporté.",
          disadvantage: "Peut être inefficace sans une bonne architecture.",
          image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png",
          experience:4.5
        },
        {
          name: "C#",
          description: "Langage orienté objet principalement utilisé pour les applications Windows.",
          advantage: "Intégré à l'écosystème Microsoft.",
          disadvantage: "Dépend de la plateforme .NET.",
          image: "csharp-logo-265a149e.svg",
          experience: 3.5
        },
        {
          name: "JavaScript",
          description: "Langage essentiel pour le développement frontend et backend.",
          advantage: "Grande communauté et riche en bibliothèques.",
          disadvantage: "Parfois difficile à déboguer.",
          image: "Javascript.jpg",
          experience: 4
        },
        {
          name: "Python",
          description: "Langage populaire pour l'IA et le machine learning.",
          advantage: "Syntaxe simple et lisible.",
          disadvantage: "Moins performant pour certaines tâches intensives.",
          image: "/python.png",
          experience: 3 
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "React.js",
          description: "Bibliothèque pour construire des interfaces utilisateur dynamiques.",
          advantage: "Facilité de gestion des composants.",
          disadvantage: "Évolution rapide nécessitant une mise à jour fréquente.",
          image: "/reactjs.png",
          experience: 4
        },
        {
          name: "Spring Boot",
          description: "Framework pour développer des applications Java robustes.",
          advantage: "Configuration simplifiée pour les applications Java.",
          disadvantage: "Complexité croissante avec de grands projets.",
          image: "/Spring.svg",
          experience: 4
        },
        {
          name: "Laravel",
          description: "Framework PHP pour des applications web robustes.",
          advantage: "Supporte des fonctionnalités modernes.",
          disadvantage: "Peut être surdimensionné pour des petits projets.",
          image: "/Laravel.png",
          experience: 4
        },
        {
          name: "CodeIgniter",
          description: "Framework léger pour PHP.",
          advantage: "Facile à configurer et rapide.",
          disadvantage: "Moins structuré que Laravel.",
          image: "/codeigniter-logo.png",
          experience:4
        },
      ],
    },
    {
      category: "Bases de données",
      items: [
        {
          name: "MySQL",
          description: "Base de données relationnelle largement utilisée.",
          advantage: "Fiable et bien documentée.",
          disadvantage: "Moins performante avec des bases très volumineuses.",
          image: "/mysql.png",
          experience: 4
        },
        {
          name: "PostgreSQL",
          description: "SGBD avancé pour les applications critiques.",
          advantage: "Support des fonctionnalités complexes comme JSON.",
          disadvantage: "Courbe d'apprentissage plus élevée.",
          image: "/Postgres.png",
          experience: 4
        },
        {
          name: "Oracle",
          description: "Base de données puissante pour les entreprises.",
          advantage: "Sécurisée et performante.",
          disadvantage: "Licence coûteuse.",
          image: "/Oracle-Logo.png",
          experience: 3
        },
      ],
    },
  ];
  
  export default skills;
  
