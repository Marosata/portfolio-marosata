# Configuration EmailJS pour le Portfolio

## 🔧 Configuration requise

Pour que le formulaire de contact fonctionne, tu dois configurer EmailJS. Voici les étapes :

### 1. Créer un compte EmailJS

1. Va sur [EmailJS.com](https://www.emailjs.com/)
2. Crée un compte gratuit
3. Confirme ton email

### 2. Créer un service d'email

1. Dans le dashboard EmailJS, va dans "Services"
2. Clique sur "Add New Service"
3. Choisis ton fournisseur d'email (Gmail, Outlook, etc.)
4. Configure les paramètres selon ton fournisseur
5. Note le **Service ID** généré

### 3. Créer un template d'email

1. Va dans "Email Templates"
2. Clique sur "Create New Template"
3. Configure le template avec ces variables :

```
Subject: Nouveau message de contact - Portfolio

Contenu :
Bonjour Marosata,

Vous avez reçu un nouveau message de contact depuis votre portfolio :

Nom : {{from_name}}
Email : {{from_email}}
Date : {{sent_at}}

Message :
{{message}}

---
Envoyé depuis : {{user_agent}}
```

4. Note le **Template ID** généré

### 4. Obtenir la clé publique

1. Va dans "Account" > "General"
2. Trouve ta **Public Key**

### 5. Configurer le code

Ouvre le fichier `src/services/emailService.js` et remplace :

```javascript
const EMAIL_CONFIG = {
  SERVICE_ID: 'ton_service_id_ici',      // Remplace par ton Service ID
  TEMPLATE_ID: 'ton_template_id_ici',    // Remplace par ton Template ID  
  PUBLIC_KEY: 'ta_cle_publique_ici',     // Remplace par ta clé publique
  TO_EMAIL: 'marosataf@gmail.com'        // Ton email de destination
};
```

### 6. Variables du template

Assure-toi que ton template EmailJS utilise ces variables :

- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{to_email}}` - Ton email (destination)
- `{{message}}` - Le message
- `{{reply_to}}` - Email pour répondre
- `{{sent_at}}` - Date et heure d'envoi
- `{{user_agent}}` - Informations du navigateur

### 7. Test

1. Lance ton application : `npm start`
2. Va sur la page Contact
3. Remplis le formulaire et envoie un message test
4. Vérifie que tu reçois l'email

## 🚨 Sécurité

- La clé publique peut être visible dans le code client (c'est normal)
- EmailJS limite les envois par défaut (100/mois gratuit)
- Configure les restrictions d'origine dans EmailJS pour plus de sécurité

## 🛠️ Dépannage

### Erreur "Service not found"
- Vérifie que le Service ID est correct
- Assure-toi que le service est activé

### Erreur "Template not found"  
- Vérifie que le Template ID est correct
- Assure-toi que le template est sauvegardé

### Emails non reçus
- Vérifie tes spams
- Vérifie la configuration de ton service d'email
- Teste avec un autre email

### Quota dépassé
- Vérifie ton usage dans le dashboard EmailJS
- Upgrade ton plan si nécessaire

## 📞 Support

Si tu as des problèmes, consulte la [documentation EmailJS](https://www.emailjs.com/docs/) ou contacte leur support.
