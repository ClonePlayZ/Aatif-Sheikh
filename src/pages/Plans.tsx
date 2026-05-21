import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  Zap,
  Sparkles,
  Clock,
  RefreshCcw,
  Headphones,
  Code2,
  Crown,
  ShieldCheck,
  ChevronRight,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface Plan {
  name: string;
  price: number;
  icon: any;
  tagline: string;
  idealFor: string;
  delivery: string;
  revisions: string;
  support: string;
  hosting: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
  accent: "cyan" | "violet" | "magenta";
}

const plans: Plan[] = [
  {
    name: "STARTER",
    price: 25,
    icon: Zap,
    tagline: "One category. Pure focus.",
    idealFor: "Small servers · new communities · solo creators",
    delivery: "48–72 hours",
    revisions: "3 rounds",
    support: "7 days post-launch",
    hosting: "Setup guide included",
    features: [
      "1 Command Category",
      "Moderation OR Music OR Tickets",
      "20–30 Commands",
      "Slash Commands Support",
      "Custom Embeds & Branding",
      "Hosting Setup Guide",
      "7-day bug-fix support",
      "Source code ownership",
    ],
    cta: "Choose Starter",
    accent: "cyan",
  },
  {
    name: "STUDIO",
    price: 50,
    icon: Sparkles,
    tagline: "Three categories. Well-rounded.",
    idealFor: "Growing communities · mid-sized servers · creators",
    delivery: "48–72 hours",
    revisions: "Unlimited",
    support: "14 days post-launch",
    hosting: "Setup + 7-day hosting help",
    features: [
      "3 Command Categories",
      "75–100 Commands",
      "Slash + Prefix Commands",
      "Custom Embeds & Full Branding",
      "PostgreSQL/MongoDB Integration",
      "Web Dashboard (optional)",
      "Anti-Spam + Basic Anti-Nuke",
      "14-day bug-fix support",
      "Lifetime minor updates",
      "Priority response on Discord",
    ],
    cta: "Choose Studio",
    highlight: true,
    badge: "MOST POPULAR",
    accent: "violet",
  },
  {
    name: "ULTIMATE",
    price: 75,
    icon: Crown,
    tagline: "All-in-one. The full kit.",
    idealFor: "Large servers · agencies · serious operators",
    delivery: "24–48 hours · PRIORITY",
    revisions: "Unlimited · forever",
    support: "30 days + lifetime bug fixes",
    hosting: "Setup + 14-day hosting help",
    features: [
      "ALL Categories — Multi-Feature",
      "300–400 Commands",
      "Advanced Anti-Nuke + Anti-Raid",
      "Music + Tickets + Mod + Economy + AI",
      "Custom Web Dashboard (React + Node)",
      "Full Database + Redis Caching",
      "24h Priority Delivery",
      "30-day intensive support",
      "Lifetime minor updates + tweaks",
      "Source code + deployment scripts",
      "Direct dev line (Discord DM)",
    ],
    cta: "Choose Ultimate",
    accent: "magenta",
  },
];

const accentMap = {
  cyan: {
    text: "text-cyan",
    border: "border-cyan/30",
    borderHi: "border-cyan",
    bg: "bg-cyan/5",
    glow: "hover:shadow-glow-cyan",
  },
  violet: {
    text: "text-violet",
    border: "border-violet/40",
    borderHi: "border-violet",
    bg: "bg-violet/5",
    glow: "hover:shadow-glow-violet shadow-glow-violet",
  },
  magenta: {
    text: "text-magenta",
    border: "border-magenta/30",
    borderHi: "border-magenta",
    bg: "bg-magenta/5",
    glow: "hover:shadow-glow-magenta",
  },
};

