"use client";
import HeroSection from "@/components/organisms/HeroSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import AlliedsSection from "@/components/organisms/AlliedsSection";
import ImageSection from "@/components/organisms/ImageSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeatureSection />
      <AlliedsSection />

      <Footer />
    </main>
  );
}
