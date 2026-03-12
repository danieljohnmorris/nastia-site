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
      className="w-full lg:w-[260px] lg:shrink-0"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.nav className="flex flex-row lg:flex-col gap-3 lg:gap-0.5 pb-4 lg:pb-5 mb-4 lg:mb-5 border-b border-gray-200" variants={item}>
        <a href="/writing" className="text-sm font-medium text-dark hover:text-accent transition-colors py-1">Writing</a>
        <a href="/career" className="text-sm font-medium text-dark hover:text-accent transition-colors py-1">Career</a>
        <a href="/about" className="text-sm font-medium text-dark hover:text-accent transition-colors py-1">About</a>
        <a href="/contact" className="text-sm font-medium text-dark hover:text-accent transition-colors py-1">Contact</a>
      </motion.nav>

      <div className="flex flex-wrap gap-1.5">
        {expertise.map((label) => (
          <motion.span
            key={label}
            className="inline-block px-3 py-1.5 text-xs font-medium border border-gray-800 rounded-full text-dark whitespace-nowrap cursor-default transition-all hover:bg-dark hover:text-white"
            variants={item}
          >
            {label}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {industries.map((label) => (
          <motion.span
            key={label}
            className="inline-block px-3 py-1.5 text-xs font-medium border border-gray-800 rounded-full text-dark whitespace-nowrap cursor-default transition-all hover:bg-dark hover:text-white"
            variants={item}
          >
            {label}
          </motion.span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-6 pt-6 border-t border-gray-200">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-dark no-underline py-0.5 hover:text-accent transition-colors"
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
