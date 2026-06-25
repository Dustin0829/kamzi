import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import WhyChooseMe from "../components/WhyChooseMe";
import FeaturedWork from "../components/FeaturedWork";
import BrandResults from "../components/BrandResults";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <About />
        <WhyChooseMe />
        <FeaturedWork />
        <BrandResults />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
