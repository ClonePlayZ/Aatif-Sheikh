import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot,
  Cpu,
  Zap,
  ShieldCheck,
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
  GitBranch,
  Database,
  Lock,
  Activity,
  Star,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import HeroScene from "@/components/HeroScene";

const Home = () => {
  const stats = [
    {
      value: "5+",
      label: "YEARS // BOT.DEV",
    },
    {
      value: "100+",
      label: "BOTS // DEPLOYED",
    },
    {
      value: "24h",
      label: "AVG // TURNAROUND",
    },
    {
      value: "100%",
      label: "UPTIME // GUARANTEED",
    },
  ];

  const services = [
    {
      icon: ShieldCheck,
      title: "Moderation & Anti-Nuke",
      desc: "Iron-fisted protection. Anti-raid, auto-mod, audit logs, role lockdown.",
    },
    {
      icon: Activity,
      title: "Music & Streaming",
      desc: "Lossless audio · Spotify · YouTube · Filters · 24/7 uptime via Lavalink.",
    },
    {
      icon: Code2,
      title: "Custom Selfbots",
      desc: "Power-user tools, 400+ commands, multi-token orchestration, automation.",
    },
    {
      icon: Database,
      title: "Full Dashboards",
      desc: "Next.js + REST API + Postgres dashboards. Manage your bot in browser.",
    },
    {
      icon: GitBranch,
      title: "Ticket & Support Systems",
      desc: "Multi-category tickets, transcripts, SLA timers, staff stats.",
    },
    {
      icon: Cpu,
      title: "Economy & RPG",
      desc: "Virtual economy, gambling, RPG mechanics, leaderboards — fully tuned.",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Ship in 24–72h",
      desc: "Faster than any agency. Period.",
    },
    {
      icon: Lock,
      title: "Lifetime Bug Fixes",
      desc: "Every line of code is mine — I support it forever.",
    },
    {
      icon: Sparkles,
      title: "Production-Grade",
      desc: "Clean, scalable, documented. Built like it'll outlive you.",
    },
    {
      icon: Terminal,
      title: "Direct Line",
      desc: "You DM the dev. No PMs, no middlemen, no fluff.",
    },
  ];

  const techStack = [
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
    "REST",
    "WebSockets",
  ];

  const testimonials = [
    {
      name: "ARYAN.K",
      role: "SERVER.OWNER",
      text: "Aatif built our entire bot stack in 3 days. Insanely fast and rock solid.",
    },
    {
      name: "MIRA.J",
      role: "COMMUNITY.LEAD",
      text: "Best bot dev I've worked with. Code is clean, response time is unreal.",
    },
    {
      name: "DANIEL.R",
      role: "DISCORD.AGENCY",
      text: "Cheapest quote I got and somehow the highest quality. Hire him before he raises prices.",
    },
  ];

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* 3D scene */}
        <div className="absolute inset-0 z-0" data-testid="hero-3d-scene">
          <HeroScene />
        </div>
        {/* gradient veil */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-ink via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-cyan/40 bg-cyan/5 mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow" />
              <span className="mono-font text-[10px] tracking-[0.3em] text-cyan font-semibold uppercase">
                // BOOTING.SYSTEM · ONLINE
              </span>
            </div>

            <h1
              className="display-font text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-7"
              data-testid="hero-title"
            >
              <span className="block text-foreground">BOTS THAT</span>
              <span className="block text-cyber-gradient">DON'T BREAK.</span>
            </h1>

            <p className="mono-font text-base md:text-lg text-cyan/90 mb-4 tracking-wide">
              <span className="text-cyan">$</span> aatif.sheikh — discord.bot.architect
            </p>
            <p className="body-font text-base md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              4+ years engineering flagship Discord bots for communities of every size. Anti-nuke.
              Music. Tickets. Selfbots. Custom dashboards.{" "}
              <span className="text-foreground">
                Premium craft at street prices, shipped in 24–72 hours.
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/plans" className="btn-cyber" data-testid="hero-cta-plans">
                View Plans <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/contact" className="btn-ghost" data-testid="hero-cta-contact">
                Initiate Contact
              </Link>
            </div>

            {/* tech ticker */}
            <div className="mt-12 flex flex-wrap gap-2 max-w-xl">
              {techStack.slice(0, 8).map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* bottom scanline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent z-10" />
      </section>

      {/* STATS */}
      <section
        className="border-y border-cyan/10 bg-ink-soft/40 py-10 relative z-[2]"
        data-testid="stats-section"
      >
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left relative"
              data-testid={`stat-${i}`}
            >
              <div className="display-font text-3xl md:text-5xl font-bold text-cyber-gradient">
                {s.value}
              </div>
              <div className="mono-font text-[10px] md:text-[11px] text-muted-foreground tracking-[0.25em] mt-2">
                <span className="text-cyan/60">›</span> {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="container py-24 md:py-32 relative z-[2]"
        data-testid="services-section"
      >
        <SectionHeading
          eyebrow="WHAT I BUILD"
          title={
            <>
              SIX BOT.<span className="text-cyber-gradient">CATEGORIES</span>
            </>
          }
          subtitle="Every category battle-tested in production across 100+ servers."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`service-card-${i}`}
            >
              <div className="group corner-cut bg-card-glass border border-cyan/15 p-7 h-full hover:border-cyan/50 transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/0 via-transparent to-violet/0 group-hover:from-cyan/5 group-hover:to-violet/5 transition-all" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-md border border-cyan/40 bg-ink flex items-center justify-center mb-5 group-hover:bg-cyan group-hover:text-ink transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mono-font text-[10px] text-cyan/70 tracking-[0.25em] mb-2">
                    // 0{i + 1}
                  </div>
                  <h3 className="display-font text-lg md:text-xl font-bold mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="body-font text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section
        className="relative z-[2] py-24 md:py-28"
        data-testid="advantages-section"
      >
        <div className="container">
          <SectionHeading
            eyebrow="WHY ME"
            title={
              <>
                THE QUIET <span className="text-cyber-gradient">ADVANTAGE</span>
              </>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-card-glass border border-cyan/15 rounded-md hover:border-cyan/50 transition-all"
                data-testid={`advantage-${i}`}
              >
                <a.icon className="h-7 w-7 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="display-font text-base font-bold mb-2 tracking-tight">
                  {a.title}
                </h3>
                <p className="body-font text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="container py-24 md:py-28 relative z-[2]"
        data-testid="testimonials-section"
      >
        <SectionHeading
          eyebrow="CLIENT.LOGS"
          title={
            <>
              WHAT THEY <span className="text-cyber-gradient">SAY</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="corner-cut p-7 bg-card-glass border border-cyan/15 relative"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-cyan text-cyan" />
                ))}
              </div>
              <blockquote className="body-font text-base text-foreground/90 mb-6 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="border-t border-cyan/10 pt-4">
                <div className="display-font text-sm font-bold text-cyan tracking-wider">
                  {t.name}
                </div>
                <div className="mono-font text-[10px] text-muted-foreground tracking-[0.25em] mt-1">
                  › {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24 md:pb-32 relative z-[2]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden corner-cut border border-cyan/30 p-10 md:p-16 text-center bg-gradient-to-br from-ink-soft via-ink to-ink-soft"
          data-testid="home-cta-section"
        >
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative">
            <Bot className="h-12 w-12 text-cyan mx-auto mb-6 animate-float-y" />
            <div className="mono-font text-[11px] text-cyan tracking-[0.4em] mb-4">
              // READY.TO.DEPLOY
            </div>
            <h2 className="display-font text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              YOUR BOT IS <span className="text-cyber-gradient">ONE DM</span> AWAY.
            </h2>
            <p className="body-font text-base md:text-lg text-muted-foreground mb-9 max-w-2xl mx-auto">
              Tell me what you need. I'll send back a quote, scope, and delivery date in under 12
              hours.
            </p>
            <Link to="/contact" className="btn-cyber" data-testid="home-cta-button">
              Start the Build <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
