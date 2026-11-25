import React, { useState } from "react";
import { Calendar, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useSiteData } from "../context/DataContext";

const TIME_SLOTS = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export function ContactBlock({ sectionId = "contact" }) {
  const { data } = useSiteData();
  const settings = data?.settings || {};
  const contactCopy = data?.content?.contact || {};
  const globalCopy = data?.content?.global || {};

  const [tab, setTab] = useState("message");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "2026-11-26",
    slot: "11:00",
  });

  const waDigits = String(settings.whatsappNumber || settings.phone || "+8801778250304").replace(/[^\d]/g, "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={sectionId} className="py-24 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-[1380px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl leading-[1.08] tracking-[-0.025em]">
            <span className="display-sheen block">{contactCopy.formTitle || "Come say"}</span>
            <span className="text-gradient block">{contactCopy.formHighlight || "hello!"}</span>
          </h2>
          <p className="body-text text-base">
            {contactCopy.heroDescription ||
              "Send the polished brief or the scrappy voice-note version. We’ll ask the right questions, keep the jargon low, and help you find the clearest way forward."}
          </p>

          <div className="space-y-3.5 pt-2 text-sm sm:text-base">
            <a
              href={`mailto:${settings.email || "Lumascreative@gmail.com"}`}
              className="flex items-center gap-3 text-white/80 hover:text-brand-cyan transition"
            >
              <span className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-cyan" />
              </span>
              <span>{settings.email || "Lumascreative@gmail.com"}</span>
            </a>

            <a
              href={`tel:${String(settings.phone || "+0881778250304").replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-brand-cyan transition"
            >
              <span className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-brand-cyan" />
              </span>
              <span>{settings.phone || "+088 1778250304"}</span>
            </a>

            <div className="flex items-center gap-3 text-white/75">
              <span className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-brand-cyan" />
              </span>
              <span>
                {settings.address || "138/1 9 Dhaka Rampura"}
                {settings.city ? `, ${settings.city}` : ", 1219"}
              </span>
            </div>
          </div>

          <div className="pt-3">
            <a
              href={`https://wa.me/${waDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <MessageCircle className="w-4 h-4 text-brand-cyan" />
              <span>{globalCopy.whatsappLabel || "Chat on WhatsApp"}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 glass-card rounded-[26px] p-6 sm:p-9">
          {/* Tabs */}
          <div className="inline-flex p-1 rounded-full bg-white/[0.05] border border-white/10 mb-7">
            <button
              type="button"
              onClick={() => {
                setTab("message");
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-full text-xs font-display transition cursor-pointer ${
                tab === "message" ? "bg-white text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              {globalCopy.messageTab || "Send Message"}
            </button>
            <button
              type="button"
              onClick={() => {
                setTab("book");
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-full text-xs font-display transition cursor-pointer ${
                tab === "book" ? "bg-white text-ink" : "text-white/70 hover:text-white"
              }`}
            >
              {globalCopy.bookingTab || "Book a Session"}
            </button>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-brand-cyan mx-auto" />
              <h3 className="font-display text-xl text-white">
                {tab === "book" ? "Session request noted!" : "Message received!"}
              </h3>
              <p className="text-sm text-white/65 max-w-md mx-auto">
                Thanks for reaching out to Lumas Creative. For urgent briefs, ping us directly on
                WhatsApp or email {settings.email || "Lumascreative@gmail.com"}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-glass !text-xs"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/60 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="field"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+880 1XXX-XXXXXX"
                  className="field"
                />
              </div>

              {tab === "book" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs text-white/60 mb-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-xs text-white/60 mb-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>30-Min Time Slot (Dhaka)</span>
                    </label>
                    <select
                      value={form.slot}
                      onChange={(e) => setForm({ ...form, slot: e.target.value })}
                      className="field bg-ink-2"
                    >
                      {TIME_SLOTS.map((s) => (
                        <option key={s} value={s} className="bg-ink-2 text-white">
                          {s} BST
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs text-white/60 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your brand, product, timeline, or idea..."
                  className="field resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button type="submit" className="btn-primary">
                  <Send className="w-4 h-4" />
                  <span>{tab === "book" ? "Request Session" : "Send Message"}</span>
                </button>
                {tab === "book" && settings.calendlyUrl && (
                  <a
                    href={settings.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-cyan hover:underline"
                  >
                    Or book directly via Calendly →
                  </a>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
