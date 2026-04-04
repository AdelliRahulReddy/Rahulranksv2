"use client"
import { useState, useEffect } from 'react';


export default function UseThemeCheck() {

  const [themeCheck, setThemeCheck] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const darkTheme = 'tp-theme-dark';
  const lightTheme = 'tp-theme-light';

  const applyTheme = (themeScheme: string) => {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.setItem('tp_theme_scheme', themeScheme);
    document.documentElement.setAttribute('tp-theme', themeScheme);
    setActive(themeScheme === darkTheme);
  };

  const toggleTheme = () => {
    applyTheme(active ? lightTheme : darkTheme);
  };

  const tp_init_theme = () => {
    const storedTheme = localStorage.getItem('tp_theme_scheme');
    applyTheme(storedTheme === lightTheme ? lightTheme : darkTheme);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      tp_init_theme();
      setThemeCheck(true);
    }
  }, []);

  return {
    themeCheck,
    toggleTheme,
    active,
  };

}
