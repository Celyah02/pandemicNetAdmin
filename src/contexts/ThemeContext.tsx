
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';
type LanguageType = 'en' | 'fr' | 'sw';

// Define translation resources
const translations = {
  en: {
    settings: "Settings",
    profile: "Profile",
    personalInfo: "Personal Info",
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender",
    country: "Country",
    language: "Language",
    timeZone: "Time Zone",
    email: "My email Address",
    appearance: "Appearance",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    password: "Password and authentication",
    current: "Current Password",
    new: "New Password",
    confirm: "Confirm New Password",
    change: "Change Password",
    notifications: "Notifications & Alert",
    saveChanges: "Save Changes"
  },
  fr: {
    settings: "Paramètres",
    profile: "Profil",
    personalInfo: "Informations personnelles",
    firstName: "Prénom",
    lastName: "Nom de famille",
    gender: "Genre",
    country: "Pays",
    language: "Langue",
    timeZone: "Fuseau horaire",
    email: "Mon adresse e-mail",
    appearance: "Apparence",
    lightMode: "Mode clair",
    darkMode: "Mode sombre",
    password: "Mot de passe et authentification",
    current: "Mot de passe actuel",
    new: "Nouveau mot de passe",
    confirm: "Confirmer le nouveau mot de passe",
    change: "Changer le mot de passe",
    notifications: "Notifications et alertes",
    saveChanges: "Enregistrer les modifications"
  },
  sw: {
    settings: "Mipangilio",
    profile: "Wasifu",
    personalInfo: "Taarifa Binafsi",
    firstName: "Jina la Kwanza",
    lastName: "Jina la Familia",
    gender: "Jinsia",
    country: "Nchi",
    language: "Lugha",
    timeZone: "Saa za Eneo",
    email: "Anwani yangu ya barua pepe",
    appearance: "Mwonekano",
    lightMode: "Hali ya Mwanga",
    darkMode: "Hali ya Giza",
    password: "Nenosiri na uthibitishaji",
    current: "Nenosiri la sasa",
    new: "Nenosiri Jipya",
    confirm: "Thibitisha Nenosiri Jipya",
    change: "Badilisha Nenosiri",
    notifications: "Arifa na Tahadhari",
    saveChanges: "Hifadhi Mabadiliko"
  }
};

interface ThemeContextType {
  theme: ThemeType;
  language: LanguageType;
  translations: Record<string, string>;
  toggleTheme: () => void;
  setLanguage: (lang: LanguageType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeType) || 'light';
  });
  
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageType) || 'en';
  });

  // Get translations for current language
  const getCurrentTranslations = () => {
    return translations[language] || translations.en;
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply or remove dark class from document element instead of just adding a class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      language, 
      setLanguage, 
      translations: getCurrentTranslations()
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
