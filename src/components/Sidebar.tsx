import { motion } from "framer-motion";

const expertise = [
  "Brand identity", "Consumer insights", "Culture + trends",
  "Creative + content", "Community", "Problem analysis",
  "Pitching", "GTM", "PMF", "Product analysis",
  "Customer experience (CX)", "Innovation and R+D",
  "Thought leadership", "Academic speaking",
];

const industries = [
  "SaaS", "Music", "Fashion", "Technology", "Arts + culture", "Wellness",
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Substack", href: "#" },
  { label: "Product Hunt", href: "#" },
  { label: "Unsplash", href: "#" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.8 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="pill-wrap">
        {expertise.map((label) => (
          <motion.span key={label} className="pill" variants={item}>
            {label}
          </motion.span>
        ))}
      </div>

      <div className="pill-wrap" style={{ marginTop: "0.75rem" }}>
        {industries.map((label) => (
          <motion.span key={label} className="pill" variants={item}>
            {label}
          </motion.span>
        ))}
      </div>

      <div className="social-grid">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="social-link"
            variants={item}
            whileHover={{ opacity: 0.6 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
}
