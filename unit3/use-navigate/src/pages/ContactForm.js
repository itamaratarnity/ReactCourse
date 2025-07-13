import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component is a contact form that allows users to submit their name and email.
// It uses React's useState hook to manage form state and useNavigate from react-router-dom
// to navigate to a thank you page after submission.
// The form includes basic validation to ensure that both fields are filled out before submission.
// The handleChange function updates the form state as the user types,
// and handleSubmit prevents the default form submission behavior, logs the form data,
// and navigates to the thank you page.
// The form is styled with a maximum width for better readability.  


function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן ניתן לשלוח לשרת
    console.log('נשלח:', form);

    // ניווט לדף תודה
    navigate('/thankyou');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>צור קשר</h2>
      <label>שם:</label>
      <input name="name" value={form.name} onChange={handleChange} required /><br />
      <label>אימייל:</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} required /><br />
      <button type="submit">שלח</button>
    </form>
  );
}

export default ContactForm;

