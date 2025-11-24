import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import OurMission from "@/components/OurMission";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <LatestBlogs></LatestBlogs>
      <WhyChooseUs></WhyChooseUs>
      <OurMission></OurMission>
      <TestimonialSection></TestimonialSection>
    </div>
  );
}
