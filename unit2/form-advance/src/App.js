// 📁 App.js

import React from 'react';
import LocalStorageForm from './forms/LocalStorageForm';
import FormikForm from './forms/FormikForm';
import MultiLangForm from './forms/MultiLangForm';
import AutocompleteForm from './forms/AutocompleteForm';
import FileUploadForm from './forms/FileUploadForm';

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', direction: 'rtl' }}>
      <h1>📘 טפסים מתקדמים ב-React (רכיבי מחלקה)</h1>

      <section>
        <h2>💾 שמירת טופס ב-localStorage</h2>
        <LocalStorageForm />
      </section>

      <hr />

      <section>
        <h2>⚙️ טופס עם ספריית Formik</h2>
        <FormikForm />
      </section>

      <hr />

      <section>
        <h2>🌍 טופס עם תמיכה בריבוי שפות</h2>
        <MultiLangForm />
      </section>

      <hr />

      <section>
        <h2>💬 שדה עם Autocomplete</h2>
        <AutocompleteForm />
      </section>

      <hr />

      <section>
        <h2>📤 העלאת קובץ / תמונה</h2>
        <FileUploadForm />
      </section>
    </div>
  );
}

export default App;
