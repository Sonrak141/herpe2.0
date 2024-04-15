"use client";
import FeatureSection from "@/components/organisms/FeatureSection";
import AlliedsSection from "@/components/organisms/AlliedsSection";
import Footer from "@/components/organisms/Footer";
import CarouselDefault from "@/components/organisms/CarouselDefault";

export default function Home() {
  return (
    <main className="">
      <CarouselDefault />
      <FeatureSection />
      <AlliedsSection />

      <Footer />
    </main>
  );
}
