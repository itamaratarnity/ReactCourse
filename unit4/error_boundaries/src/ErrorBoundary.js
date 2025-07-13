import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // נעדכן state כך שהשגיאה תוצג
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
    // אפשר לשלוח ללוג שרת או למערכת ניטור
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.wrapper}>
          <h2>😵 משהו השתבש</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            🔄 נסה שוב
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  wrapper: {
    border: "2px dashed #cc0000",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffe6e6",
    color: "#990000",
    textAlign: "center",
    margin: 20,
  }
};
