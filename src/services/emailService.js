import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAIL_CONFIG = {
  // Tu devras remplacer ces valeurs par les tiennes depuis https://www.emailjs.com/
  SERVICE_ID: 'service_portfolio', // Remplace par ton Service ID
  TEMPLATE_ID: 'template_contact', // Remplace par ton Template ID  
  PUBLIC_KEY: 'your_public_key_here', // Remplace par ta clé publique
  TO_EMAIL: 'marosataf@gmail.com'
};

// Initialiser EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

/**
 * Service d'envoi d'email via EmailJS
 */
export const emailService = {
  /**
   * Envoie un email de contact
   * @param {Object} formData - Les données du formulaire
   * @param {string} formData.email - Email de l'expéditeur
   * @param {string} formData.message - Message à envoyer
   * @param {string} formData.name - Nom de l'expéditeur (optionnel)
   * @returns {Promise} Promesse de l'envoi
   */
  async sendContactEmail(formData) {
    try {
      const templateParams = {
        from_name: formData.name || formData.email.split('@')[0],
        from_email: formData.email,
        to_email: EMAIL_CONFIG.TO_EMAIL,
        message: formData.message,
        reply_to: formData.email,
        // Ajouter des métadonnées utiles
        sent_at: new Date().toLocaleString('fr-FR'),
        user_agent: navigator.userAgent,
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email envoyé avec succès!',
          data: response
        };
      } else {
        throw new Error('Échec de l\'envoi de l\'email');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
        error: error.message
      };
    }
  },

  /**
   * Valide les données du formulaire de contact
   * @param {Object} formData - Les données à valider
   * @returns {Object} Résultat de la validation
   */
  validateContactForm(formData) {
    const errors = {};

    // Validation de l'email
    if (!formData.email) {
      errors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Format d\'email invalide';
    }

    // Validation du message
    if (!formData.message) {
      errors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    } else if (formData.message.length > 1000) {
      errors.message = 'Le message ne peut pas dépasser 1000 caractères';
    }

    // Validation du nom (optionnel mais si fourni)
    if (formData.name && formData.name.length > 100) {
      errors.name = 'Le nom ne peut pas dépasser 100 caractères';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

export default emailService;
