import React, { Component } from 'react';

class MultiLangForm extends Component {
  state = {
    lang: 'he',
    labels: {
      he: { name: 'שם', submit: 'שלח' },
      en: { name: 'Name', submit: 'Submit' }
    },
    name: ''
  };

  switchLang = () => {
    this.setState({ lang: this.state.lang === 'he' ? 'en' : 'he' });
  };

  render() {
    const { name, labels, lang } = this.state;
    return (
      <div>
        <button onClick={this.switchLang}>🔄 שנה שפה</button>
        <label>{labels[lang].name}:</label>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button>{labels[lang].submit}</button>
      </div>
    );
  }
}

export default MultiLangForm;
