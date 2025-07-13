// components/Greeting.js
function Greeting({ name }) {
  return <h2>Hello, {name || 'Guest'}!</h2>;
}

export default Greeting;
