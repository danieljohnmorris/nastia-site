import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function AnimatedTitle({ text }: Props) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.h1
      className="hero-name"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
