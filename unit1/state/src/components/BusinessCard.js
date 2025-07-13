// src/components/BusinessCard.js
// קומפוננטת כרטיס ביקור שמציגה פרטי משתמש עם מונה  פנימי
// משתמשת ב-state כדי לעקוב אחרי מספר הלחיצות על כפתור "הגדל מונה" import React from 'react';
import React from 'react';

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // מונה התחלתי
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { name, age, job, email } = this.props;

    return (
      <div style={{ border: '1px solid gray', padding: 10, width: 300, margin: 10 }}>
        <h2>{name}</h2>
        <p>גיל: {age}</p>
        <p>מקצוע: {job}</p>
        <p>מייל: {email}</p>

        {/* מונה פנימי */}
        <p>מספר לחיצות: {this.state.count}</p>
        <button onClick={this.increment}>הגדל מונה</button>
      </div>
    );
  }
}

export default BusinessCard;
 