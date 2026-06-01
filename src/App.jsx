import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import WhyChooseMe from "./components/WhyChooseMe";
import FeaturedWork from "./components/FeaturedWork";
import WhatsInMyBag from "./components/WhatsInMyBag";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <About />
        <WhyChooseMe />
        <FeaturedWork />
        <WhatsInMyBag />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
