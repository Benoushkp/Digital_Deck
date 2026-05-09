"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    id: "01",
    name: "Dubai Aquarium",
    subtitle: "& Underwater Zoo",
    description: "33,000 aquatic animals. World's largest suspended acrylic panel. A 10-million-litre wonder visible from every floor.",
    stat: "33,000",
    statLabel: "Aquatic Animals",
    color: "#1A6B9A",
  },
  {
    id: "02",
    name: "VR Park",
    subtitle: "Immersive Gaming",
    description: "30+ virtual reality experiences designed for the next generation of entertainment consumers.",
    stat: "30+",
    statLabel: "VR Experiences",
    color: "#6B3DAB",
  },
  {
    id: "03",
    name: "Dubai Ice Rink",
    subtitle: "Olympic-size",
    description: "An Olympic-standard ice rink that transforms into a live concert venue by night.",
    stat: "2,000",
    statLabel: "Seat Capacity",
    color: "#1A6B8A",
  },
  {
    id: "04",
    name: "Dubai Fountain",
    subtitle: "Every 30 Minutes",
    description: "The world's largest choreographed fountain. 275 meters of lights, music, and water in perfect harmony.",
    stat: "150M",
    statLabel: "Annual Viewers",
    color: "#1A5A6B",
  },
  {
    id: "05",
    name: "KidZania",
    subtitle: "Role-Play City",
    description: "A miniature city where children live real professions. The world's fastest-growing edutainment brand.",
    stat: "3M+",
    statLabel: "Child Visits / Year",
    color: "#6B4A1A",
  },
  {
    id: "06",
    name: "Reel Cinemas",
    subtitle: "IMAX & 4DX",
    description: "State-of-the-art cinema complex with IMAX, 4DX, and premium luxury screening rooms.",
    stat: "22",
    statLabel: "Cinema Screens",
    color: "#4A1A6B",
  },
];

import CinematicText from "@/components/ui/CinematicText";

export default function EntertainmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="entertainment"
      ref={sectionRef}
      style={{
        background: "#06080a",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aquarium Hero */}
      <div style={{ position: "relative", height: "65vh", overflow: "hidden" }}>
        <motion.div style={{ position: "absolute", inset: "-5%", y: bgY, willChange: "transform" }}>
          <Image
            src="/aquarium.png"
            alt="Dubai Aquarium"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.6)" }}
          />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,8,10,0.3) 0%, rgba(6,8,10,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)" }} />

        <div style={{ position: "absolute", bottom: "70px", left: "80px", right: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}
          >
            <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
              Entertainment & Attractions
            </span>
          </motion.div>
          <CinematicText
            text="Beyond Shopping. A World Within."
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 90px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8f8f8",
            }}
          />
        </div>
      </div>

      {/* Attractions Grid */}
      <div style={{ padding: "2px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
          {attractions.map((attr, i) => (
            <motion.div
              key={attr.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#06080a",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                transition: "all 0.5s ease",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = `${attr.color}44`;
                t.style.background = `${attr.color}08`;
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.borderColor = "rgba(255,255,255,0.04)";
                t.style.background = "#06080a";
              }}
            >
              {/* ID */}
              <div
                style={{
                  position: "absolute",
                  top: "32px",
                  right: "36px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "64px",
                  fontWeight: 900,
                  color: `${attr.color}14`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {attr.id}
              </div>

              {/* Accent top bar */}
              <div style={{ width: "28px", height: "2px", background: attr.color, opacity: 0.7, marginBottom: "20px" }} />

              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: `${attr.color}CC`, marginBottom: "8px" }}>
                  {attr.subtitle}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 1.8vw, 28px)", fontWeight: 700, color: "#f8f8f8", marginBottom: "16px", lineHeight: 1.15 }}>
                  {attr.name}
                </div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,248,248,0.4)", lineHeight: 1.7 }}>
                  {attr.description}
                </p>
              </div>

              {/* Stat */}
              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: `1px solid ${attr.color}22` }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 800, color: attr.color, lineHeight: 1 }}>
                  {attr.stat}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>
                  {attr.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.8 }}
        style={{
          padding: "80px",
          background: "#040608",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 3vw, 42px)",
            fontWeight: 700,
            color: "#f8f8f8",
            lineHeight: 1.3,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Visitors don&apos;t just shop here.{" "}
          <em
            style={{
              background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            They spend the entire day.
          </em>
        </p>
      </motion.div>
    </section>
  );
}
