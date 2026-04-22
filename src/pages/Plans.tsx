import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Layers, Zap, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Starter",
    price: 25,
    icon: Zap,
    tagline: "One category. Pure focus.",
    features: [
      "1 Command Category",
      "Choose: Moderation OR Music OR Tickets Or Any One Category",
      "20–30 Commands",
      "Slash Commands Support",
      "Hosting Setup Guide",
      "7-day bug-fix support",
    ],
    cta: "Choose Starter",
    highlight: false,
  },
  {
    name: "Studio",
    price: 50,
    icon: Sparkles,
    tagline: "Three categories. Well-rounded.",
    features: [
      "3 Command Categories",
      "75–100 Commands",
      "Custom Embeds & Branding",
      "Database Integration",
      "Slash + Prefix Commands",
      "14-day bug-fix support",
      "Dashboard Ready (optional)",
    ],
    cta: "Choose Studio",
    highlight: true,
  },
  {
    name: "Ultimate",
    price: 75,
    icon: Layers,
    tagline: "All-in-one. The full kit.",
    features: [
      "ALL Categories — Multi-feature",
      "300–400 Commands",
      "Anti-Nuke & Advanced Security",
      "Music + Tickets + Mod + Economy + AI",
      "Custom Web Dashboard",
      "30-day bug-fix support",
      "Priority delivery (24–48h)",
      "Lifetime minor updates",
    ],
    cta: "Choose Ultimate",
    highlight: false,
  },
];

const Plans = () => {
  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Bot Development Plans"
        title={<>Choose Your <span className="text-warm-gradient">Tier</span></>}
        subtitle="Transparent pricing. No hidden fees. Cheapest in the market."
      />

      <div className="grid lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 ${
              p.highlight
                ? "bg-aesthetic border-sage shadow-soft-lg lg:scale-105"
                : "bg-card-soft border-soft hover:shadow-soft"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-warm text-primary-foreground text-xs font-bold tracking-widest uppercase shadow-soft">
                ★ Most Popular ★
              </div>
            )}

            <div className="flex items-center gap-3 mb-2">
              <div className="h-11 w-11 rounded-lg bg-gradient-warm flex items-center justify-center text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="display-font text-2xl">{p.name}</h3>
            </div>
            <p className="serif-font text-muted-foreground italic mb-5">{p.tagline}</p>

            <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-soft/30">
              <span className="display-font text-5xl text-warm-gradient font-bold">${p.price}</span>
              <span className="text-sm text-muted-foreground">/ one-time</span>
            </div>

            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className={`block text-center py-3.5 rounded-md font-semibold transition-all ${
                p.highlight
                  ? "bg-gradient-warm text-primary-foreground shadow-soft hover:-translate-y-0.5"
                  : "border border-soft text-cream hover:bg-sage/10"
              }`}
            >
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* GUARANTEE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
      >
        {[
          { t: "100% Custom", d: "Built from scratch for your server" },
          { t: "24–72h Delivery", d: "Fastest turnaround, guaranteed" },
          { t: "Money-Back", d: "Not satisfied? Full refund." },
        ].map((x) => (
          <div key={x.t} className="p-5 rounded-xl bg-card-soft border border-soft text-center">
            <div className="display-font text-lg text-sage mb-1">{x.t}</div>
            <div className="text-xs text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </motion.div>

      {/* FAQ */}
      <div className="mt-20 max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title={<>Common <span className="text-warm-gradient">Questions</span></>} />
        <div className="space-y-4">
          {[
            { q: "How fast will I get my bot?", a: "Starter & Studio: 24–72 hours. Ultimate: 24–48 hours with priority queue." },
            { q: "Do you provide hosting?", a: "I deliver setup files and a guide. Hosting on VPS/Pterodactyl can be added on request." },
            { q: "Are revisions included?", a: "Yes — unlimited tweaks until you're happy, plus the post-delivery support window per plan." },
            { q: "Can I upgrade later?", a: "Absolutely. Pay only the price difference and I'll expand your bot." },
          ].map((f) => (
            <details key={f.q} className="group p-5 rounded-xl bg-card-soft border border-soft cursor-pointer">
              <summary className="display-font text-lg flex justify-between items-center list-none">
                {f.q}
                <span className="text-sage group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-sm text-muted-foreground mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
