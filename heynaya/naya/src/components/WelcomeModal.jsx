import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Globe, Sun, Moon, Check } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function WelcomeModal() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const isCompleted = localStorage.getItem('heynaya-onboarding');
    // For testing purposes, you can remove `!isCompleted` conditionally. But it should show only if not completed.
    if (!isCompleted) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleComplete = () => {
    localStorage.setItem('heynaya-onboarding', 'done');
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const changeLang = (code) => {
    i18n.changeLanguage(code);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity duration-500" />
      
      {/* Modal Box */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0f1423] rounded-3xl shadow-2xl p-6 sm:p-10 transform scale-100 opacity-100 transition-all duration-500 overflow-hidden border border-slate-200 dark:border-white/10 my-auto">
        
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative text-center mb-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5 shadow-lg mb-4 flex items-center justify-center">
             <div className="w-full h-full bg-white dark:bg-[#0b0f1a] rounded-full flex items-center justify-center">
               <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 animate-pulse" />
             </div>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
            {t('welcomeModal.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Naya</span>
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-white/60">
            {t('welcomeModal.subtitle_1')} <br className="hidden sm:block" /> {t('welcomeModal.subtitle_2')}
          </p>
        </div>

        <div className="space-y-8 relative">
          
          {/* Language Selection */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-white/40 mb-3">
              <Globe className="w-4 h-4 text-purple-500 dark:text-purple-400" /> {t('welcomeModal.language')}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {languages.map((l) => (
                <button 
                  key={l.code}
                  onClick={() => changeLang(l.code)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all duration-300 ${
                    i18n.language === l.code 
                      ? 'border-purple-600 dark:border-purple-500 bg-purple-50 dark:bg-purple-500/10'
                      : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-purple-300 dark:hover:border-purple-500/30'
                  }`}
                >
                  <span className="text-2xl mb-1">{l.flag}</span>
                  <span className={`text-[10px] sm:text-sm font-bold ${
                    i18n.language === l.code ? 'text-purple-900 dark:text-purple-300' : 'text-slate-600 dark:text-white/70'
                  }`}>{l.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selection */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-white/40 mb-3">
              {t('welcomeModal.appearance')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setTheme('light')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                  theme === 'light'
                    ? 'border-amber-500 bg-amber-50 dark:bg-white text-amber-600 font-bold'
                    : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] text-slate-600 dark:text-white/70 hover:border-amber-300'
                }`}
              >
                <Sun className={`w-5 h-5 ${theme === 'light' ? 'text-amber-500' : 'text-slate-400 dark:text-white/40'}`} />
                <span className="text-sm">{t('welcomeModal.lightMode')}</span>
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-bold'
                    : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] text-slate-600 dark:text-white/70 hover:border-indigo-300 dark:hover:border-indigo-500/30'
                }`}
              >
                <Moon className={`w-5 h-5 ${theme === 'dark' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-white/40'}`} />
                <span className="text-sm">{t('welcomeModal.darkMode')}</span>
              </button>
            </div>
          </div>

          {/* Complete Action */}
          <div className="pt-6">
            <button 
              onClick={handleComplete}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-[#0b0f1a] font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              {t('welcomeModal.continue')} <Check className="w-5 h-5 opacity-70" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
