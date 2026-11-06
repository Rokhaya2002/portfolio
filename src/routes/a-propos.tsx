import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Cpu, Rocket, Target, Lightbulb, BookOpen, Sparkles, Mountain, ArrowRight } from "lucide-react";
import { PageHeader, Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { btnPrimary } from "@/components/Button";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Rokhaya Gueye" },
      { name: "description", content: "Parcours, passions et objectifs de Rokhaya Gueye, étudiante en informatique et développeuse d'applications." },
      { property: "og:title", content: "À propos — Rokhaya Gueye" },
      { property: "og:description", content: "Parcours, passions et objectifs de Rokhaya Gueye." },
    ],
  }),
  component: About,
});

const journey = [
  { icon: GraduationCap, title: "Parcours académique", text: "Étudiante en informatique, spécialité développement d'applications. Ma formation me donne des bases solides en programmation, en conception et en architecture logicielle." },
  { icon: Cpu, title: "Passion pour la technologie", text: "Je suis attentivement l'évolution des technologies web, mobiles et de l'intelligence artificielle, et j'aime les mettre en pratique dans des projets concrets." },
  { icon: Rocket, title: "Entrepreneuriat numérique", text: "Je m'intéresse à la création de solutions qui répondent à des besoins réels, notamment au Sénégal : santé, éducation, sport." },
  { icon: Target, title: "Objectifs professionnels", text: "Devenir une développeuse reconnue, capable de concevoir des produits numériques complets, utiles et bien pensés, du design jusqu'au code." },
];

const values = [
  { icon: Lightbulb, t: "Créativité" },
  { icon: BookOpen, t: "Apprentissage" },
  { icon: Sparkles, t: "Innovation" },
  { icon: Mountain, t: "Persévérance" },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="À propos de moi" title="Qui suis-" accent="je ?" intro="Je transforme les idées en solutions numériques. J'allie développement, créativité et intelligence artificielle pour concevoir des expériences utiles, modernes et innovantes." />

      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-28"><Portrait className="mx-auto max-w-[400px]" /></Reveal>
          <div className="space-y-5">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.06}>
                <div className="glass flex gap-5 rounded-3xl p-6 sm:p-8">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary shadow-glow"><j.icon className="h-6 w-6" /></div>
                  <div>
                    <h2 className="text-xl font-semibold">{j.title}</h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{j.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-center text-4xl font-bold sm:text-5xl">Mes <span className="text-gradient">valeurs</span></h2></Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="glass group rounded-3xl p-8 text-center transition hover:-translate-y-1 hover:shadow-glow">
                  <v.icon className="mx-auto h-9 w-9 text-primary-glow transition group-hover:scale-110" />
                  <p className="mt-4 font-display text-lg font-semibold">{v.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center"><Link to="/competences" className={btnPrimary}>Voir mes compétences <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>
    </>
  );
}
