import React from 'react';
import { useParams } from 'react-router-dom';

// This code defines a React component named `UserPost` that uses the `useParams` hook from `react-router-dom` to extract parameters from the URL.
// It retrieves `userId` and `postId` from the URL parameters and displays them in a simple format. 
// The component renders a heading with the user's ID and a paragraph with the post's ID, providing a clear and concise view of the user's post information.
// The use of emojis adds a visual element to the text, making it more engaging for users.
// The component is exported for use in other parts of the application, allowing it to be rendered when the corresponding route is accessed.
// This component can be used in a React application to display specific user posts based on the URL parameters, enhancing the user experience by providing relevant information dynamically.
// The `useParams` hook is a part of React Router's API, allowing components to
// access the current route parameters, making it easy to create dynamic and responsive user interfaces.
// The component is a functional component, which is a common pattern in modern React development, promoting simplicity and ease of use.
// The `UserPost` component can be integrated into a larger application that manages user posts, enabling users to view individual posts by navigating to specific URLs.
// This approach is particularly useful in applications that require user-generated content, such as blogs or forums, where each post can be uniquely identified by its user and post IDs.
// The component can be styled further using CSS to enhance its appearance and usability, depending on the application's design requirements.
// The component can be tested using various methods, including unit tests and integration tests, to ensure it behaves as expected when different parameters are passed.
// The component can be easily extended to include additional features, such as editing or deleting posts, making it a versatile part of the application.

function UserPost() {
  const { userId, postId } = useParams();

  return (
    <div>
      <h2>🧑‍💻 משתמש: {userId}</h2>
      <p>📄 פוסט מספר: {postId}</p>
    </div>
  );
}

export default UserPost;
