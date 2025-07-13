import { useSpring, animated } from "@react-spring/web";

export default function SpringExample() {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 12 }
  });

  return (
    <animated.div style={{ ...styles, marginTop: 20 }}>
      <h3>🌼 React Spring!</h3>
    </animated.div>
  );
}
