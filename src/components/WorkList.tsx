import { motion } from "framer-motion";

interface WorkItem {
  type: string;
  focus: string;
  client: string;
  detail?: string;
  note?: string;
  year?: string;
  current?: boolean;
}

const work: WorkItem[] = [
  { type: "Strategy", focus: "Creative", client: "Karaokebox", detail: "Soho, Smithfield, Mayfair, Birmingham", current: true },
  { type: "Strategy", focus: "Brand", client: "Karaokebox", detail: "Soho, Smithfield, Mayfair, Birmingham", current: true },
  { type: "Consulting", focus: "Business design", client: "R100 Studio", current: true },
  { type: "Strategy", focus: "Pitch", client: "Voice Gems", year: "2024" },
  { type: "Consulting", focus: "GTM", client: "Culture Circle", year: "2024" },
  { type: "Strategy", focus: "Pitch", client: "Culture Circle", year: "2024" },
  { type: "Consulting", focus: "Business design", client: "Voice Gems", year: "2024" },
  { type: "Strategy", focus: "Product", client: "Culture Circle", year: "2024" },
  { type: "Product", focus: "CX", client: "this+that", year: "2023 \u2013 current" },
  { type: "Product", focus: "Strategy", client: "this+that", year: "2023 \u2013 2025" },
  { type: "Product", focus: "Marketing", client: "this+that", year: "2023 \u2013 2025" },
  { type: "Strategy", focus: "Brand", client: "this+that", year: "2022 \u2013 2023" },
  { type: "Strategy", focus: "Pitch", client: "this+that", year: "2022", note: "$2.1m Angel by Local Globe" },
  { type: "Strategy", focus: "Academic partnerships + innovation", client: "this+that", year: "2022 \u2013 2025" },
  { type: "Product", focus: "Consumer research", client: "this+that", year: "2021 \u2013 2022" },
  { type: "Strategy", focus: "Pitch", client: "R100 Studio", detail: '"Art That Consults", Ernst & Young', year: "2022" },
  { type: "Consulting", focus: "Business design", client: "R100 Studio", year: "2022" },
  { type: "Strategy", focus: "Lecture by Harry Yeff at 'AI for Good 2022', United Nations", client: "R100 Studio", year: "2022" },
  { type: "Strategy", focus: "Pitch, 'AI for Good 2022', United Nations", client: "R100 Studio", year: "2022" },
  { type: "Strategy", focus: "Lecture by Harry Yeff at 'Betazone' Davos, World Economic Forum", client: "R100 Studio", year: "2020" },
  { type: "Strategy", focus: "Service design", client: "float effect", year: "2019 \u2013 2021" },
  { type: "Strategy", focus: "Creative", client: "float effect", year: "2019 \u2013 2021" },
  { type: "Strategy", focus: "Brand", client: "float effect", year: "2019 \u2013 2021" },
  { type: "Strategy", focus: "Pitch, 'Future Connections,' Nokia Bell Labs", client: "R100 Studio", year: "2019" },
  { type: "Strategy", focus: 'Content, Reeps100 x Nokia Bell Labs "We Speak Music"', client: "R100 Studio", year: "2019" },
  { type: "Strategy", focus: "Communications", client: "Timothy Han/Edition", year: "2019" },
  { type: "Strategy", focus: "Creative", client: "Timothy Han / Edition", year: "2019" },
  { type: "Strategy", focus: "Brand", client: "Timothy Han / Edition", year: "2019" },
  { type: "Strategy", focus: "Copywriting, Penguin Publishing", client: "Timothy Han / Edition", year: "2019" },
  { type: "Strategy", focus: "Creative copywriting, Liberty London", client: "Timothy Han / Edition", year: "2019" },
  { type: "Creative", focus: 'Creative copywriting, "Faith" at Maddox Gallery', client: "Haris Nukem", year: "2019" },
  { type: "Strategy", focus: "Communication", client: "Moniker Art Fair", year: "2019" },
  { type: "Content", focus: "Social media", client: "Moniker Art Fair", year: "2018" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function WorkList() {
  return (
    <motion.div
      className="work-list"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {work.map((w, i) => (
        <motion.div key={i} variants={item} className="work-row">
          <span className="work-type">{w.type}</span>
          <span className="work-sep"> &bull; </span>
          <span className="work-focus">{w.focus}, </span>
          <span className="work-client">{w.client}</span>
          {w.detail && <span className="work-detail">, {w.detail}</span>}
          {w.current && <span className="work-current"> (current)</span>}
          {w.year && <span className="work-year"> ({w.year})</span>}
          {w.note && <span className="work-note"> {w.note} 💰</span>}
        </motion.div>
      ))}
    </motion.div>
  );
}
