import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, MessageCircle } from "lucide-react";
import { SeoHead } from "../components/SeoHead";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { FaqAccordion } from "../components/FaqAccordion";

const LAYERIZE_FAQS = [
  {
    question: "What is Layerize?",
    answer:
      "Layerize is a free panel for Adobe After Effects. It takes an HTML motion video, for example one made with Claude, and imports it as a composition of native, editable layers instead of a flat video.",
  },
  {
    question: "Is Layerize free?",
    answer:
      "Yes. Layerize is completely free to download, with no email or sign-up needed.",
  },
  {
    question: "Which versions of After Effects does Layerize work with?",
    answer:
      "After Effects 2019 (version 16.0) or newer, on macOS and Windows. It is tested most on macOS.",
  },
  {
    question: "How do I make an HTML video for Layerize?",
    answer:
      "Ask Claude for a video and add the word 'layerize' to your request. The download includes a Claude skill and a demo video to start with.",
  },
  {
    question: "What does Layerize convert?",
    answer:
      "Boxes become shape layers, words become text layers (including Arabic and right-to-left text), pictures, video clips and sounds each get their own layer, and movement from GSAP and CSS arrives as keyframes.",
  },
  {
    question: "What are the limits?",
    answer:
      "3D tilts are flattened to 2D. ::before and ::after decorations, clip-path and mask-image are not converted. Gradients with three or more colours become two colours.",
  },
];

