import React from "react";
import { Handshake, Lightbulb, ListChecks, ScanSearch, Sparkles, Users } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading, RichLeadText } from "../components/AnimatedHeading";
import { TeamShowcase } from "../components/TeamShowcase";
import { StatsRow } from "../components/StatsRow";

const ICON_MAP = {
  Sparkles,
  ListChecks,
  Handshake,
  Lightbulb,
  Users,
  ScanSearch,
};

export function AboutPage() {
  const { data } = useSiteData();
  const about = data?.content?.about || {};
  const values = about.values || [];
  const reasons = about.reasons || [];

  return (
    <>
      <SeoHead
        title="About"
        description={
          about.heroDescription ||
          "A compact crew of directors, producers, camera nerds and edit-room obsessives who care about the work and the brands behind it."
        }
        image="/i.ytimg.com/vi_webp/F4zKWosGHQ4/maxresdefault.webp"
      />

      {/* Team Hero */}
      <TeamShowcase asHero />

      <section className="pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="body-text text-lg sm:text-xl max-w-3xl mx-auto">
            {about.heroDescription ||
              "A compact crew of directors, producers, camera nerds and edit-room obsessives who care about the work and the brands behind it."}
          </p>
        </div>
      </section>

      {/* Intro + Mission + Stats */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1240px] space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <AnimatedHeading
                text={about.introTitle || "A small crew / with a lot of / range"}
                className="text-3xl sm:text-5xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <RichLeadText
                text={
                  about.lead ||
                  "A creative production and post-production studio *helping brands turn ideas* into *content that converts*, from the first concept to the final export."
                }
                className="text-xl sm:text-2xl leading-snug"
              />
              <p className="body-text text-base sm:text-lg">
                {about.body ||
                  "Our mission is simple: to turn ideas into compelling visual stories that grow brands. Whether it is a commercial, a podcast, an event or an animation, we approach every project with creativity, enthusiasm and a commitment to exceeding expectations."}
              </p>
            </div>
          </div>

          <StatsRow />
        </div>
      </section>

      {/* Values */}
      {values.length > 0 && (
        <section className="py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-12">
              <span className="inline-block font-mono text-xs text-brand-cyan mb-3">
                {about.valuesLabel || "[What we won’t compromise on]"}
              </span>
              <AnimatedHeading
                text={about.valuesTitle || "Good work, / minus the drama"}
                className="text-3xl sm:text-5xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, idx) => (
                <div key={v.title} className="glass-card rounded-2xl p-6 space-y-3">
                  <span className="font-display text-xs text-brand-cyan">0{idx + 1}</span>
                  <h3 className="font-display text-lg text-white">{v.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reasons */}
      {reasons.length > 0 && (
        <section className="py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-12">
              <AnimatedHeading
                text={about.reasonsTitle || "A few more reasons / to hit record"}
                className="text-3xl sm:text-5xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((r) => {
                const Icon = ICON_MAP[r.icon] || Sparkles;
                return (
                  <div
                    key={r.title}
                    className="glass-card rounded-2xl p-6 space-y-3 hover:border-brand-cyan/35 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/12 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base text-white">{r.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{r.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
