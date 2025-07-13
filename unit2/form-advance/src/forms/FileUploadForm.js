import React, { Component } from 'react';

class FileUploadForm extends Component {
  state = {
    file: null
  };

  handleChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.file) {
      alert(`העלאת קובץ: ${this.state.file.name}`);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>בחר קובץ:</label><br />
        <input type="file" onChange={this.handleChange} />
        <button type="submit">העלה</button>
      </form>
    );
  }
}

export default FileUploadForm;
