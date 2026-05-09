"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const venues = [
  {
    name: "Michelin-Level Fine Dining",
    type: "Fine Dining",
    description: "World-class restaurants with views of the Burj Khalifa and Dubai Fountain.",
    hours: "12PM – 2AM",
    tag: "Signature",
  },
  {
    name: "International Café Culture",
    type: "Café & Brunch",
    description: "From Parisian patisseries to specialty coffee roasters — curated globally.",
    hours: "7AM – Midnight",
    tag: "Global",
  },
  {
    name: "Dubai Fountain Promenade",
    type: "Outdoor Dining",
    description: "Al fresco terraces overlooking the world's largest dancing fountain show.",
    hours: "6PM – 1AM",
    tag: "Icon",
  },
  {
    name: "Sky Rooftop Dining",
    type: "Rooftop Bar",
    description: "Sunset cocktails and panoramic Dubai skyline views from the highest terraces.",
    hours: "5PM – 3AM",
    tag: "Premium",
  },
];

export default function DiningLifestyle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="dining"
      ref={sectionRef}
      style={{
        background: "#0a0806",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dining Image Hero */}
      <div style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-5%", y: bgY, willChange: "transform" }}>
          <Image
            src="/dining.png"
            alt="Luxury dining"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.6)" }}
          />
        </motion.div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.95) 100%)",
          }}
        />

        {/* Header overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
              Dining & Lifestyle
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5.5vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8f8f8",
            }}
          >
            A World of Flavour
            <br />
            <em style={{ color: "#D4AF37" }}>Under One Roof</em>
          </h2>
        </motion.div>
      </div>

      {/* Venues Grid */}
      <div style={{ padding: "2px", background: "#050505" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
          {venues.map((venue, i) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#0a0806",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "52px 48px",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                transition: "all 0.4s ease",
                minHeight: "260px",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = "#120e08";
                t.style.borderColor = "rgba(212,175,55,0.15)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = "#0a0806";
                t.style.borderColor = "rgba(255,255,255,0.05)";
              }}
            >
              {/* Tag */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    padding: "5px 12px",
                  }}
                >
                  {venue.tag}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "10px",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {venue.hours}
                </span>
              </div>

              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(212,175,55,0.6)", marginBottom: "12px" }}>
                {venue.type}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 2vw, 28px)", fontWeight: 700, color: "#f8f8f8", marginBottom: "16px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                {venue.name}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,248,248,0.45)", lineHeight: 1.7 }}>
                {venue.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fountain Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ position: "relative", height: "480px", overflow: "hidden", marginTop: "2px" }}
        >
          <Image
            src="/fountain.png"
            alt="Dubai Fountain"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.6) contrast(1.15)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 50%)" }} />

          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "80px",
              right: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "12px" }}>
                The Dubai Fountain
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                  fontWeight: 700,
                  color: "#f8f8f8",
                  lineHeight: 1.2,
                  maxWidth: "500px",
                }}
              >
                The world&apos;s largest choreographed fountain system — every 30 minutes.
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "44px", fontWeight: 800, background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                200+
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                Dining Outlets
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
