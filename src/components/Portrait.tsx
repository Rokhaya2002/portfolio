import portrait from "@/assets/rokhaya-portrait.jpg.asset.json";
import { assetUrl } from "@/lib/asset-url";

export const portraitUrl = assetUrl(portrait);

export function Portrait({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-primary opacity-40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-primary-glow/40 shadow-glow">
        <img src={portraitUrl} alt="Portrait de Rokhaya Gueye" width={810} height={1080}
          loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"}
          className="aspect-[4/5] h-full w-full object-cover origin-[22%_62%] scale-[1.45] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
    </div>
  );
}
