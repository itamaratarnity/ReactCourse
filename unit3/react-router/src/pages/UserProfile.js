import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h2>👤 פרופיל משתמש</h2>
      <p>מזהה משתמש: <strong>{id}</strong></p>
      <p>ברוך הבא לדף של משתמש מספר {id}!</p>
    </div>
  );
}

export default UserProfile;
