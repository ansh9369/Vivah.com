import PremiumLoader from "@/components/PremiumLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Statistics from "@/components/sections/Statistics";
import RSVP from "@/components/sections/RSVP";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] selection:bg-[#6C63FF] selection:text-white">
      <PremiumLoader />
      <Navbar />
      
      <div className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Statistics />
        <RSVP />
        <Footer />
      </div>
    </main>
  );
}