export function LayerizePage() {
  return (
    <>
      <SeoHead
        title="Layerize"
        description="A free panel that turns an HTML motion video into native, editable After Effects layers."
      />

      <section className="pt-36 pb-24 px-4 sm:px-6">
        <div className="mx-auto max-w-[1180px] space-y-20">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-medium bg-brand-cyan/12 text-brand-cyan border border-brand-cyan/30">
              Free After Effects Panel · Mac &amp; Windows
            </span>
            <AnimatedHeading
              as="h1"
              text="Layerize for / After Effects."
              className="text-4xl sm:text-6xl lg:text-[68px]"
            />
            <p className="body-text text-lg sm:text-xl">
              A free panel that turns an HTML motion video into native, editable After Effects
              layers.
            </p>
          </div>

          {/* Demo Video */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-display text-white/55">
              <span>See how it works</span>
              <span>1 min 23 s</span>
            </div>
            <div className="aspect-video rounded-[26px] overflow-hidden border border-white/12 bg-ink-2 shadow-2xl">
              <video
                src="/video/layerize-intro.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser can&apos;t play this video.{" "}
                <a href="/video/layerize-intro.mp4">Download it</a>.
              </video>
            </div>
          </div>

          {/* Product Card + Download Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 glass-card rounded-[26px] p-7 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <img src="/brand/layerize.svg" alt="Layerize" className="h-14 w-auto" />
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Free", "Plugin", "After Effects", "Mac & Windows"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-white mb-2">
                  Turn HTML to After Effects layers
                </h2>
                <p className="body-text">
                  An After Effects panel that turns an HTML motion video, made with Claude or by
                  hand, into a comp of native, editable layers. Re-edit the whole video layer by
                  layer.
                </p>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-white/80">
                <li>• <strong className="text-white">Every box becomes a shape layer</strong>, with rounded corners, borders and shadows</li>
                <li>• <strong className="text-white">Every word is a real text layer</strong>, including Arabic and right-to-left text</li>
                <li>• <strong className="text-white">Pictures, video clips and sounds</strong> each get their own layer</li>
                <li>• <strong className="text-white">Movement from GSAP, CSS and more</strong> arrives as keyframes</li>
              </ul>
            </div>

            <div className="lg:col-span-5 glass-card rounded-[26px] p-7 sm:p-9 space-y-6 border-brand-cyan/30">
              <div>
                <span className="font-display text-xs uppercase tracking-[0.14em] text-brand-cyan">
                  Free download
                </span>
                <p className="text-sm text-white/65 mt-1">
                  No email, no sign-up. Click and it downloads.
                </p>
              </div>

              <a
                href="/downloads/Layerize-v1.0.0.zip"
                download
                className="btn-primary w-full justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Get Layerize free</span>
              </a>

              <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <dt className="text-white/45 mb-0.5">Version</dt>
                  <dd className="text-white font-medium">1.0.0</dd>
                </div>
                <div>
                  <dt className="text-white/45 mb-0.5">File size</dt>
                  <dd className="text-white font-medium">76 KB</dd>
                </div>
                <div>
                  <dt className="text-white/45 mb-0.5">Works on</dt>
                  <dd className="text-white font-medium">macOS · Windows</dd>
                </div>
                <div>
                  <dt className="text-white/45 mb-0.5">Requires</dt>
                  <dd className="text-white font-medium">After Effects 2019+</dd>
                </div>
              </dl>

              <p className="text-xs text-white/55">
                Includes the panel, a demo video to try and a Claude skill.
              </p>

              <a
                href="https://wa.me/8801778250304?text=Hi%20Towfiq%2C%20I%20have%20a%20question%20about%20Layerize."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass w-full justify-center !text-xs"
              >
                <MessageCircle className="w-4 h-4 text-brand-cyan" />
                <span>Ask a question</span>
              </a>
            </div>
          </div>

          {/* Installation & Usage Guides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 prose-site !text-sm">
              <h3 className="!mt-0">How to install on Mac</h3>
              <ol>
                <li>Quit After Effects.</li>
                <li>Open the downloaded folder and double-click <strong>Install on Mac.command</strong>. If macOS blocks it: right-click &gt; Open &gt; Open.</li>
                <li>Wait for &ldquo;All done!&rdquo;.</li>
                <li>In After Effects choose <strong>Window &gt; Extensions &gt; Layerize</strong>.</li>
              </ol>
            </div>

            <div className="glass-card rounded-2xl p-6 prose-site !text-sm">
              <h3 className="!mt-0">How to install on Windows</h3>
              <ol>
                <li>Close After Effects.</li>
                <li>Double-click <strong>Install on Windows.bat</strong>. If Windows warns you: More info &gt; Run anyway.</li>
                <li>Wait for &ldquo;All done!&rdquo;.</li>
                <li>In After Effects choose <strong>Window &gt; Extensions &gt; Layerize</strong>.</li>
              </ol>
            </div>

            <div className="glass-card rounded-2xl p-6 prose-site !text-sm">
              <h3 className="!mt-0">How to use it</h3>
              <ol>
                <li>Ask Claude for a video and say &ldquo;layerize&rdquo;, for example &ldquo;Make a 10-second promo for my café, layerize&rdquo;.</li>
                <li>In After Effects open <strong>Window &gt; Extensions &gt; Layerize</strong>.</li>
                <li>Drop the HTML file on the panel and click <strong>Import to After Effects</strong>.</li>
                <li>Want to try it first? Drop <strong>Demo video/demo.html</strong> from the download on the panel.</li>
              </ol>
            </div>
          </div>

          {/* What is Layerize + Questions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl display-sheen">What is Layerize?</h2>
              <p className="body-text">
                Layerize is a free Adobe After Effects panel. Make a motion video as an HTML file,
                with Claude or by hand, drop it on the panel, and Layerize rebuilds it inside After
                Effects as a normal composition.
              </p>
              <p className="body-text">
                Instead of a flat video, you get shape layers, text layers, image and video layers,
                audio and keyframes. Change a word, a colour or a timing the way you would in any
                other After Effects project.
              </p>
              <p className="text-sm text-white/55">
                Made by{" "}
                <a
                  href="https://towfiqislam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-cyan hover:underline"
                >
                  Towfiq Islam
                </a>
                , a filmmaker and video editor from Dhaka.
              </p>
            </div>

            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl sm:text-3xl display-sheen mb-6">Questions</h2>
              <FaqAccordion items={LAYERIZE_FAQS} />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to the shop</span>
            </Link>

            <a
              href="https://wa.me/8801778250304?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass !text-xs"
            >
              <span>Need something made? Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
