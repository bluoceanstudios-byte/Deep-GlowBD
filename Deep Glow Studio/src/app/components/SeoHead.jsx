import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function upsertMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function SeoHead({ title, description, image }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | Lumas Creative` : "Lumas Creative";
    const desc =
      description ||
      "500M+ views for 200+ brands. Creative production and post-production studio in Dhaka for commercials, podcasts, events, real estate, and VFX.";
    const img = image || "/i.ytimg.com/vi/F4zKWosGHQ4/hqdefault.jpg";

    document.title = fullTitle;
    upsertMeta("name", "description", desc);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:image", img);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", img);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pathname || "/");
  }, [title, description, image, pathname]);

  return null;
}
