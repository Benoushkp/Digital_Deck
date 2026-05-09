"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const luxuryBrands = [
  { name: "HERMÈS", since: "Est. 1837", tagline: "The pinnacle of artisan luxury." },
  { name: "LOUIS VUITTON", since: "Est. 1854", tagline: "A maison that defines modernity." },
  { name: "CHANEL", since: "Est. 1909", tagline: "Timeless. Irreplaceable. Iconic." },
  { name: "DIOR", since: "Est. 1946", tagline: "Haute couture for the modern world." },
  { name: "GUCCI", since: "Est. 1921", tagline: "Italian excellence, global appeal." },
  { name: "SAINT LAURENT", since: "Est. 1961", tagline: "Effortlessly radical luxury." },
];

export default function LuxurySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="luxury"
      ref={sectionRef}
      style={{
        background: "#050505",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Header */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "500px",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ position: "absolute", inset: "-5%", y: imageY, willChange: "transform" }}>
          <Image
            src="/fashion-avenue.png"
            alt="Fashion Avenue"
            fill
            style={{ objectFit: "cover", filter: "brightness(0.5)" }}
          />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.6) 100%)" }} />

        {/* Ambient gold glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            right: "80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "50px", height: "1px", background: "#D4AF37" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
              Fashion Avenue
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 6vw, 88px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8f8f8",
              maxWidth: "900px",
            }}
          >
            Where Luxury
            <br />
            <em
              style={{
                background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Finds Its Stage
            </em>
          </h2>
        </motion.div>
      </div>

      {/* Brand Grid */}
      <div style={{ padding: "0 2px 2px", background: "#050505" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
          {luxuryBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.04)",
                padding: "52px 44px",
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                transition: "all 0.5s ease",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = "#0f0f0a";
                t.style.borderColor = "rgba(212,175,55,0.2)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = "#0a0a0a";
                t.style.borderColor = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Background number */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "20px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "100px",
                  fontWeight: 900,
                  color: "rgba(212,175,55,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "9px",
                    fontWeight: 400,
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "rgba(212,175,55,0.5)",
                    marginBottom: "16px",
                  }}
                >
                  {brand.since}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#f8f8f8",
                    marginBottom: "16px",
                  }}
                >
                  {brand.name}
                </div>
              </div>

              <div>
                <div style={{ width: "24px", height: "1px", background: "rgba(212,175,55,0.4)", marginBottom: "12px" }} />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "rgba(248,248,248,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  {brand.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            background: "#000000",
            border: "1px solid rgba(212,175,55,0.08)",
            padding: "80px",
            textAlign: "center",
            marginTop: "2px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "rgba(212,175,55,0.4)", margin: "0 auto 32px" }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px, 3.5vw, 48px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#f8f8f8",
              lineHeight: 1.4,
              maxWidth: "900px",
              margin: "0 auto 32px",
              letterSpacing: "0.02em",
            }}
          >
            Fashion Avenue is not a wing of Dubai Mall.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              It is the world&apos;s most prestigious luxury retail corridor.
            </span>
          </p>
          <div style={{ width: "40px", height: "1px", background: "rgba(212,175,55,0.4)", margin: "0 auto" }} />
        </motion.div>
      </div>
    </section>
  );
}
