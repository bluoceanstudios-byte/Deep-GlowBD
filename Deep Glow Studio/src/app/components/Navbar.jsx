import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import { toLocalAssetUrl } from "../utils/media";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/#workflow", label: "Workflow" },
  { to: "/blogs", label: "Blogs" },
];

export function Navbar() {
  const { data } = useSiteData();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const settings = data?.settings || {};
  const logoSrc = toLocalAssetUrl(
    settings.logoDarkUrl ||
      "/res.cloudinary.com/dyyrjhuho/image/upload/v1778341660/lumas-portfolio/settings/kytkqd9p5txovzzw053p.png"
  );
  const siteTitle = settings.siteTitle || "Lumas Creative";
  const contactLabel = data?.content?.global?.contactButton || "Contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    if (to.startsWith("/#")) return false;
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-ink font-medium text-sm"
      >
        Skip to content
      </a>

      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
        <div
          className={`mx-auto max-w-[1380px] pointer-events-auto rounded-full px-4 sm:px-6 h-16 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "nav-glass shadow-[0_12px_40px_rgba(0,0,0,0.45)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group" aria-label={siteTitle}>
            <img
              src={logoSrc}
              alt={siteTitle}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/10 p-1.5 backdrop-blur-md"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-200 ${
                    active ? "text-ink" : "text-white/75 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs">
              <span className="btn-dot" />
              <span>{contactLabel}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/12 flex items-center justify-center text-white hover:bg-white/12 transition"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-6 pt-28 pb-10"
          >
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className={`block py-3 font-display text-2xl ${
                      isActive(item.to) ? "text-gradient" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link to="/contact" className="btn-primary w-full justify-center">
                <span className="btn-dot" />
                <span>{contactLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="text-center text-sm text-white/60 hover:text-white"
                >
                  {settings.email}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
