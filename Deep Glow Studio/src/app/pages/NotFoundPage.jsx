import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import { SeoHead } from "../components/SeoHead";

export function NotFoundPage() {
  const { data } = useSiteData();
  const globalCopy = data?.content?.global || {};

  return (
    <>
      <SeoHead title="Page Not Found" description="The page you're looking for has moved or never existed." />
      <section className="pt-40 pb-28 px-4 sm:px-6 min-h-[75vh] flex items-center justify-center text-center">
        <div className="max-w-xl space-y-6">
          <div className="font-display text-6xl sm:text-8xl text-gradient">404</div>
          <h1 className="font-display text-2xl sm:text-4xl display-sheen">
            {globalCopy.notFoundTitle || "This scene didn’t make the cut"}
          </h1>
          <p className="body-text">
            {globalCopy.notFoundText || "The page you’re looking for has moved or never existed."}
          </p>
          <div className="pt-2">
            <Link to="/" className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              <span>{globalCopy.notFoundCta || "Back to Home"}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
