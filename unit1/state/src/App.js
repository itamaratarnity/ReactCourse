import React from 'react';
import BusinessCard from './components/BusinessCard';
import BusinessCard1 from './components/BusinessCard1';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>כרטיסי ביקור עם מונה פנימי בכל כרטיס</h1>
        <BusinessCard
          name="דני כהן"
          age={30}
          job="מהנדס תוכנה"
          email="danny@example.com"
        />
        <BusinessCard
          name="רות לוי"
          age={25}
          job="מעצבת גרפית"
          email="rut@example.com"
        />
        <BusinessCard1
          name="אורי ישראלי"
          age={28}
          job="מפתח אתרים"
          email="uri@example.com"
        />
        <BusinessCard1
          name="מיכל אברהם"
          age={32}
          job="מנהלת פרויקטים"
          email="michal@example.com"
        />
      </div>
    );
  }
}

export default App;
