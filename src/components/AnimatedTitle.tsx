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
        staggerChildren: 0.015,
        delayChildren: 0.05,
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
        damping: 25,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.h1
      className="font-semibold text-dark leading-[1.1] tracking-tight text-[2.35rem] sm:text-6xl lg:text-7xl mb-6 lg:mb-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, ci) => {
            const globalIndex = text.indexOf(word) + ci;
            return (
              <motion.span
                key={globalIndex}
                variants={letterVariant}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < text.split(" ").length - 1 && (
            <motion.span variants={letterVariant} style={{ display: "inline" }}>{"\u00A0"}</motion.span>
          )}
        </span>
      ))}
    </motion.h1>
  );
}
