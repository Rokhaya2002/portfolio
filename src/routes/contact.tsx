import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send, Mail, Linkedin, Github, MessageCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader, Reveal } from "@/components/Reveal";
import { btnPrimary } from "@/components/Button";
import { contact } from "@/data/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { sujet?: string } => (typeof s["sujet"] === "string" ? { sujet: s["sujet"] } : {}),
  head: () => ({
    meta: [
      { title: "Contact — Rokhaya Gueye" },
      { name: "description", content: "Contactez Rokhaya Gueye pour un site web, une application ou un accompagnement IA." },
      { property: "og:title", content: "Contact — Rokhaya Gueye" },
      { property: "og:description", content: "Discutons de votre projet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Fields = { nom: string; email: string; sujet: string; message: string };

export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.nom.trim().length < 2) e.nom = "Veuillez indiquer votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Adresse email invalide.";
  if (f.sujet.trim().length < 3) e.sujet = "Veuillez préciser le sujet.";
  if (f.message.trim().length < 10) e.message = "Votre message doit contenir au moins 10 caractères.";
  return e;
}

const field = "w-full rounded-2xl border bg-background/50 px-5 py-4 text-base outline-none transition placeholder:text-muted-foreground/60 focus:border-primary-glow focus:ring-2 focus:ring-ring/30";

function Contact() {
  const { sujet } = Route.useSearch();
  const [f, setF] = useState<Fields>({ nom: "", email: "", sujet: sujet ?? "", message: "" });
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => setF((p) => ({ ...p, [k]: ev.target.value }));

  function submit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) { toast.error("Merci de corriger les champs indiqués."); return; }
    if (!contact.email) { toast.error("L'adresse email de contact n'est pas encore configurée."); return; }
    const body = `${f.message}\n\n— ${f.nom} (${f.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(f.sujet)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Votre messagerie s'ouvre avec le message prêt à être envoyé.");
  }

  const links = [
    contact.email && { href: `mailto:${contact.email}`, icon: Mail, label: "Email", value: contact.email },
    contact.whatsapp && { href: `https://wa.me/${contact.whatsapp}`, icon: MessageCircle, label: "WhatsApp", value: `+${contact.whatsapp.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5")}` },
    contact.linkedin && { href: contact.linkedin, icon: Linkedin, label: "LinkedIn", value: "Voir mon profil" },
    contact.github && { href: contact.github, icon: Github, label: "GitHub", value: "Voir mes dépôts" },
  ].filter(Boolean) as { href: string; icon: typeof Mail; label: string; value: string }[];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Travaillons" accent="ensemble" intro="Une idée, un projet, une question ? Écrivez-moi, je vous répondrai avec plaisir." />
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form onSubmit={submit} noValidate className="glass space-y-5 rounded-3xl p-6 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom" error={errors.nom}><input className={field} value={f.nom} onChange={set("nom")} autoComplete="name" placeholder="Votre nom" /></Field>
                <Field label="Email" error={errors.email}><input className={field} type="email" value={f.email} onChange={set("email")} autoComplete="email" placeholder="vous@exemple.com" /></Field>
              </div>
              <Field label="Sujet" error={errors["sujet"]}><input className={field} value={f.sujet} onChange={set("sujet")} placeholder="Objet de votre message" /></Field>
              <Field label="Message" error={errors.message}><textarea className={`${field} min-h-40 resize-y`} value={f.message} onChange={set("message")} placeholder="Décrivez votre projet…" /></Field>
              <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}><Send className="h-4 w-4" /> Envoyer le message</button>
              {sent && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="h-4 w-4" /> Message préparé dans votre messagerie. Merci !</p>}
            </form>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            {links.length > 0 ? links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass flex items-center gap-4 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary"><l.icon className="h-5 w-5" /></div>
                <div className="min-w-0"><p className="text-sm text-muted-foreground">{l.label}</p><p className="truncate font-semibold">{l.value}</p></div>
              </a>
            )) : (
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-semibold">Coordonnées</h2>
                <p className="mt-3 text-muted-foreground">Mes liens email, WhatsApp, LinkedIn et GitHub seront affichés ici très prochainement.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error && <span role="alert" className="mt-1.5 block text-sm text-destructive">{error}</span>}
    </label>
  );
}
