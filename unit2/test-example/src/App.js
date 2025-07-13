import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// This is the main App component that renders the Greeting and Counter components.
// It includes a title and two sections, one for each component.
// The Greeting component displays a personalized greeting message, while the Counter component allows users to increment and
// decrement a counter value. The App component is styled with padding and a font family for better readability.
// The Greeting component is imported from the components directory, and the Counter component is also imported from
// the components directory. The App component is the main entry point of the application, and it is exported for use in other files.
// The Counter component  is used to demonstrate state management with buttons to increment and decrement a counter value.
// The Greeting component is used to demonstrate passing props and rendering dynamic content.
// The App component is the main entry point of the application, and it is exported for use in other files.
// The App component is styled with padding and a font family for better readability.


function App() {
  return (
        <div className="app-container">
        <h1>👋 React Component Testing</h1>
        <h2>Learn React</h2>
      <section>
        <h2>🔹 Greeting</h2>
        {/* The Greeting component will display "Hello, Alice!" */}
        <Greeting name="Alice" /> 
        {/* If no name is provided, it will default to "Guest" */}
        <Greeting />
      </section>
      <section>
        <h2>🔹 Counter</h2>
        <Counter />
      </section>
    </div>
  );
}

export default App;
