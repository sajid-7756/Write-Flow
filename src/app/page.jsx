import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingCarousel from "@/components/TrendingCarousel";
import getAllBlogs from "@/lib/getAllBlogs";
import HeroSection from "@/components/HeroSection";
import LatestBlogs from "@/components/LatestBlogs";
import OurMission from "@/components/OurMission";
import TestimonialSection from "@/components/TestimonialSection";

export default async function Home() {
  const allBlogs = await getAllBlogs();
  // For demo, we'll slice the first 6 as "trending"
  const trendingBlogs = allBlogs.slice(0, 6);

  return (
    <div>
      <HeroSection></HeroSection>
      <TrendingCarousel blogs={trendingBlogs} />
      <LatestBlogs></LatestBlogs>
      <WhyChooseUs></WhyChooseUs>
      <OurMission></OurMission>
      <TestimonialSection></TestimonialSection>
    </div>
  );
}
