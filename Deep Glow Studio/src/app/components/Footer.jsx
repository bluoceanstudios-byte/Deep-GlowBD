import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { useSiteData } from "../context/DataContext";
import { toLocalAssetUrl } from "../utils/media";

export function Footer() {
  const { data } = useSiteData();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const settings = data?.settings || {};
  const globalCopy = data?.content?.global || {};

  const tickerWords = globalCopy.tickerWords?.length
    ? globalCopy.tickerWords
    : ["Commercials", "Podcasts", "Documentary", "VFX", "Animation", "Color Grading", "Sound Design", "Motion Graphics"];

  const logoSrc = toLocalAssetUrl(
    settings.logoDarkUrl ||
      "/res.cloudinary.com/dyyrjhuho/image/upload/v1778341660/lumas-portfolio/settings/kytkqd9p5txovzzw053p.png"
  );
  const waDigits = String(settings.whatsappNumber || settings.phone || "+8801778250304").replace(/[^\d]/g, "");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative pt-14 pb-8 px-4 sm:px-6 overflow-hidden">
      {/* Top Services Marquee */}
      <div className="edge-fade-x overflow-hidden py-5 mb-8 border-y border-white/[0.07]">
        <div className="marquee-track items-center gap-10" style={{ "--marquee-duration": "34s" }}>
          {[...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords].map((word, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span className="font-display text-sm sm:text-base uppercase tracking-[0.08em] text-white/75">
                {word}
              </span>
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundImage: "var(--brand-gradient)" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Card */}
      <div className="mx-auto max-w-[1380px] relative rounded-[28px] bg-ink-2 border border-white/[0.08] p-7 sm:p-12 lg:p-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full opacity-25 blur-[110px]"
          style={{ background: "radial-gradient(circle, #22d3ee 0%, #a855f7 55%, transparent 75%)" }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.02em]">
              <span className="display-sheen block">Not limited to video,</span>
              <span className="display-sheen block">we’re your</span>
              <span className="text-gradient block">creative comrades.</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/contact" className="btn-primary">
                <span className="btn-dot" />
                <span>{globalCopy.footerCta || "Let’s Collaborate"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${waDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                <span>{globalCopy.whatsappLabel || "Chat on WhatsApp"}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.12em] text-white/60 mb-3">
                {globalCopy.newsletterTitle || "Subscribe to our newsletter"}
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="field !rounded-full !py-3 !px-5 text-sm"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="btn-primary !px-5 !py-3 shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-brand-cyan mt-2">
                  Thanks for subscribing — you’re on the list.
                </p>
              )}
            </div>

            <div className="space-y-2 text-sm text-white/70">
              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition"
                >
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{settings.email}</span>
                </a>
              )}
              {settings.phone && (
                <a
                  href={`tel:${String(settings.phone).replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 hover:text-white transition"
                >
                  <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{settings.phone}</span>
                </a>
              )}
              {settings.address && (
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>
                    {settings.address}
                    {settings.city ? `, ${settings.city}` : ""}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Links Row */}
        <div className="relative z-10 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img src={logoSrc} alt={settings.siteTitle || "Lumas Creative"} className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              {(settings.footerTagline || "").trim() ||
                "Lumas Creative is a creative production and marketing agency trusted by industry leaders, helping brands turn ideas into conversion-driven assets."}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs uppercase tracking-[0.12em] text-white/45 mb-4">
              {globalCopy.quickLinksTitle || "Quick Links"}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/shop/layerize" className="hover:text-white transition">Layerize Plugin</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xs uppercase tracking-[0.12em] text-white/45 mb-4">
              {globalCopy.legalTitle || "Legal"}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-xs uppercase tracking-[0.12em] text-white/45 mb-4">
              Social
            </h3>
            <div className="flex flex-wrap gap-2">
              {settings.instagramUrl && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs bg-white/[0.05] border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  Instagram
                </a>
              )}
              {settings.linkedinUrl && (
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs bg-white/[0.05] border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  LinkedIn
                </a>
              )}
              {globalCopy.facebookUrl && (
                <a
                  href={globalCopy.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full text-xs bg-white/[0.05] border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} {settings.copyrightText || "Lumas Creative"}. All rights reserved.</p>
          <p>Dhaka, Bangladesh · Creative Production &amp; Post-Production Studio</p>
        </div>
      </div>
    </footer>
  );
}
