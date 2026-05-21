import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/bots", label: "Bots" },
  { to: "/plans", label: "Plans" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-ink/70 backdrop-blur-xl border-b border-cyan/15"
      data-testid="main-navbar"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
          data-testid="navbar-logo"
        >
          <div className="relative h-9 w-9 rounded-md border border-cyan/40 bg-ink-soft flex items-center justify-center group-hover:border-cyan transition-colors">
            <Terminal className="h-4 w-4 text-cyan" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cyan animate-pulse-glow" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="display-font text-base md:text-lg text-cyber-gradient font-bold">
              AATIF.SHEIKH
            </span>
            <span className="mono-font text-[10px] tracking-[0.3em] text-cyan/70">
              // BOT.DEV.AGENCY
            </span>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center gap-1"
          data-testid="navbar-links-desktop"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative px-4 py-2 mono-font text-xs uppercase tracking-widest font-medium transition-colors ${
                  isActive ? "text-cyan" : "text-foreground/70 hover:text-cyan"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-px h-px bg-cyan shadow-[0_0_8px_hsl(var(--cyan))]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex btn-cyber"
          data-testid="navbar-hire-btn"
        >
          Hire Me
        </Link>

        <button
          className="md:hidden p-2 text-cyan"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-cyan/15 bg-ink/95 backdrop-blur-xl"
            data-testid="navbar-mobile-menu"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-link-mobile-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-3 mono-font uppercase tracking-widest text-sm ${
                      isActive
                        ? "bg-cyan/10 text-cyan border-l-2 border-cyan"
                        : "text-foreground/70"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 btn-cyber justify-center"
                data-testid="navbar-mobile-hire-btn"
              >
                Hire Me
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
