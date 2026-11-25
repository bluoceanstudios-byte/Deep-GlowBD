import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export function VideoModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  const isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${
              item.format === "Reel" ? "max-w-[420px]" : "max-w-5xl"
            } rounded-2xl bg-ink-2 border border-white/15 overflow-hidden shadow-2xl`}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">{item.title || "Lumas Creative"}</p>
                {item.category && (
                  <p className="text-xs text-white/50">{item.category}</p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {item.videoId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.06]"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close video"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={item.format === "Reel" ? "aspect-[9/16] bg-black" : "aspect-video bg-black"}>
              {item.mp4Src ? (
                <video
                  src={item.mp4Src}
                  poster={item.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : item.videoId && isOnline ? (
                <iframe
                  title={item.title || "Video player"}
                  src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  src="/res.cloudinary.com/dyyrjhuho/video/upload/v1778341527/lumas-portfolio/settings/yx1mdovgq72dsjw6qtwo.mp4"
                  poster={item.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
