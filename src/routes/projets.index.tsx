import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projets/")({
  head: () => ({
    meta: [
      { title: "Projets — Rokhaya Gueye" },
      { name: "description", content: "SUNU SANTÉ, SUNÉTABLIS, Cité Léopold Fitness Club : les projets numériques de Rokhaya Gueye." },
      { property: "og:title", content: "Projets — Rokhaya Gueye" },
      { property: "og:description", content: "Les projets numériques de Rokhaya Gueye." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader eyebrow="Projets" title="Mes" accent="réalisations" intro="Des solutions numériques pensées pour répondre à des besoins concrets au Sénégal. Chaque projet indique clairement son état d'avancement." />
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><ProjectCard project={p} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
