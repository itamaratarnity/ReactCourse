import React, { useState } from "react";
import "./FadeBox.css";

export default function FadeBox() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={() => setShow(!show)}>הצג/הסתר</button>
      <div className={`fade-box ${show ? "show" : ""}`}>
        <p>אני קופסא מונפשת ב־CSS 🎉</p>
      </div>
    </div>
  );
}
