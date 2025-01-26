import { motion } from "framer-motion";

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "20px",
        margin: "10px",
        backgroundColor: "#222",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {children}
    </motion.div>
  );
}
