"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050816]">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-12 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-[#00FFC6] tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-6"
        >
          We Invite You To Celebrate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 1.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500"
        >
          Aman <span className="font-sans text-[#6C63FF] text-5xl md:text-7xl lg:text-[8rem] mx-4 italic">&amp;</span> Bela
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mt-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm tracking-widest uppercase">Date</span>
            <span className="text-xl md:text-2xl font-serif text-white mt-1">24.11.2026</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm tracking-widest uppercase">Location</span>
            <span className="text-xl md:text-2xl font-serif text-white mt-1">The Grand Taj, Mumbai</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-gray-500">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-[#6C63FF] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
