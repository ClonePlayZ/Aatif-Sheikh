import { Link } from "react-router-dom";
import { Sparkle, Instagram, Youtube, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-soft mt-24 bg-slate-deep/60 backdrop-blur-md">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Sparkle className="h-5 w-5 text-sage" fill="currentColor" />
            <span className="display-font text-xl text-warm-gradient font-bold">Aatif Sheikh</span>
          </Link>
          <p className="serif-font text-lg text-muted-foreground mt-3 italic">
            crafting calm, considered work — one bot, one frame at a time.
          </p>
        </div>

        <div>
          <h4 className="display-font text-sage mb-3 text-sm tracking-widest">EXPLORE</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/bots" className="text-foreground/70 hover:text-sage transition-colors">Discord Bots</Link></li>
            <li><Link to="/videos" className="text-foreground/70 hover:text-sage transition-colors">Video Editing</Link></li>
            <li><Link to="/plans" className="text-foreground/70 hover:text-sage transition-colors">Pricing Plans</Link></li>
            <li><Link to="/about" className="text-foreground/70 hover:text-sage transition-colors">About Me</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="display-font text-sage mb-3 text-sm tracking-widest">CONNECT</h4>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { icon: Youtube, href: "https://youtube.com/@clone27129", label: "YouTube" },
              { icon: MessageCircle, href: "https://discord.com/users/858215823155789845", label: "Discord" },
              { icon: Mail, href: "mailto:aatifsheikh27@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full border border-soft/40 bg-card-soft flex items-center justify-center text-sage hover:bg-sage hover:text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">aatifsheikh27@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-soft/30 py-5">
        <p className="container text-xs text-center text-muted-foreground">
          © {new Date().getFullYear()} Aatif Sheikh — All rights reserved. Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
