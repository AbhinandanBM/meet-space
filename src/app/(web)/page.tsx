import Gallery from "@/src/components/Gallery/Gallery";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import NewsLetter from "@/src/components/NewsLetter/NewsLetter";
import PageSearch from "@/src/components/PageSearch/PageSearch";
import FeaturedRoom from "@/src/components/FeaturedRoom/FeaturedRoom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;
