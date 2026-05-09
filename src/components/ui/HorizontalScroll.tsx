"use client";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
  triggerId: string;
}

export default function HorizontalScroll({ children, triggerId }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xMove = -(totalWidth - viewportWidth);

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: xMove,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true, // Faster than 1
          pin: true,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} style={{ overflow: "hidden" }}>
      <div
        ref={sectionRef}
        style={{
          display: "flex",
          width: "max-content",
          height: "100vh",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
