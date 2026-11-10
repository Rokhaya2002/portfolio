import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Rocket, MousePointer2, GraduationCap, Lightbulb, Star, Code2 } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { Portrait, portraitUrl } from "@/components/Portrait";
import { btnOutline, btnPrimary } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { domains, projects } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rokhaya Gueye — Développeuse Web & Mobile, Prompt Engineer" },
      { name: "description", content: "Je transforme les idées en solutions numériques : développement web & mobile, design et intelligence artificielle." },
      { property: "og:title", content: "Rokhaya Gueye — Développeuse Web & Mobile" },
      { property: "og:description", content: "Je transforme les idées en solutions numériques." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: portraitUrl },
      { name: "twitter:image", content: portraitUrl },
    ],
  }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8 md:pt-36">
        <div className="orb -left-24 top-10 h-56 w-56 opacity-50" />
        <div className="orb -right-16 top-[55%] h-40 w-40 opacity-60" />
        <div className="glow-blur right-10 top-20 h-96 w-96" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="order-2 lg:order-1">
            <Reveal><Eyebrow>Développeuse Web & Mobile</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-bold leading-[0.95] sm:text-7xl xl:text-8xl">
                Rokhaya{" "}
                <span className="relative inline-block text-gradient">
                  Gueye
                  <svg viewBox="0 0 200 20" className="absolute -bottom-3 left-2 w-3/4" aria-hidden="true">
                    <path d="M2 14 Q100 -4 198 12" stroke="var(--primary-glow)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 font-display text-2xl font-medium leading-snug sm:text-4xl">
                Je transforme les <span className="text-gradient font-bold">idées</span> en<br className="hidden sm:block" /> solutions <span className="text-gradient font-bold">numériques</span>.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                J'allie développement, créativité et intelligence artificielle pour concevoir des expériences numériques utiles, modernes et innovantes.
              </p>
            </Reveal>
            <Reveal delay={0.32} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/projets" className={btnPrimary}><Rocket className="h-5 w-5" /> Découvrir mes projets <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link to="/contact" className={btnOutline}><Mail className="h-5 w-5" /> Me contacter</Link>
            </Reveal>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:order-2">
            <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-glow/30 bg-[radial-gradient(circle,var(--accent),transparent_70%)]" />
            <motion.div animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <Portrait priority />
            </motion.div>
            <motion.div animate={reduce ? {} : { y: [0, 8, 0], rotate: [-8, -4, -8] }} transition={{ duration: 5, repeat: Infinity }}
              className="glass absolute -left-6 top-10 grid h-16 w-16 place-items-center rounded-2xl sm:-left-12 sm:h-20 sm:w-20">
              <Code2 className="h-8 w-8 text-primary-glow" />
            </motion.div>
            <motion.div animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity }}
              className="glass absolute -right-4 bottom-16 rotate-6 rounded-2xl px-5 py-3 font-script text-2xl leading-tight text-primary-glow sm:-right-10 sm:text-3xl">
              Code<br />Create<br />Innovate
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.4} className="relative mx-auto mt-16 max-w-7xl">
          <div className="glass grid grid-cols-1 divide-y rounded-3xl sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {domains.map((d) => (
              <Link to="/competences" key={d.title} className="group flex items-center gap-4 p-6 transition hover:bg-accent/40">
                <d.icon className="h-9 w-9 shrink-0 text-primary-glow transition group-hover:scale-110" />
                <div>
                  <p className="font-display font-semibold">{d.title}</p>
                  <p className="text-sm text-muted-foreground">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 hidden flex-col items-center gap-2 text-xs text-muted-foreground md:flex">
          <MousePointer2 className="h-5 w-5 animate-bounce" />
          Défiler pour découvrir
          <span className="h-10 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* À propos aperçu */}
      <section className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><Portrait className="mx-auto max-w-[320px]" /></Reveal>
          <div>
            <Reveal><Eyebrow>À propos de moi</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Qui suis-<span className="text-gradient">je ?</span></h2></Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Étudiante en informatique, spécialisée en développement d'applications, je suis passionnée par les nouvelles technologies et l'innovation. Mon objectif : créer des solutions numériques qui ont un impact réel.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[{ i: GraduationCap, t: "Étudiante en informatique" }, { i: Lightbulb, t: "Esprit créatif" }, { i: Star, t: "Une grande ambition" }].map(({ i: I, t }) => (
                <div key={t} className="glass rounded-2xl p-5 text-center transition hover:-translate-y-1">
                  <I className="mx-auto h-7 w-7 text-primary-glow" />
                  <p className="mt-3 font-display font-medium">{t}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.3}><Link to="/a-propos" className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary-glow">En savoir plus <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link></Reveal>
          </div>
        </div>
      </section>

      {/* Projets aperçu */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal><Eyebrow>Projets</Eyebrow></Reveal>
              <Reveal delay={0.08}><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Mes <span className="text-gradient">réalisations</span></h2></Reveal>
            </div>
            <Reveal><Link to="/projets" className={btnOutline}>Tous les projets <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><ProjectCard project={p} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
