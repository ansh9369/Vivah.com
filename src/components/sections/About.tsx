"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="story" ref={ref} className="relative w-full py-32 bg-[#050816] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Images with Parallax */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] flex justify-center items-center">
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-2 lg:left-0 top-8 lg:top-10 w-[55%] lg:w-2/3 h-[70%] lg:h-3/4 rounded-2xl overflow-hidden glass z-10 p-2 shadow-2xl shadow-[#6C63FF]/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" 
              alt="Couple 1"
              className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-2 lg:right-0 bottom-8 lg:bottom-10 w-[55%] lg:w-2/3 h-[70%] lg:h-3/4 rounded-2xl overflow-hidden glass z-20 p-2 shadow-2xl shadow-[#00FFC6]/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" 
              alt="Couple 2"
              className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[#00FFC6] tracking-[0.3em] uppercase text-sm font-medium mb-4">
              Our Story
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              A Journey of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#7C3AED] italic">
                Two Souls
              </span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              It started with a simple hello and evolved into a love story for the ages. 
              From our first coffee date in a tiny downtown cafe to the magical moment 
              under the stars when we decided to spend forever together.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              We've shared countless adventures, supported each other through life's 
              ups and downs, and grown together in ways we never imagined. Now, we are 
              thrilled to invite you to celebrate the next chapter of our journey.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white/20 hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition-all duration-300 text-white tracking-widest uppercase text-sm font-medium backdrop-blur-md"
            >
              Read Full Story
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
