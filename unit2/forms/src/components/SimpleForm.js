import React, { useState } from 'react';

function SimpleForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    birthDate: '',
    gender: '',
    terms: false,
    role: 'student',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📝 הנתונים נקלטו:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, border: '1px solid gray' }}>
      <h2>🧾 טופס הרשמה</h2>

      <label>שם מלא:</label><br />
      <input type="text" name="fullName" value={form.fullName} onChange={handleChange} /><br />

      <label>דוא"ל:</label><br />
      <input type="email" name="email" value={form.email} onChange={handleChange} /><br />

      <label>סיסמה:</label><br />
      <input type="password" name="password" value={form.password} onChange={handleChange} /><br />

      <label>גיל:</label><br />
      <input type="number" name="age" value={form.age} onChange={handleChange} /><br />

      <label>תאריך לידה:</label><br />
      <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange} /><br />

      <label>מגדר:</label><br />
      <input type="radio" name="gender" value="זכר" onChange={handleChange} checked={form.gender === 'זכר'} /> זכר
      <input type="radio" name="gender" value="נקבה" onChange={handleChange} checked={form.gender === 'נקבה'} /> נקבה<br />

      <label>תפקיד:</label><br />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="student">תלמיד</option>
        <option value="teacher">מורה</option>
        <option value="admin">מנהל מערכת</option>
      </select><br />

      <label>הערות:</label><br />
      <textarea name="notes" value={form.notes} onChange={handleChange} /><br />

      <label>
        <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
        אני מסכים לתנאי השימוש
      </label><br /><br />

      <button type="submit">שלח</button>
    </form>
  );
}

export default SimpleForm;
