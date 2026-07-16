"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Haldi & Mehendi",
    date: "November 22, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "The Royal Gardens",
    description: "A vibrant morning of colors, music, and intricate henna designs. Dress code: Yellow or Green.",
    image: "https://images.unsplash.com/photo-1597157639073-69294dc242cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sangeet Night",
    date: "November 23, 2026",
    time: "7:00 PM Onwards",
    venue: "Crystal Ballroom",
    description: "An evening of dance, performances, and celebration. Get ready to hit the dance floor!",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Wedding",
    date: "November 24, 2026",
    time: "4:00 PM - Midnight",
    venue: "The Grand Taj, Mumbai",
    description: "The main ceremony where we tie the knot, followed by a grand reception dinner.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Events() {
  return (
    <section id="events" className="relative w-full py-32 bg-[#0a0f25]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00FFC6] tracking-[0.3em] uppercase text-sm font-medium mb-4"
          >
            Celebrations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl text-white"
          >
            Wedding Events
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden glass hover:bg-white/10 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-80" />
              </div>
              
              <div className="p-8 relative -mt-20 z-10">
                <h4 className="font-serif text-3xl text-white mb-2">{event.title}</h4>
                <div className="flex flex-col gap-2 mb-6 text-sm text-gray-300 font-mono tracking-wide">
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" /> {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFC6]" /> {event.venue}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {event.description}
                </p>
                <button className="w-full py-3 rounded-xl border border-white/10 group-hover:border-[#6C63FF] text-white/70 group-hover:text-white uppercase tracking-widest text-xs transition-all duration-300">
                  Add to Calendar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
