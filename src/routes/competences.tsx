import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader, Reveal } from "@/components/Reveal";
import { btnPrimary } from "@/components/Button";
import { skills } from "@/data/site";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences — Rokhaya Gueye" },
      { name: "description", content: "Développement web (React, TypeScript), mobile (Flutter, Dart), design (Canva, UI/UX) et Prompt Engineering." },
      { property: "og:title", content: "Compétences — Rokhaya Gueye" },
      { property: "og:description", content: "Web, mobile, design et intelligence artificielle." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Compétences" title="Ma boîte à" accent="outils" intro="Quatre domaines complémentaires qui me permettent d'accompagner un projet de l'idée jusqu'à sa réalisation." />
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="glass group relative h-full overflow-hidden rounded-3xl p-8">
                <div className="glow-blur -right-16 -top-16 h-48 w-48 opacity-0 transition group-hover:opacity-40" />
                <div className="relative flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow"><s.icon className="h-7 w-7" /></div>
                  <div>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                    <h2 className="text-2xl font-bold">{s.title}</h2>
                  </div>
                </div>
                <p className="relative mt-5 text-muted-foreground">{s.desc}</p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="inline-flex items-center gap-1.5 rounded-full border border-primary-glow/30 bg-accent/50 px-4 py-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-primary-glow" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center"><Link to="/projets" className={btnPrimary}>Voir ces compétences en action <ArrowRight className="h-4 w-4" /></Link></Reveal>
      </section>
    </>
  );
}
