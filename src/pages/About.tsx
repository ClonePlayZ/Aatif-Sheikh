import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkle, Code2, Film, Award, Heart, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const journey = [
    { year: "2020", title: "First Bot Deployed", desc: "Started crafting Discord bots for small communities." },
    { year: "2022", title: "Video Editing Mastery", desc: "Pivoted into cinematic editing — 20+ projects shipped." },
    { year: "2023", title: "100+ Servers Powered", desc: "Bots running across hundreds of communities globally." },
    { year: "2024", title: "Refined Craft", desc: "Premium quality at fair prices — built for creators worldwide." },
  ];

  const values = [
    { icon: Sparkle, title: "Care", desc: "I treat every project like it's my own. Your goals, my standards." },
    { icon: Award, title: "Quality", desc: "No shortcuts. No bugs left behind. Code & cuts you can be proud of." },
    { icon: Heart, title: "Honesty", desc: "Real timelines. Real prices. No upsells, no surprises." },
    { icon: Rocket, title: "Speed", desc: "Fastest delivery in the market — without ever cutting corners." },
  ];

  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="About Me"
        title={<>The Person <span className="text-warm-gradient">Behind the Work</span></>}
        subtitle="Aatif Sheikh — Discord bot architect & cinematic video editor."
      />

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl bg-card-soft border border-soft mb-16"
      >
        <p className="serif-font text-lg md:text-xl text-foreground/90 italic leading-relaxed">
          "I've spent <span className="text-sage not-italic font-semibold">4+ years</span> building Discord bots
          and <span className="text-sage not-italic font-semibold">20+ video projects</span> for creators &
          communities. My mission is simple — deliver premium quality at prices anyone can afford,
          faster than any agency in the market. No fluff. Just craft."
        </p>
        <p className="text-right text-sage display-font mt-5">— Aatif Sheikh</p>
      </motion.div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-7 rounded-2xl bg-card-soft border border-soft"
        >
          <Code2 className="h-9 w-9 text-sage mb-3" />
          <h3 className="display-font text-xl mb-3">Bot Development Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["discord.js", "discord.py", "Node.js", "MongoDB", "PostgreSQL", "Docker", "Lavalink", "REST APIs", "WebSockets"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full bg-sage/10 text-cream border border-soft/40">{s}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-7 rounded-2xl bg-card-soft border border-soft"
        >
          <Film className="h-9 w-9 text-sage mb-3" />
          <h3 className="display-font text-xl mb-3">Editing Toolkit</h3>
          <div className="flex flex-wrap gap-2">
            {["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Sound Design", "Motion Graphics", "VFX", "Captions"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full bg-sage/10 text-cream border border-soft/40">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Journey */}
      <SectionHeading title={<>The <span className="text-warm-gradient">Journey</span></>} />
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage to-transparent" />
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex md:items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-sage glow-sage" />
            <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="display-font text-sage text-sm tracking-widest">{j.year}</div>
              <h4 className="display-font text-xl mt-1">{j.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{j.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Values */}
      <div className="mt-20">
        <SectionHeading title={<>Core <span className="text-warm-gradient">Values</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card-soft border border-soft text-center"
            >
              <v.icon className="h-9 w-9 text-sage mx-auto mb-3" />
              <h4 className="display-font text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/contact"
          className="inline-flex px-7 py-3.5 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:-translate-y-0.5 transition-all"
        >
          Work With Me
        </Link>
      </div>
    </div>
  );
};

export default About;
