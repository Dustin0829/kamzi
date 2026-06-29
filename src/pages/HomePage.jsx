import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import WhyChooseMe from "../components/WhyChooseMe";
import FeaturedWork from "../components/FeaturedWork";
import BrandResults from "../components/BrandResults";
import About from "../components/About";
import WhatsInMyBag from "../components/WhatsInMyBag";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";

function DividerWrap({ fill, children }) {
  return (
    <div style={{ "--divider-fill": fill }}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />

        <DividerWrap fill="#faf7f4">
          <SectionDivider variant="wave" />
        </DividerWrap>
        <WhatIDo />

        <SectionDivider variant="tape" />
        <About />

        <DividerWrap fill="#f7f3ee">
          <SectionDivider variant="wave" />
        </DividerWrap>
        <WhatsInMyBag />

        <SectionDivider variant="dots" />
        <WhyChooseMe />

        <DividerWrap fill="#f2f0ed">
          <SectionDivider variant="wave" />
        </DividerWrap>
        <FeaturedWork />

        <SectionDivider variant="tape" />
        <BrandResults />

        <DividerWrap fill="#fdf0f3">
          <SectionDivider variant="wave" />
        </DividerWrap>
        <Testimonials />

        <SectionDivider variant="dots" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
