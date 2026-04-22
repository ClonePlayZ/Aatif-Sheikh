import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Sparkle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/bots", label: "Bots" },
  { to: "/videos", label: "Videos" },
  { to: "/plans", label: "Plans" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-deep/70 backdrop-blur-xl border-b border-soft">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Sparkle className="h-5 w-5 md:h-6 md:w-6 text-sage group-hover:rotate-90 transition-transform duration-500" fill="currentColor" />
          <span className="display-font text-lg md:text-xl text-warm-gradient font-bold">Aatif Sheikh</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                  isActive
                    ? "text-sage"
                    : "text-foreground/80 hover:text-cream"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex px-5 py-2.5 rounded-md bg-gradient-warm text-primary-foreground font-semibold text-sm shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-0.5"
        >
          Hire Me
        </Link>

        <button
          className="md:hidden p-2 text-sage"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
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
            className="md:hidden overflow-hidden border-t border-soft bg-slate-deep/95 backdrop-blur-xl"
          >
            <div className="container py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-sage/10 text-sage"
                        : "text-foreground/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-3 rounded-md bg-gradient-warm text-primary-foreground font-semibold"
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
