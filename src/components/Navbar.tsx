import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Home, User, Diamond, Briefcase, Star, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { contact, nav } from "@/data/site";

const icons = [Home, User, Diamond, Briefcase, Star, Mail];

export function CvButton({ className = "" }: { className?: string }) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-medium transition hover:border-primary-glow hover:bg-accent ${className}`;
  if (contact.cvUrl)
    return <a href={contact.cvUrl} download className={base}><Download className="h-4 w-4" /> Télécharger CV</a>;
  return <Link to="/contact" search={{ sujet: "Demande de CV" }} className={base}><Download className="h-4 w-4" /> Demander mon CV</Link>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/70 py-3 backdrop-blur-xl" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Accueil — Rokhaya Gueye">
          <Logo className="h-11 w-11 shrink-0" />
          <span className="truncate font-display text-lg font-medium">Rokhaya Gueye</span>
        </Link>

        <nav className="glass hidden items-center gap-1 rounded-full p-1.5 lg:flex" aria-label="Navigation principale">
          {nav.map((n, i) => {
            const Icon = icons[i];
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link key={n.to} to={n.to} className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {active && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <Icon className="relative h-4 w-4" />
                <span className="relative">{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block"><CvButton /></div>

        <button className="glass grid h-11 w-11 shrink-0 place-items-center rounded-full lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="glass mx-4 mt-3 rounded-3xl p-3 lg:hidden">
            {nav.map((n, i) => {
              const Icon = icons[i];
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-base ${active ? "bg-gradient-primary shadow-glow" : "text-muted-foreground"}`}>
                  <Icon className="h-5 w-5" /> {n.label}
                </Link>
              );
            })}
            <CvButton className="mt-3 w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
