function BusinessCard(props) {
  return (
    <div style={{ border: '1px solid gray', padding: 10, width: 250, margin: 10 }}>
    <h1>כרטיס עסקי</h1>
      <h2>{props.name}</h2>
      <p>גיל: {props.age}</p>
      <p>מקצוע: {props.job}</p>
      <p>מייל: {props.email}</p>
    </div>
  );
}

export default BusinessCard;
