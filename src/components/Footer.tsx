import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle, Mail, Terminal, Cpu, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative mt-24 border-t border-cyan/15 bg-ink/60 backdrop-blur-md"
      data-testid="main-footer"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3 group" data-testid="footer-logo">
            <div className="h-10 w-10 rounded-md border border-cyan/40 bg-ink-soft flex items-center justify-center">
              <Terminal className="h-4 w-4 text-cyan" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="display-font text-lg text-cyber-gradient font-bold">
                AATIF.SHEIKH
              </span>
              <span className="mono-font text-[10px] tracking-[0.3em] text-cyan/70">
                // BOT.DEV.AGENCY
              </span>
            </div>
          </Link>
          <p className="mono-font text-sm text-muted-foreground mt-5 max-w-md leading-relaxed">
            <span className="text-cyan">$</span> building production-grade Discord bots since 2020.
            <br />
            <span className="text-cyan">$</span> code that scales · ships fast · stays clean.
          </p>
          <div className="mt-6 flex items-center gap-2 mono-font text-[11px] text-cyan/70 uppercase tracking-widest">
            <Cpu className="h-3.5 w-3.5 animate-pulse-glow" />
            <span>
              STATUS: <span className="text-neon">// ONLINE · ACCEPTING CLIENTS</span>
            </span>
          </div>
        </div>

        <div>
          <h4 className="display-font text-cyan mb-4 text-[11px] tracking-[0.3em] uppercase">
            // EXPLORE
          </h4>
          <ul className="space-y-2 mono-font text-sm">
            {[
              { to: "/bots", label: "Bot Showcase" },
              { to: "/plans", label: "Pricing" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-foreground/70 hover:text-cyan transition-colors"
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <span className="text-cyan/50">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="display-font text-cyan mb-4 text-[11px] tracking-[0.3em] uppercase">
            // CONNECT
          </h4>
          <div className="flex gap-2 flex-wrap">
            {[
              { icon: Mail, href: "mailto:aatifsheikh27@gmail.com", label: "Email" },
              { icon: MessageCircle, href: "https://discord.com/users/858215823155789845", label: "Discord" },
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { icon: Youtube, href: "https://youtube.com/@clone27129", label: "YouTube" },
              { icon: Github, href: "https://github.com/", label: "GitHub" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-testid={`footer-social-${label.toLowerCase()}`}
                className="h-10 w-10 rounded-md border border-cyan/30 bg-ink-soft flex items-center justify-center text-cyan hover:bg-cyan hover:text-ink hover:border-cyan transition-all hover:-translate-y-0.5 hover:shadow-glow-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mono-font text-[11px] text-muted-foreground mt-5">aatifsheikh27@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-cyan/10 py-5">
        <p className="container mono-font text-[11px] text-center text-muted-foreground tracking-wider">
          <span className="text-cyan/70">[©{new Date().getFullYear()}]</span> AATIF.SHEIKH · ALL.SYSTEMS.RESERVED · <span className="text-cyan/70">v2.0.cyber</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
