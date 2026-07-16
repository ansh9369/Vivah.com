"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 bg-[#050816] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00E5FF]">
            Aman & Bela
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
            #AmanKiBela
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {["Instagram", "Facebook", "Twitter"].map((social, i) => (
              <a 
                key={i} 
                href={`#${social.toLowerCase()}`}
                className="text-gray-400 hover:text-[#00FFC6] transition-colors text-sm tracking-wide"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Aman & Bela. Designed with love.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
