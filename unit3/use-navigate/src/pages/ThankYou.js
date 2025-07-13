import React from 'react';

// This component displays a thank you message after form submission.
// It can be used in a React Router setup to show a confirmation page.              
// The message is simple and straightforward, thanking the user for their submission.
// It can be styled further with CSS to match the application's design.
// This component is typically rendered after a successful form submission,
// providing a positive user experience by confirming that their input was received.
// It can be integrated into a larger application where users fill out forms,
// such as contact forms, feedback forms, or any other type of user input.
// The component is functional and does not require any props or state management,
// making it lightweight and easy to use.

function ThankYou() {
  return (
    <div>
      <h2>🎉 תודה על פנייתך!</h2>
      <p>נחזור אליך בהקדם.</p>
    </div>
  );
}

export default ThankYou;
