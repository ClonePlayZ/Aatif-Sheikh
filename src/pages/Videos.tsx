import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Film, Instagram, Youtube } from "lucide-react";
import video1 from "@/assets/video-1.jpg";
import video2 from "@/assets/video-2.jpg";
import video3 from "@/assets/video-3.jpg";
import SectionHeading from "@/components/SectionHeading";

const videos = [
  {
    img: video1,
    title: "Long-Form YouTube Edit",
    desc: "Cinematic color grade, smooth transitions, sound design — built for retention.",
    icon: Youtube,
    type: "Long-form",
  },
  {
    img: video2,
    title: "Instagram Reel — Viral Cut",
    desc: "Pattern interrupts, beat-synced cuts, motion graphics — engineered to go viral.",
    icon: Instagram,
    type: "Reel",
  },
  {
    img: video3,
    title: "YouTube Short — Cinematic",
    desc: "Mood, story, hook in 60 seconds. Vertical optimized, scroll-stopping.",
    icon: Film,
    type: "Short",
  },
];

const Videos = () => {
  return (
    <div className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Video Portfolio"
        title={<>Cinematic <span className="text-warm-gradient">Edits That Convert</span></>}
        subtitle="20+ projects across YouTube, Instagram & long-form storytelling."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {videos.map((v, i) => (
          <motion.article
            key={v.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-card-soft border border-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-deep">
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-deep/40 group-hover:bg-slate-deep/20 transition-colors flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-warm flex items-center justify-center shadow-soft-lg group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-deep/80 backdrop-blur border border-soft text-xs text-sage tracking-widest uppercase font-semibold">
                {v.type}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <v.icon className="h-4 w-4 text-sage" />
                <h3 className="display-font text-xl">{v.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-3 gap-5"
      >
        {[
          { label: "YouTube Long-form", price: "from $40" },
          { label: "Insta Reels / Shorts", price: "from $15" },
          { label: "Cinematic Edits", price: "from $60" },
        ].map((p) => (
          <div key={p.label} className="p-6 rounded-xl bg-card-soft border border-soft text-center">
            <div className="text-sm text-muted-foreground tracking-widest uppercase">{p.label}</div>
            <div className="display-font text-2xl text-warm-gradient mt-1">{p.price}</div>
          </div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-flex px-7 py-3.5 rounded-md bg-gradient-warm text-primary-foreground font-semibold shadow-soft hover:-translate-y-0.5 transition-all"
        >
          Discuss Your Edit
        </Link>
      </div>
    </div>
  );
};

export default Videos;
