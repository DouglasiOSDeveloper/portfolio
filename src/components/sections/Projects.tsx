"use client";

import { useMemo, useState } from "react";
import { projects as data, type ProjectFilter, allTags } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const typeTabs: ProjectFilter[] = ["All", "iOS", "Mobile", "Web"];

export function Projects() {
  const t = useTranslations("projects");
  const [type, setType] = useState<ProjectFilter>("All");
  const [activeTag, setActiveTag] = useState<string | "All">("All");
  const [openLinks, setOpenLinks] = useState<Record<string, boolean>>({});
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const items = useMemo(() => {
    let list = type === "All" ? data : data.filter((p) => p.type === type);
    if (activeTag !== "All") list = list.filter((p) => p.tags?.includes(activeTag));
    return list;
  }, [type, activeTag]);

  function toggleLinks(id: string) {
    setOpenLinks((s) => ({ ...s, [id]: !s[id] }));
  }
  function toggleDetails(id: string) {
    setOpenDetails((s) => ({ ...s, [id]: !s[id] }));
  }
  function hostLabel(url: string, idx: number) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return `Link ${idx + 1}`;
    }
  }

  return (
    <section id="projects" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">{t("title")}</h2>

          <div className="flex items-center gap-2">
            {typeTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setType(tab)}
                className={cn(
                  "text-foreground appearance-none rounded-full px-3 py-1 text-sm leading-none transition-colors",
                  type === tab
                    ? "bg-foreground/10 border-foreground/15 border"
                    : "hover:bg-foreground/5 border-foreground/10 border"
                )}
              >
                {tab === "All"
                  ? t("tabs.all")
                  : tab === "iOS"
                    ? t("tabs.ios")
                    : tab === "Mobile"
                      ? t("tabs.mobile")
                      : t("tabs.web")}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filter */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-foreground/60 text-xs tracking-wide uppercase">{t("filter")}</span>

          <button
            onClick={() => setActiveTag("All")}
            className={cn(
              "chip chip--interactive",
              activeTag === "All" && "ring-foreground/30 ring-1"
            )}
          >
            {t("tabs.all")}
          </button>

          {allTags.map((tg) => (
            <button
              key={tg}
              onClick={() => setActiveTag(tg === activeTag ? "All" : tg)}
              className={cn(
                "chip chip--interactive",
                activeTag === tg && "ring-foreground/30 ring-1"
              )}
            >
              {t(`tagLabels.${tg}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const linksOpen = !!openLinks[p.id];
            const detailsOpen = !!openDetails[p.id];

            // pega campos traduzidos se existirem
            const pt = (key: string) => {
              try {
                const value = t(`items.${p.id}.${key}`);
                return value ?? "";
              } catch {
                return "";
              }
            };
            const details = (t.raw(`items.${p.id}.details`) as string[] | undefined) ?? p.details;

            return (
              <Card
                key={p.id}
                className={cn(
                  "group border-foreground/10 bg-foreground/[0.03] project-card flex flex-col gap-4 p-4"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col">
                    <h3 className="truncate text-lg font-semibold">{p.title}</h3>
                    {p.featured && (
                      <span className="text-foreground/70 mt-1 inline-flex items-center gap-1 text-xs">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-500" />
                        {p.featured}
                      </span>
                    )}
                  </div>
                  <Badge variant="secondary">{p.type}</Badge>
                </div>

                <p className="text-foreground/80 text-sm">{pt("summary")}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      className="tech-badge border border-[#d17aff]/30 bg-black text-[#d17aff]"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                  <div className="flex items-center gap-2">
                    {p.tags?.map((tg) => (
                      <span key={tg} className="chip text-[11px]">
                        {t(`tagLabels.${tg}`)}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* GitHub link */}
                    {p.links.github && (
                      <Link className="hover:underline" href={p.links.github} target="_blank">
                        {t("actions.github")}
                      </Link>
                    )}

                    {/* Websites link(s) */}
                    {p.links.websites?.length ? (
                      <button
                        onClick={() => toggleLinks(p.id)}
                        className="text-foreground/80 underline-offset-2 hover:underline"
                        aria-expanded={linksOpen}
                        aria-controls={`links-${p.id}`}
                      >
                        {linksOpen ? t("actions.hideLinks") : t("actions.web")}
                      </button>
                    ) : null}

                    {/* Detalhes extras */}
                    {!!details?.length && (
                      <button
                        onClick={() => toggleDetails(p.id)}
                        className="text-foreground/80 underline-offset-2 hover:underline"
                        aria-expanded={detailsOpen}
                        aria-controls={`details-${p.id}`}
                      >
                        {detailsOpen ? t("actions.less") : t("actions.more")}
                      </button>
                    )}
                  </div>
                </div>

                {/* bloco expansível: links */}
                {p.links.websites?.length ? (
                  <div
                    id={`links-${p.id}`}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                      linksOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="flex min-h-0 flex-wrap gap-2 pt-2">
                      {p.links.websites.map((u, i) => (
                        <li key={u + i}>
                          <Link
                            href={u}
                            target="_blank"
                            className="chip chip--interactive text-[12px]"
                            title={u}
                          >
                            {hostLabel(u, i)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* bloco expansível: detalhes */}
                {details?.length ? (
                  <div
                    id={`details-${p.id}`}
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                      detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <ul className="text-foreground/75 min-h-0 list-disc space-y-2 pt-2 pl-5 text-sm">
                      {details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
