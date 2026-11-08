import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHeader, Reveal } from "@/components/Reveal";
import { btnPrimary } from "@/components/Button";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rokhaya Gueye" },
      { name: "description", content: "Sites web, applications web et mobiles, création graphique Canva, accompagnement IA et Prompt Engineering." },
      { property: "og:title", content: "Services — Rokhaya Gueye" },
      { property: "og:description", content: "Ce que je peux réaliser pour vous." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Ce que je peux" accent="faire pour vous" intro="Du site vitrine à l'application mobile, en passant par vos visuels et l'usage de l'IA : un accompagnement clair et sur mesure." />
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="glass group flex h-full flex-col rounded-3xl p-8 transition hover:shadow-glow">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-primary-glow/40 bg-accent transition group-hover:bg-gradient-primary"><s.icon className="h-7 w-7 text-primary-glow transition group-hover:text-foreground" /></div>
                <h2 className="mt-6 text-xl font-bold">{s.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" search={{ sujet: s.title }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow">Demander ce service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-center shadow-glow sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Un projet en tête ?</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">Parlons-en ensemble et donnons vie à votre idée.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 font-semibold transition hover:-translate-y-0.5">Me contacter <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
