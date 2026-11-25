import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import {
  BRANDS_ON_DARK,
  CREATORS,
  HERO_BREATHE_CARDS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_FILMS,
  SHOP_ITEMS,
} from "../data/catalog";
import { useSiteData } from "../context/DataContext";
import { extractYouTubeId, toLocalAssetUrl } from "../utils/media";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { PortfolioCard } from "../components/PortfolioCard";
import { StatsRow } from "../components/StatsRow";
import { WorkflowDiagram } from "../components/WorkflowDiagram";
import { TeamShowcase } from "../components/TeamShowcase";
import { FaqAccordion } from "../components/FaqAccordion";
import { ContactBlock } from "../components/ContactBlock";
import { VideoModal } from "../components/VideoModal";

export function HomePage() {
  const { data } = useSiteData();
  const [creatorIdx, setCreatorIdx] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [modalVideo, setModalVideo] = useState(null);

  const settings = data?.settings || {};
  const homeCopy = data?.content?.home || {};
  const faqs = homeCopy.faqs || [];

  const activeCreator = CREATORS[creatorIdx] || CREATORS[0];

  const featuredFilms = useMemo(() => {
    const base = PORTFOLIO_FILMS.filter((f) => f.featured);
    if (portfolioFilter === "All") return base;
    const filteredFeatured = base.filter((f) => f.category === portfolioFilter);
    return filteredFeatured.length > 0
      ? filteredFeatured
      : PORTFOLIO_FILMS.filter((f) => f.category === portfolioFilter).slice(0, 6);
  }, [portfolioFilter]);

  const showreelVideoSrc = toLocalAssetUrl(
    settings.heroVideoUrl ||
      "/res.cloudinary.com/dyyrjhuho/video/upload/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.mp4"
  );
  const showreelPosterSrc =
    "/res.cloudinary.com/dyyrjhuho/video/upload/so_0,f_jpg,q_auto,w_1280/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.jpg";

  const testimonial = data?.testimonials?.[0] || {
    clientName: "akhysami",
    role: "Content Creator",
    quote:
      "When the work speaks for itself, words hit different. This is why we show up every single day — to deliver quality that earns trust, not just attention.\n🔥 Ready to be our next success story?",
    videoUrl: "https://youtu.be/UahN80sIbE8",
    imageUrl:
      "/res.cloudinary.com/dyyrjhuho/image/upload/q_auto,f_auto,w_800,h_1000,c_fill,g_face/v1784744034/lumas-portfolio/testimonials/ww0awoepnel9jwmv73zt.jpg",
    igFollowers: "224K+",
    tiktokFollowers: "990M+",
  };
  const testimonialVidId = extractYouTubeId(testimonial.videoUrl) || "UahN80sIbE8";

  return (
    <>
      <SeoHead
        title=""
        description="500M+ views for 200+ brands. Tell us what you sell and we'll make the video that moves it."
        image="/i.ytimg.com/vi/F4zKWosGHQ4/hqdefault.jpg"
      />

      {/* 1. HERO */}
      <section className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[880px] h-[520px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, #22d3ee 0%, #a855f7 50%, transparent 72%)",
          }}
        />

        <div className="mx-auto max-w-[1380px] relative z-10 flex flex-col items-center text-center">
          {/* 6 Breathing Project Film Strips */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 h-28 sm:h-40">
            {HERO_BREATHE_CARDS.map((card) => (
              <Link
                key={card.id}
                to={`/projects/${card.id}`}
                aria-label={card.title}
                style={{ "--breathe-delay": card.delay }}
                className="breathe-card h-full rounded-2xl overflow-hidden border border-white/15 bg-ink-2 relative group shrink-0 shadow-lg"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors" />
              </Link>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl lg:text-[76px] leading-[1.04] tracking-[-0.03em] max-w-5xl mb-6"
          >
            <span className="display-sheen block">Videos that</span>
            <span className="display-sheen block">stop the scroll</span>
            <span className="text-gradient block">and sell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="body-text text-base sm:text-xl max-w-2xl mb-9"
          >
            500M+ views for 200+ brands. Tell us what you sell and we’ll make the video that moves
            it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              <span className="btn-dot" />
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/projects" className="btn-glass">
              <span>See our work</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BRANDS DUAL MARQUEE */}
      <section className="py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px] space-y-5">
          <p className="text-center font-display text-[11px] uppercase tracking-[0.16em] text-white/45 mb-4">
            Trusted by 200+ leading brands
          </p>

          <div className="edge-fade-x overflow-hidden py-2">
            <div className="marquee-track items-center gap-12 sm:gap-16" style={{ "--marquee-duration": "34s" }}>
              {[...BRANDS_ON_DARK, ...BRANDS_ON_DARK, ...BRANDS_ON_DARK].map((brand, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="h-11 sm:h-12 px-4 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    loading="lazy"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="edge-fade-x overflow-hidden py-2">
            <div
              className="marquee-track-reverse items-center gap-12 sm:gap-16"
              style={{ "--marquee-duration": "38s" }}
            >
              {[...BRANDS_ON_DARK, ...BRANDS_ON_DARK, ...BRANDS_ON_DARK].map((brand, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="h-11 sm:h-12 px-4 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity shrink-0"
                >
                  <img
                    src={brand.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREATORS WE'VE WORKED WITH */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center glass-card rounded-[28px] p-6 sm:p-10 lg:p-14">
            {/* Creator Portrait + Strip */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href={activeCreator.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/5] rounded-2xl overflow-hidden bg-ink-3 border border-white/10 relative group"
              >
                <img
                  src={activeCreator.image}
                  alt={activeCreator.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs bg-white/95 text-ink font-medium">
                  <span>YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              <div className="grid grid-cols-7 gap-2">
                {CREATORS.map((c, idx) => (
                  <button
                    key={c.index}
                    type="button"
                    onClick={() => setCreatorIdx(idx)}
                    aria-label={`Select ${c.name}`}
                    className={`aspect-square rounded-xl overflow-hidden border transition cursor-pointer ${
                      idx === creatorIdx
                        ? "border-brand-cyan ring-2 ring-brand-cyan/40 scale-105"
                        : "border-white/10 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Creator Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-brand-cyan/12 text-brand-cyan border border-brand-cyan/30 mb-4">
                  14M+ combined subscribers
                </span>
                <AnimatedHeading
                  text="Creators we've / worked with"
                  className="text-3xl sm:text-5xl"
                />
              </div>

              <div className="flex items-center justify-between border-y border-white/10 py-4">
                <div className="font-display text-sm text-white/60">
                  <strong className="text-white text-lg">{activeCreator.index}</strong> / 07
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCreatorIdx((i) => (i - 1 + CREATORS.length) % CREATORS.length)
                    }
                    aria-label="Previous creator"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/12 flex items-center justify-center text-white hover:bg-white/15 transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCreatorIdx((i) => (i + 1) % CREATORS.length)}
                    aria-label="Next creator"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/12 flex items-center justify-center text-white hover:bg-white/15 transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {activeCreator.name}
                </h3>
                <p className="text-lg text-brand-cyan font-medium">{activeCreator.subsLabel}</p>
                <p className="text-sm text-white/60">{activeCreator.shareLabel}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={activeCreator.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visit channel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link to="/projects" className="btn-glass">
                  <span>See our work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWREEL */}
      <section className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl display-sheen mb-3">Showreel</h2>
              <p className="body-text max-w-xl">
                A quick look at the commercials, podcasts and stories we’ve made for brands and
                creators.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setModalVideo({
                  title: "Lumas Creative — Official Showreel",
                  mp4Src: showreelVideoSrc,
                  poster: showreelPosterSrc,
                })
              }
              className="btn-glass self-start md:self-auto"
            >
              <Play className="w-4 h-4 fill-current text-brand-cyan" />
              <span>WATCH VIDEO</span>
            </button>
          </div>

          <div
            onClick={() =>
              setModalVideo({
                title: "Lumas Creative — Official Showreel",
                mp4Src: showreelVideoSrc,
                poster: showreelPosterSrc,
              })
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setModalVideo({
                  title: "Lumas Creative — Official Showreel",
                  mp4Src: showreelVideoSrc,
                  poster: showreelPosterSrc,
                });
              }
            }}
            className="relative aspect-video rounded-[28px] overflow-hidden border border-white/12 bg-ink-2 group cursor-pointer shadow-2xl"
          >
            <video
              src={showreelVideoSrc}
              poster={showreelPosterSrc}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/15 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-ink/75 border border-white/25 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIDEO TESTIMONIALS & STATS */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12">
            <span className="inline-block font-display text-xs uppercase tracking-[0.14em] text-brand-cyan mb-3">
              Video testimonials
            </span>
            <AnimatedHeading
              text="Success Stories / That Inspire Us"
              className="text-3xl sm:text-5xl"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            <div
              onClick={() =>
                setModalVideo({
                  title: `${testimonial.clientName} — Client Story`,
                  videoId: testimonialVidId,
                  thumbnail: `/i.ytimg.com/vi/${testimonialVidId}/maxresdefault.jpg`,
                })
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setModalVideo({
                    title: `${testimonial.clientName} — Client Story`,
                    videoId: testimonialVidId,
                    thumbnail: `/i.ytimg.com/vi/${testimonialVidId}/maxresdefault.jpg`,
                  });
                }
              }}
              className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[300px] rounded-[24px] overflow-hidden border border-white/10 bg-ink-2 group cursor-pointer"
            >
              <img
                src={`/i.ytimg.com/vi/${testimonialVidId}/maxresdefault.jpg`}
                alt={testimonial.clientName}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/35 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white text-ink flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 glass-card rounded-[24px] p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="text-amber-400 tracking-widest text-lg" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="font-display text-xl sm:text-2xl text-white leading-snug">
                  “When the work speaks for itself, words hit different.”
                </blockquote>
                <p className="body-text text-sm sm:text-base whitespace-pre-line">
                  This is why we show up every single day — to deliver quality that earns trust,
                  not just attention.{"\n"}🔥 Ready to be our next success story?
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3.5">
                  <img
                    src={toLocalAssetUrl(testimonial.imageUrl)}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <div className="font-display text-sm text-white">{testimonial.clientName}</div>
                    <div className="text-xs text-white/55">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {testimonial.igFollowers && (
                    <span className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/85">
                      {testimonial.igFollowers} Instagram
                    </span>
                  )}
                  {testimonial.tiktokFollowers && (
                    <span className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/85">
                      {testimonial.tiktokFollowers} TikTok
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <StatsRow />
        </div>
      </section>

      {/* 6. PORTFOLIO (FEATURED) */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl display-sheen mb-3">Portfolio</h2>
              <p className="body-text">
                Events, commercials, real estate, podcasts. One crew behind every frame.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setPortfolioFilter(cat)}
                  className={`portfolio-pill ${
                    portfolioFilter === cat ? "portfolio-pill-active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFilms.map((film) => (
              <PortfolioCard key={film.videoId} film={film} onPlay={setModalVideo} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn-primary">
              <span className="btn-dot" />
              <span>{homeCopy.featuredCta || "See All Projects"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WORKFLOW */}
      <WorkflowDiagram />

      {/* 8. SMALL TEAM, BIG RESULTS */}
      <TeamShowcase />

      {/* 9. LUMAS SHOP */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block font-display text-xs uppercase tracking-[0.14em] text-brand-cyan mb-3">
                Lumas Shop
              </span>
              <AnimatedHeading
                text="All your tools / in one place"
                className="text-3xl sm:text-5xl"
              />
            </div>

            <a
              href="https://wa.me/8801778250304?text=Hi%20Lumas%2C%20I%20want%20to%20buy%20from%20the%20shop."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass self-start md:self-auto"
            >
              <span>Ask for prices on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHOP_ITEMS.map((item) => {
              const cardInner = (
                <div className="glass-card rounded-[24px] p-6 h-full flex flex-col justify-between gap-6 group hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.06] border border-white/10 text-white/75">
                      {item.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/45 group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <div className="h-20 flex items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-white mb-1">{item.name}</h3>
                    <p className="text-xs text-white/60">{item.tagline}</p>
                  </div>
                </div>
              );

              return item.external ? (
                <a
                  key={item.slug}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardInner}
                </a>
              ) : (
                <Link key={item.slug} to={item.href} className="block">
                  {cardInner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block font-display text-xs uppercase tracking-[0.14em] text-brand-cyan mb-3">
              Questions we hear a lot
            </span>
            <AnimatedHeading
              text={homeCopy.faqTitle || "Ask us the / awkward stuff"}
              className="text-3xl sm:text-5xl"
            />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 11. CONTACT ANCHOR */}
      <ContactBlock sectionId="contact" />

      <VideoModal item={modalVideo} onClose={() => setModalVideo(null)} />
    </>
  );
}
