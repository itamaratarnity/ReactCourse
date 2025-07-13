import React from 'react';
import Cart from './components/Cart/Cart';
import './App.css';        // (אופציונלי) סגנונות כלליים

function App() {
  return (
    <div className="app-container" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
        🛍️ React Shopping Cart Demo
      </h1>

      {/* קומפוננטת הסל */}
      <Cart />
    </div>
  );
}

export default App;
