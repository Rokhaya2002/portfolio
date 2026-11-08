import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projets/")({
  head: () => ({
    meta: [
      { title: "Projets — Rokhaya Gueye" },
      { name: "description", content: "Découvrez les réalisations de Rokhaya Gueye : boutiques, sites vitrines, applications et projets en développement au Sénégal." },
      { property: "og:title", content: "Projets — Rokhaya Gueye" },
      { property: "og:description", content: "Les projets numériques de Rokhaya Gueye." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projets" title="Mes" accent="réalisations" intro="Du commerce en ligne aux services du quotidien : une sélection de mes réalisations et des projets que je développe." />
      {(["Terminé", "En développement"] as const).map((status, index) => {
        const selection = projects.filter((p) => p.status === status);
        return <section key={status} className={`px-5 sm:px-8 ${index > 0 ? "mt-20 border-t border-border pt-16" : ""}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div><p className="mb-3 text-xs font-semibold uppercase text-primary-glow">{index === 0 ? "01 — Réalisations" : "02 — En cours"}</p><h2 className="text-3xl font-semibold sm:text-4xl">{index === 0 ? "Projets terminés" : "En développement"}</h2></div>
              <span className="text-sm text-muted-foreground">{selection.length} projets</span>
            </Reveal>
            <div className="grid items-stretch gap-6 md:grid-cols-2">{selection.map((p, i) => <Reveal key={p.slug} className="h-full" delay={(i % 2) * 0.06}><ProjectCard project={p} /></Reveal>)}</div>
          </div>
        </section>;
      })}
    </>
  );
}
