"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CinematicText from "@/components/ui/CinematicText";

const words = ["More Than A Mall", "A Global Destination", "100 Million Visitors"];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Cinematic Background Video */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-5%",
          scale,
          willChange: "transform",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/dubai-aerial.png"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        >
          <source src="/hero-reel.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Vignette Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.5) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(to top, #050505 0%, transparent 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Ambient Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 12}%`,
            animationDuration: `${8 + i * 2}s`,
            animationDelay: `${i * 1.2}s`,
            width: i % 2 === 0 ? "2px" : "1px",
            height: i % 2 === 0 ? "2px" : "1px",
            zIndex: 2,
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          opacity,
          y,
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}
          >
            Downtown Dubai
          </span>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
        </motion.div>

        {/* Animated Headline */}
        <div style={{ overflow: "hidden", height: "clamp(60px, 10vw, 120px)", marginBottom: "8px" }}>
          <motion.h1
            key={wordIndex}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 7vw, 96px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8f8f8",
              whiteSpace: "nowrap",
            }}
          >
            {words[wordIndex]}
          </motion.h1>
        </div>

        {/* Gold Accent Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(16px, 2.5vw, 26px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(248,248,248,0.65)",
            letterSpacing: "0.05em",
            marginTop: "20px",
            maxWidth: "600px",
          }}
        >
          The world&apos;s most iconic lifestyle destination — built for brands who demand the extraordinary.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "52px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { value: "100M+", label: "Annual Visitors" },
            { value: "1,200+", label: "Retail Brands" },
            { value: "#1", label: "Global Destination" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 3.5vw, 40px)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "6px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: "16px", marginTop: "48px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            className="btn-gold"
            onClick={() => setShowModal(true)}
            style={{
              background: "linear-gradient(135deg, #B8941F, #D4AF37)",
              color: "#080808",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "20px 52px",
              border: "none",
              cursor: "none",
              position: "relative",
              zIndex: 0,
            }}
          >
            Become a Partner
          </button>
        </motion.div>
      </motion.div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 10002, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        onClick={scrollDown}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "none",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(212,175,55,0.8), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
