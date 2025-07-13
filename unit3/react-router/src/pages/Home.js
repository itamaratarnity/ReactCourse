import React, { Component } from 'react';

// This is a simple React component that renders a heading for the home page.
// It uses the `Component` class from React to define the `Home` component.
// The `render` method returns a JSX element that displays the text "🏠 זהו דף הבית".
// The text is in Hebrew and translates to "This is the home page".
// The component is exported as the default export, allowing it to be imported and used in other
// parts of the application. The home page is typically the main landing page of a website or application, and the icon "🏠" visually represents the concept of home.
// The use of an emoji icon adds a visual element to the heading, making it more engaging for users.
// This component can be used in a React application to provide a welcoming message on the home page

class Home extends Component {
  render() {
    return <h2>🏠 זהו דף הבית</h2>;
  }
}

export default Home;
