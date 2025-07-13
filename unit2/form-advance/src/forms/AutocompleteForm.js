import React, { Component } from 'react';

const cities = ['ירושלים', 'תל אביב', 'חיפה', 'באר שבע'];

class AutocompleteForm extends Component {
  state = {
    input: '',
    suggestions: []
  };

  handleChange = (e) => {
    const value = e.target.value;
    const suggestions = cities.filter(c => c.includes(value));
    this.setState({ input: value, suggestions });
  };

  selectSuggestion = (city) => {
    this.setState({ input: city, suggestions: [] });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="בחר עיר"
        />
        <ul>
          {this.state.suggestions.map((city, i) => (
            <li key={i} onClick={() => this.selectSuggestion(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AutocompleteForm;
