import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Bot,
  Music,
  Ticket,
  Shield,
  Coins,
  Brain,
  Layers,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Cpu,
  MessageCircle,
  Image as ImageIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface BotItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  longDesc: string;
  icon: any;
  tags: string[];
  features: string[];
  thumbnail: string | null;
  gallery: (string | null)[];
  status: "LIVE" | "WIP" | "PRIVATE";
}

const bots: BotItem[] = [
  {
    id: "bot-01",
    title: "MODERATION // 01",
    category: "MODERATION",
    desc: "Advanced moderation suite engineered for secure, seamless community management.",
    longDesc: "Advanced moderation suite engineered for secure, seamless community management..",
    icon: Shield,
    tags: ["Anti-Nuke", "Auto-Mod", "Logs"],
    features: [
      "Anti-raid protection",
      "Custom moderation roles",
      "Detailed audit logs",
      "Auto-ban on threshold",
    ],
    thumbnail: "https://cdn.discordapp.com/attachments/1442190808244555847/1506917545909813380/IMG_20260521_124021.png?ex=6a1001d4&is=6a0eb054&hm=0105a1c1b019837a0e7665dad2c178024938a01b2380e9ba134be095dd9bacb5&",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506917545486061658/IMG_20260521_124106.png?ex=6a1001d4&is=6a0eb054&hm=8cfbb1c0098755c260ed6ca2cab3567a3ad20b0fe1993e8f29726d58a92aa2f9&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506917544781676624/IMG_20260521_124147.png?ex=6a1001d3&is=6a0eb053&hm=9c7a2ee4ef4d08567139e42839ae97007d24fc9dd8d33ab84911b5515788e832&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506917545142259763/IMG_20260521_124127.png?ex=6a1001d3&is=6a0eb053&hm=0ba71f7cfa63ec5921e51efebc07168cb8be679002e60a398bb3abacf2b26041&"],
    status: "LIVE",
  },
  {
    id: "bot-02",
    title: "MUSIC // 02",
    category: "MUSIC",
    desc: "High-performance music bot delivering immersive, lag-free audio streaming.",
    longDesc: "High-performance music bot delivering immersive, lag-free audio streaming.",
    icon: Music,
    tags: ["Spotify", "YouTube", "Lavalink"],
    features: [
      "Lossless audio playback",
      "Queue + filters + lyrics",
      "24/7 voice channel uptime",
      "Multi-source streaming",
    ],
    thumbnail: "https://cdn.discordapp.com/attachments/1442190808244555847/1506770686574723273/IMG-20260503-WA0005.jpg?ex=6a0f790e&is=6a0e278e&hm=ef26ebc5e1df193091d26b2f9b3a49dd9aa2416b8bd4cca299640265bb91e2e2&",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506770686574723273/IMG-20260503-WA0005.jpg?ex=6a0f790e&is=6a0e278e&hm=ef26ebc5e1df193091d26b2f9b3a49dd9aa2416b8bd4cca299640265bb91e2e2&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506770687371772094/IMG-20260503-WA0002.jpg?ex=6a0f790e&is=6a0e278e&hm=dff8cfdfd6092faaa4799a98d85c7132f6fef7501f261a7f6943bf2d3ebde4b4&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506770687371772094/IMG-20260503-WA0002.jpg?ex=6a0f790e&is=6a0e278e&hm=dff8cfdfd6092faaa4799a98d85c7132f6fef7501f261a7f6943bf2d3ebde4b4&"],
    status: "LIVE",
  },
  {
    id: "bot-03",
    title: "SELFBOT // 03",
    category: "SELFBOT",
    desc: "Automation-focused selfbot packed with intelligent multi-token control",
    longDesc: "Automation-focused selfbot packed with intelligent multi-token control.",
    icon: Cpu,
    tags: ["Multi-Token", "Automation", "400+ Cmds"],
    features: [
      "400+ commands",
      "Multi-token orchestration",
      "Advanced automation",
      "Stealth operation modes",
    ],
    thumbnail: "https://cdn.discordapp.com/attachments/1442190808244555847/1506770897669853204/IMG_20260421_211225-1.jpg?ex=6a0f7940&is=6a0e27c0&hm=76e0ac30f0c17b474f7f499cb211126df911abe9b3036b8a8a3571d2fab84083&",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506770897669853204/IMG_20260421_211225-1.jpg?ex=6a0f7940&is=6a0e27c0&hm=76e0ac30f0c17b474f7f499cb211126df911abe9b3036b8a8a3571d2fab84083&", null, null],
    status: "PRIVATE",
  },
  {
    id: "bot-04",
    title: "TICKET // 04",
    category: "TICKETS",
    desc: "Professional ticket system optimized for fast, organized support handling.",
    longDesc: "Professional ticket system optimized for fast, organized support handling.",
    icon: Ticket,
    tags: ["Categories", "Transcripts", "SLA"],
    features: [
      "Multi-category tickets",
      "Auto-transcripts on close",
      "Staff SLA tracking",
      "Custom panel builder",
    ],
    thumbnail: "https://cdn.discordapp.com/attachments/1442190808244555847/1506918564601528475/IMG_20260521_124518.png?ex=6a1002c6&is=6a0eb146&hm=97a93edfbb138c0531cf754439526e55ee4e48bb9d6803fd17dfa600ee6587e5&",
    gallery: ["https://media.discordapp.net/attachments/1442190808244555847/1506918564236628009/IMG_20260521_124532.png?ex=6a1002c6&is=6a0eb146&hm=14dacc89284f2943196fd08240ca338248cabf8b7527960bff5dd6b9cb44f00c&=&format=webp&quality=lossless&width=880&height=880", "https://media.discordapp.net/attachments/1442190808244555847/1506918564236628009/IMG_20260521_124532.png?ex=6a1002c6&is=6a0eb146&hm=14dacc89284f2943196fd08240ca338248cabf8b7527960bff5dd6b9cb44f00c&=&format=webp&quality=lossless&width=880&height=880", null],
    status: "LIVE",
  },
  {
    id: "bot-05",
    title: "ECONOMY // 05",
    category: "ECONOMY",
    desc: "Dynamic virtual economy system with engaging gambling and shop mechanics.",
    longDesc: "Dynamic virtual economy system with engaging gambling and shop mechanics.",
    icon: Coins,
    tags: ["Currency", "Shop", "Gambling"],
    features: [
      "Virtual currency + bank",
      "Shop with custom items",
      "Gambling mini-games",
      "Leaderboards",
    ],
    thumbnail: "https://media.discordapp.net/attachments/1442190808244555847/1506919175011172352/IMG_20260521_124726.png?ex=6a100358&is=6a0eb1d8&hm=b7402879b2428db74c80d881f5fcd9ed3300e4269961f3e3fd3db4a8bec0a729&=&format=webp&quality=lossless&width=1364&height=880",
    gallery: ["https://media.discordapp.net/attachments/1442190808244555847/1506919174406934709/IMG_20260521_124743.png?ex=6a100358&is=6a0eb1d8&hm=ca2775af22e35f74ad69920ee729821fc3cf3212a3f9bf7bac0e44a343d3cf5b&=&format=webp&quality=lossless&width=880&height=880", "https://media.discordapp.net/attachments/1442190808244555847/1506919174406934709/IMG_20260521_124743.png?ex=6a100358&is=6a0eb1d8&hm=ca2775af22e35f74ad69920ee729821fc3cf3212a3f9bf7bac0e44a343d3cf5b&=&format=webp&quality=lossless&width=880&height=880", "https://media.discordapp.net/attachments/1442190808244555847/1506919174406934709/IMG_20260521_124743.png?ex=6a100358&is=6a0eb1d8&hm=ca2775af22e35f74ad69920ee729821fc3cf3212a3f9bf7bac0e44a343d3cf5b&=&format=webp&quality=lossless&width=880&height=880"],
    status: "LIVE",
  },
  {
    id: "bot-06",
    title: "ARTIFICIAL INTELLIGENCE // 06",
    category: "AI / GPT",
    desc: "AI-powered assistant enhanced with vision, memory, and smart automation.",
    longDesc: "AI-powered assistant enhanced with vision, memory, and smart automation.",
    icon: Brain,
    tags: ["GPT-4", "Vision", "Memory"],
    features: [
      "Multi-turn conversation",
      "Vision + image gen",
      "Custom system prompts",
      "Per-server memory",
    ],
    thumbnail: "https://cdn.discordapp.com/attachments/1442190808244555847/1506919992162123896/IMG_20260521_125033.png?ex=6a10041b&is=6a0eb29b&hm=30f293f90b2d836b2432c02f320fff0fd98df1ddbcafac26f06e4c74d282a591&",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506919991738372288/IMG_20260521_125051.png?ex=6a10041b&is=6a0eb29b&hm=c82845fe663b36333909aa0c2ef53251bf055ef0a9bd6a36b3282f9d125759ef&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506919991306616862/IMG_20260521_125116.png?ex=6a10041b&is=6a0eb29b&hm=3d3b364b8d9d0699f2dcdbcee86c72d9d94574ebe8078ca05698505f1a0fa664&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506919992455593994/maxresdefault-1.jpg?ex=6a10041b&is=6a0eb29b&hm=41d74d29de06d07de73e1727eaf6d971cad0c696209c4db548413fe074f7be31&"],
    status: "LIVE",
  },
  {
    id: "bot-07",
    title: "ALL IN ONE // 07",
    category: "ALL-IN-ONE",
    desc: "Comprehensive multifunction bot combining utility, moderation, and entertainment.",
    longDesc: "Comprehensive multifunction bot combining utility, moderation, and entertainment.",
    icon: Layers,
    tags: ["300+ Cmds", "Dashboard", "Multi-Module"],
    features: [
      "Every category in one bot",
      "Custom web dashboard",
      "300–400 commands",
      "Modular config per server",
    ],
    thumbnail: "https://media.discordapp.net/attachments/1442190808244555847/1506920875616632984/IMG_20260521_125322.png?ex=6a1004ed&is=6a0eb36d&hm=9606af20aecc434a3f930af87ac63f50e7b0c24a3f14478583284d866932f3c6&=&format=webp&quality=lossless&width=1204&height=849",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506920875298131998/IMG_20260521_125404.png?ex=6a1004ed&is=6a0eb36d&hm=eae7e7037a9a9f33270ab3ee89aa477ad802508f99b948ab9b00b07a76c714bf&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506920874941349930/IMG_20260521_125428.png?ex=6a1004ed&is=6a0eb36d&hm=3a3dd79b3888a858f779215b88c289bbea247a271418ab325d1bd6c7e9a3aa10&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506920874639491153/IMG_20260521_125451.png?ex=6a1004ed&is=6a0eb36d&hm=b413c921697fe08ab835d6f48b1717d5efdb80f19601e988bb8cf408c21b7a3f&"],
    status: "LIVE",
  },
  {
    id: "bot-08",
    title: "AUTO QUEST COMPLETER // 08",
    category: "CUSTOM",
    desc: "Custom automation solution designed for effortless quest progression.",
    longDesc: "Custom automation solution designed for effortless quest progression.",
    icon: Sparkles,
    tags: ["Bespoke", "Unique", "Yours"],
    features: [
      "Built from your idea",
      "Unique feature set",
      "100% custom code",
      "Lifetime ownership",
    ],
    thumbnail: "https://media.discordapp.net/attachments/1442190808244555847/1506921656189452368/IMG_20260521_125614.png?ex=6a1005a8&is=6a0eb428&hm=517d7be796a7f496957e7446868d920194c801ee9b6076ced084dd9bab9bf0f1&=&format=webp&quality=lossless&width=1133&height=713",
    gallery: ["https://cdn.discordapp.com/attachments/1442190808244555847/1506921655912632452/IMG_20260521_125638.png?ex=6a1005a8&is=6a0eb428&hm=c2b115b08731bdf46ef68479bcc2c327dca1000729449923c4211f6ef168cccd&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506921655639867472/IMG_20260521_125655.png?ex=6a1005a7&is=6a0eb427&hm=adae58fa34f03a9ecef89d8279f5cb6b3f2b82df6b7861f506a03b82c9c174ad&", "https://cdn.discordapp.com/attachments/1442190808244555847/1506921655639867472/IMG_20260521_125655.png?ex=6a1005a7&is=6a0eb427&hm=adae58fa34f03a9ecef89d8279f5cb6b3f2b82df6b7861f506a03b82c9c174ad&"],
    status: "WIP",
  },
];

