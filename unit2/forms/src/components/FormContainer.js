import React from 'react';
import FormPreview from './FormPreview';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      gender: '',
      notes: '',
      accept: false
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 הנתונים נשלחו בהצלחה!');
  };

  render() {
    return (
      <div style={{ display: 'flex', gap: 40, padding: 20 }}>
        <form onSubmit={this.handleSubmit} style={{ border: '1px solid gray', padding: 20, width: '50%' }}>
          <h2>📄 טופס משתמש (Class)</h2>

          <label>שם מלא:</label><br />
          <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} /><br />

          <label>דוא"ל:</label><br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />

          <label>סיסמה:</label><br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />

          <label>מגדר:</label><br />
          <input type="radio" name="gender" value="זכר" checked={this.state.gender === 'זכר'} onChange={this.handleChange} /> זכר
          <input type="radio" name="gender" value="נקבה" checked={this.state.gender === 'נקבה'} onChange={this.handleChange} /> נקבה<br />

          <label>הערות:</label><br />
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} /><br />

          <label>
            <input type="checkbox" name="accept" checked={this.state.accept} onChange={this.handleChange} />
            אני מסכים לתנאי השימוש
          </label><br /><br />

          <button type="submit">שלח</button>
        </form>

        <FormPreview {...this.state} />
      </div>
    );
  }
}

export default FormContainer;
