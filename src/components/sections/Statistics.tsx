"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Days Together", value: 1250, suffix: "+" },
  { label: "Cups of Coffee", value: 3420, suffix: "" },
  { label: "Countries Visited", value: 12, suffix: "" },
  { label: "Countless Memories", value: 1, suffix: "M+" },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full py-24 bg-[#050816] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00FFC6] mb-2">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
