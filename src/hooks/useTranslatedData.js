import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/i18n';
import INFO from '../data/user';
import skillsData from '../data/skillsData';
import educations from '../data/educations';

/**
 * Hook pour obtenir les données traduites selon la langue actuelle
 */
export const useTranslatedData = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Données des projets traduites
  const getTranslatedProjects = () => {
    if (language === 'en') {
      return INFO.projects.map((project, index) => {
        const translatedProject = t.projects.projectsList[index];
        if (translatedProject) {
          return {
            ...project,
            title: translatedProject.title,
            date: translatedProject.date,
            description: translatedProject.description,
            linkText: project.linkText === "Voir le projet" ? t.projects.linkText : 
                     project.linkText === "Code source" ? t.projects.codeSource : project.linkText
          };
        }
        return project;
      });
    }
    return INFO.projects.map(project => ({
      ...project,
      linkText: project.linkText === "Voir le projet" ? t.projects.linkText : 
               project.linkText === "Code source" ? t.projects.codeSource : project.linkText
    }));
  };

  // Données des compétences traduites
  const getTranslatedSkills = () => {
    if (language === 'en') {
      return t.skills.skillsData.map((category, categoryIndex) => {
        const originalCategory = skillsData[categoryIndex];
        return {
          ...originalCategory,
          category: category.category,
          items: originalCategory.items.map((item, itemIndex) => {
            const translatedItem = category.items[itemIndex];
            if (translatedItem) {
              return {
                ...item,
                description: translatedItem.description,
                advantage: translatedItem.advantage,
                disadvantage: translatedItem.disadvantage
              };
            }
            return item;
          })
        };
      });
    }
    return skillsData;
  };

  // Données d'éducation traduites
  const getTranslatedEducations = () => {
    if (language === 'en') {
      return educations.map((edu, index) => {
        const translatedEdu = t.about.educations[index];
        if (translatedEdu) {
          return {
            ...edu,
            degree: translatedEdu.degree,
            field: translatedEdu.field,
            institution: translatedEdu.institution,
            years: translatedEdu.years,
            description: translatedEdu.description
          };
        }
        return edu;
      });
    }
    return educations;
  };

  return {
    t,
    language,
    projects: getTranslatedProjects(),
    skills: getTranslatedSkills(),
    educations: getTranslatedEducations()
  };
};
