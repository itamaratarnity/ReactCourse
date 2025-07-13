import { motion } from "framer-motion";

export default function FramerAdvanced() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundColor: "#61dafb",
        padding: 20,
        borderRadius: 10,
        color: "#222",
        marginTop: 20,
        textAlign: "center",
      }}
    >
      <h3>Framer Motion - Fade, Slide & Scale</h3>
    </motion.div>
  );
}
