import './App.css';
import HelloFunctional from './components/HelloFunctional';
import HelloClass from './components/HelloClass';

// This is the main App component that imports and uses both HelloFunctional and HelloClass components.
// It renders both components inside a div, demonstrating the use of functional and class components in React.
// The HelloFunctional component is a simple functional component that returns a greeting message,
// while the HelloClass component is a class-based component that does the same.  

function App() {
  return (
    <div>
      <HelloFunctional />
      <HelloClass />
    </div>
  );
}
export default App;
