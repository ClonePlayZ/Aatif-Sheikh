import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Heart, Rocket, Cpu, Terminal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const journey = [
    {
      year: "2020",
      title: "FIRST BOT DEPLOYED",
      desc: "Started crafting Discord bots for small communities. Self-taught, sleep-deprived, all in.",
    },
    {
      year: "2021",
      title: "ANTI-NUKE SPECIALIST",
      desc: "Built advanced security bots for high-target servers. Reputation begins.",
    },
    {
      year: "2023",
      title: "100+ SERVERS POWERED",
      desc: "Bots running across hundreds of communities. Word of mouth blows up.",
    },
    {
      year: "2025",
      title: "AGENCY MODE",
      desc: "Full-stack bot dev: custom dashboards, AI integration, enterprise-grade builds.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "QUALITY",
      desc: "No shortcuts. No bugs left behind. Code you'd be proud to show your CTO.",
    },
    {
      icon: Rocket,
      title: "SPEED",
      desc: "Fastest delivery in the market — without cutting a single corner.",
    },
    {
      icon: Heart,
      title: "HONESTY",
      desc: "Real timelines. Real prices. No upsells, no surprises, no fluff.",
    },
    {
      icon: Cpu,
      title: "CRAFT",
      desc: "Every project gets full focus. Your goals, my obsession.",
    },
  ];

  const stack = [
    "discord.js",
    "discord.py",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Lavalink",
    "REST API",
    "WebSockets",
    "Next.js",
    "Tailwind",
    "Prisma",
  ];

  return (
    <div className="container py-16 md:py-24" data-testid="about-page">
      <SectionHeading
        eyebrow="ABOUT.ME"
        title={
          <>
            THE DEV <span className="text-cyber-gradient">BEHIND THE BOTS</span>
          </>
        }
        subtitle="Aatif Sheikh — full-stack Discord bot architect. 4+ years shipping production code."
      />

      {/* Bio terminal block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto corner-cut bg-card-glass border border-cyan/25 mb-20 overflow-hidden"
        data-testid="about-bio"
      >
        <div className="flex items-center gap-2 px-5 py-3 bg-ink/60 border-b border-cyan/20">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
          <span className="mono-font text-[10px] text-cyan/70 tracking-[0.25em] ml-3">
            ~/aatif/bio.sh
          </span>
        </div>
        <div className="p-7 md:p-10 mono-font text-sm leading-relaxed">
          <p>
            <span className="text-cyan">$</span> whoami
          </p>
          <p className="text-foreground/90 mb-5 pl-4">
            Aatif Sheikh — 4+ years engineering Discord bots that don't fall over.
          </p>
          <p className="mb-3">
            <span className="text-cyan">$</span> what.do.you.do
          </p>
          <p className="text-foreground/90 mb-5 pl-4">
            I build production-grade bots — moderation, music, tickets, economy, AI, selfbots, custom dashboards. From a 50-member server to 50k+ communities.
          </p>
          <p className="mb-3">
            <span className="text-cyan">$</span> why.choose.me
          </p>
          <p className="text-foreground/90 pl-4">
            Premium quality at street prices. Faster than any agency. Code that scales.{" "}
            <span className="text-cyan">// No fluff. Just craft.</span>
          </p>
        </div>
      </motion.div>

      {/* Stack */}
      <div className="max-w-4xl mx-auto mb-20" data-testid="about-stack">
        <div className="text-center mb-8">
          <div className="mono-font text-[10px] text-cyan tracking-[0.4em] mb-2">
            // THE.STACK
          </div>
          <h3 className="display-font text-2xl md:text-3xl font-bold">
            TOOLS I SHIP WITH
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {stack.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="tech-tag !text-xs !px-3 !py-1.5"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Timeline */}
      <SectionHeading
        eyebrow="TIMELINE"
        title={
          <>
            THE <span className="text-cyber-gradient">JOURNEY</span>
          </>
        }
      />
      <div className="max-w-3xl mx-auto relative" data-testid="about-timeline">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan to-transparent" />
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex md:items-center mb-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-cyan shadow-glow-cyan" />
            <div
              className={`pl-14 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
              }`}
            >
              <div className="mono-font text-cyan text-xs tracking-[0.3em]">
                // {j.year}
              </div>
              <h4 className="display-font text-lg md:text-xl font-bold mt-1 mb-1.5 tracking-tight">
                {j.title}
              </h4>
              <p className="body-font text-sm text-muted-foreground leading-relaxed">
                {j.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-24" data-testid="about-values">
        <SectionHeading
          eyebrow="CORE.VALUES"
          title={
            <>
              HOW I <span className="text-cyber-gradient">SHIP</span>
            </>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 corner-cut bg-card-glass border border-cyan/15 hover:border-cyan/50 transition-all text-center group"
              data-testid={`about-value-${i}`}
            >
              <v.icon className="h-8 w-8 text-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="display-font text-base font-bold mb-2 tracking-wider">
                {v.title}
              </h4>
              <p className="body-font text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link to="/contact" className="btn-cyber" data-testid="about-cta">
          Work With Me
        </Link>
      </div>
    </div>
  );
};

export default About;
