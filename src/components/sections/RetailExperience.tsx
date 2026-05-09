"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Fashion",
    subtitle: "1,200+ Brands",
    description: "From Zara to Chanel — every tier, every demographic, every desire.",
    bg: "rgba(40,30,10,0.9)",
    accent: "#D4AF37",
  },
  {
    title: "Technology",
    subtitle: "50+ Tech Stores",
    description: "Apple, Samsung, and every major tech brand under one iconic roof.",
    bg: "rgba(10,20,40,0.9)",
    accent: "#7EB8F7",
  },
  {
    title: "Sportswear",
    subtitle: "Premium Active",
    description: "Nike, Adidas, Lululemon — the world's top performance brands.",
    bg: "rgba(20,40,20,0.9)",
    accent: "#7ED4A0",
  },
  {
    title: "Home & Art",
    subtitle: "Design District",
    description: "Interior lifestyle curated for Dubai's most discerning residents.",
    bg: "rgba(40,10,20,0.9)",
    accent: "#F7A0B0",
  },
  {
    title: "Watches & Jewellery",
    subtitle: "Luxury Certified",
    description: "Rolex, Cartier, Bulgari — a curated world of timeless luxury.",
    bg: "rgba(30,20,5,0.9)",
    accent: "#D4AF37",
  },
  {
    title: "Kids & Family",
    subtitle: "KIDZANIA & More",
    description: "World-class family experiences that turn visitors into returning fans.",
    bg: "rgba(30,10,40,0.9)",
    accent: "#C4A0F7",
  },
];

const brands = [
  "GUCCI", "CHANEL", "DIOR", "HERMÈS", "LOUIS VUITTON",
  "ROLEX", "CARTIER", "APPLE", "PRADA", "VALENTINO",
  "SAINT LAURENT", "BOTTEGA VENETA", "BURBERRY", "VERSACE", "FENDI",
];

import HorizontalScroll from "@/components/ui/HorizontalScroll";

export default function RetailExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="retail"
      ref={ref}
      style={{
        background: "#0a0a0a",
        position: "relative",
      }}
    >
      <HorizontalScroll triggerId="retail">
        {/* Intro Slide */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 8vw",
            flexShrink: 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "50px", height: "1px", background: "rgba(212,175,55,0.5)" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
                Retail Universe
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 8vw, 120px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#f8f8f8",
                marginBottom: "32px",
              }}
            >
              Every Category.
              <br />
              <em style={{ color: "#D4AF37" }}>Every Brand.</em>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(248,248,248,0.5)", maxWidth: "600px", lineHeight: 1.8 }}>
              A retail ecosystem designed for discovery — from flagship luxury to emerging global concepts. Swipe or scroll to explore the diverse landscape of Dubai Mall.
            </p>
          </motion.div>
        </div>

        {/* Category Slides */}
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            style={{
              width: "45vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              padding: "0 40px",
              flexShrink: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                background: cat.bg,
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "80px 60px",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                cursor: "none",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at top right, ${cat.accent}12 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "48px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "120px",
                  fontWeight: 800,
                  color: `${cat.accent}0D`,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ width: "40px", height: "2px", background: cat.accent, marginBottom: "24px" }} />
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: cat.accent, marginBottom: "8px" }}>
                {cat.subtitle}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 700, color: "#f8f8f8", marginBottom: "16px" }}>
                {cat.title}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 300, color: "rgba(248,248,248,0.45)", lineHeight: 1.7, maxWidth: "400px" }}>
                {cat.description}
              </p>
            </motion.div>
          </div>
        ))}

        {/* Brand Wall Slide */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 8vw",
            flexShrink: 0,
            background: "#050505",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
              A Home for Giants
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "40px 80px" }}>
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: i % 3 === 0 ? "#D4AF37" : "rgba(255,255,255,0.4)",
                  textAlign: "center",
                }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Outro Image Slide */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/hero-mall.png"
            alt="Dubai Mall interior"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.6)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0a0a0a 0%, transparent 40%)" }} />
          <div style={{ position: "absolute", bottom: "10vh", left: "8vw", maxWidth: "700px" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 60px)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1 }}>
              330,000 sqm of retail space.
              <br />
              One address that defines
              <br />
              <em style={{ color: "#D4AF37" }}>global commerce.</em>
            </p>
          </div>
        </div>
      </HorizontalScroll>
    </section>
  );
}
