"use client";

import Contact from "@marketing/components/common/Contact";
import Features from "@marketing/components/pages/home/Features";
import Footer from "@marketing/components/common/Footer";
import Header from "@marketing/components/common/Header";
import HeroSection from "@marketing/components/pages/home/HeroSection";
import SocialSection from "@marketing/components/pages/home/SocialSection";
import Subscriptions from "@marketing/components/pages/home/Subscriptions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialSection />
        <Features />
        <SocialSection />
        <Subscriptions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
