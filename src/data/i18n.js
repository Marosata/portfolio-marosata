export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos", 
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    
    // Page d'accueil
    homepage: {
      title: "Développeur polyvalent en systèmes d'information, prêt à relever vos défis technologiques.",
      description: "Passionné par le développement web et mobile, je combine expertise technique et rigueur professionnelle pour concevoir des solutions innovantes. Avec une maîtrise avancée de technologies telles que PHP (Laravel, CodeIgniter), React.js, et une expérience en Java, C# (ASP.NET Core), et Python, je suis capable de transformer des idées en applications performantes et fiables. Toujours à la recherche de nouveaux défis, je suis motivé par l'opportunité d'accompagner les entreprises dans leur transformation digitale."
    },
    
    // Page à propos
    about: {
      title: "Développeur passionné, basé à Madagascar, prêt à transformer vos idées en solutions innovantes.",
      description: "Actuellement en Master 1 à l'IT University, je me distingue par ma capacité à allier apprentissage académique et expérience pratique. En une année, j'ai contribué au développement de projets variés, allant de la gestion d'activités événementielles à la maintenance d'API et au traitement des données dans une grande agence de microfinance. Ma rigueur, ma curiosité et ma passion pour les défis technologiques me poussent à créer des solutions performantes et adaptées aux besoins. Collaborer pour innover est au cœur de ma démarche.",
      academicPath: "Parcours Académiques",
      educations: [
        {
          degree: "Master 1 en Informatique",
          field: "Systèmes d'information",
          institution: "IT-UNIVERSITY",
          years: "2024 - 2025",
          description: "Formation approfondie en développement web et mobile, étude et conception de projets, base de donnée avancée , et intelligence artificielle. Expérience pratique à travers divers projets."
        },
        {
          degree: "Licence",
          field: "Licence en Informatique - Développement", 
          institution: "IT-UNIVERSITY",
          years: "2019 - 2023",
          description: "Acquisition de bases solides en technologie de l'information, y compris la programmation orientée objet, ainsi que des langages comme Java, PHP, et de divers frameworks comme :Spring boot,.Net,etc..."
        },
        {
          degree: "Baccalauréat",
          field: "Baccalauréat Technologique",
          institution: "Lycée Technique Aceem", 
          years: "2018 - 2019",
          description: "Formation approfondie dans le programme de gestion d'entreprise ,comptabilité et finance."
        }
      ]
    },
    
    // Page projets
    projects: {
      title: "Les projets que j'ai réalisés pour contribuer à l'innovation.",
      subtitle: "Au cours de ma carrière, j'ai eu la chance de travailler sur une variété de projets passionnants, chacun me permettant d'explorer de nouvelles technologies et d'affiner mes compétences. Chaque projet a été une occasion d'apprendre, de collaborer et de repousser les limites de ce qui est possible. Je suis fier des progrès accomplis et des solutions que j'ai pu apporter. Vous trouverez ci-dessous certains des projets sur lesquels j'ai travaillé, et je suis toujours ouvert aux suggestions et aux collaborations pour aller encore plus loin.",
      linkText: "Voir le projet",
      codeSource: "Code source",
      projectsList: [
        {
          title: "Projet Personnel: Application mobile pour une proposition de Recette Quotidienne | T-Ikaly",
          date: "Juillet 2025 - Présent",
          description: "Solution avec une Suggestion automatique de plats quotidiens (petit-déj, déjeuner, dîner, goûter) avec une variété et un historique intelligent .Proposition de recettes à partir des ingrédients disponibles, entrés manuellement ou via liste de courses passée. Développer avec C# et .NET MAUI pour une application multiplateforme."
        },
        {
          title: "Projet de prévision de données pour un centre d'appels",
          date: "Juillet 2025",
          description: "Développement d'un script Python pour analyser les données historiques de vente et d'inventaire, et établir des prévisions pour le mois de juillet. Ce projet a permis de générer un livrable Excel complet incluant : Tableaux de bord et rapports sur l'évolution du chiffre d'affaires et du coût des ventes.Prévisions agrégées (scénarios réaliste, optimiste, pessimiste) pour le chiffre d'affaires et le coût des ventes.Identification des tendances et des anomalies de performance des produits.Analyse de la précision des prévisions (RMSE) pour identifier les produits les plus et les moins prévisibles."
        },
        {
          title: "Dév Java/PHP/Flutter | Les piscines de Romain",
          date: "Mars 2025 - Présent",
          description: "Développement et maintenance d'un site e-commerce et d'un réseau social personnel du client, avec une application mobile sous Flutter. Amélioration des plugins et de l'UI/UX pour une meilleure expérience utilisateur. Déploiement sur AWS. Tech stack : Laravel / MySQL / Flutter."
        }
        // ... autres projets
      ]
    },
    
    // Page compétences
    skills: {
      title: "Mes Compétences Techniques",
      description: "Je possède un large éventail de compétences techniques que j'ai développées au fil des années, tant dans le cadre académique que professionnel. Voici les principales technologies et outils avec lesquels je travaille régulièrement :",
      categories: {
        "Langages de programmation": "Langages de programmation",
        "Frameworks & Librairies": "Frameworks & Librairies", 
        "Bases de données": "Bases de données",
        "Méthodologies": "Méthodologies",
        "Outils de développement": "Outils de développement"
      },
      skillsData: [
        {
          category: "Langages de programmation",
          items: [
            {
              name: "Java",
              description: "Un langage robuste utilisé pour le développement d'applications d'entreprise.",
              advantage: "Polyvalent et portable.",
              disadvantage: "Syntaxe parfois verbeuse."
            },
            {
              name: "PHP",
              description: "Langage côté serveur pour le développement web.",
              advantage: "Facile à apprendre et largement supporté.",
              disadvantage: "Peut être inefficace sans une bonne architecture."
            },
            {
              name: "C#",
              description: "Langage orienté objet principalement utilisé pour les applications Windows.",
              advantage: "Intégré à l'écosystème Microsoft.",
              disadvantage: "Dépend de la plateforme .NET."
            },
            {
              name: "JavaScript",
              description: "Langage essentiel pour le développement frontend et backend.",
              advantage: "Grande communauté et riche en bibliothèques.",
              disadvantage: "Parfois difficile à déboguer."
            },
            {
              name: "Python",
              description: "Langage populaire pour l'IA et le machine learning.",
              advantage: "Syntaxe simple et lisible.",
              disadvantage: "Moins performant pour certaines tâches intensives."
            }
          ]
        },
        {
          category: "Frameworks & Librairies",
          items: [
            {
              name: "Laravel",
              description: "Framework PHP élégant pour le développement web rapide.",
              advantage: "Syntaxe expressive et outils intégrés.",
              disadvantage: "Peut être lourd pour des projets simples."
            },
            {
              name: "React.js",
              description: "Bibliothèque JavaScript pour construire des interfaces utilisateur.",
              advantage: "Composants réutilisables et écosystème riche.",
              disadvantage: "Courbe d'apprentissage pour les débutants."
            },
            {
              name: "Spring Boot",
              description: "Framework Java pour créer des applications robustes rapidement.",
              advantage: "Configuration automatique et microservices.",
              disadvantage: "Complexité pour des applications simples."
            }
          ]
        }
      ]
    },
    
    // Page contact
    contact: {
      title: "Entrons en contact : Comment me joindre",
      subtitle: "Merci pour votre intérêt à prendre contact avec moi. Que vous soyez recruteur ou entreprise à la recherche de solutions innovantes, je serai ravi d'échanger avec vous ! Vous pouvez me contacter directement par email à",
      formTitle: "Formulaire de Contact",
      form: {
        name: "Votre Nom",
        namePlaceholder: "Votre nom",
        email: "Votre Email",
        emailPlaceholder: "votre.email@exemple.com",
        message: "Votre Message", 
        messagePlaceholder: "Écrivez votre message ici...",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi. Veuillez réessayer."
      },
      socialText: "Vous pouvez également me contacter via les réseaux sociaux :",
      responseTime: "et je m'engage à répondre sous 24 heures."
    },
    
    // Footer
    footer: {
      madeWith: "Fait avec ❤️ par",
      allRightsReserved: "Tous droits réservés."
    },
    
    // Bouton de langue
    language: {
      switch: "English",
      current: "Français"
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects", 
      skills: "Skills",
      contact: "Contact"
    },
    
    // Homepage
    homepage: {
      title: "Versatile Information Systems Developer, ready to tackle your technological challenges.",
      description: "Passionate about web and mobile development, I combine technical expertise and professional rigor to design innovative solutions. With advanced mastery of technologies such as PHP (Laravel, CodeIgniter), React.js, and experience in Java, C# (ASP.NET Core), and Python, I am able to transform ideas into high-performance and reliable applications. Always seeking new challenges, I am motivated by the opportunity to support companies in their digital transformation."
    },
    
    // About page
    about: {
      title: "Passionate developer, based in Madagascar, ready to transform your ideas into innovative solutions.",
      description: "Currently in Master 1 at IT University, I distinguish myself by my ability to combine academic learning and practical experience. In one year, I have contributed to the development of various projects, ranging from event management activities to API maintenance and data processing in a large microfinance agency. My rigor, curiosity and passion for technological challenges drive me to create efficient solutions adapted to needs. Collaborating to innovate is at the heart of my approach.",
      academicPath: "Academic Background",
      educations: [
        {
          degree: "Master 1 in Computer Science",
          field: "Information Systems",
          institution: "IT-UNIVERSITY",
          years: "2024 - 2025",
          description: "In-depth training in web and mobile development, project study and design, advanced database, and artificial intelligence. Practical experience through various projects."
        },
        {
          degree: "Bachelor's Degree",
          field: "Bachelor's in Computer Science - Development",
          institution: "IT-UNIVERSITY", 
          years: "2019 - 2023",
          description: "Acquisition of solid foundations in information technology, including object-oriented programming, as well as languages like Java, PHP, and various frameworks like: Spring boot, .Net, etc..."
        },
        {
          degree: "High School Diploma",
          field: "Technological Baccalaureate",
          institution: "Lycée Technique Aceem",
          years: "2018 - 2019", 
          description: "In-depth training in business management, accounting and finance programs."
        }
      ]
    },
    
    // Projects page
    projects: {
      title: "Projects I've completed to contribute to innovation.",
      subtitle: "Throughout my career, I've had the chance to work on a variety of exciting projects, each allowing me to explore new technologies and refine my skills. Each project has been an opportunity to learn, collaborate and push the boundaries of what's possible. I'm proud of the progress made and the solutions I've been able to provide. Below you'll find some of the projects I've worked on, and I'm always open to suggestions and collaborations to go even further.",
      linkText: "View Project",
      codeSource: "Source Code",
      projectsList: [
        {
          title: "Personal Project: Mobile Application for Daily Recipe Suggestion | T-Ikaly",
          date: "July 2025 - Present",
          description: "Solution with automatic suggestion of daily dishes (breakfast, lunch, dinner, snack) with variety and intelligent history. Recipe suggestions from available ingredients, entered manually or via past shopping list. Developed with C# and .NET MAUI for a cross-platform application."
        },
        {
          title: "Data forecasting project for a call center",
          date: "July 2025",
          description: "Development of a Python script to analyze historical sales and inventory data, and establish forecasts for the month of July. This project generated a complete Excel deliverable including: Dashboards and reports on revenue and cost of sales evolution. Aggregated forecasts (realistic, optimistic, pessimistic scenarios) for revenue and cost of sales. Identification of trends and performance anomalies of products. Forecast accuracy analysis (RMSE) to identify the most and least predictable products."
        },
        {
          title: "Java/PHP/Flutter Dev | Romain's Pools",
          date: "March 2025 - Present", 
          description: "Development and maintenance of an e-commerce site and personal social network for the client, with a mobile application under Flutter. Improvement of plugins and UI/UX for better user experience. Deployment on AWS. Tech stack: Laravel / MySQL / Flutter."
        }
        // ... other projects
      ]
    },
    
    // Skills page
    skills: {
      title: "My Technical Skills",
      description: "I possess a wide range of technical skills that I have developed over the years, both in academic and professional settings. Here are the main technologies and tools I work with regularly:",
      categories: {
        "Langages de programmation": "Programming Languages",
        "Frameworks & Librairies": "Frameworks & Libraries",
        "Bases de données": "Databases", 
        "Méthodologies": "Methodologies",
        "Outils de développement": "Development Tools"
      },
      skillsData: [
        {
          category: "Programming Languages",
          items: [
            {
              name: "Java",
              description: "A robust language used for enterprise application development.",
              advantage: "Versatile and portable.",
              disadvantage: "Sometimes verbose syntax."
            },
            {
              name: "PHP",
              description: "Server-side language for web development.",
              advantage: "Easy to learn and widely supported.",
              disadvantage: "Can be inefficient without good architecture."
            },
            {
              name: "C#",
              description: "Object-oriented language primarily used for Windows applications.",
              advantage: "Integrated with Microsoft ecosystem.",
              disadvantage: "Depends on .NET platform."
            },
            {
              name: "JavaScript",
              description: "Essential language for frontend and backend development.",
              advantage: "Large community and rich in libraries.",
              disadvantage: "Sometimes difficult to debug."
            },
            {
              name: "Python",
              description: "Popular language for AI and machine learning.",
              advantage: "Simple and readable syntax.",
              disadvantage: "Less performant for certain intensive tasks."
            }
          ]
        },
        {
          category: "Frameworks & Libraries",
          items: [
            {
              name: "Laravel",
              description: "Elegant PHP framework for rapid web development.",
              advantage: "Expressive syntax and built-in tools.",
              disadvantage: "Can be heavy for simple projects."
            },
            {
              name: "React.js",
              description: "JavaScript library for building user interfaces.",
              advantage: "Reusable components and rich ecosystem.",
              disadvantage: "Learning curve for beginners."
            },
            {
              name: "Spring Boot",
              description: "Java framework for creating robust applications quickly.",
              advantage: "Auto-configuration and microservices.",
              disadvantage: "Complexity for simple applications."
            }
          ]
        }
      ]
    },
    
    // Contact page
    contact: {
      title: "Let's get in touch: How to reach me",
      subtitle: "Thank you for your interest in contacting me. Whether you're a recruiter or a company looking for innovative solutions, I'll be happy to discuss with you! You can contact me directly by email at",
      formTitle: "Contact Form",
      form: {
        name: "Your Name",
        namePlaceholder: "Your name",
        email: "Your Email",
        emailPlaceholder: "your.email@example.com",
        message: "Your Message",
        messagePlaceholder: "Write your message here...",
        send: "Send Message", 
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again."
      },
      socialText: "You can also contact me via social media:",
      responseTime: "and I commit to responding within 24 hours."
    },
    
    // Footer
    footer: {
      madeWith: "Made with ❤️ by",
      allRightsReserved: "All rights reserved."
    },
    
    // Language button
    language: {
      switch: "Français", 
      current: "English"
    }
  }
};