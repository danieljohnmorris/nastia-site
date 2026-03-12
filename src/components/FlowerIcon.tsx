import { motion } from "framer-motion";

export default function FlowerIcon() {
  return (
    <motion.div
      className="text-5xl leading-none text-dark select-none"
      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      ✳
    </motion.div>
  );
}
