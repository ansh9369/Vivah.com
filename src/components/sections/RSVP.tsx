"use client";

import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <section id="rsvp" className="relative w-full py-32 bg-[#050816] overflow-hidden flex justify-center items-center">
      {/* Immersive background elements */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#6C63FF] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-[#00E5FF] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl glass p-10 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
        >
          {/* Animated border line */}
          <motion.div 
            animate={{ 
              x: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFC6] to-transparent"
          />

          <h2 className="font-serif text-5xl md:text-7xl mb-6 text-white">Join Our Celebration</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            We would be absolutely thrilled to have you join us on our special day. 
            Please let us know if you can make it by November 1st.
          </p>
          
          <form className="max-w-xl mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6C63FF] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6C63FF] transition-colors"
              />
            </div>
            
            <select defaultValue="" className="w-full bg-[#0a0f25] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6C63FF] transition-colors appearance-none">
              <option value="" disabled>Will you be attending?</option>
              <option value="yes">Yes, I wouldn't miss it for the world!</option>
              <option value="no">Sadly, I won't be able to make it.</option>
            </select>
            
            <textarea 
              placeholder="Any dietary requirements or special messages?" 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#6C63FF] transition-colors"
            ></textarea>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00E5FF] text-white tracking-widest uppercase font-medium shadow-[0_0_30px_rgba(108,99,255,0.3)] hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] transition-all duration-300"
            >
              Confirm RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
