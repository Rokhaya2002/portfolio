import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 24 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-foreground">
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-primary shadow-glow" />
      {children}
    </span>
  );
}

export function PageHeader({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro: string }) {
  return (
    <section className="relative px-5 pb-12 pt-32 sm:px-8 md:pt-40">
      <div className="glow-blur -top-20 left-1/2 h-72 w-72 -translate-x-1/2" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            {title} <span className="text-gradient">{accent}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
