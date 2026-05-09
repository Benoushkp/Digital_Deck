"use client";
import { motion } from "framer-motion";

const regions = [
  { name: "Europe", x: "48%", y: "30%", visitors: "18%" },
  { name: "China", x: "78%", y: "42%", visitors: "12%" },
  { name: "India", x: "68%", y: "55%", visitors: "15%" },
  { name: "GCC", x: "58%", y: "52%", visitors: "35%" },
  { name: "Americas", x: "20%", y: "45%", visitors: "10%" },
  { name: "Africa", x: "48%", y: "65%", visitors: "10%" },
];

export default function WorldMap() {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px", marginTop: "40px" }}>
      {/* Simplified SVG Map Background */}
      <svg
        viewBox="0 0 1000 500"
        style={{ width: "100%", height: "100%", opacity: 0.2, fill: "#fff" }}
      >
        <path d="M150,150 L200,100 L300,120 L350,200 L300,250 L200,220 Z M450,100 L550,120 L600,200 L550,300 L450,250 Z M700,150 L850,100 L950,200 L900,350 L750,300 Z M200,350 L350,300 L450,400 L300,450 Z M600,350 L750,400 L700,480 L550,450 Z" />
      </svg>

      {/* Connection lines to Dubai (approx center-ish 58, 52) */}
      <div style={{ position: "absolute", inset: 0 }}>
        {regions.map((region) => (
          <div
            key={region.name}
            style={{
              position: "absolute",
              left: region.x,
              top: region.y,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                width: "8px",
                height: "8px",
                background: "#D4AF37",
                borderRadius: "50%",
                boxShadow: "0 0 15px #D4AF37",
              }}
            />
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                color: "#D4AF37",
                marginTop: "8px",
                letterSpacing: "0.1em",
              }}
            >
              {region.visitors}
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "8px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              {region.name}
            </div>
          </div>
        ))}

        {/* Dubai Center Point */}
        <div
          style={{
            position: "absolute",
            left: "58%",
            top: "52%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            style={{
              width: "12px",
              height: "12px",
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 30px #fff",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}
