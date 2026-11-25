import React from "react";
import { motion } from "framer-motion";
import { useSiteData } from "../context/DataContext";
import { toLocalAssetUrl } from "../utils/media";

const FALLBACK_TEAM = [
  {
    id: "1",
    name: "Towfiq Islam",
    role: "Founder & Head of Production",
    imageUrl: "/res.cloudinary.com/dyyrjhuho/team/towfiq-islam.jpg",
  },
  {
    id: "2",
    name: "Saad Alam",
    role: "Lead Editor & Cinematographer",
    imageUrl: "/res.cloudinary.com/dyyrjhuho/team/saad-alam.jpg",
  },
  {
    id: "3",
    name: "Tawhid Nafis",
    role: "Senior Editor & Lead Designer",
    imageUrl: "/res.cloudinary.com/dyyrjhuho/team/tawhid-nafis.jpg",
  },
  {
    id: "4",
    name: "Mahmudur Rahman",
    role: "Cinematographer",
    imageUrl: "/res.cloudinary.com/dyyrjhuho/team/mahmudur-rahman.jpg",
  },
  {
    id: "5",
    name: "Fahim Rahman",
    role: "Cinematographer",
    imageUrl: "/res.cloudinary.com/dyyrjhuho/team/fahim-rahman.jpg",
  },
];

export function TeamShowcase({ asHero = false }) {
  const { data } = useSiteData();
  const members = data?.teamMembers?.length ? data.teamMembers : FALLBACK_TEAM;
  const HeadingTag = asHero ? "h1" : "h2";

  return (
    <section className={`relative px-4 sm:px-6 overflow-hidden ${asHero ? "pt-32 pb-16" : "py-24"}`}>
      <div className="mx-auto max-w-[1380px] relative">
        {/* Giant subtle background watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none text-center font-display uppercase leading-[0.88] text-[14vw] text-white/[0.03] tracking-tight mb-[-5vw]"
        >
          big results
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto mb-14">
          <HeadingTag className="font-display text-3xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.025em]">
            <span className="display-sheen block">Small team,</span>
            <span className="text-gradient block">big results</span>
          </HeadingTag>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {members.map((member, idx) => {
            const imgSrc = toLocalAssetUrl(member.imageUrl);
            const staggerY = idx % 2 === 1 ? "lg:translate-y-6" : "";
            return (
              <motion.article
                key={member.id || member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`group rounded-[22px] bg-ink-2 border border-white/10 overflow-hidden tile-sheen transition-transform duration-500 hover:-translate-y-1.5 ${staggerY}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-3 relative">
                  <img
                    src={imgSrc}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-white/60 leading-snug">{member.role}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
