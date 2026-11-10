import { Code2, Smartphone, Palette, Brain, Globe, LayoutDashboard, PenTool, Bot, Sparkles, type LucideIcon } from "lucide-react";
import sunuSante from "@/assets/sunu_sante_presentation.png.asset.json";
import sunetablis from "@/assets/sunetablis_presentation.png.asset.json";
import fitness from "@/assets/cite_leopold_fitness_presentation.png.asset.json";
import asSalih from "@/assets/as-salih-presentation.png.asset.json";
import tektall from "@/assets/tektall-presentation.png.asset.json";
import bleuAzur from "@/assets/bleu-azur-presentation.jpg";
import notes from "@/assets/notes-personnelles-presentation.jpg";
import numeroSenegal from "@/assets/numero-senegal-presentation.jpg";
import samaAgent from "@/assets/sama-agent-presentation.jpg";
import { assetUrl } from "@/lib/asset-url";

/**
 * Coordonnées configurables. Laissez une valeur vide ("") pour masquer le lien correspondant.
 * whatsapp : numéro au format international sans "+" ni espaces (ex : 221770000000).
 * cvUrl : déposez votre CV dans /public (ex : /cv-rokhaya-gueye.pdf) puis indiquez son chemin.
 */
export const contact = {
  email: "kyagueye02@gmail.com",
  linkedin: "",
  github: "",
  whatsapp: "221771936845",
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

export type ProjectStatus = "En développement" | "Terminé";
export type Project = { slug: string; name: string; desc: string; image: string; status: ProjectStatus; category: string; tech: string[]; url?: string; github?: string; repositories?: { label: string; url: string }[]; presentation: string; features: string[]; verification: string; generated?: boolean };

/** Pour ajouter un projet : ajoutez simplement un objet à ce tableau. */
export const projects: Project[] = [
  { slug: "as-salih", name: "AS SALIH — Luxe", category: "Boutique en ligne", desc: "Une boutique en ligne dédiée aux hijabs, avec une identité visuelle élégante et raffinée.", image: asSalih.url, status: "Terminé", tech: ["React", "JavaScript"], url: "https://as-salih-luxe-mu.vercel.app/", presentation: "AS SALIH présente une collection de hijabs dans un univers de marque soigné. Le projet associe présentation des produits et identité visuelle.", features: ["Présentation de la collection de hijabs", "Mise en valeur de l’univers AS SALIH"], verification: "Site en ligne accessible lors de la vérification. Le paiement et le parcours complet de commande n’ont pas été testés ; aucune garantie de paiement n’est revendiquée ici." },
  { slug: "tektall", name: "TEKTALL", category: "Transport public", desc: "Une plateforme web pour consulter les lignes TATA et Dakar Dem Dikk et faciliter les déplacements à Dakar.", image: tektall.url, status: "Terminé", tech: ["Angular", "Laravel", "PHP"], github: "https://github.com/Rokhaya2002/tektal_app_frontend", repositories: [{ label: "Interface Angular", url: "https://github.com/Rokhaya2002/tektal_app_frontend" }, { label: "Application Laravel", url: "https://github.com/Rokhaya2002/tektal_app_backend" }], presentation: "TEKTALL répond à un besoin concret de mobilité à Dakar : rendre les informations sur le transport public plus accessibles. Le projet comprend une interface Angular et une application Laravel en PHP.", features: ["Consultation des lignes de transport", "Gestion des lignes et des arrêts dans le code", "Recherche de trajets prévue par les contrôleurs"], verification: "Technologies et contrôleurs vérifiés dans les dépôts publics. Aucun déploiement intégré ni parcours de recherche en ligne n’a été vérifié." },
  { slug: "bleu-azur", name: "BLEU AZUR", category: "Site vitrine", desc: "Un site vitrine présentant Bleu Azur, une activité de nettoyage professionnel à Keur Massar.", image: bleuAzur, status: "Terminé", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/Rokhaya2002/Azur", generated: true, presentation: "Un site vitrine consacré à Bleu Azur et à son activité de nettoyage professionnel. La réalisation présente l’entreprise et ses informations de contact, avec une structure web légère.", features: ["Présentation de l’activité de nettoyage professionnel", "Informations de contact", "Présentation de la localisation à Keur Massar"], verification: "Présentation et technologies vérifiées dans les fichiers du dépôt Azur. Aucune démonstration hébergée n’a été identifiée." },
  { slug: "notes-personnelles", name: "Notes Personnelles", category: "Organisation personnelle", desc: "Une application pour créer, modifier, supprimer et rechercher ses notes, conservées dans le navigateur.", image: notes, status: "Terminé", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/Rokhaya2002/notes-personnelles-app", generated: true, presentation: "Une application de notes personnelles développée sans framework. Elle regroupe les opérations essentielles pour organiser ses idées et utilise le stockage local du navigateur.", features: ["Création et modification de notes", "Suppression avec confirmation", "Recherche dans les notes", "Conservation locale avec localStorage"], verification: "Fonctionnalités identifiées dans script.js. Aucun service de synchronisation ni stockage partagé n’est revendiqué. Aucune démonstration hébergée n’a été identifiée." },
  { slug: "numero-senegal", name: "NUMÉRO SÉNÉGAL", category: "Répertoire de services", desc: "Un répertoire de numéros utiles au Sénégal, avec recherche, catégories et favoris enregistrés localement.", image: numeroSenegal, status: "Terminé", tech: ["React", "JavaScript", "Vite", "Tailwind CSS"], github: "https://github.com/Rokhaya2002/Numero_Senegal", generated: true, presentation: "NUMÉRO SÉNÉGAL rassemble des numéros utiles dans une interface de consultation. Son code propose des outils de recherche, de classement et de gestion des entrées, avec une conservation locale des données.", features: ["Recherche et filtrage des numéros", "Lien d’appel et partage d’une fiche", "Gestion de favoris", "Ajout, modification et suppression d’entrées", "Données et favoris conservés avec localStorage"], verification: "Fonctionnalités identifiées dans src/App.jsx. Aucun déploiement ni fonctionnement hors ligne complet n’a été vérifié. Les numéros du répertoire ne sont pas certifiés par ce portfolio." },
  { slug: "sunu-sante", name: "SUNU SANTÉ", category: "Santé", desc: "Projet de plateforme de recherche d’établissements de santé et de rendez-vous médicaux au Sénégal.", image: sunuSante.url, status: "En développement", tech: [], presentation: "SUNU SANTÉ est un projet en cours consacré à l’accès aux services de santé au Sénégal. Les fonctionnalités ci-dessous décrivent les objectifs du projet, et non un service déjà disponible.", features: ["Recherche d’établissements de santé", "Prise de rendez-vous médicaux"], verification: "Objectifs communiqués par la créatrice. Technologies non communiquées ; aucune démonstration publique vérifiée." },
  { slug: "sunetablis", name: "SUNÉTABLIS", category: "Éducation", desc: "Un projet de solution numérique consacré à la gestion des établissements scolaires.", image: sunetablis.url, status: "En développement", tech: [], presentation: "SUNÉTABLIS est une solution en cours de développement pour la gestion des établissements scolaires. Son périmètre détaillé reste à documenter.", features: ["Gestion numérique des établissements scolaires"], verification: "Objectif communiqué par la créatrice. Technologies non communiquées ; aucune démonstration publique vérifiée." },
  { slug: "cite-leopold-fitness", name: "CITÉ LÉOPOLD FITNESS CLUB", category: "Sport & gestion", desc: "Un projet d’application de gestion d’un club de fitness, de ses membres, séances et paiements.", image: fitness.url, status: "En développement", tech: [], presentation: "Une application en cours de développement pour accompagner l’organisation d’un club de fitness. Les fonctionnalités listées sont les objectifs du projet, pas des services opérationnels vérifiés.", features: ["Gestion des membres", "Organisation des séances", "Suivi des paiements"], verification: "Objectifs communiqués par la créatrice. Technologies non communiquées ; aucune démonstration publique vérifiée." },
  { slug: "sama-agent", name: "samaAgent", category: "Intelligence artificielle", desc: "Un assistant virtuel en wolof explorant les échanges par texte et l’entrée audio avec Gemini.", image: samaAgent, status: "En développement", tech: ["React", "TypeScript", "Vite", "Gemini", "Tailwind CSS"], github: "https://github.com/Rokhaya2002/samaAgent", generated: true, presentation: "samaAgent explore une interaction avec un assistant virtuel en wolof. Le dépôt contient une interface de conversation et un service d’intégration à Gemini. Il est présenté prudemment comme projet en développement, sa complétion n’ayant pas été confirmée.", features: ["Interface de conversation textuelle", "Intégration Gemini dans le code", "Capture audio par le navigateur et transmission au modèle"], verification: "Code et technologies vérifiés dans le dépôt. Le fonctionnement des réponses IA et de l’audio n’a pas été testé avec une clé configurée ; aucune synthèse vocale en sortie n’est revendiquée." },
];

export const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Globe, title: "Création de sites web", desc: "Des sites vitrines modernes, rapides et adaptés à tous les écrans, pensés pour présenter votre activité." },
  { icon: LayoutDashboard, title: "Développement d'applications web", desc: "Des applications sur mesure pour gérer, organiser et digitaliser vos processus." },
  { icon: Smartphone, title: "Conception d'applications mobiles", desc: "Des applications Android et iOS développées avec Flutter, pour une expérience fluide." },
  { icon: PenTool, title: "Création graphique avec Canva", desc: "Affiches, visuels pour réseaux sociaux, présentations : une communication visuelle cohérente." },
  { icon: Bot, title: "Accompagnement aux outils IA", desc: "Découvrir et intégrer les outils d'intelligence artificielle dans votre quotidien." },
  { icon: Sparkles, title: "Prompt Engineering", desc: "Des prompts clairs et efficaces pour obtenir des résultats précis des modèles d'IA." },
];
