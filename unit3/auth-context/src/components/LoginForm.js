import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h3>התחברות</h3>
      <label>שם:</label>
      <input name="name" value={form.name} onChange={handleChange} required />
      <label>אימייל:</label>
      <input name="email" value={form.email} onChange={handleChange} required />
      <button type="submit">התחבר</button>
    </form>
  );
}

export default LoginForm;
