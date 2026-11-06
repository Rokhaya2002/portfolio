import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { contact, nav } from "@/data/site";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Retour en haut"
      className={`fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary shadow-glow transition-all ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 border-t px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <div>
            <p className="font-display font-medium">Rokhaya Gueye</p>
            <p className="text-sm text-muted-foreground">Développeuse Web & Mobile · Prompt Engineer</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground" aria-label="Pied de page">
          {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-foreground">{n.label}</Link>)}
        </nav>
        <div className="flex gap-3">
          {contact.email && <a href={`mailto:${contact.email}`} aria-label="Email" className="glass grid h-10 w-10 place-items-center rounded-full"><Mail className="h-4 w-4" /></a>}
          {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-10 w-10 place-items-center rounded-full"><Linkedin className="h-4 w-4" /></a>}
          {contact.github && <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-10 w-10 place-items-center rounded-full"><Github className="h-4 w-4" /></a>}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-muted-foreground">© {new Date().getFullYear()} Rokhaya Gueye. Tous droits réservés.</p>
    </footer>
  );
}
