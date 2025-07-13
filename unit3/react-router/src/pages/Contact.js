import React, { Component } from 'react';

// Compare this snippet from src/pages/Contact.js:
// import React, { Component } from 'react';      
//   <--- This line imports React and Component from the 'react' library
// class Contact extends Component {      
//   <--- This line defines a new React component named 'Contact
//   render() {
//     return <h2>✉️ צרו איתנו קשר בדף זה</h2>;
//     <--- This line renders a heading with an envelope icon and a message in Hebrew,                  
//          indicating that this is the "Contact" page.
//   }
// }    

class Contact extends Component {
  render() {
    return <h2>✉️ צרו איתנו קשר בדף זה</h2>;
  }
}

export default Contact;
