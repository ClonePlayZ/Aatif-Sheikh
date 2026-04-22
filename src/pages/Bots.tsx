import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Bot, Music, Ticket, Shield } from "lucide-react";
import bot1 from "@/assets/bot-1.jpg";
import bot2 from "@/assets/bot-2.jpg";
import bot3 from "@/assets/bot-3.jpg";
import SectionHeading from "@/components/SectionHeading";

const bots = [
  {
    img: bot1,
    title: "Negative — All In One",
    desc: "An iron-fisted guardian. Auto-mod, raid protection, anti-nuke, role lockdown, and full audit logs.",
    icon: Shield,
    tags: ["Anti-Nuke", "Auto-Mod", "Logs"],
  },
  {
    img: bot2,
    title: "Negative Music — High-Quality Music Bot",
    desc: "Lossless audio, queue, lyrics, filters, 24/7 uptime, multi-source streaming.",
    icon: Music,
    tags: ["Spotify", "YouTube", "Filters"],
  },
  {
    img: bot3,
    title: "Coquette Selfbot — 400+ Commands Selfbot",
    desc: "Nuking, Raiding, Multitoken, Hacking — premium Selfbot With 400+ Commands.",
    icon: Ticket,
    tags: ["Nuking", "Raiding", "Multitoken"],
  },
];

const Bots = () => {
  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Bot Showcase"
        title={<>Crafted <span className="text-warm-gradient">Discord Bots</span></>}
        subtitle="Production-grade bots powering communities of every size."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {bots.map((b, i) => (
          <motion.article
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-card-soft border border-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-deep">
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 h-10 w-10 rounded-lg bg-slate-deep/80 backdrop-blur border border-soft flex items-center justify-center">
                <b.icon className="h-5 w-5 text-sage" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="display-font text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{b.desc}</p>
              <div className="flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-sage/10 text-sage border border-soft/40">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center p-10 rounded-2xl bg-aesthetic border border-soft"
      >
        <Bot className="h-10 w-10 text-sage mx-auto mb-4" />
        <h3 className="display-font text-2xl md:text-3xl mb-3">Want a Bot Like These?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Pick a plan, and your bot will be ready in 24–72 hours — fully custom, fully yours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/plans" className="px-6 py-3 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
            See Plans <ExternalLink className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded-md border border-soft text-cream hover:bg-sage/10 transition-all">
            Custom Quote
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Bots;
