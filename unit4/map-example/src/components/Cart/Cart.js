import React, { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Laptop', price: 4500 },
  { id: 2, name: 'Mouse', price: 150 },
  { id: 3, name: 'Monitor', price: 1200 },
  { id: 4, name: 'USB Cable', price: 25 },
  { id: 5, name: 'Keyboard', price: 320 }
];

function Cart() {
  const [query, setQuery] = useState(''); // שדה חיפוש

  // סינון פריטים לפי שם
  const filteredItems = initialItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // חישוב סכום כולל של מוצרים מסוננים
  const totalPrice = filteredItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Shopping Cart</h2>

      {/* שדה חיפוש */}
      <input
        type="text"
        placeholder="Search product…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px 10px', marginBottom: '16px', width: '100%' }}
      />

      {/* רשימת פריטים */}
      <ul className="cart-list">
        {filteredItems.length === 0 ? (
          <li style={{ color: '#888' }}>No products found.</li>
        ) : (
          filteredItems.map(item => (
            <li
              key={item.id}
              className={`cart-item ${item.price > 1000 ? 'important' : ''}`}
            >
              <span>{item.name}</span>
              <span>₪{item.price}</span>
            </li>
          ))
        )}
      </ul>

      {/* סכום כולל */}
      <p className="cart-total">סה״כ: ₪{totalPrice}</p>

      {/* משלוח חינם */}
      {totalPrice > 5000 && (
        <p className="free-shipping">✔️ משלוח חינם</p>
      )}
    </div>
  );
}

export default Cart;
