import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Mail, Check } from "lucide-react";
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
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Projet introuvable" }, { name: "robots", content: "noindex" }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const next = projects[(projects.findIndex((project) => project.slug === p.slug) + 1) % projects.length];
  return (
    <section className="px-5 pt-28 sm:px-8 md:pt-36">
      <div className="mx-auto max-w-5xl">
        <Link to="/projets" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Tous les projets</Link>
        <Reveal className="mt-6"><StatusBadge status={p.status} /></Reveal>
        <Reveal delay={0.06}><p className="mt-5 text-sm text-primary-glow">{p.category}</p><h1 className="mt-3 break-words text-4xl font-bold sm:text-6xl">{p.name}</h1></Reveal>
        <Reveal delay={0.12}><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{p.desc}</p></Reveal>
        <Reveal delay={0.18} className="mt-10">
          <img src={p.image} alt={`Présentation de ${p.name}`} width={1536} height={1024} className="w-full rounded-lg border border-border" />
          <p className="mt-3 text-xs text-muted-foreground">{p.generated ? "Visuel de présentation créé pour le portfolio — ce n’est pas une capture de l’application." : "Visuel de présentation fourni par la créatrice."}</p>
        </Reveal>
        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-[1.3fr_1fr]">
          <div><h2 className="text-2xl font-semibold">Le projet</h2><p className="mt-4 leading-relaxed text-muted-foreground">{p.presentation}</p><h2 className="mt-9 text-2xl font-semibold">{p.status === "En développement" ? "Objectifs & travaux en cours" : "Fonctionnalités documentées"}</h2><ul className="mt-5 space-y-4">{p.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />{feature}</li>)}</ul></div>
          <aside className="md:border-l md:border-border md:pl-8"><h2 className="text-2xl font-semibold">Technologies</h2>{p.tech.length > 0 ? <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-accent px-4 py-2 text-sm">{t}</li>)}</ul> : <p className="mt-4 text-sm text-muted-foreground">Non communiquées à ce stade.</p>}<h3 className="mt-8 font-semibold">État de vérification</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.verification}</p></aside>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {p.url && <a href={p.url} target="_blank" rel="noreferrer" className={btnPrimary}>Ouvrir le projet <ExternalLink className="h-4 w-4" /></a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={btnOutline}><Github className="h-4 w-4" /> Voir le code</a>}
          <Link to="/contact" search={{ sujet: `Projet ${p.name}` }} className={p.url ? btnOutline : btnPrimary}><Mail className="h-4 w-4" /> En discuter</Link>
        </div>
        {p.repositories && <div className="mt-5 flex flex-wrap gap-5">{p.repositories.map((repo) => <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary-glow hover:text-foreground">{repo.label}<ExternalLink className="h-3 w-3" /></a>)}</div>}
        {next && <div className="mt-16 border-t border-border pt-8"><Link to="/projets/$slug" params={{ slug: next.slug }} className="flex items-center justify-between gap-4"><div><p className="text-xs text-muted-foreground">Projet suivant</p><p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{next.name}</p></div><ArrowRight className="h-6 w-6 shrink-0 text-primary-glow" /></Link></div>}
      </div>
    </section>
  );
}
