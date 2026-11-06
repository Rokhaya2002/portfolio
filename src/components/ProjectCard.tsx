import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-glow/40 bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
      <span className={`h-1.5 w-1.5 rounded-full ${status === "Terminé" ? "bg-success" : "bg-primary-glow animate-pulse"}`} />
      {status}
    </span>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1.5 hover:shadow-glow">
      <div className="relative overflow-hidden">
        <img src={p.image} alt={`Aperçu du projet ${p.name}`} width={1280} height={800} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4"><StatusBadge status={p.status} /></div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{p.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        {p.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs">{t}</li>)}</ul>
        )}
        <Link to="/projets/$slug" params={{ slug: p.slug }} className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-semibold transition hover:border-primary-glow hover:bg-accent">
          Voir le projet <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
