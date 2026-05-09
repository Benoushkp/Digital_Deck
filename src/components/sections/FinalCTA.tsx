"use client";
import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

const contactLinks = [
  { label: "Leasing", info: "leasing@dubaimall.com" },
  { label: "Partnerships", info: "+971 4 362 7500" },
  { label: "Events", info: "events@dubaimall.com" },
  { label: "Corporate", info: "corporate@dubaimall.com" },
];

import CinematicText from "@/components/ui/CinematicText";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          scale,
          willChange: "transform",
        }}
      >
        <Image
          src="/dubai-aerial.png"
          alt="Dubai skyline"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.35) contrast(1.1)" }}
        />
      </motion.div>

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #000 80%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "100px 40px",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.5em", textTransform: "uppercase", color: "#D4AF37" }}>
            The Global Destination
          </span>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
        </div>

        {/* Main Headline */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 110px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#f8f8f8",
            maxWidth: "1200px",
            marginBottom: "40px",
          }}
        >
          The Future of Retail
          <br />
          <em style={{ color: "#D4AF37", fontStyle: "italic" }}>Begins Today.</em>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300,
            color: "rgba(248,248,248,0.6)",
            maxWidth: "700px",
            lineHeight: 1.8,
            marginBottom: "60px",
          }}
        >
          Join 100 million visitors and the world's most prestigious brands. Secure your legacy at the world's most iconic lifestyle destination.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: "linear-gradient(135deg, #B8941F, #D4AF37)",
            color: "#080808",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "24px 64px",
            border: "none",
            cursor: "none",
            transition: "all 0.3s ease",
            marginBottom: "100px",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "linear-gradient(135deg, #D4AF37, #E8C96E)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "linear-gradient(135deg, #B8941F, #D4AF37)";
          }}
        >
          Become a Partner
        </button>

        {/* Footer Grid */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
            textAlign: "left",
          }}
        >
          {/* Column 1 */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#D4AF37", marginBottom: "20px", letterSpacing: "0.1em" }}>
              DUBAI MALL
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>
              Dubai Mall is more than a shopping centre — it is a global landmark defining the future of luxury and lifestyle.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, color: "#f8f8f8", textTransform: "uppercase", marginBottom: "20px", letterSpacing: "0.2em" }}>
              Experience
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Retail", id: "retail" },
                { label: "Luxury", id: "luxury" },
                { label: "Dining", id: "dining" },
                { label: "Entertainment", id: "entertainment" }
              ].map(l => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.id)}
                  style={{ background: "none", border: "none", textAlign: "left", padding: 0, fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 300, cursor: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#D4AF37"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, color: "#f8f8f8", textTransform: "uppercase", marginBottom: "20px", letterSpacing: "0.2em" }}>
              Business
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Leasing", id: "retail" },
                { label: "Sponsorship", id: "events" },
                { label: "Media Kit", id: "events" },
                { label: "Contact", id: "contact" }
              ].map(l => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.id)}
                  style={{ background: "none", border: "none", textAlign: "left", padding: 0, fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 300, cursor: "none", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#D4AF37"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, color: "#f8f8f8", textTransform: "uppercase", marginBottom: "20px", letterSpacing: "0.2em" }}>
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>Downtown Dubai, UAE</span>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>+971 4 362 7500</span>
              <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                {["IG", "LI", "TW"].map(s => (
                  <span key={s} style={{ fontSize: "10px", color: "#D4AF37", fontWeight: 600, cursor: "none" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ width: "100%", maxWidth: "1100px", marginTop: "60px", paddingBottom: "40px", display: "flex", justifyContent: "space-between", opacity: 0.2 }}>
          <span style={{ fontSize: "10px", color: "#f8f8f8" }}>© 2024 EMAAR MALLS. ALL RIGHTS RESERVED.</span>
          <span style={{ fontSize: "10px", color: "#f8f8f8" }}>DOWNTOWN DUBAI</span>
        </div>
      </motion.div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.2)", padding: "60px", maxWidth: "500px", width: "100%", textAlign: "center" }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>Partnership Inquiry</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#f8f8f8", marginBottom: "32px" }}>Join the Global Stage</h3>
              
              <div style={{ background: "rgba(255,255,255,0.03)", padding: "32px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "40px" }}>
                <div style={{ marginBottom: "24px" }}>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>Direct Email</div>
                  <div style={{ fontSize: "18px", color: "#f8f8f8", fontFamily: "Inter, sans-serif" }}>partners@dubaimall.com</div>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px" }}>Partnership Hotline</div>
                  <div style={{ fontSize: "18px", color: "#D4AF37", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>+971 4 362 7500</div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                style={{ width: "100%", padding: "18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#f8f8f8", fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "none" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
