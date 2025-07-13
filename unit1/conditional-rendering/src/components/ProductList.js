import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: 'עכבר אלחוטי', price: 80 },
    { id: 2, name: 'מקלדת מכנית', price: 120 },
    { id: 3, name: 'מסך 24 אינץ\'', price: 500 },
    { id: 4, name: 'כבל HDMI', price: 25 },
  ];

  return (
    <div>
      <h2>📋 רשימת מוצרים:</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              fontWeight: product.price > 100 ? 'bold' : 'normal',
              color: product.price > 100 ? 'darkred' : 'black'
            }}
          >
            {product.name} - ₪{product.price}
            {product.price > 100 && <span> 🔥</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
