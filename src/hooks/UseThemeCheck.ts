"use client"
import { useCallback, useState, useEffect } from 'react';

const DARK_THEME = 'tp-theme-dark';
const LIGHT_THEME = 'tp-theme-light';

export default function UseThemeCheck() {

  const [themeCheck, setThemeCheck] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const applyTheme = useCallback((themeScheme: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem('tp_theme_scheme', themeScheme);
    document.documentElement.setAttribute('tp-theme', themeScheme);
    setActive(themeScheme === DARK_THEME);
  }, []);

  const toggleTheme = () => {
    applyTheme(active ? LIGHT_THEME : DARK_THEME);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('tp_theme_scheme');
      applyTheme(storedTheme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME);
      setThemeCheck(true);
    }
  }, [applyTheme]);

  return {
    themeCheck,
    toggleTheme,
    active,
  };

}
