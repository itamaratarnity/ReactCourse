import React, { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor="name">שם:</label>
      <input id="name" ref={inputRef} style={{ marginLeft: 8 }} />
    </div>
  );
}
