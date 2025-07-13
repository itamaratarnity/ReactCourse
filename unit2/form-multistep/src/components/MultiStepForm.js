import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ הטופס הושלם:\n' + JSON.stringify(form, null, 2));
  };

  return (
    <form className='form-card' onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>טופס מרובה שלבים</h2>

      {step === 1 && (
        <>
          <h3>שלב 1: פרטים אישיים</h3>

          <label>שם מלא:</label><br />
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          /><br />

          <label>דוא"ל:</label><br />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          /><br />

          <button type="button" onClick={nextStep} style={{ marginTop: 10 }}>
            הבא ➡️
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>שלב 2: פרטי יצירת קשר</h3>

          <label>כתובת:</label><br />
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
          /><br />

          <label>טלפון:</label><br />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          /><br />

          <button type="button" onClick={prevStep} style={{ marginTop: 10, marginRight: 10 }}>
            ⬅️ קודם
          </button>

          <button type="submit" style={{ marginTop: 10 }}>
            סיום ✅
          </button>
        </>
      )}
    </form>
  );
}

export default MultiStepForm;
