import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { btnOutline } from "@/components/Button";
import type { Project } from "@/data/site";

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur ${status === "Terminé" ? "border-success/40 text-success" : "border-primary-glow/40 text-primary-glow"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === "Terminé" ? "bg-success" : "bg-primary-glow animate-pulse"}`} />
      {status}
    </span>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition duration-500 hover:-translate-y-1 hover:border-primary-glow/50">
      <Link to="/projets/$slug" params={{ slug: p.slug }} aria-label={`Découvrir ${p.name}`} className="block overflow-hidden bg-background focus-visible:outline-2 focus-visible:outline-primary-glow">
        <img src={p.image} alt={`Présentation de ${p.name}`} width={1536} height={1024} loading="lazy" className="aspect-[3/2] w-full object-contain transition duration-700 group-hover:scale-[1.025]" />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="text-xs text-muted-foreground">{p.category}</span><StatusBadge status={p.status} /></div>
        <h3 className="text-xl font-bold">{p.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        {p.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-accent px-3 py-1 text-xs">{t}</li>)}</ul>
        )}
        {p.tech.length === 0 && <p className="mt-4 text-xs text-muted-foreground">Technologies non communiquées</p>}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5">
        <Link to="/projets/$slug" params={{ slug: p.slug }} className={`${btnOutline} px-4 py-2.5 text-sm`}>
          Voir le projet <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:text-foreground">Site <ExternalLink className="h-4 w-4" /></a> : p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /> GitHub</a>}
        </div>
      </div>
    </article>
  );
}
