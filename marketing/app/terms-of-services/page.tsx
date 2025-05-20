"use client";

import Contact from "@marketing/components/common/Contact";
import Header from "@marketing/components/common/Header";
import HeroSection from "@marketing/components/pages/privacy-policy/HeroSection";
import Footer from "@marketing/components/common/Footer";
import Terms from "@marketing/components/pages/terms-of-services/Terms";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Terms />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
