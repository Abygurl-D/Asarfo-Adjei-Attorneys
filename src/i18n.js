import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  home: 'Home',
  about: 'About',
  practiceAreas: 'Practice Areas',
  caseStudy: 'Case Study',
  testimonials: 'Testimonials',
  faqs: 'FAQs',
  pages: 'Pages',
  getInTouch: 'Get in Touch',
  attorneys: 'Attorneys'
};

// French translations
const frTranslations = {
  home: 'Accueil',
  about: 'À Propos',
  practiceAreas: 'Domaines de Pratique',
  caseStudy: 'Études de Cas',
  testimonials: 'Témoignages',
  faqs: 'FAQ',
  pages: 'Pages',
  getInTouch: 'Contactez-Nous',
  attorneys: 'Avocats'
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;