const Plans = () => {
  return (
    <div className="container py-16 md:py-24" data-testid="plans-page">
      <SectionHeading
        eyebrow="BOT.DEV.PLANS"
        title={
          <>
            CHOOSE YOUR <span className="text-cyber-gradient">TIER</span>
          </>
        }
        subtitle="Transparent pricing. No hidden fees. No subscriptions. Pay once, own forever."
      />

      <div
        className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-testid="plans-grid"
      >
        {plans.map((p, i) => {
          const a = accentMap[p.accent];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative corner-cut p-7 md:p-8 bg-card-glass border ${
                p.highlight
                  ? `${a.borderHi} ${a.glow}`
                  : `${a.border} hover:${a.borderHi}`
              } transition-all hover:-translate-y-1 ${
                p.highlight ? "lg:scale-[1.03] lg:-mt-3" : ""
              }`}
              data-testid={`plan-card-${p.name.toLowerCase()}`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 mono-font text-[10px] tracking-[0.35em] font-bold bg-violet text-ink border border-violet rounded-sm flex items-center gap-1.5">
                  <Star className="h-3 w-3 fill-ink" /> {p.badge}
                </div>
              )}

              {/* header */}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`h-11 w-11 rounded-md border ${a.border} ${a.bg} flex items-center justify-center ${a.text}`}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="display-font text-xl font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <div className={`mono-font text-[10px] tracking-[0.3em] ${a.text}`}>
                    // TIER.0{i + 1}
                  </div>
                </div>
              </div>
              <p className="mono-font text-xs text-muted-foreground italic mb-5">
                {p.tagline}
              </p>

              {/* price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="display-font text-5xl text-cyber-gradient font-black">
                  ${p.price}
                </span>
                <span className="mono-font text-xs text-muted-foreground tracking-wider">
                  / ONE-TIME
                </span>
              </div>
              <p className="mono-font text-[11px] text-muted-foreground mb-5">
                <span className={a.text}>›</span> IDEAL: {p.idealFor}
              </p>

              {/* quick specs */}
              <div className="grid grid-cols-2 gap-2 mb-6 py-4 border-y border-cyan/15">
                <div>
                  <div className="mono-font text-[9px] text-cyan/70 tracking-[0.25em] mb-1 flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> DELIVERY
                  </div>
                  <div className="mono-font text-[11px] text-foreground/90">
                    {p.delivery}
                  </div>
                </div>
                <div>
                  <div className="mono-font text-[9px] text-cyan/70 tracking-[0.25em] mb-1 flex items-center gap-1.5">
                    <RefreshCcw className="h-3 w-3" /> REVISIONS
                  </div>
                  <div className="mono-font text-[11px] text-foreground/90">
                    {p.revisions}
                  </div>
                </div>
                <div>
                  <div className="mono-font text-[9px] text-cyan/70 tracking-[0.25em] mb-1 flex items-center gap-1.5">
                    <Headphones className="h-3 w-3" /> SUPPORT
                  </div>
                  <div className="mono-font text-[11px] text-foreground/90">
                    {p.support}
                  </div>
                </div>
                <div>
                  <div className="mono-font text-[9px] text-cyan/70 tracking-[0.25em] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3" /> HOSTING
                  </div>
                  <div className="mono-font text-[11px] text-foreground/90">
                    {p.hosting}
                  </div>
                </div>
              </div>

              {/* features */}
              <div className="mono-font text-[10px] text-cyan tracking-[0.3em] mb-3">
                // INCLUDED
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm body-font">
                    <Check className={`h-4 w-4 ${a.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-3.5 mono-font font-bold uppercase tracking-widest text-xs transition-all ${
                  p.highlight
                    ? "bg-violet text-ink hover:bg-violet/90 hover:shadow-glow-violet"
                    : `border ${a.border} ${a.text} hover:${a.bg} hover:${a.borderHi}`
                }`}
                style={{
                  clipPath:
                    "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                }}
                data-testid={`plan-cta-${p.name.toLowerCase()}`}
              >
                {p.cta} <ChevronRight className="h-3.5 w-3.5 inline ml-1" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* GUARANTEES */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        data-testid="plans-guarantees"
      >
        {[
          {
            i: Code2,
            t: "100% CUSTOM",
            d: "Every line written for your server. No templates, ever.",
          },
          {
            i: Zap,
            t: "FASTEST IN MARKET",
            d: "24–72h delivery. Guaranteed or your money back.",
          },
          {
            i: ShieldCheck,
            t: "MONEY-BACK SHIELD",
            d: "Not satisfied within 7 days? Full refund. No questions.",
          },
        ].map((x, i) => (
          <div
            key={x.t}
            className="p-5 corner-cut bg-card-glass border border-cyan/20 text-center hover:border-cyan/50 transition-all"
            data-testid={`plans-guarantee-${i}`}
          >
            <x.i className="h-7 w-7 text-cyan mx-auto mb-3" />
            <div className="display-font text-sm font-bold tracking-wider mb-1">
              {x.t}
            </div>
            <div className="body-font text-xs text-muted-foreground">{x.d}</div>
          </div>
        ))}
      </motion.div>

      {/* FAQ */}
      <div
        className="mt-20 max-w-3xl mx-auto"
        data-testid="plans-faq"
      >
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              COMMON <span className="text-cyber-gradient">QUESTIONS</span>
            </>
          }
        />
        <div className="space-y-3">
          {[
            {
              q: "How fast will I get my bot?",
              a: "Starter & Studio: 48–72 hours. Ultimate: 24–48 hours with priority queue. If I miss the deadline, you get a partial refund.",
            },
            {
              q: "Do you provide hosting?",
              a: "I deliver setup files, deployment scripts, and a full guide. Free hosting setup help is included per plan (7d/14d). Long-term VPS hosting can be added on request.",
            },
            {
              q: "Are revisions included?",
              a: "Starter: 3 rounds. Studio & Ultimate: unlimited tweaks until you're happy, plus the post-delivery support window per plan.",
            },
            {
              q: "Can I upgrade later?",
              a: "Absolutely. Pay only the price difference and I'll expand your bot — no rebuild needed.",
            },
            {
              q: "Do I own the source code?",
              a: "100%. Every plan includes full source code ownership. It's your bot — modify, resell, or scale however you want.",
            },
            {
              q: "How do I pay?",
              a: "PayPal, UPI, crypto (BTC/ETH/USDT), or bank transfer. 50% upfront, 50% on delivery. No hidden fees.",
            },
          ].map((f, i) => (
            <details
              key={f.q}
              className="group p-5 corner-cut bg-card-glass border border-cyan/15 cursor-pointer hover:border-cyan/40 transition-all"
              data-testid={`plans-faq-${i}`}
            >
              <summary className="display-font text-base font-bold flex justify-between items-center list-none">
                <span className="flex items-center gap-3">
                  <span className="mono-font text-cyan text-xs">
                    // 0{i + 1}
                  </span>
                  {f.q}
                </span>
                <span className="text-cyan group-open:rotate-45 transition-transform text-2xl mono-font">
                  +
                </span>
              </summary>
              <p className="body-font text-sm text-muted-foreground mt-4 pl-12 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
