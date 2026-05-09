"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 100, suffix: "M+", label: "Annual Visitors", description: "More footfall than any retail destination on earth." },
  { value: 1200, suffix: "+", label: "Retail Brands", description: "From luxury flagships to emerging global concepts." },
  { value: 330, suffix: "K", label: "Sq Metres GLA", description: "The world's largest gross leasable retail area." },
  { value: 200, suffix: "+", label: "Dining Outlets", description: "A global culinary stage at your doorstep." },
  { value: 78, suffix: "%", label: "International Visitors", description: "From 200+ nationalities across every continent." },
  { value: 9, suffix: "", label: "Global Awards", description: "Consistently ranked #1 destination globally." },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }
    // Simple fast counter
    let start = 0;
    const end = value;
    const duration = 15; // steps
    const increment = Math.ceil(end / duration);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(42px, 5vw, 72px)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #B8941F, #D4AF37, #E8C96E)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          willChange: "transform",
        }}
      >
        {prefix}{display}{suffix}
      </span>
    </div>
  );
}

import WorldMap from "@/components/ui/WorldMap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyDubaiMall() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        pin: "#why-header",
        pinSpacing: true,
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={triggerRef}
      style={{
        background: "#080808",
        minHeight: "180vh",
        padding: "100px 80px",
        position: "relative",
      }}
    >
      <div
        ref={sectionRef}
        style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}
      >
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
          {/* Pinned Header */}
          <div id="why-header" style={{ width: "45%", paddingTop: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                Global Reach
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(42px, 4.5vw, 72px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#f8f8f8",
                marginBottom: "24px",
              }}
            >
              Why This Property
              <br />
              <em style={{ color: "#D4AF37", fontStyle: "italic" }}>Defines You.</em>
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(248,248,248,0.55)",
                maxWidth: "380px",
                marginBottom: "0",
              }}
            >
              No other retail address in the world delivers this concentration of affluent, international visitors with this level of brand prestige.
            </p>

            <WorldMap />
          </div>

          {/* Scrolling Stats */}
          <div style={{ width: "55%" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2px",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "#080808",
                    padding: "60px",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    const t = e.currentTarget;
                    t.style.background = "rgba(212,175,55,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    const t = e.currentTarget;
                    t.style.background = "#080808";
                  }}
                >
                  <div style={{ flexShrink: 0, width: "180px" }}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#D4AF37",
                        marginBottom: "12px",
                      }}
                    >
                      {stat.label}
                    </div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "rgba(248,248,248,0.4)",
                        maxWidth: "400px",
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                marginTop: "100px",
                padding: "80px",
                border: "1px solid rgba(212,175,55,0.2)",
                background: "rgba(212,175,55,0.02)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "32px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "rgba(248,248,248,0.8)",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                &ldquo;Dubai Mall is not just a shopping centre. It is a geopolitical statement — a
                testament to what ambition, vision, and excellence can create.&rdquo;
              </p>
              <div
                style={{
                  marginTop: "32px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                }}
              >
                — Global Retail Council, 2024
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background glow simplified */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "0",
          width: "400px",
          height: "400px",
          background: "rgba(212,175,55,0.02)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </section>
  );
}
