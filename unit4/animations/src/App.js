import React from "react";
import FadeBox from "./FadeBox";
import FramerExample from "./FramerExample";
import SpringExample from "./SpringExample";
import AutoFocusInput from "./AutoFocusInput";
import FramerAdvanced from "./FramerAdvanced";
import SpringBounce from "./SpringBounce";
import "./App.css"; // Assuming you have a styles.css for global styles

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>🎞️ React Animation & Accessibility</h2>
      <AutoFocusInput />
      <FadeBox />
      <FramerExample />
      <SpringExample />
      <FramerAdvanced />
      <SpringBounce />
    </div>
  );
}
