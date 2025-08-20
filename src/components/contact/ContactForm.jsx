import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/i18n';
import { emailService } from '../../services/emailService';
import './styles/contactForm.css';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });
  
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation avec le service
    const validation = emailService.validateContactForm(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });
    
    setValidationErrors({});

    try {
      const result = await emailService.sendContactEmail(formData);
      
      if (result.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: t.contact.form.success
        });

        // Reset form
        setFormData({
          email: '',
          message: '',
          name: ''
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: result.message || t.contact.form.error
        });
      }

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: t.contact.form.error
      });
    }
  };

  return (
    <div className="contact-form-container">
      <h3 className="contact-form-title">{t.contact.formTitle}</h3>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            {language === 'fr' ? 'Votre Nom' : 'Your Name'} (optionnel)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
            className={`form-input ${validationErrors.name ? 'error' : ''}`}
          />
          {validationErrors.name && (
            <span className="form-error">{validationErrors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            {t.contact.form.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.form.emailPlaceholder}
            className={`form-input ${validationErrors.email ? 'error' : ''}`}
            required
          />
          {validationErrors.email && (
            <span className="form-error">{validationErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            {t.contact.form.message} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.form.messagePlaceholder}
            className={`form-textarea ${validationErrors.message ? 'error' : ''}`}
            rows="6"
            required
          />
          {validationErrors.message && (
            <span className="form-error">{validationErrors.message}</span>
          )}
          <div className="character-count">
            {formData.message.length}/1000
          </div>
        </div>

        <button 
          type="submit" 
          className={`form-submit ${status.loading ? 'loading' : ''}`}
          disabled={status.loading}
        >
          {status.loading ? t.contact.form.sending : t.contact.form.send}
        </button>

        {status.message && (
          <div className={`form-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
