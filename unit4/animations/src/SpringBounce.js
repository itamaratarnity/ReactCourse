import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

export default function SpringBounce() {
  const [toggle, setToggle] = useState(false);

  const styles = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: toggle ? "translateY(-30px)" : "translateY(0px)" },
    config: {
      tension: 200,
      friction: 10,
      clamp: false,
    },
    reset: true,
    reverse: toggle,
    onRest: () => setToggle(!toggle),
  });

  return (
    <animated.div
      style={{
        ...styles,
        backgroundColor: "#ff6f61",
        padding: 20,
        borderRadius: 10,
        color: "#fff",
        marginTop: 20,
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => setToggle(!toggle)}
    >
      לחץ עליי לקפיצה! (React Spring)
    </animated.div>
  );
}
