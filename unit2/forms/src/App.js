import React from 'react';
import SimpleForm from './components/SimpleForm';         // טופס בפונקציה עם useState
import FormContainer from './components/FormContainer';   // טופס במחלקה עם props

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🧾 טפסים ב-React: פונקציה + מחלקה</h1>

      {/* טופס פונקציונלי עם useState */}
      <div style={{ marginBottom: 40 }}>
        <SimpleForm />
      </div>

      {/* טופס בקומפוננטת Class עם props */}
      <div>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
// App.js - ייבוא קומפוננטות טופס והצגתן
// SimpleForm.js - טופס פשוט עם useState
// FormContainer.js - טופס עם מחלקה ו-FormPreview
// FormPreview.js - תצוגה מקדימה של הנתונים מהטופס
// src/index.js - ייבוא App והצגתו ב-DOM
// index.html - קובץ HTML בסיסי עם div id="root"