const statusColor = (s: BotItem["status"]) => {
  if (s === "LIVE") return "text-neon border-neon/40 bg-neon/5";
  if (s === "WIP") return "text-yellow-300 border-yellow-300/40 bg-yellow-300/5";
  return "text-violet border-violet/40 bg-violet/5";
};

const Placeholder = ({ Icon, label }: { Icon: any; label?: string }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ink-soft to-ink">
    <Icon className="h-10 w-10 text-cyan/40" />
    {label && (
      <span className="mono-font text-[10px] text-cyan/40 mt-2 tracking-[0.3em]">
        {label}
      </span>
    )}
  </div>
);

const Bots = () => {
  const [activeBot, setActiveBot] = useState<BotItem | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => {
    if (activeBot) {
      document.body.style.overflow = "hidden";
      setGalleryIdx(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeBot]);

  return (
    <div className="container py-16 md:py-24" data-testid="bots-page">
      <SectionHeading
        eyebrow="BOT.SHOWCASE"
        title={
          <>
            CRAFTED <span className="text-cyber-gradient">DISCORD BOTS</span>
          </>
        }
        subtitle="Production-grade bots powering communities of every size. Click any unit to inspect."
      />

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        data-testid="bots-grid"
      >
        {bots.map((b, i) => (
          <motion.button
            key={b.id}
            type="button"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            onClick={() => setActiveBot(b)}
            data-testid={`bot-card-${b.id}`}
            className="group text-left corner-cut bg-card-glass border border-cyan/15 hover:border-cyan/60 transition-all hover:-translate-y-1 relative overflow-hidden hover:shadow-glow-cyan"
          >
            {/* image / placeholder */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan/10">
              {b.thumbnail ? (
                <img
                  src={b.thumbnail}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <Placeholder Icon={b.icon} label="// IMAGE.SLOT" />
              )}
              {/* scanline overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
              {/* status pill */}
              <div
                className={`absolute top-3 right-3 mono-font text-[9px] tracking-[0.25em] px-2 py-1 border rounded-sm ${statusColor(
                  b.status
                )}`}
              >
                ● {b.status}
              </div>
              {/* category */}
              <div className="absolute bottom-3 left-3 mono-font text-[10px] tracking-[0.3em] text-cyan/80">
                // {b.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="display-font text-base font-bold tracking-tight group-hover:text-cyan transition-colors">
                  {b.title}
                </h3>
                <ExternalLink className="h-3.5 w-3.5 text-cyan/60 group-hover:text-cyan transition-colors mt-1" />
              </div>
              <p className="body-font text-xs text-muted-foreground mb-3 line-clamp-2">
                {b.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {b.tags.slice(0, 3).map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center p-10 corner-cut bg-card-glass border border-cyan/20"
        data-testid="bots-page-cta"
      >
        <Bot className="h-10 w-10 text-cyan mx-auto mb-4 animate-float-y" />
        <h3 className="display-font text-2xl md:text-3xl font-bold mb-3">
          WANT A BOT LIKE THESE?
        </h3>
        <p className="body-font text-muted-foreground mb-6 max-w-xl mx-auto">
          Pick a plan, and your bot will be ready in 24–72 hours — fully custom, fully yours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/plans" className="btn-cyber" data-testid="bots-cta-plans">
            See Plans <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="btn-ghost" data-testid="bots-cta-contact">
            Custom Quote
          </Link>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {activeBot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-ink/85 backdrop-blur-md"
            onClick={() => setActiveBot(null)}
            data-testid="bot-modal-backdrop"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-ink-soft border border-cyan/40 corner-cut shadow-deep"
              data-testid="bot-modal"
            >
              {/* close */}
              <button
                onClick={() => setActiveBot(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-md border border-cyan/40 bg-ink flex items-center justify-center text-cyan hover:bg-cyan hover:text-ink transition-all"
                aria-label="Close"
                data-testid="bot-modal-close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* GALLERY */}
                <div className="relative bg-ink border-b md:border-b-0 md:border-r border-cyan/20">
                  <div
                    className="relative aspect-square md:aspect-auto md:h-full min-h-[280px] flex items-center justify-center"
                    data-testid="bot-modal-gallery"
                  >
                    {activeBot.gallery[galleryIdx] ? (
                      <img
                        src={activeBot.gallery[galleryIdx]!}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Placeholder
                        Icon={ImageIcon}
                        label={`// GALLERY.SLOT.${galleryIdx + 1}`}
                      />
                    )}
                    <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
                    {/* arrows */}
                    {activeBot.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setGalleryIdx(
                              (p) =>
                                (p - 1 + activeBot.gallery.length) %
                                activeBot.gallery.length
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-md border border-cyan/40 bg-ink/80 flex items-center justify-center text-cyan hover:bg-cyan hover:text-ink transition-all"
                          aria-label="Previous"
                          data-testid="bot-modal-gallery-prev"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            setGalleryIdx((p) => (p + 1) % activeBot.gallery.length)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-md border border-cyan/40 bg-ink/80 flex items-center justify-center text-cyan hover:bg-cyan hover:text-ink transition-all"
                          aria-label="Next"
                          data-testid="bot-modal-gallery-next"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                    {/* counter */}
                    <div className="absolute bottom-3 right-3 mono-font text-[10px] tracking-[0.25em] text-cyan/80 bg-ink/80 border border-cyan/30 px-2 py-1 rounded-sm">
                      0{galleryIdx + 1} / 0{activeBot.gallery.length}
                    </div>
                  </div>
                  {/* thumbnails */}
                  <div className="flex gap-2 p-3 bg-ink/60 border-t border-cyan/15">
                    {activeBot.gallery.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => setGalleryIdx(idx)}
                        className={`flex-1 aspect-video border ${
                          galleryIdx === idx ? "border-cyan" : "border-cyan/20"
                        } bg-ink-soft flex items-center justify-center transition-all`}
                        data-testid={`bot-modal-thumb-${idx}`}
                      >
                        {g ? (
                          <img src={g} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="h-3.5 w-3.5 text-cyan/40" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* INFO */}
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-md border border-cyan/40 bg-ink flex items-center justify-center">
                      <activeBot.icon className="h-4 w-4 text-cyan" />
                    </div>
                    <div>
                      <div className="mono-font text-[10px] text-cyan tracking-[0.3em]">
                        // {activeBot.category}
                      </div>
                      <div
                        className={`inline-flex items-center gap-1.5 mono-font text-[9px] tracking-[0.25em] px-2 py-0.5 border rounded-sm mt-1 ${statusColor(
                          activeBot.status
                        )}`}
                      >
                        ● {activeBot.status}
                      </div>
                    </div>
                  </div>

                  <h3
                    className="display-font text-2xl md:text-3xl font-bold mb-3 tracking-tight"
                    data-testid="bot-modal-title"
                  >
                    {activeBot.title}
                  </h3>
                  <p className="body-font text-sm text-muted-foreground mb-6 leading-relaxed">
                    {activeBot.longDesc}
                  </p>

                  {/* tech stack */}
                  <div className="mb-6">
                    <div className="mono-font text-[10px] text-cyan tracking-[0.3em] mb-3">
                      // TECH.STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeBot.tags.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* features */}
                  <div className="mb-7">
                    <div className="mono-font text-[10px] text-cyan tracking-[0.3em] mb-3">
                      // FEATURES
                    </div>
                    <ul className="space-y-2">
                      {activeBot.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 body-font text-sm">
                          <span className="mono-font text-cyan mt-0.5">›</span>
                          <span className="text-foreground/85">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-cyan/15">
                    <Link
                      to="/contact"
                      onClick={() => setActiveBot(null)}
                      className="btn-cyber"
                      data-testid="bot-modal-cta-contact"
                    >
                      <MessageCircle className="h-3.5 w-3.5" /> Contact Dev
                    </Link>
                    <Link
                      to="/plans"
                      onClick={() => setActiveBot(null)}
                      className="btn-ghost"
                      data-testid="bot-modal-cta-plans"
                    >
                      View Plans
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bots;
