"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Destination", href: "#why" },
  { label: "Retail", href: "#retail" },
  { label: "Luxury", href: "#luxury" },
  { label: "Dining", href: "#dining" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Events", href: "#events" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [showModal, setShowModal] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY < 80);
      setVisible(scrollY < lastScrollY.current || scrollY < 80);
      lastScrollY.current = scrollY;

      // Detect active section
      const sections = ["why", "retail", "luxury", "dining", "entertainment", "events"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: atTop ? "28px 48px" : "16px 48px",
          transition: "padding 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: atTop
            ? "transparent"
            : "rgba(5,5,5,0.95)",
          borderBottom: atTop ? "none" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Dubai Mall
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "8px",
              fontWeight: 400,
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            A Global Destination
          </div>
        </button>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: activeSection === link.href ? "#D4AF37" : "rgba(255,255,255,0.6)",
                transition: "color 0.3s ease",
                padding: "4px 0",
                borderBottom:
                  activeSection === link.href
                    ? "1px solid rgba(212,175,55,0.5)"
                    : "1px solid transparent",
              }}
            >
              {link.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: "linear-gradient(135deg, #B8941F, #D4AF37)",
              color: "#080808",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "12px 28px",
              border: "none",
              cursor: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(135deg, #D4AF37, #E8C96E)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background =
                "linear-gradient(135deg, #B8941F, #D4AF37)";
            }}
          >
            Become a Partner
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 10001, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}
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
    </>
  );
}
