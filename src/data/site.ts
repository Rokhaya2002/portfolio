import { Code2, Smartphone, Palette, Brain, Globe, LayoutDashboard, PenTool, Bot, Sparkles, type LucideIcon } from "lucide-react";
import sunuSante from "@/assets/sunu_sante_presentation.png.asset.json";
import sunetablis from "@/assets/sunetablis_presentation.png.asset.json";
import fitness from "@/assets/cite_leopold_fitness_presentation.png.asset.json";

/**
 * Coordonnées configurables. Laissez une valeur vide ("") pour masquer le lien correspondant.
 * whatsapp : numéro au format international sans "+" ni espaces (ex : 221770000000).
 * cvUrl : déposez votre CV dans /public (ex : /cv-rokhaya-gueye.pdf) puis indiquez son chemin.
 */
export const contact = {
  email: "",
  linkedin: "",
  github: "",
  whatsapp: "",
  cvUrl: "",
};

export const nav = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/competences", label: "Compétences" },
  { to: "/projets", label: "Projets" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export type Domain = { icon: LucideIcon; title: string; sub: string };
export const domains: Domain[] = [
  { icon: Code2, title: "Développement Web", sub: "React, TypeScript, etc." },
  { icon: Smartphone, title: "Développement Mobile", sub: "Flutter, Dart" },
  { icon: Palette, title: "Créativité & Design", sub: "Canva, UI/UX" },
  { icon: Brain, title: "Intelligence Artificielle", sub: "Prompt Engineering" },
];

export const skills: { icon: LucideIcon; title: string; desc: string; items: string[] }[] = [
  { icon: Code2, title: "Développement Web", desc: "Des interfaces modernes, structurées et accessibles.", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { icon: Smartphone, title: "Développement Mobile", desc: "Des applications multiplateformes fluides.", items: ["Flutter", "Dart"] },
  { icon: Palette, title: "Design", desc: "Des visuels soignés et des parcours pensés pour l'utilisateur.", items: ["Canva", "Conception graphique", "UI/UX Design"] },
  { icon: Brain, title: "Intelligence artificielle", desc: "L'IA comme levier de création et de productivité.", items: ["Prompt Engineering", "Utilisation d'outils d'IA", "Conception de prompts pour la création de projets"] },
];

export type ProjectStatus = "En développement" | "Maquette" | "Terminé";
export type Project = { slug: string; name: string; desc: string; image: string; status: ProjectStatus; tech: string[]; url?: string };

/** Pour ajouter un projet : ajoutez simplement un objet à ce tableau. */
export const projects: Project[] = [
  { slug: "sunu-sante", name: "SUNU SANTÉ", desc: "Plateforme numérique permettant de rechercher des établissements de santé et de prendre des rendez-vous médicaux au Sénégal.", image: sunuSante, status: "En développement", tech: [] },
  { slug: "sunetablis", name: "SUNÉTABLIS", desc: "Solution numérique de gestion des établissements scolaires.", image: sunetablis, status: "En développement", tech: [] },
  { slug: "cite-leopold-fitness", name: "CITÉ LÉOPOLD FITNESS CLUB", desc: "Application de gestion d'un club de fitness, des membres, des séances et des paiements.", image: fitness, status: "En développement", tech: [] },
];

export const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Globe, title: "Création de sites web", desc: "Des sites vitrines modernes, rapides et adaptés à tous les écrans, pensés pour présenter votre activité." },
  { icon: LayoutDashboard, title: "Développement d'applications web", desc: "Des applications sur mesure pour gérer, organiser et digitaliser vos processus." },
  { icon: Smartphone, title: "Conception d'applications mobiles", desc: "Des applications Android et iOS développées avec Flutter, pour une expérience fluide." },
  { icon: PenTool, title: "Création graphique avec Canva", desc: "Affiches, visuels pour réseaux sociaux, présentations : une communication visuelle cohérente." },
  { icon: Bot, title: "Accompagnement aux outils IA", desc: "Découvrir et intégrer les outils d'intelligence artificielle dans votre quotidien." },
  { icon: Sparkles, title: "Prompt Engineering", desc: "Des prompts clairs et efficaces pour obtenir des résultats précis des modèles d'IA." },
];
