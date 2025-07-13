import { motion } from "framer-motion";

export default function FramerExample() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 20 }}
    >
      <h3>😎 Framer Motion!</h3>
    </motion.div>
  );
}
