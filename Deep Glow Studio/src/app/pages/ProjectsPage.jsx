import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_FILMS,
  PROJECTS_WALL_ROWS,
} from "../data/catalog";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { PortfolioCard } from "../components/PortfolioCard";
import { VideoModal } from "../components/VideoModal";

export function ProjectsPage() {
  const { data } = useSiteData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalVideo, setModalVideo] = useState(null);

  const projectsCopy = data?.content?.projects || {};
  const rawCat = searchParams.get("category") || "All";
  const activeCategory = PORTFOLIO_CATEGORIES.includes(rawCat) ? rawCat : "All";

  const filteredFilms = useMemo(() => {
    if (activeCategory === "All") return PORTFOLIO_FILMS;
    return PORTFOLIO_FILMS.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  const handleSelectCategory = (cat) => {
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <>
      <SeoHead
        title="Projects"
        description={
          projectsCopy.heroDescription ||
          "A mix of commercials, podcasts, documentaries and visual experiments made for brands with something real to say."
        }
        image="/img.youtube.com/vi/GCUDpIwNeqE/maxresdefault.jpg"
      />

      {/* Angled Moving YouTube Thumbnail Wall Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden min-h-[480px] flex items-end">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-30"
        >
          <div className="flex flex-col gap-3 -rotate-6 scale-110 -translate-y-8">
            {PROJECTS_WALL_ROWS.map((row, rIdx) => (
              <div
                key={rIdx}
                className={rIdx % 2 === 0 ? "marquee-track gap-3" : "marquee-track-reverse gap-3"}
                style={{ "--marquee-duration": `${36 + rIdx * 4}s` }}
              >
                {[...row, ...row, ...row].map((vid, idx) => (
                  <img
                    key={`${rIdx}-${idx}`}
                    src={`/i.ytimg.com/vi/${vid}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="w-48 sm:w-60 aspect-video object-cover rounded-xl shrink-0 border border-white/10"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/65 to-ink" />
        </div>

        <div className="mx-auto max-w-[1380px] w-full relative z-10 pt-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.08] border border-white/15 backdrop-blur-md text-brand-cyan mb-5">
            <strong>27</strong> films across 4 worlds
          </span>
          <AnimatedHeading
            as="h1"
            text={projectsCopy.heroTitle || "Work worth / pausing for"}
            className="text-4xl sm:text-6xl lg:text-[68px] mb-5"
          />
          <p className="body-text text-base sm:text-lg max-w-2xl">
            {projectsCopy.heroDescription ||
              "A mix of commercials, podcasts, documentaries and visual experiments made for brands with something real to say."}
          </p>
        </div>
      </section>

      {/* Filter Bar + 27 Films Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="sr-only">All projects</h2>
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  className={`portfolio-pill ${
                    activeCategory === cat ? "portfolio-pill-active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-xs font-display text-white/55">
              {filteredFilms.length} {filteredFilms.length === 1 ? "film" : "films"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilms.map((film) => (
              <PortfolioCard key={film.videoId} film={film} onPlay={setModalVideo} />
            ))}
          </div>
        </div>
      </section>

      <VideoModal item={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
}
