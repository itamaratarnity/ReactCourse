// src/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    console.log('Changing language to:', e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="he">עברית</option>
    </select>
  );
}
