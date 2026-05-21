import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Copy,
  Check,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const contacts = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "aatifsheikh27@gmail.com",
    href: "mailto:aatifsheikh27@gmail.com",
    accent: "cyan",
  },
  {
    icon: MessageCircle,
    label: "DISCORD",
    value: "@aaatiff",
    href: "https://discord.com/users/858215823155789845",
    accent: "violet",
  },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    value: "@aatif.sheikh_",
    href: "https://instagram.com/",
    accent: "magenta",
  },
  {
    icon: Youtube,
    label: "YOUTUBE",
    value: "Exael",
    href: "https://youtube.com/@clone27129",
    accent: "cyan",
  },
];

const accentClasses: Record<string, string> = {
  cyan: "text-cyan border-cyan/40 group-hover:bg-cyan group-hover:text-ink",
  violet: "text-violet border-violet/40 group-hover:bg-violet group-hover:text-ink",
  magenta: "text-magenta border-magenta/40 group-hover:bg-magenta group-hover:text-ink",
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("aatifsheikh27@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-16 md:py-24" data-testid="contact-page">
      <SectionHeading
        eyebrow="OPEN.CHANNEL"
        title={
          <>
            INITIATE <span className="text-cyber-gradient">CONTACT</span>
          </>
        }
        subtitle="Available 7 days a week. Reply guaranteed within 12 hours."
      />

      {/* Terminal-style contact header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-10 corner-cut bg-card-glass border border-cyan/30 overflow-hidden"
        data-testid="contact-terminal"
      >
        <div className="flex items-center gap-2 px-5 py-3 bg-ink/60 border-b border-cyan/20">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
          <span className="mono-font text-[10px] text-cyan/70 tracking-[0.25em] ml-3 flex items-center gap-2">
            <Terminal className="h-3 w-3" /> ~/contact.aatif
          </span>
        </div>
        <div className="p-6 mono-font text-sm">
          <p>
            <span className="text-cyan">$</span> ping aatif --status
          </p>
          <p className="text-neon pl-4">
            › ONLINE · ACCEPTING.CLIENTS · 12H.RESPONSE.SLA
          </p>
          <p className="mt-3">
            <span className="text-cyan">$</span> echo "tell me what you need"
          </p>
          <p className="text-foreground/80 pl-4">
            › drop a DM, send an email, or copy my address below ↓
          </p>
        </div>
      </motion.div>

      <div
        className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
        data-testid="contact-cards"
      >
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group p-5 corner-cut bg-card-glass border border-cyan/20 hover:border-cyan/60 transition-all flex items-center gap-4 hover:-translate-y-1 hover:shadow-glow-cyan"
            data-testid={`contact-card-${c.label.toLowerCase()}`}
          >
            <div
              className={`h-12 w-12 rounded-md border bg-ink flex items-center justify-center transition-all ${accentClasses[c.accent]}`}
            >
              <c.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="mono-font text-[10px] text-cyan tracking-[0.3em] mb-1">
                // {c.label}
              </div>
              <div className="display-font text-base font-bold truncate">
                {c.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Email copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 max-w-2xl mx-auto p-6 corner-cut bg-gradient-to-br from-ink-soft to-ink border border-cyan/30 text-center"
        data-testid="contact-email-copy"
      >
        <div className="mono-font text-[10px] text-cyan tracking-[0.4em] mb-3">
          // DIRECT.EMAIL
        </div>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="mono-font text-base md:text-xl text-foreground">
            aatifsheikh27@gmail.com
          </span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 mono-font uppercase tracking-widest text-[11px] text-cyan border border-cyan/40 hover:bg-cyan/10 hover:border-cyan transition-all"
            style={{
              clipPath: "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)",
            }}
            data-testid="contact-copy-email-btn"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" /> COPIED
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> COPY
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Quote CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 max-w-3xl mx-auto p-8 md:p-10 corner-cut bg-card-glass border border-cyan/20 text-center"
        data-testid="contact-quote-cta"
      >
        <h3 className="display-font text-2xl md:text-3xl font-bold mb-3">
          PREFER A <span className="text-cyber-gradient">QUICK QUOTE?</span>
        </h3>
        <p className="body-font text-muted-foreground mb-6">
          Tell me your project on Discord or Email — I'll send back a price + delivery date in under 12 hours.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="mailto:aatifsheikh27@gmail.com"
            className="btn-cyber"
            data-testid="contact-email-btn"
          >
            <Mail className="h-3.5 w-3.5" /> Email Me
          </a>
          <a
            href="https://discord.com/users/858215823155789845"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            data-testid="contact-discord-btn"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Discord DM
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
