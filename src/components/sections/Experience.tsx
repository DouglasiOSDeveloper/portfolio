"use client";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ItemData = {
  role: string;
  company: string;
  period: string;
  headline: string;
  bullets: string[];
  tech?: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const ids = ["selectapp", "thifi", "hapvida", "academy"] as const;

  const items: ItemData[] = ids.map((id) => ({
    role: t(`items.${id}.role`),
    company: t(`items.${id}.company`),
    period: t(`items.${id}.period`),
    headline: t(`items.${id}.headline`),
    bullets: t.raw(`items.${id}.bullets`) as string[],
    tech: t.raw(`items.${id}.tech`) as string[] | undefined,
  }));

  return (
    <section id="experience" className="border-border relative overflow-hidden border-t">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,oklch(0.67_0.13_320/.12),transparent_60%),radial-gradient(900px_500px_at_90%_-20%,oklch(0.65_0.12_250/.10),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">{t("title")}</h2>

        <div className="mt-8 grid gap-6">
          {items.map((item, i) => (
            <ExperienceItem
              key={item.company + i}
              {...item}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-2 duration-700",
                i === 1 && "delay-100",
                i === 2 && "delay-200",
                i === 3 && "delay-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  headline,
  bullets,
  tech,
  className,
}: {
  role: string;
  company: string;
  period: string;
  headline: string;
  bullets: string[];
  tech?: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "exp-card border-foreground/10 bg-foreground/[0.03] rounded-2xl border p-5 md:p-6",
        className
      )}
    >
      <header className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h3 className="text-lg leading-tight font-semibold">
            {role} <span className="text-foreground/70">— {company}</span>
          </h3>
          <p className="text-foreground/75 mt-1 text-sm">{headline}</p>
        </div>
        <time className="text-foreground/60 text-xs whitespace-nowrap md:pl-6" aria-label="Period">
          {period}
        </time>
      </header>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, idx) => (
          <li key={idx} className="li-dot text-foreground/85 text-sm">
            {b}
          </li>
        ))}
      </ul>

      {!!tech?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="chip tech-chip border-pink-400/30 text-[11px] text-pink-400">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
