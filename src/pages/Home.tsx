import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Film, Zap, ShieldCheck, BadgeDollarSign, Star, ArrowRight, Sparkles, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";

const Home = () => {
  const stats = [
    { value: "4+", label: "Years of Bot Mastery" },
    { value: "20+", label: "Video Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "48h", label: "Avg. Delivery Time" },
  ];

  const services = [
    {
      icon: Bot,
      title: "Discord Bot Development",
      desc: "Moderation, anti-nuke, music, ticket, all-in-one & selfbots — crafted with calm precision.",
      link: "/bots",
    },
    {
      icon: Film,
      title: "Cinematic Video Editing",
      desc: "YT shorts, Insta reels, long-form videos crafted with cinematic precision.",
      link: "/videos",
    },
  ];

  const advantages = [
    { icon: BadgeDollarSign, title: "Cheapest in the Market", desc: "Premium quality at street-level prices. Compare anywhere." },
    { icon: Zap, title: "Lightning-Fast Delivery", desc: "Most bots & edits delivered in 24–72 hours. No excuses." },
    { icon: ShieldCheck, title: "Lifetime Support", desc: "Bug fixes, updates, and tweaks — I stand by every line of code." },
    { icon: Sparkles, title: "Polished Code", desc: "Clean, scalable, optimized — built to last and easy to extend." },
  ];

  const testimonials = [
    { name: "Aryan K.", role: "Server Owner", text: "Aatif built our entire bot stack in 3 days. Insanely fast and rock solid." },
    { name: "Mira J.", role: "YouTuber", text: "Best edit I've ever received. My retention shot up 40%. Period." },
    { name: "Daniel R.", role: "Community Lead", text: "Cheapest quote I got, and somehow the highest quality. Hire him before he raises prices." },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Soft aesthetic gradient background"
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-peach/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-soft bg-sage/10 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-sage" />
              <span className="text-xs tracking-widest text-sage font-semibold uppercase">Considered craft · made with care</span>
            </div>

            <h1 className="display-font text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              <span className="block">Aatif</span>
              <span className="block text-warm-gradient">Sheikh</span>
            </h1>

            <p className="serif-font text-xl md:text-3xl text-foreground/90 italic mb-3 max-w-2xl">
              Discord Bot Architect <span className="text-sage">&</span> Cinematic Video Editor
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl">
              4+ years building flagship Discord bots and 20+ projects of pulse-pounding video edits.
              Premium craft. Pauper prices. Faster than anyone in the market.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/plans"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-0.5"
              >
                View Bot Plans <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-soft text-cream hover:bg-sage/10 transition-all"
              >
                Hire Me Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-soft bg-slate-deep/40 py-10">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="display-font text-3xl md:text-5xl text-warm-gradient font-bold">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Two Crafts. <span className="text-warm-gradient">One Standard.</span></>}
          subtitle="Considered."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={s.link}
                className="group block p-8 md:p-10 rounded-2xl bg-card-soft border border-soft hover:border-sage transition-all hover:shadow-soft hover:-translate-y-1 h-full"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-warm flex items-center justify-center text-primary-foreground mb-6 group-hover:rotate-6 transition-transform">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="display-font text-2xl md:text-3xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sage font-semibold group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY ME */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Why Choose Me"
          title={<>The <span className="text-warm-gradient">Quiet Advantage</span></>}
          subtitle="Cheapest. Fastest. Honest work that lasts."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card-soft border border-soft hover:border-sage transition-all group"
            >
              <a.icon className="h-8 w-8 text-sage mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="display-font text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Loyal Clients"
          title={<>Words from <span className="text-warm-gradient">happy clients</span></>}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-7 rounded-xl bg-card-soft border border-soft relative"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-sage text-sage" />
                ))}
              </div>
              <blockquote className="serif-font text-lg italic text-foreground/90 mb-5">"{t.text}"</blockquote>
              <figcaption>
                <div className="font-semibold text-cream">{t.name}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-soft p-10 md:p-16 text-center bg-aesthetic"
        >
          <Heart className="h-10 w-10 text-peach mx-auto mb-6 animate-float" />
          <h2 className="display-font text-3xl md:text-5xl mb-4">
            Ready to <span className="text-warm-gradient">Build Something Beautiful?</span>
          </h2>
          <p className="serif-font text-lg md:text-xl text-muted-foreground italic mb-8 max-w-2xl mx-auto">
            Tell me what you have in mind — I'll bring it to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft-lg hover:-translate-y-0.5 transition-all"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
