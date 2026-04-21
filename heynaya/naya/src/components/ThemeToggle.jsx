import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
        isDark ? 'bg-purple-600/30 border border-purple-500/30 focus:ring-offset-[#0b0f1a]' : 'bg-amber-100 border border-amber-200 focus:ring-offset-white'
      }`}
      aria-label="Toggle Theme"
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={`inline-block h-6 w-6 transform rounded-full transition-transform duration-500 ease-in-out flex items-center justify-center shadow-md ${
          isDark ? 'translate-x-7 bg-[#0b0f1a] border border-purple-500/50' : 'translate-x-1 bg-white border border-amber-300'
        }`}
      >
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          <Sun className="h-4 w-4 text-amber-500" />
        </span>
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <Moon className="h-4 w-4 text-purple-400" />
        </span>
      </span>
    </button>
  );
}
