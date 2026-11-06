import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { StatusBadge } from "@/components/ProjectCard";
import { btnOutline, btnPrimary } from "@/components/Button";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Projet de Rokhaya Gueye` },
          { name: "description", content: loaderData.project.desc },
          { property: "og:title", content: `${loaderData.project.name} — Rokhaya Gueye` },
          { property: "og:description", content: loaderData.project.desc },
        ]
      : [{ title: "Projet introuvable" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  return (
    <section className="px-5 pt-28 sm:px-8 md:pt-36">
      <div className="mx-auto max-w-5xl">
        <Link to="/projets" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Tous les projets</Link>
        <Reveal className="mt-6"><StatusBadge status={p.status} /></Reveal>
        <Reveal delay={0.06}><h1 className="mt-4 text-4xl font-bold sm:text-6xl">{p.name}</h1></Reveal>
        <Reveal delay={0.12}><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{p.desc}</p></Reveal>
        <Reveal delay={0.18} className="mt-10">
          <div className="glass overflow-hidden rounded-3xl p-2">
            <img src={p.image} alt={`Visuel illustratif du projet ${p.name}`} width={1280} height={800} className="w-full rounded-2xl" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Visuel d'illustration — le projet est actuellement {p.status.toLowerCase()}.</p>
        </Reveal>
        {p.tech.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-accent px-4 py-2 text-sm">{t}</li>)}</ul>
        )}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {p.url && <a href={p.url} target="_blank" rel="noreferrer" className={btnPrimary}>Ouvrir le projet <ExternalLink className="h-4 w-4" /></a>}
          <Link to="/contact" search={{ sujet: `Projet ${p.name}` }} className={p.url ? btnOutline : btnPrimary}><Mail className="h-4 w-4" /> En discuter</Link>
        </div>
      </div>
    </section>
  );
}
