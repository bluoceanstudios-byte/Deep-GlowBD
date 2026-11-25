import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import {
  cleanProjectTitle,
  extractYouTubeId,
  resolveProjectThumbnail,
} from "../utils/media";
import { SeoHead } from "../components/SeoHead";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { id } = useParams();
  const { data } = useSiteData();
  const [playing, setPlaying] = useState(false);

  const projects = data?.projects || [];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFoundPage />;
  }

  const title = cleanProjectTitle(project.title);
  const ytId = extractYouTubeId(project.videoUrl);
  const thumb = resolveProjectThumbnail(project);
  const year = project.year || "2026";
  const client = (project.clientName || "").trim();
  const reach = (project.results || "").trim();
  const description = (project.shortDescription || "").trim();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);
  const isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;

  return (
    <>
      <SeoHead
        title={title}
        description={
          description ||
          `${title} — ${project.category || "Video"} production by Lumas Creative.`
        }
        image={thumb}
      />

      <article className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-display text-white/60 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Projects</span>
            </Link>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl display-sheen leading-[1.12] tracking-[-0.02em] mb-8">
            {title}
          </h1>

          {/* Main 16:9 Video Player */}
          <div className="relative aspect-video rounded-[26px] overflow-hidden border border-white/12 bg-ink-2 shadow-2xl mb-10">
            {playing ? (
              ytId && isOnline ? (
                <iframe
                  title={title}
                  src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  src="/res.cloudinary.com/dyyrjhuho/video/upload/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.mp4"
                  poster={thumb}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="w-full h-full relative group cursor-pointer block"
              >
                <img
                  src={thumb}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
                  <span className="w-20 h-20 rounded-full bg-white text-ink flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </span>
                </div>
              </button>
            )}
          </div>

          {/* Metadata & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">
            <div className="lg:col-span-7">
              {description ? (
                <p className="body-text text-base sm:text-lg leading-relaxed">{description}</p>
              ) : (
                <p className="body-text text-base sm:text-lg leading-relaxed">
                  Produced and post-produced by Lumas Creative — crafted to capture attention from
                  the opening frame and convert viewers into lasting brand equity.
                </p>
              )}
            </div>

            <dl className="lg:col-span-5 grid grid-cols-2 gap-4 glass-card rounded-2xl p-6">
              {client && (
                <div>
                  <dt className="text-xs font-mono text-white/45 mb-1">[Client]</dt>
                  <dd className="text-sm font-medium text-white">{client}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-mono text-white/45 mb-1">[Year]</dt>
                <dd className="text-sm font-medium text-white">{year}</dd>
              </div>
              {project.category && (
                <div>
                  <dt className="text-xs font-mono text-white/45 mb-1">[Category]</dt>
                  <dd className="text-sm font-medium">
                    <Link
                      to={`/projects?category=${encodeURIComponent(project.category)}`}
                      className="text-brand-cyan hover:underline"
                    >
                      {project.category}
                    </Link>
                  </dd>
                </div>
              )}
              {reach && (
                <div>
                  <dt className="text-xs font-mono text-white/45 mb-1">[Reach]</dt>
                  <dd className="text-sm font-display text-gradient">{reach}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* Keep Watching */}
          {related.length > 0 && (
            <section className="pt-16">
              <div className="flex items-center justify-between gap-4 mb-8">
                <h2 className="font-display text-2xl sm:text-3xl display-sheen">
                  {data?.content?.global?.keepWatchingTitle || "Keep watching"}
                </h2>
                <Link to="/projects" className="btn-glass !py-2 !px-4 !text-xs">
                  <span>{data?.content?.global?.allProjectsLabel || "All Projects"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => {
                  const relTitle = cleanProjectTitle(rel.title);
                  const relThumb = resolveProjectThumbnail(rel);
                  return (
                    <Link
                      key={rel.id}
                      to={`/projects/${rel.id}`}
                      onClick={() => setPlaying(false)}
                      className="portfolio-card group overflow-hidden block"
                    >
                      <div className="relative aspect-video overflow-hidden bg-ink-3">
                        <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[11px] bg-ink/80 border border-white/15 text-white/90">
                          {rel.category}
                        </span>
                        <img
                          src={relThumb}
                          alt={relTitle}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Hover VIEW PROJECT Ticker */}
                        <div className="absolute inset-x-0 bottom-0 z-20 py-2 bg-ink/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity portfolio-ticker-mask">
                          <div className="portfolio-ticker-track items-center gap-6">
                            {Array.from({ length: 12 }).map((_, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-3 font-syne text-xs font-bold uppercase tracking-widest text-white shrink-0"
                              >
                                <span className="portfolio-play-dot" />
                                <span>VIEW PROJECT</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-medium text-white group-hover:text-brand-cyan transition-colors truncate mb-1">
                          {relTitle}
                        </h3>
                        <p className="text-xs text-white/50">
                          {[rel.clientName?.trim(), rel.year || "2026"].filter(Boolean).join(" · ")}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
