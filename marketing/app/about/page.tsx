"use client";

import Contact from "@marketing/components/common/Contact";
import Experts from "@marketing/components/pages/about/Experts";
import Footer from "@marketing/components/common/Footer";
import Founders from "@marketing/components/pages/about/Founders";
import Header from "@marketing/components/common/Header";
import HeroSection from "@marketing/components/pages/about/HeroSection";
import Mission from "@marketing/components/pages/about/Mission";
import Testimonials from "@marketing/components/pages/about/Testimonials";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Mission />
        <Founders />
        <Experts />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
