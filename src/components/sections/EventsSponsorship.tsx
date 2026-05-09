"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sponsorshipTiers = [
  {
    tier: "Platinum",
    color: "#E8E8E8",
    bg: "rgba(232,232,232,0.03)",
    border: "rgba(232,232,232,0.15)",
    price: "AED 5M+",
    features: [
      "Naming rights to a landmark space",
      "Exclusive category sponsorship",
      "Integrated digital campaigns across all platforms",
      "VIP concierge and dedicated brand manager",
      "Live event co-hosting rights",
      "Custom installation across 3 mega-atria",
    ],
  },
  {
    tier: "Gold",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.04)",
    border: "rgba(212,175,55,0.25)",
    price: "AED 1M+",
    features: [
      "Prime façade digital screen placements",
      "Seasonal event activation zones",
      "Social media content integration",
      "Priority placement in experiential zones",
      "Dedicated brand ambassador program",
      "Quarterly reporting and analytics",
    ],
  },
  {
    tier: "Silver",
    color: "#A0A0A0",
    bg: "rgba(160,160,160,0.03)",
    border: "rgba(160,160,160,0.12)",
    price: "AED 250K+",
    features: [
      "Indoor digital signage placements",
      "Pop-up activation spaces",
      "Event co-branding opportunities",
      "Monthly performance insights",
      "Cross-promotion with mall campaigns",
      "Access to partner brand network",
    ],
  },
];

const ctaItems = [
  { label: "Book An Event", icon: "◆", href: "#contact" },
  { label: "Become A Partner", icon: "◈", href: "#contact" },
  { label: "Leasing Inquiry", icon: "◇", href: "#contact" },
  { label: "Schedule A Tour", icon: "◉", href: "#contact" },
];

import CinematicText from "@/components/ui/CinematicText";

export default function EventsSponsorship() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section
      id="events"
      ref={sectionRef}
      style={{
        background: "#050505",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Events Hero */}
      <div style={{ position: "relative", height: "55vh", overflow: "hidden" }}>
        <Image
          src="/events.png"
          alt="Events at Dubai Mall"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.4) contrast(1.2)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.95) 100%)" }} />
        {/* Spotlight effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        <div style={{ position: "absolute", bottom: "70px", left: "80px", right: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}
          >
            <div style={{ width: "40px", height: "1px", background: "#D4AF37" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
              Events & Partnerships
            </span>
          </motion.div>
          <CinematicText
            text="Your Stage. 100 Million Eyes."
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5.5vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#f8f8f8",
            }}
          />
        </div>
      </div>

      {/* Events Types */}
      <div style={{ padding: "80px 80px 0" }}>
        <div style={{ display: "flex", gap: "2px", flexWrap: "wrap", justifyContent: "center", marginBottom: "80px" }}>
          {[
            "Brand Activations",
            "Product Launches",
            "Fashion Shows",
            "Corporate Summits",
            "Concerts & Performances",
            "Expo & Trade Events",
          ].map((type, i) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "12px 28px",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(248,248,248,0.6)",
                cursor: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = "rgba(212,175,55,0.06)";
                t.style.borderColor = "rgba(212,175,55,0.25)";
                t.style.color = "#D4AF37";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = "rgba(255,255,255,0.03)";
                t.style.borderColor = "rgba(255,255,255,0.08)";
                t.style.color = "rgba(248,248,248,0.6)";
              }}
            >
              {type}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <div style={{ padding: "0 80px 80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 700,
              color: "#f8f8f8",
              marginBottom: "12px",
            }}
          >
            Sponsorship Tiers
          </h3>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(248,248,248,0.4)", letterSpacing: "0.05em" }}>
            Partnership opportunities crafted for maximum brand impact
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {sponsorshipTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: tier.bg,
                border: `1px solid ${tier.border}`,
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s ease",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.transform = "translateY(0)";
              }}
            >
              {/* Tier badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: tier.color, marginBottom: "6px" }}>
                    {tier.tier}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 800, color: tier.color, lineHeight: 1 }}>
                    {tier.price}
                  </div>
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: `1px solid ${tier.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: tier.color, fontSize: "14px" }}>
                  ✦
                </div>
              </div>

              <div style={{ width: "100%", height: "1px", background: `${tier.color}20`, marginBottom: "28px" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {tier.features.map((feature) => (
                  <div key={feature} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: tier.color, flexShrink: 0, marginTop: "6px", opacity: 0.7 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(248,248,248,0.55)", lineHeight: 1.5 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActiveModal(tier.tier)}
                style={{
                  marginTop: "36px",
                  width: "100%",
                  background: "transparent",
                  border: `1px solid ${tier.color}44`,
                  color: tier.color,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "14px",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const t = e.target as HTMLElement;
                  t.style.background = `${tier.color}15`;
                }}
                onMouseLeave={(e) => {
                  const t = e.target as HTMLElement;
                  t.style.background = "transparent";
                }}
              >
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.7 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {ctaItems.map((cta, i) => (
          <button
            key={cta.label}
            style={{
              background: i === 1 ? "linear-gradient(135deg, #B8941F, #D4AF37)" : "rgba(255,255,255,0.02)",
              border: "none",
              borderRight: "1px solid rgba(255,255,255,0.04)",
              padding: "52px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              cursor: "none",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget;
              if (i !== 1) {
                t.style.background = "rgba(212,175,55,0.05)";
              }
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget;
              if (i !== 1) {
                t.style.background = "rgba(255,255,255,0.02)";
              }
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: i === 1 ? "#080808" : "#f8f8f8",
              }}
            >
              {cta.label}
            </span>
            <div
              style={{
                width: "30px",
                height: "1px",
                background: i === 1 ? "rgba(8,8,8,0.5)" : "rgba(212,175,55,0.4)",
                marginTop: "4px",
              }}
            />
          </button>
        ))}
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(12px)",
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(212,175,55,0.2)",
                padding: "60px",
                maxWidth: "560px",
                width: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "16px" }}>
                {activeModal} Partnership Enquiry
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#f8f8f8", marginBottom: "32px" }}>
                Let&apos;s Build Something Iconic Together
              </h3>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: "24px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "32px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                  <div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Email</div>
                    <div style={{ fontSize: "14px", color: "#f8f8f8" }}>partners@dubaimall.com</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>Hotline</div>
                    <div style={{ fontSize: "14px", color: "#D4AF37", fontWeight: 600 }}>+971 4 362 7500</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {["Your Name", "Brand / Company", "Email Address", "Phone Number"].map((ph) => (
                  <input
                    key={ph}
                    placeholder={ph}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#f8f8f8",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      padding: "16px 20px",
                      outline: "none",
                      letterSpacing: "0.05em",
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg, #B8941F, #D4AF37)",
                    color: "#080808",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "18px",
                    border: "none",
                    cursor: "none",
                  }}
                >
                  Submit Enquiry
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    padding: "18px 24px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "none",
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
