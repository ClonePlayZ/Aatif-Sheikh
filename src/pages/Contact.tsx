import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "aatifsheikh27@gmail.com",
    href: "mailto:aatifsheikh27@gmail.com",
    color: "from-sage to-sage-deep",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "@aaatiff",
    href: "https://discord.com/users/858215823155789845",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@aatif.sheikh_",
    href: "https://instagram.com/",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "Exael",
    href: "https://youtube.com/@clone27129",
    color: "from-red-600 to-red-500",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("aatifsheikh27@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title={<>Let's <span className="text-warm-gradient">Make Something Together</span></>}
        subtitle="Available 7 days a week. Reply guaranteed within 12 hours."
      />

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
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
            className="group p-6 rounded-2xl bg-card-soft border border-soft hover:border-sage hover:shadow-soft transition-all flex items-center gap-5 hover:-translate-y-1"
          >
            <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
              <c.icon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-sage tracking-widest uppercase font-semibold">{c.label}</div>
              <div className="display-font text-lg truncate">{c.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Email quick-copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 max-w-2xl mx-auto p-6 rounded-2xl bg-aesthetic border border-soft text-center"
      >
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-3">Direct Email</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="serif-font text-xl md:text-2xl text-cream italic">aatifsheikh27@gmail.com</span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-soft text-sage hover:bg-sage/10 transition-all text-sm font-semibold"
          >
            {copied ? <><Check className="h-4 w-4" /> Copied!</> : <><Copy className="h-4 w-4" /> Copy</>}
          </button>
        </div>
      </motion.div>

      {/* CTA card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 max-w-3xl mx-auto p-8 md:p-10 rounded-2xl bg-card-soft border border-soft text-center"
      >
        <h3 className="display-font text-2xl md:text-3xl mb-3">
          Prefer a <span className="text-warm-gradient">Quick Quote?</span>
        </h3>
        <p className="text-muted-foreground mb-6">
          Tell me your project on Discord or Email — I'll send back a price + delivery date in under 12 hours.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="mailto:aatifsheikh27@gmail.com"
            className="px-6 py-3 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://discord.com/users/aatifsheikh"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md border border-soft text-cream hover:bg-sage/10 transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> Discord DM
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
