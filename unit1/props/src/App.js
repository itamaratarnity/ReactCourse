import logo from './logo.svg';
import './App.css';

import BusinessCard from './components/BusinessCard';
import PersonalCard from './components/PersonalCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
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
      <PersonalCard 
          name="אורי ישראלי" 
          age={28} 
          job="מנהל פרויקטים" 
          email="uri@example.com"
        />
      <PersonalCard 
          name="מיה פז" 
          age={22} 
          job="סטודנטית" 
          email="mia@example.com"
        />
         </header>
    </div>
  );
}

export default App;
