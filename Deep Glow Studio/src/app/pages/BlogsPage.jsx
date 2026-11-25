import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";

export function BlogsPage() {
  const { data } = useSiteData();
  const blogsCopy = data?.content?.blogs || {};
  const emptyText =
    data?.content?.global?.blogsEmpty || "New articles are on their way. Check back soon.";

  return (
    <>
      <SeoHead
        title="Blogs"
        description={
          blogsCopy.heroDescription ||
          "Notes on production, storytelling, creative decisions, and the small details that keep good work from becoming forgettable."
        }
        image="/i.ytimg.com/vi/F4zKWosGHQ4/hqdefault.jpg"
      />

      <section className="pt-36 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl mb-16">
            <span className="inline-block font-display text-xs uppercase tracking-[0.14em] text-brand-cyan mb-4">
              Journal
            </span>
            <AnimatedHeading
              as="h1"
              text={blogsCopy.heroTitle || "Ideas from the / cutting room"}
              className="text-4xl sm:text-6xl mb-5"
            />
            <p className="body-text text-base sm:text-lg">
              {blogsCopy.heroDescription ||
                "Notes on production, storytelling, creative decisions, and the small details that keep good work from becoming forgettable."}
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-12 sm:p-16 text-center max-w-2xl mx-auto space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/12 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="font-display text-lg sm:text-xl text-white">{emptyText}</p>
            <div className="pt-2">
              <Link to="/projects" className="btn-glass">
                <span>Explore our films meanwhile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
