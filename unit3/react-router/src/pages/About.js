import React, { Component } from 'react';

// This code defines a React component named "About" that renders a heading with an information icon and a message in Hebrew, indicating that this is the "About" page. The component is exported for use in other parts of the application.
// It uses the `Component` class from the React library to create a class-based component,
// and the `render` method returns a JSX element that displays the heading with the text "ℹ️ זהו דף מידע אודותינו".
// The `export default About;` statement allows this component to be imported and used in other files within the React application.
// The component is a simple representation of an "About" page, typically used to provide information about the application or organization it represents.
// The icon "ℹ️" is used to visually indicate that this page contains information, making it easier for users to identify its purpose.

class About extends Component {
  render() {
    return <h2>ℹ️ זהו דף מידע אודותינו</h2>;
  }
}

export default About;
