import React from 'react';

class PersonalCard extends React.Component {
  render() {
    const { name, age, job, email } = this.props;

    return (
      <div style={{ border: '1px solid gray', padding: 10, width: 250, margin: 10 }}>
        <h1>כרטיס אישי</h1>
        <h2>{name}</h2>
        <p>גיל: {age}</p>
        <p>מקצוע: {job}</p>
        <p>מייל: {email}</p>
      </div>
    );
  }
}

export default PersonalCard;
