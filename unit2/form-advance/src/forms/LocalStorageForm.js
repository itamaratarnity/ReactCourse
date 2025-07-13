import React, { Component } from 'react';

class LocalStorageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem('name') || ''
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
    localStorage.setItem('name', e.target.value);
  }

  render() {
    return (
      <div>
        <label>שם:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default LocalStorageForm;
