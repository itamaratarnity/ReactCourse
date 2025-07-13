import React from 'react';

function FormPreview(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 20, width: '40%' }}>
      <h2>👁️‍🗨️ תצוגה מקדימה</h2>
      <p><strong>שם:</strong> {props.fullName}</p>
      <p><strong>דוא"ל:</strong> {props.email}</p>
      <p><strong>סיסמה:</strong> {props.password ? '******' : ''}</p>
      <p><strong>מגדר:</strong> {props.gender}</p>
      <p><strong>הערות:</strong> {props.notes}</p>
      <p><strong>אישור תנאים:</strong> {props.accept ? '✔️' : '❌'}</p>
    </div>
  );
}

export default FormPreview;
