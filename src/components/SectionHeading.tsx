import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ eyebrow, title, subtitle, center = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
  >
    {eyebrow && (
      <p className="text-sage text-xs md:text-sm tracking-[0.3em] uppercase font-semibold mb-3 display-font">
        ✦ {eyebrow} ✦
      </p>
    )}
    <h2 className="display-font text-3xl md:text-5xl font-bold leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="serif-font text-lg md:text-xl text-muted-foreground mt-4 italic">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
