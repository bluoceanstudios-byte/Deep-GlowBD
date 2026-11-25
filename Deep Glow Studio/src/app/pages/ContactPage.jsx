import React from "react";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { ContactBlock } from "../components/ContactBlock";

export function ContactPage() {
  const { data } = useSiteData();
  const contactCopy = data?.content?.contact || {};
  const heroBg = "/img.youtube.com/vi/cCje7ACDyvc/maxresdefault.jpg";

  return (
    <>
      <SeoHead
        title="Contact"
        description={
          contactCopy.heroDescription ||
          "Send the polished brief or the scrappy voice-note version. We’ll ask the right questions, keep the jargon low, and help you find the clearest way forward."
        }
        image={heroBg}
      />

      <section className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden min-h-[440px] flex items-end">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-28 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/75 to-ink" />
        </div>

        <div className="mx-auto max-w-[1380px] w-full relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <AnimatedHeading
              as="h1"
              text={contactCopy.heroTitle || "Tell us what / you’re making"}
              className="text-4xl sm:text-6xl lg:text-[68px] mb-5"
            />
            <p className="body-text text-base sm:text-lg">
              {contactCopy.heroDescription ||
                "Send the polished brief or the scrappy voice-note version. We’ll ask the right questions, keep the jargon low, and help you find the clearest way forward."}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.16em] text-white/55">
            <span>Scroll</span>
            <span className="w-[1px] h-10 bg-white/15 overflow-hidden relative inline-block">
              <span className="absolute inset-0 bg-brand-cyan scroll-line" />
            </span>
          </div>
        </div>
      </section>

      <ContactBlock sectionId="contact-form" />
    </>
  );
}
