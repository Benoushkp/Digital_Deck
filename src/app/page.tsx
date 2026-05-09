"use client";
import { useEffect } from "react";
import Lenis from "lenis";

import LoadingScreen from "@/components/layout/LoadingScreen";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import WhyDubaiMall from "@/components/sections/WhyDubaiMall";
import RetailExperience from "@/components/sections/RetailExperience";
import LuxurySection from "@/components/sections/LuxurySection";
import DiningLifestyle from "@/components/sections/DiningLifestyle";
import EntertainmentSection from "@/components/sections/EntertainmentSection";
import EventsSponsorship from "@/components/sections/EventsSponsorship";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Snappier
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // Simpler cubic ease
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <WhyDubaiMall />
        <RetailExperience />
        <LuxurySection />
        <DiningLifestyle />
        <EntertainmentSection />
        <EventsSponsorship />
        <FinalCTA />
      </main>
    </>
  );
}
