// components/MediaCard.tsx
import Image from "next/image";
import clsx from "clsx";

type Props = {
  title?: string;
  subtitle?: string;
  meta?: string;
  author?: string;
  image: string;
  badge?: "new" | "hot";
  aspect?: "wide" | "square" | "video" | "pill" | "lab";
  compact?: boolean;
  ghost?: boolean;
  className?: string;
  /** torna o card menor em md/lg+ (padrão: true) */
  compactOnDesktop?: boolean;
};

export default function MediaCard({
  title,
  subtitle,
  meta,
  author,
  image,
  badge,
  aspect = "square",
  compact,
  ghost,
  className,
  compactOnDesktop = true,
}: Props) {
  // base aspect
  const aspectBase =
    {
      wide: "aspect-[16/9]",
      square: "aspect-square",
      video: "aspect-[4/3]",
      pill: "h-24",
      lab: "aspect-[4/3]",
    }[aspect];

  // versão "mais baixa" no desktop (deixa o card menos alto)
  const aspectDesktopCompact =
    {
      wide: "lg:aspect-[2/1]",     // mais “flat” no desktop
      square: "lg:aspect-[4/3]",
      video: "lg:aspect-[5/3]",
      pill: "lg:h-20",
      lab: "lg:aspect-[5/3]",
    }[aspect];

  return (
    <article
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
        compactOnDesktop && "lg:rounded-2xl",
        className
      )}
    >
      <div
        className={clsx(
          "relative",
          aspectBase,
          compactOnDesktop && aspectDesktopCompact
        )}
      >
        {!ghost && (
          <Image
            src={image}
            alt={title || "media"}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        )}
        {badge && (
          <span className="absolute top-2 right-2 rounded-full bg-white text-black text-[10px] font-semibold px-2 py-0.5">
            {badge}
          </span>
        )}
      </div>

      {(title || subtitle || author || meta) && (
        <div
          className={clsx(
            "p-3 sm:p-4",
            compact && "p-3",
            compactOnDesktop && "lg:p-3"
          )}
        >
          {title && (
            <h4
              className={clsx(
                "font-medium",
                compact ? "text-sm" : "text-base",
                compactOnDesktop && "lg:text-sm"
              )}
            >
              {title}
            </h4>
          )}
          {subtitle && (
            <p
              className={clsx(
                "text-white/80",
                compact ? "text-xs" : "text-sm",
                compactOnDesktop && "lg:text-xs"
              )}
            >
              {subtitle}
            </p>
          )}
          {author && (
            <p className={clsx("text-xs text-white/60 mt-1")}>{author}</p>
          )}
          {meta && (
            <p className={clsx("text-[11px] text-white/50 mt-1")}>{meta}</p>
          )}
        </div>
      )}
    </article>
  );
}
