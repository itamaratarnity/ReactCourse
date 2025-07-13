
import React from 'react';
import './i18n';
import LanguageSwitcher from './LanguageSwitcher';
import Home from './Home';  

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <LanguageSwitcher/>
       <Home></Home>
    </div>
  );
}
