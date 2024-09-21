import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Collections from "@/components/Collections";
import Testimonials from "@/components/Testimonials";
import Inspiration from "@/components/Inspiration";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <Inspiration />
      <Collections />
      <Marquee
        className="left-0 absolute text-[80px] sm:text-[150px] font-bold text-[#708a5c]"
        autoFill={true}
        speed={150}
      >
        <span className="mx-10">Good design is everyone’s right.</span>
      </Marquee>

      <BestSeller />
      <Testimonials />
      <OurPolicy />
      <NewsletterBox />
    </>
  );
};

export default Home;
