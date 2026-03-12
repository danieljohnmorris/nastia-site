import { motion } from "framer-motion";

export default function FlowerIcon() {
  return (
    <motion.div
      className="text-dark select-none"
      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <span className="text-[1.5rem] sm:text-[2.5rem] leading-none">✳︎</span>
    </motion.div>
  );
}
