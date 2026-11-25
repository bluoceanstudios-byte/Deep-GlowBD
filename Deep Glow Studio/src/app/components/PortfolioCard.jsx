import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Star } from "lucide-react";

export function PortfolioCard({ film, onPlay }) {
  const isReel = film.format === "Reel";

  return (
    <article className="portfolio-card group overflow-hidden flex flex-col">
      <div
        onClick={() => onPlay(film)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onPlay(film);
          }
        }}
        className={`relative w-full ${
          isReel ? "aspect-[16/10]" : "aspect-video"
        } overflow-hidden bg-ink-3 cursor-pointer`}
      >
        {isReel ? (
          <>
            <img
              src={film.thumbnail}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-45"
            />
            <img
              src={film.thumbnail}
              alt={film.title}
              loading="lazy"
              className="relative z-10 mx-auto h-full w-auto object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </>
        ) : (
          <img
            src={film.thumbnail}
            alt={film.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        )}

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 z-30 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-ink/75 border border-white/15 backdrop-blur-md text-white/90">
            {film.category}
          </span>
          {film.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-ink/80 border border-brand-cyan/35 text-brand-cyan backdrop-blur-md">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Center Play Trigger */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-ink font-display text-[11px] shadow-xl opacity-90 group-hover:scale-105 group-hover:bg-white transition-all duration-300">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Play</span>
          </span>
        </div>
      </div>

      <div className="p-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          {film.projectId ? (
            <Link
              to={`/projects/${film.projectId}`}
              className="block font-medium text-[15px] text-white group-hover:text-brand-cyan transition-colors truncate"
            >
              <h3>{film.title}</h3>
            </Link>
          ) : (
            <h3 className="font-medium text-[15px] text-white truncate">{film.title}</h3>
          )}
          <span className="text-xs text-white/50">{film.format}</span>
        </div>

        {film.projectId && (
          <Link
            to={`/projects/${film.projectId}`}
            aria-label={`Open case study: ${film.title}`}
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/75 hover:text-ink hover:bg-white transition shrink-0"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
