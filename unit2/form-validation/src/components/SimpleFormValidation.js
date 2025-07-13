import React, { useState } from 'react';

function SimpleFormValidation() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = "שדה חובה";
    if (!form.email) {
      errs.email = "שדה חובה";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "כתובת דוא\"ל לא תקינה";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setMessage("✅ הטופס נשלח בהצלחה!");
      setErrors({});
      setForm({ name: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>📥 טופס קצר עם ולידציה</h2>

      <label>שם:</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.name}</div>

      <label>דוא"ל:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.email}</div>

      <button type="submit">שליחה</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </form>
  );
}

export default SimpleFormValidation;
