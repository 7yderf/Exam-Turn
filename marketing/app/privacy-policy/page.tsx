"use client";

import Header from "@marketing/components/common/Header";
import HeroSection from "@marketing/components/pages/privacy-policy/HeroSection";
import Footer from "@marketing/components/common/Footer";
import Policy from "@marketing/components/pages/privacy-policy/Policy";
import Contact from "@marketing/components/common/Contact";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Policy />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
