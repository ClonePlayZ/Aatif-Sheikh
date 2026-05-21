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
      <div className={`mono-font text-cyan text-[11px] md:text-xs tracking-[0.4em] uppercase font-semibold mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-cyan/50" />
        <span>// {eyebrow}</span>
        <span className="h-px w-8 bg-cyan/50" />
      </div>
    )}
    <h2 className="display-font text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mono-font text-sm md:text-base text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
